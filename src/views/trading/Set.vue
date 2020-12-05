<template>
  <div>
    <app-card customClasses="grid-b-space tabs-table-wrap">
      <div class="text-center">
        <h5>SET</h5>
      </div>
      <div>
        <apexchart width="100%" height="200px" type="candlestick" :options="options" :series="series"></apexchart>
      </div>

      <div class="text-center">
        <h5>Local Institutions</h5>
      </div>
      <div>
        <line-chart border="#ef534f" :height="200"></line-chart>
      </div>

      <div class="text-center">
        <h5>Foreign Investors</h5>
      </div>
      <div>
        <line-chart border="#38ada1" :height="200"></line-chart>
      </div>

      <div class="text-center">
        <h5>Local individuals</h5>
      </div>
      <div>
        <line-chart border="#797b86" :height="200"></line-chart>
      </div>

      <div class="text-center">
        <h5>Institution Trading Value</h5>
      </div>
    </app-card>

    <app-card customClasses="grid-b-space tabs-table-wrap">
      <b-tabs>
        <b-tab title="Overview" active>
          <div class="row">
            <div class="col-md-6 my-2">
              <div class="text-center">
                <h5>Institution Trading Value</h5>
              </div>
              <div>
                <two-line-chart :height="200"></two-line-chart>
              </div>

              <div>
                <two-bar-chart :height="200"></two-bar-chart>
              </div>

              <div>
                <bar-chart :height="200"></bar-chart>
              </div>
            </div>

            <div class="col-md-6 my-2">
              <div class="text-center">
                <h5>Foreign Trading Value</h5>
              </div>
              <div>
                <two-line-chart :height="200"></two-line-chart>
              </div>

              <div>
                <two-bar-chart :height="200"></two-bar-chart>
              </div>

              <div>
                <bar-chart :height="200"></bar-chart>
              </div>
            </div>

            <div class="col-md-6 my-2">
              <div class="text-center">
                <h5>Individual Trading Value</h5>
              </div>
              <div>
                <two-line-chart :height="200"></two-line-chart>
              </div>

              <div>
                <two-bar-chart :height="200"></two-bar-chart>
              </div>

              <div>
                <bar-chart :height="200"></bar-chart>
              </div>
            </div>

            <div class="col-md-6 my-2">
              <div class="text-center">
                <h5>Proprietaty Trading Value</h5>
              </div>
              <div>
                <two-line-chart :height="200"></two-line-chart>
              </div>

              <div>
                <two-bar-chart :height="200"></two-bar-chart>
              </div>

              <div>
                <bar-chart :height="200"></bar-chart>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </app-card>

    <app-card customClasses="grid-b-space tabs-table-wrap">
      <b-tabs>
        <b-tab title="NET" active>
          <div class="table-responsive">
            <table class="table table-striped custom-table">
              <thead>
              <tr>
                <th>
                  Name
                </th>
                <th class="text-right">
                  Buy
                </th>
                <th class="text-right">
                  Sell
                </th>
                <th class="text-right">
                  Total
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Local Institutions</td>
                <td class="text-right">12,343.34</td>
                <td class="text-right">23,333.32</td>
                <td class="text-right text-warning">
                  -34.34
                </td>
              </tr>

              <tr>
                <td>Foreign Investors</td>
                <td class="text-right">12,343.34</td>
                <td class="text-right">23,333.32</td>
                <td class="text-right text-success">
                  +34.34
                </td>
              </tr>

              <tr>
                <td>Local Individuals</td>
                <td class="text-right">12,343.34</td>
                <td class="text-right">23,333.32</td>
                <td class="text-right text-warning">
                  -34.34
                </td>
              </tr>

              <tr>
                <td>Proprietary Trading</td>
                <td class="text-right">12,343.34</td>
                <td class="text-right">23,333.32</td>
                <td class="text-right text-success">
                  +34.34
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </b-tab>
      </b-tabs>
    </app-card>
  </div>
</template>

<script>
	import LineChart from "../charts/vue-chartjs/LineChart";
	import TwoLineChart from "../charts/vue-chartjs/TwoLineChart";
	import BarChart from "../charts/vue-chartjs/BarChart";
	import TwoBarChart from "../charts/vue-chartjs/TwoBarChart";

	export default {
		components: {
			LineChart,
      TwoLineChart,
      BarChart,
      TwoBarChart
    },
		data() {
			return {
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

<style>
  .nav-link.active {
    color: #f08d67 !important;
    text-decoration: underline;
  }

  .nav-link:hover {
    color: #f08d67 !important;
  }
</style>
