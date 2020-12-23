<template>
  <div>
    <app-card customClasses="grid-b-space tabs-table-wrap">
      <Spinner
        class="spinner"
        v-if="loading"
      />

      <div class="text-center">
        <h5>SET</h5>
      </div>
      <div>
        <apexchart
          width="100%"
          :height="200"
          type="candlestick"
          :options="options"
          :series="series"
          :key="'set-' + count"
        ></apexchart>
      </div>

      <div class="text-center mb-3">
        <h5>% of Members with New 52 Week High</h5>
      </div>
      <div>
        <line-chart
          border="#ef534f"
          :height="200"
          :key="'local-' + count"
          :labels="high['labels']"
          :data="high['data']"
        ></line-chart>
      </div>

      <div class="text-center my-3">
        <h5>% of Members with New 52 Week Low</h5>
      </div>
      <div>
        <line-chart
          border="#38ada1"
          :height="200"
          :key="'foreign-' + count"
          :labels="low['labels']"
          :data="low['data']"
          :x-show="true"
        ></line-chart>
      </div>

    </app-card>

    <app-card customClasses="grid-b-space tabs-table-wrap">
      <div class="table-responsive">
        <table class="table table-striped custom-table">
          <thead>
          <tr>
            <th v-for="(column, key) of table" :key="key + 'th'" :class="column.align">
              {{column.title}}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, index) of currentData" :key="index + 'tr'">
            <td class="text-left">
              {{row['DATE']}}
            </td>
            <td class="text-right">
              {{numberWithCommas(row['CLOSE'])}}
            </td>
            <td class="text-right">
              {{numberWithCommas(row['OPEN'])}}
            </td>
            <td class="text-right">
              {{numberWithCommas(row['HIGH'])}}
            </td>
            <td class="text-right">
              {{numberWithCommas(row['LOW'])}}
            </td>
            <td class="text-right" :class="row['percent_high'] >= 0 ? 'text-success' : 'text-warning'">
              {{row['percent_high']}}
            </td>
            <td class="text-right" :class="row['percent_low'] >= 0 ? 'text-success' : 'text-warning'">
              {{row['percent_low']}}
            </td>
            <td class="text-right">
              {{row['number_high']}}
            </td>
            <td class="text-right">
              {{row['number_low']}}
            </td>
          </tr>
          </tbody>
        </table>

        <b-pagination v-if="(tableData && tableData.length > 0)" class="mt-2" align="center" :limit="numberOfPageBtns" :total-rows="totalRows" v-model="pageNumber" :per-page="perPage">
        </b-pagination>
      </div>
    </app-card>
  </div>
</template>

<script>
  import LineChart from "../charts/vue-chartjs/LineChart";
  import SetMiddle from "../../components/TradingValue/SetMiddle";
  import axios from 'axios';
  import * as moment from 'moment';
  import {numberWithCommas} from "../../commons/utils";

  export default {
    components: {
      LineChart,
      SetMiddle,
    },
    mounted() {
      this.loadData();
    },
    data() {
      return {
        loading: false,
        apiUrl: 'https://yong.alpha.lab.ai/marketbreadth',
        options: {
          candlestick: {
            colors: {
              upward: '#3C90EB',
              downward: '#DF7D46'
            },
          },
          xaxis: {
            labels: {
              show: false,
            }
          },
          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            }
          },
        },
        series: [{
          data: []
        }],
        high: {
          labels: [],
          data: []
        },
        low: {
          labels: [],
          data: [],
        },
        table: [
          {
            title: 'Date',
            key: 'DATE',
            align: 'text-left',
          },
          {
            title: 'LAST',
            key: 'CLOSE',
            align: 'text-right',
          },
          {
            title: 'OPEN',
            key: 'OPEN',
            align: 'text-right',
          },
          {
            title: 'HIGH',
            key: 'HIGH',
            align: 'text-right',
          },
          {
            title: 'LOW',
            key: 'LOW',
            align: 'text-right',
          },
          {
            title: '%High',
            key: 'percent_high',
            align: 'text-right',
          },
          {
            title: '%Low',
            key: 'percent_low',
            align: 'text-right',
          },
          {
            title: 'No. High',
            key: 'number_high',
            align: 'text-right',
          },
          {
            title: 'No. Low',
            key: 'number_low',
            align: 'text-right',
          }
        ],
        tableData: [],
        count: 0,
        totalRows: 0,
        pageNumber: 1,
        perPage: 10,
        numberOfPageBtns: 9,
      }
    },
    computed: {
      currentData: function () {
        return (this.tableData && this.tableData.slice(this.perPage * (this.pageNumber - 1), this.perPage * (this.pageNumber))) || [];
      }
    },
    methods: {
      async loadData() {
        try {
          this.loading = true;
          const response = await axios.get(this.apiUrl);
          this.loading = false;
          if (response) {
            const ath = response.data && response.data.ath_atl_result;
            ath && ath.sort((a, b) => {
              return new Date(a.DATE).getTime() - new Date(b.DATE).getTime();
            });

            this.series[0].data = [];
            this.high = {
              labels: [],
              data: [],
            };
            this.low = {
              labels: [],
              data: [],
            };
            this.tableData = [];
            ath && ath.map(entity => {
              this.series[0].data.push({
                x: entity.DATE,
                y: [entity.OPEN, entity.HIGH, entity.LOW, entity.CLOSE]
              });

              const dateStr = moment(entity.DATE).format("MMM DD");

              this.high['labels'].push(dateStr);
              this.high['data'].push(entity.percent_high);

              this.low['labels'].push(dateStr);
              this.low['data'].push(entity.percent_low);

              this.tableData.push({
                'DATE': entity.DATE,
                'CLOSE': entity.CLOSE,
                'OPEN': entity.OPEN,
                'HIGH': entity.HIGH,
                'LOW': entity.LOW,
                'percent_high': entity.percent_high,
                'percent_low': entity.percent_low,
                'number_high': entity.number_high,
                'number_low': entity.number_low,
              });
            });
            this.tableData && this.tableData.sort((a, b) => {
              return new Date(b.DATE).getTime() - new Date(a.DATE).getTime();
            });
            this.totalRows = (ath && ath.length) || 0;
          }
        } catch (e) {
          console.log(e);
          this.loading = false;
        }
        this.count++;
      },
      numberWithCommas(x) {
        return numberWithCommas(x);
      },
      latestDateFormat(date) {
        return moment(date).format('D MMM YYYY');
      },
    }
  }
</script>

<style>
  .nav-link.active {
    color: #f08d67 !important;
    text-decoration: underline;
  }

  .nav-link:hover {
    color: #f08d67 !important;
  }

  .text-warning {
    color: red !important;
  }

  .latest-date {
    font-size: 0.875rem;
  }

  .spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
