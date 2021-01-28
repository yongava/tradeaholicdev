<template>
  <div>
    <app-card customClasses="grid-b-space tabs-table-wrap">
      <Spinner
        class="spinner"
        v-if="loadingSector || loadingIndustry"
      />
      <b-tabs>
        <b-tab title="SECTOR COMPARE" active @click="clickTab('sector')">
          <select
            class="custom-select m-2"
            style="width: 200px;"
            @change="clickSubTab('sector', $event.target.value)"
          >
            <option
              v-for="(subTab, index) in sectorTabs"
              :value="subTab"
            >
              {{subTab}}
            </option>
          </select>

          <div class="row">
            <div class="col-md-12">
              <div class="text-center my-2">
                <h5>SET</h5>
              </div>

              <div class="text-center my-2">
                <apexchart
                  width="100%"
                  :height="1000"
                  type="candlestick"
                  :options="options"
                  :series="setSeries"
                  :key="'set-candle-' + candleCount"
                ></apexchart>
              </div>

              <div class="text-center my-2">
                <h5>Relative Strength</h5>
              </div>

              <div>
                <line-chart
                  :border="'#ef534f'"
                  :height="1000"
                  :x-show="true"
                  :key="'sector-line-' + count"
                  :labels="sectorLabels"
                  :data="getData('sector', subTab)"
                ></line-chart>
              </div>
            </div>
          </div>
        </b-tab>

        <b-tab title="INDUSTRY COMPARE" @click="clickTab('industry')">
          <select
            class="custom-select m-2"
            style="width: 200px;"
            @change="clickIndustrySubTab('industry', $event.target.value)"
          >
            <option
              v-for="(subTab, index) in industryTabs"
              :value="subTab"
            >
              {{subTab}}
            </option>
          </select>

          <div class="row">
            <div class="col-md-12">
              <div class="text-center my-2">
                <h5>SET</h5>
              </div>

              <div class="text-center my-2">
                <apexchart
                  width="100%"
                  :height="1000"
                  type="candlestick"
                  :options="options"
                  :series="industrySeries"
                  :key="'industry-candle-' + candleCount"
                ></apexchart>
              </div>

              <div class="text-center my-2">
                <h5>Relative Strength</h5>
              </div>

              <div>
                <line-chart
                  :border="'#ef534f'"
                  :height="1000"
                  :x-show="true"
                  :key="'industry-line-' + count"
                  :labels="industryLabels"
                  :data="getData('industry', industrySubTab)"
                ></line-chart>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </app-card>
  </div>
</template>

<script>
  import LineChart from "../../views/charts/vue-chartjs/LineChart";
  import axios from 'axios';
  import * as moment from "moment";

  export default {
    components: {
      LineChart,
    },
    mounted() {
      this.loadSectorData();
      this.loadIndustryData();
    },
    data() {
      return {
        subTab: 'AGRI',
        industrySubTab: 'AGRO',
        count: 0,
        candleCount: 0,
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
        setSeries: [{
          data: []
        }],
        sectorTabs: ["AGRI", "FOOD", "FASHION", "HOME", "PERSON", "BANK", "FIN", "INSUR", "AUTO", "IMM", "PAPER", "PETRO", "PKG", "STEEL", "CONMAT", "CONS", "PROP", "ENERG", "MINE", "COMM", "HELTH", "MEDIA", "PROF", "TOURISM", "TRANS", "ETRON", "ICT"],
        sectorLabels: [],
        sectorData: [],
        industrySeries: [
          {
            data: []
          }
        ],
        industryTabs: ["AGRO", "CONSUMP", "FINCIAL", "INDUS", "PROPCON", "RESOURC", "SERVICE", "TECH"],
        industryLabels: [],
        industryData: [],
        loadingSector: false,
        loadingIndustry: false,
      }
    },
    methods: {
      async loadSectorData() {
        try {
          this.loadingSector = true;
          const apiUrl = 'https://yong.alpha.lab.ai/relative/SETSector';
          const response = await axios.get(apiUrl);
          if (response) {
            const data = this.sortData(response.data);
            this.setSeries[0].data = [];
            this.sectorLabels = [];

            data && data.map((entity) => {
              this.setSeries[0].data.push({
                x: new Date(entity.date),
                y: [entity.open, entity.high, entity.low, entity.close],
              });

              this.sectorLabels.push(moment(entity.date).format('D MMM YYYY'));
            });

            this.sectorData = data;
            this.count++;
            this.candleCount++;
          }
        } catch (e) {
          console.log(e);
        } finally {
          this.loadingSector = false;
        }
      },
      async loadIndustryData() {
        try {
          this.loadingIndustry = true;
          const apiUrl = 'https://yong.alpha.lab.ai/relative/SETIndustry';
          const response = await axios.get(apiUrl);
          if (response) {
            const data = this.sortData(response.data);
            this.industrySeries[0].data = [];
            this.industryLabels = [];

            data && data.map((entity) => {
              this.industrySeries[0].data.push({
                x: new Date(entity.date),
                y: [entity.open, entity.high, entity.low, entity.close],
              });

              this.industryLabels.push(moment(entity.date).format('D MMM YYYY'));
            });

            this.industryData = data;
            this.count++;
            this.candleCount++;
          }
        } catch (e) {
          console.log(e);
        } finally {
          this.loadingIndustry = false;
        }
      },
      sortData(data) {
        return (data && data.sort((a, b) => {
          return (a.date - b.date) > 0 ? 1 : -1;
        })) || [];
      },
      clickSubTab(tab, subTab) {
        this.count++;
        this.subTab = subTab;
      },
      clickIndustrySubTab(tab, subTab) {
        this.count++;
        this.industrySubTab = subTab;
      },
      getData(tab, subTab) {
        let ret = [];

        if (subTab) {
          if (tab === 'sector') {
            this.sectorData && this.sectorData.map((entity, index) => {
              ret.push(entity[subTab]);
            });
          } else {
            this.industryData && this.industryData.map((entity, index) => {
              ret.push(entity[subTab]);
            });
          }
        }

        return ret;
      },
      clickTab(tab) {
        this.candleCount++;
        this.count++;
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
</style>