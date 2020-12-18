<template>
  <div>
    <app-card customClasses="grid-b-space tabs-table-wrap">

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
          :labels="local['labels']"
          :data="local['data']"
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
          :labels="foreign['labels']"
          :data="foreign['data']"
          :x-show="true"
        ></line-chart>
      </div>

    </app-card>

    <app-card customClasses="grid-b-space tabs-table-wrap">
      <div class="table-responsive">
        <table class="table table-striped custom-table">
          <thead>
          <tr>
            <th>
              Date
            </th>
            <th class="text-right">
              Last
            </th>
            <th class="text-right">
              CHG
            </th>
            <th class="text-right">
              %CHG
            </th>
            <th class="text-right">
              Volume
            </th>
            <th class="text-right">
              Value
            </th>
            <th class="text-right">
              %High
            </th>
            <th class="text-right">
              %Low
            </th>
            <th class="text-right">
              %Swing
            </th>
            <th class="text-right">
              SETUNCH
            </th>
            <th class="text-right">
              SETDEC
            </th>
            <th class="text-right">
              SETADV
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>20/20/20</td>
            <td class="text-right">
              1,234.23
            </td>
            <td class="text-right text-warning">
              -23.22
            </td>
            <td class="text-right text-warning">
              -11.11
            </td>
            <td class="text-right">
              2,344.33
            </td>
            <td class="text-right">
              2,344.33
            </td>
            <td class="text-right text-success">
              +3.23
            </td>
            <td class="text-right text-success">
              +3.23
            </td>
            <td class="text-right text-success">
              +3.23
            </td>
            <td class="text-right">
              2,344.33
            </td>
            <td class="text-right">
              2,344.33
            </td>
            <td class="text-right">
              2,344.33
            </td>
          </tr>
          </tbody>
        </table>
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
        apiUrl: 'https://yong.alpha.lab.ai/tradesum_set',
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
        local: {
          labels: [],
          data: []
        },
        foreign: {
          labels: [],
          data: [],
        },
        count: 0,
      }
    },
    methods: {
      async loadData() {
        this.series[0].data = [];
        this.local = {
          labels: [],
          data: [],
        };
        this.foreign = {
          labels: [],
          data: [],
        };

        const res = await axios.get(this.apiUrl);
        res &&
        res.data &&
        res.data.sort((a, b) => (a.date > b.date ? 1 : -1));

        res.data.map(entity => {
          this.series[0].data.push({
            x: entity.date,
            y: [entity.SETopen, entity.SEThigh, entity.SETlow, entity.SETclose]
          });

          const dateStr = moment(entity.date).format("MMM DD");

          this.local['labels'].push(dateStr);
          this.local['data'].push(entity.FundValNetSum);

          this.foreign['labels'].push(dateStr);
          this.foreign['data'].push(entity.ForeignValNetSum);
        });
        this.count++;
      },
      numberWithCommas(x) {
        return numberWithCommas(x);
      },
      latestDateFormat(date) {
        return moment(date).format('D MMM YYYY');
      }
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
</style>
