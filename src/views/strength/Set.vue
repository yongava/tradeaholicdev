<template>
  <div>
    <app-card customClasses="grid-b-space tabs-table-wrap">
      <b-tabs>
        <b-tab title="SECTOR COMPARE" active @click="count++">
          <div class="row">
            <div class="col-md-12">
              <div class="text-center my-2">
                <h5>SET</h5>
              </div>

              <div class="text-center my-2">
                <apexchart
                  width="100%"
                  :height="200"
                  type="candlestick"
                  :options="options"
                  :series="series"
                ></apexchart>
              </div>

              <div class="text-center my-2">
                <h5>Relative Strength</h5>
              </div>

              <div>
                <line-chart
                  :border="'#ef534f'"
                  :height="200"
                  :x-show="true"
                ></line-chart>
              </div>
            </div>
          </div>
        </b-tab>

        <b-tab title="INDUSTRY COMPARE" @click="count++">
          <div class="row">
            <div class="col-md-12">
              <div class="text-center my-2">
                <h5>SET</h5>
              </div>

              <div class="text-center my-2">
                <apexchart
                  width="100%"
                  :height="200"
                  type="candlestick"
                  :options="options"
                  :series="series"
                ></apexchart>
              </div>

              <div class="text-center my-2">
                <h5>Relative Strength</h5>
              </div>

              <div>
                <line-chart
                  :border="'#ef534f'"
                  :height="200"
                  :x-show="true"
                  :key="'line-chart' + count "
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

  export default {
    components: {
      LineChart,
    },
    data() {
      return {
        count: 0,
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
          data: [{
            x: new Date(2016, 1, 1),
            y: [51.98, 56.29, 51.59, 53.85]
          },
            {
              x: new Date(2016, 2, 1),
              y: [53.66, 54.99, 51.35, 52.95]
            },
            {
              x: new Date(2016, 8, 1),
              y: [52.76, 57.35, 52.15, 57.03]
            }]
        }]
      }
    }
  }
</script>