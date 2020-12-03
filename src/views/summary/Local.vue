<template>
  <div>
    <app-card customClasses="grid-b-space tabs-table-wrap">
      <b-tabs>
        <b-tab title="Overview" active>
          <div class="table-responsive">
            <table class="table table-striped custom-table">
              <thead>
              <tr>
                <th v-for="(header,index) in headersForTransactionList" :key="index">
                  {{header.text}}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row,index) in dataForLocal.transactionListDetails" :key="index">
                <td>{{row.index}}</td>
                <td>{{row.last}}</td>
                <td>{{row.chg}}</td>
                <td>
                  {{row.proChg}}
                </td>
                <td>{{row.high}}</td>
                <td>{{row.low}}</td>
                <td>{{row.volume}}</td>
                <td>{{row.value}}</td>
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
                <th v-for="(header,index) in headersForTransferReport" :key="index">
                  {{header.text}}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row,index) in dataForLocal.transferReport" :key="index">
                <td>{{row.transid}}</td>
                <td>{{row.date}}</td>
                <td>{{row.account}}</td>
                <td>
                  <b-badge :variant="row.typeColor">{{row.type}}</b-badge>
                </td>
                <td>{{row.amount}}</td>
                <td>{{row.balance}}</td>
                <td>
                  <b-badge :variant="row.statusColor">
                    {{row.status}}
                  </b-badge>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </b-tab>
        <b-tab title="Sector">
          <div class="table-responsive">
            <table class="table table-striped custom-table">
              <thead>
              <tr>
                <th v-for="(header,index) in headersForExpenseCategory" :key="index">
                  {{header.text}}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row,index) in dataForLocal.expenseCategoryDetails" :key="index">
                <td>{{row.itmNo}}</td>
                <td>{{row.date}}</td>
                <td>
                  <b-badge :variant="row.typeColor">{{row.type}}</b-badge>
                </td>
                <td>{{row.description}}</td>
                <td>{{row.amount}}</td>
                <td>
                  <b-badge :variant="row.statusColor">
                    {{row.status}}
                  </b-badge>
                </td>
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
	import {dataForLocal} from "Assets/data/dataForLocal.js";

	export default {
		data() {
			return {
				dataForLocal,
				headersForTransactionList: [
					{
						text: "Index",
						sortable: false,
						value: "transaction Id"
					},
					{
						text: "Last",
						sortable: false,
						value: "date"
					},
					{
						text: "CHG",
						sortable: false,
						value: "account"
					},
					{
						text: "%CHG",
						sortable: false,
						value: "type"
					},
					{
						text: "High",
						sortable: false,
						value: "amount"
					},
					{
						text: "Low",
						sortable: false,
						value: "debit"
					},
					{
						text: "Volume",
						sortable: false,
						value: "credit"
					},
					{
						text: "Value",
						sortable: false,
						value: "balance"
					}
				],

				headersForTransferReport: [
					{
						text: "Transfer Id",
						sortable: false,
						value: "transfer Id"
					},
					{
						text: "Date",
						sortable: false,
						value: "date"
					},
					{
						text: "Account",
						sortable: false,
						value: "account"
					},
					{
						text: "Type",
						sortable: false,
						value: "type"
					},
					{
						text: "Amount",
						sortable: false,
						value: "amount"
					},
					{
						text: "Balance",
						sortable: false,
						value: "balance"
					},
					{
						text: "Status",
						sortable: false,
						value: "status"
					}
				],

				headersForExpenseCategory: [
					{
						text: "Item No",
						sortable: false,
						value: "item No"
					},
					{
						text: "Date",
						sortable: false,
						value: "date"
					},
					{
						text: "Type",
						sortable: false,
						value: "type"
					},
					{
						text: "Description",
						sortable: false,
						value: "description"
					},
					{
						text: "Amount",
						sortable: false,
						value: "Amount"
					},
					{
						text: "Status",
						sortable: false,
						value: "info"
					}
				]
			};
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
</style>
