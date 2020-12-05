<template>
  <div>
    <app-card customClasses="grid-b-space tabs-table-wrap">
      <b-tabs>
        <b-tab title="Overview" active>
          <div class="table-responsive">
            <table class="table table-striped custom-table">
              <thead>
              <tr>
                <th v-for="(header,index) in headers" :key="index" :class="header.align">
                  {{header.text}}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row,index) in overViewContents" :key="index">
                <td>{{row.index}}</td>
                <td class="text-right">{{numberWithCommas(row.close)}}</td>
                <td class="text-right" :class="row.change >= 0 ? 'text-success' : 'text-warning'">
                  {{numberToFixed(row.change) >= 0 ? '+' + numberToFixed(row.change) : numberToFixed(row.change)}}</td>
                <td class="text-right" :class="row.pct_change >= 0 ? 'text-success' : 'text-warning'">
                  {{numberToFixed(row.pct_change) >= 0 ? '+' + numberToFixed(row.pct_change) : numberToFixed(row.pct_change)}}
                </td>
                <td class="text-right">{{numberWithCommas(row.high)}}</td>
                <td class="text-right">{{numberWithCommas(row.low)}}</td>
                <td class="text-right">{{numberWithCommas(row.volume)}}</td>
                <td class="text-right">{{numberWithCommas(row.value)}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </b-tab>

        <b-tab title="Industry">
          <div class="table-responsive">
            <table class="table table-striped custom-table">
              <thead>
              <tr>
                <th v-for="(header,index) in headers" :key="index" :class="header.align">
                  {{header.text}}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row,index) in industryContents" :key="index">
                <td>{{row.index}}</td>
                <td class="text-right">{{numberWithCommas(row.close)}}</td>
                <td class="text-right" :class="row.change >= 0 ? 'text-success' : 'text-warning'">
                  {{numberToFixed(row.change) >= 0 ? '+' + numberToFixed(row.change) : numberToFixed(row.change)}}</td>
                <td class="text-right" :class="row.pct_change >= 0 ? 'text-success' : 'text-warning'">
                  {{numberToFixed(row.pct_change) >= 0 ? '+' + numberToFixed(row.pct_change) : numberToFixed(row.pct_change)}}
                </td>
                <td class="text-right">{{numberWithCommas(row.high)}}</td>
                <td class="text-right">{{numberWithCommas(row.low)}}</td>
                <td class="text-right">{{numberWithCommas(row.volume)}}</td>
                <td class="text-right">{{numberWithCommas(row.value)}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </b-tab>

        <b-tab title="Industry">
          <div class="table-responsive">
            <table class="table table-striped custom-table">
              <thead>
              <tr>
                <th v-for="(header,index) in headers" :key="index" :class="header.align">
                  {{header.text}}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row,index) in sectorContents" :key="index">
                <td>{{row.index}}</td>
                <td class="text-right">{{numberWithCommas(row.close)}}</td>
                <td class="text-right" :class="row.change >= 0 ? 'text-success' : 'text-warning'">
                  {{numberToFixed(row.change) >= 0 ? '+' + numberToFixed(row.change) : numberToFixed(row.change)}}</td>
                <td class="text-right" :class="row.pct_change >= 0 ? 'text-success' : 'text-warning'">
                  {{numberToFixed(row.pct_change) >= 0 ? '+' + numberToFixed(row.pct_change) : numberToFixed(row.pct_change)}}
                </td>
                <td class="text-right">{{numberWithCommas(row.high)}}</td>
                <td class="text-right">{{numberWithCommas(row.low)}}</td>
                <td class="text-right">{{numberWithCommas(row.volume)}}</td>
                <td class="text-right">{{numberWithCommas(row.value)}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </b-tab>
      </b-tabs>
    </app-card>

    <app-card>
      <div class="row statistics-card">
        <div class="col-md-6">
          <b-card>
            <b-card-header>
              <div class="text-center">
                <h5>SET Statistics</h5>
              </div>
            </b-card-header>

            <b-card-body>
              <div class="row">
                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  Market Cap. (M Baht)
                </span>

                  <span>
                  15,854,138.74
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  Turnover Ratio (YTD) (%)
                </span>

                  <span>
                  200.86
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  P/E (times)
                </span>

                  <span>
                  28.49
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  P/BV (times)
                </span>

                  <span>
                  1.62
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  Market Yield (%)
                </span>

                  <span>
                  3.37
                </span>
                </div>

                <div class="col-12 border-bottom py-2 header-div">
                  <h5>
                    Index Performance
                  </h5>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  % Change Last 3 Months
                </span>

                  <span class="text-success">
                  +7.76%
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  % Change Last 6 Months
                </span>

                  <span class="text-success">
                  +3.19%
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  % Change YTD (Year to Date)
                </span>

                  <span class="text-warning">
                  -10.25%
                </span>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </div>

        <div class="col-md-6">
          <b-card>
            <b-card-header>
              <div class="text-center">
                <h5>MAI Statistics</h5>
              </div>
            </b-card-header>

            <b-card-body>
              <div class="row">
                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  Market Cap. (M Baht)
                </span>

                  <span>
                  240,951.33
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  Turnover Ratio (YTD) (%)
                </span>

                  <span>
                  53.90
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  P/E (times)
                </span>

                  <span>
                  67.36
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  P/BV (times)
                </span>

                  <span>
                  1.73
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  Market Yield (%)
                </span>

                  <span>
                  2.50
                </span>
                </div>

                <div class="col-12 border-bottom py-2 header-div">
                  <h5>
                    Index Performance
                  </h5>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  % Change Last 3 Months
                </span>

                  <span class="text-success">
                  +4.93%
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  % Change Last 6 Months
                </span>

                  <span class="text-success">
                  +13.49%
                </span>
                </div>

                <div class="col-12 border-bottom py-2 info-div">
                <span>
                  % Change YTD (Year to Date)
                </span>

                  <span class="text-success">
                  +6.00%
                </span>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </app-card>
  </div>
</template>

<script>
	import axios from 'axios'

	export default {
		mounted() {
			this.loadContent();
		},
		data() {
			return {
				headers: [
					{
						text: "Index",
						sortable: false,
						value: "index",
						align: "text-left",
					},
					{
						text: "Last",
						sortable: false,
						value: "close",
						align: "text-right",
					},
					{
						text: "CHG",
						sortable: false,
						value: "change",
						align: "text-right",
					},
					{
						text: "%CHG",
						sortable: false,
						value: "pct_change",
						align: "text-right",
					},
					{
						text: "High",
						sortable: false,
						value: "high",
						align: "text-right",
					},
					{
						text: "Low",
						sortable: false,
						value: "low",
						align: "text-right",
					},
					{
						text: "Volume",
						sortable: false,
						value: "volume",
						align: "text-right",
					},
					{
						text: "Value",
						sortable: false,
						value: "value",
						align: "text-right",
					}
				],
				overViewIndices: [
					'SET', 'SET50', 'SET100', 'sSET', 'SETCLMV', 'SETHD', 'SETTHSI', 'SETWB', 'MAI'
				],
        industryIndices: [
					'.AGRO', '.CONSUMP', '.FINCIAL', '.INDUS', '.PROPCON', '.RESOURC', '.SERVICE', '.TECH'
        ],
        sectorIndices: [
					'.AGRI', '.FOOD', '.FASHION', '.HOME', '.PERSON', '.BANK', '.FIN', '.INSUR', '.AUTO',
          '.IMM', '.PAPER', '.PETRO', '.PKG', '.STEEL', '.CONMAT', '.CONS', '.PROP', '.ENERG',
          '.MINE', '.COMM', '.HELTH', '.MEDIA', '.PROF', '.TOURISM', '.TRANS', '.ETRON','.ICT'
        ],
				overViewContents: [],
        industryContents: [],
        sectorContents: [],
			};
		},
		methods: {
			async loadContent() {
				const apiUrl = 'https://mka-api.alpha.lab.ai/prices/pct_change/';
				this.overViewContents = [];
				for (let i = 0; i < this.overViewIndices.length; i++) {
					axios.get(apiUrl + this.overViewIndices[i])
						.then(response => {

							this.overViewContents.push({...response.data, index: this.overViewIndices[i]});
						})
						.catch(err => {
							console.log(err);
						});
				}

				for (let i = 0; i < this.industryIndices.length; i++) {
					axios.get(apiUrl + this.industryIndices[i])
						.then(response => {

							this.industryContents.push({...response.data, index: this.industryIndices[i]});
						})
						.catch(err => {
							console.log(err);
						});
				}

				for (let i = 0; i < this.sectorIndices.length; i++) {
					axios.get(apiUrl + this.sectorIndices[i])
						.then(response => {
							this.sectorContents.push({...response.data, index: this.sectorIndices[i]});
						})
						.catch(err => {
							console.log(err);
						});
				}
			},
			numberWithCommas(x) {
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			},
      numberToFixed(num) {
				return num.toFixed(2);
      },
		}
	};
</script>

<style>
  .nav-link.active {
    color: #f08d67 !important;
    text-decoration: underline;
  }

  .nav-link:hover {
    color: #f08d67 !important;
  }

  .statistics-card span {
    font-size: 0.875rem;
  }

  .info-div {
    display: flex;
    justify-content: space-between;
  }

  .header-div {
    text-align: center;
  }

  .text-warning {
    color: red !important;
  }
</style>
