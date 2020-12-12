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
        <h5>Local Institutions</h5>
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
        <h5>Foreign Investors</h5>
      </div>

      <div>
        <line-chart
          border="#38ada1"
          :height="200"
          :key="'foreign-' + count"
          :labels="foreign['labels']"
          :data="foreign['data']"
        ></line-chart>
      </div>
      <div class="text-center my-3">
        <h5>Local Individuals</h5>
      </div>

      <div>
        <line-chart
          border="#797b86"
          :height="200"
          :key="'individual-' + count"
          :labels="individual['labels']"
          :data="individual['data']"
          :x-show="true"
        ></line-chart>
      </div>
      <div class="text-center my-3">
        <h5>Institution Trading Value</h5>
      </div>

    </app-card>

    <app-card customClasses="grid-b-space tabs-table-wrap">
      <b-tabs>
        <b-tab title="ALL" active @click="middleCount++">
          <div class="row">
            <div class="col-md-6 my-2">
              <set-middle
                title="Institution Trading Value"
                :data="middleInstitution['data']"
                :sumData="middleInstitution['sumData']"
                :labels="middleInstitution['labels']"
                :count="middleCount"
                individual="0"
              ></set-middle>
            </div>

            <div class="col-md-6 my-2">
              <set-middle
                title="Foreign Trading Value"
                :data="middleForeign['data']"
                :sumData="middleForeign['sumData']"
                :labels="middleForeign['labels']"
                :count="middleCount"
                individual="0"
              ></set-middle>
            </div>

            <div class="col-md-6 my-2">
              <set-middle
                title="Individual Trading Value"
                :data="middleIndividual['data']"
                :sumData="middleIndividual['sumData']"
                :labels="middleIndividual['labels']"
                :count="middleCount"
                individual="0"
              ></set-middle>
            </div>

            <div class="col-md-6 my-2">
              <set-middle
                title="Proprietary Trading Value"
                :data="middleProprietary['data']"
                :sumData="middleProprietary['sumData']"
                :labels="middleProprietary['labels']"
                :count="middleCount"
                individual="0"
              ></set-middle>
            </div>
          </div>
        </b-tab>

        <b-tab title="INSTITUTION" @click="middleCount++">
          <div class="col-md-12 my-2">
            <set-middle
              title="Institution Trading Value"
              :data="middleInstitution['data']"
              :sumData="middleInstitution['sumData']"
              :labels="middleInstitution['labels']"
              :count="middleCount"
              :individual="1"
            ></set-middle>
          </div>
        </b-tab>

        <b-tab title="FOREIGN" @click="middleCount++">
          <div class="col-md-12 my-2">
            <set-middle
              title="Foreign Trading Value"
              :data="middleForeign['data']"
              :sumData="middleForeign['sumData']"
              :labels="middleForeign['labels']"
              :count="middleCount"
              :individual="1"
            ></set-middle>
          </div>
        </b-tab>

        <b-tab title="PROPRIETARY" @click="middleCount++">
          <div class="col-md-12 my-2">
            <set-middle
              title="Proprietary Trading Value"
              :data="middleProprietary['data']"
              :sumData="middleProprietary['sumData']"
              :labels="middleProprietary['labels']"
              :count="middleCount"
              :individual="1"
            ></set-middle>
          </div>
        </b-tab>

        <b-tab title="INDIVIDUAL" @click="middleCount++">
          <div class="col-md-12 my-2">
            <set-middle
              title="Individual Trading Value"
              :data="middleIndividual['data']"
              :sumData="middleIndividual['sumData']"
              :labels="middleIndividual['labels']"
              :count="middleCount"
              :individual="1"
            ></set-middle>
          </div>
        </b-tab>
      </b-tabs>
    </app-card>

    <app-card customClasses="grid-b-space tabs-table-wrap">
      <b-tabs>
        <b-tab v-for="(tab, index) of tableTabs" :active="index === 0" :title="tab.title" :key="index + '-' + tableCount + 'table-tab'">
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
              <tr v-for="(row, index) in tableRowNames">
                <td>{{row}}</td>
                <td class="text-right">
                  {{numberWithCommas(tableData && tableData[tab.value] && tableData[tab.value][index][0])}}
                </td>
                <td class="text-right">
                  {{numberWithCommas(tableData && tableData[tab.value] && tableData[tab.value][index][1])}}
                </td>
                <td class="text-right" :class="tableData && tableData[tab.value] && tableData[tab.value][index][2] >= 0 ? 'text-success': 'text-warning'">
                  {{numberWithCommas(tableData && tableData[tab.value] && tableData[tab.value][index][2])}}
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
	import SetMiddle from "../../components/TradingValue/SetMiddle";
	import axios from 'axios';
	import * as moment from 'moment';
	import {numberWithCommas} from "../../commons/utils";

	export default {
		components: {
			LineChart,
			TwoLineChart,
			BarChart,
			TwoBarChart,
			SetMiddle,
		},
		mounted() {
			this.loadData();
			this.loadTableData();
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
				individual: {
					labels: [],
					data: [],
				},
				middleInstitution: {
					labels: [],
					data: [],
					sumData: [],
				},
				middleForeign: {
					labels: [],
					data: [],
					sumData: [],
				},
				middleIndividual: {
					labels: [],
					data: [],
					sumData: [],
				},
				middleProprietary: {
					labels: [],
					data: [],
					sumData: [],
				},
				tableData: {},
				tableTabs: [
					{
						title: 'RECENT',
						value: 'recent',
					},
					{
						title: 'MTD',
						value: 'MTD',
					},
					{
						title: 'QTD',
						value: 'QTD',
					},
					{
						title: 'YTD',
						value: 'YTD',
					}
				],
        tableRowNames: [
        	'Local Institutions',
          'Foreign Investors',
          'Proprietary Trading',
          'Local Individuals'
        ],
				count: 0,
				middleCount: 0,
        tableCount: 0,
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
				this.individual = {
					labels: [],
					data: [],
				};

				const apiUrl = 'https://yong.alpha.lab.ai/tradesum_set';
				const res = await axios.get(apiUrl);
				res &&
				res.data &&
				res.data.sort((a, b) => (a.date > b.date ? 1 : -1))
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

					this.individual['labels'].push(dateStr);
					this.individual['data'].push(entity.CustomerValNetSum);

					this.middleInstitution['labels'].push(dateStr);
					this.middleInstitution['data'].push(entity.FundValNet);
					this.middleInstitution['sumData'].push(entity.FundValNetSum);

					this.middleForeign['labels'].push(dateStr);
					this.middleForeign['data'].push(entity.ForeignValNet);
					this.middleForeign['sumData'].push(entity.ForeignValNetSum);

					this.middleIndividual['labels'].push(dateStr);
					this.middleIndividual['data'].push(entity.CustomerValNet);
					this.middleIndividual['sumData'].push(entity.CustomerValNetSum);

					this.middleProprietary['labels'].push(dateStr);
					this.middleProprietary['data'].push(entity.TradingValNet);
					this.middleProprietary['sumData'].push(entity.TradingValNetSum);
				});
				this.count++;
				this.middleCount++;
			},
			async loadTableData() {
				const apiUrl = 'https://yong.alpha.lab.ai/tradesum_set/recent/';
				this.tableData = {};

				for (let i = 0; i < this.tableTabs.length; i++) {
					try {
						const res = await axios.get(apiUrl + this.tableTabs[i].value);
						if (res.data && res.data[0]) {
							this.tableData[this.tableTabs[i].value] = [
								[
									res.data[0]['FundValBuySum'],
									res.data[0]['FundValSellSum'],
									res.data[0]['FundValNetSum'],
								],
								[
									res.data[0]['ForeignValBuySum'],
									res.data[0]['ForeignValSellSum'],
									res.data[0]['ForeignValNetSum'],
								],
								[
									res.data[0]['TradingValBuySum'],
									res.data[0]['TradingValSellSum'],
									res.data[0]['TradingValNetSum'],
								],
								[
									res.data[0]['CustomerValBuySum'],
									res.data[0]['CustomerValSellSum'],
									res.data[0]['CustomerValNetSum'],
								]
							]
						}
					} catch (e) {
						console.log(e);
					}
				}

				this.tableCount++;
			},
			numberWithCommas(x) {
				return numberWithCommas(x);
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
</style>
