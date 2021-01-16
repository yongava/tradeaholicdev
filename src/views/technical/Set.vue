<template>
  <div id="dashboard">
    <div class="row align-items-stretch">
      <div class="col-half-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-b-space">
        <app-card>
          <div class="clients-list-wrap">
            <Spinner
              class="spinner"
              v-if="loading"
            />
            <b-tabs v-model="step">
              <div v-for="(tab, key) in tabs" :key="'sub-' + key">
                <b-tab :title="tab.label">
                  <div class="table-responsive">
                    <table class="table table-striped custom-table">
                      <thead>
                      <tr>
                        <th>
                          Symbol
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
                          %Value
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(row, index) in getTabContent(tab.value)" :key="'tr-' + index + '-' + key">
                        <td>{{row['Symbol']}}</td>
                        <td class="text-right">
                          {{numberWithCommas(row['Close'])}}
                        </td>
                        <td class="text-right"
                          :class="row['Chg']  >= 0 ? 'text-success': 'text-warning'">
                          {{numberWithCommas(attachTwoDigits(row['Chg']))}}
                        </td>
                        <td class="text-right"
                          :class="row['%Chg']  >= 0 ? 'text-success': 'text-warning'">
                          {{numberWithCommas(attachTwoDigits(row['%Chg']))}}
                        </td>
                        <td class="text-right">
                          {{numberWithCommas(row['Volume'])}}
                        </td>
                        <td class="text-right">
                          {{numberWithCommas(row['Value'])}}
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>

                  <b-pagination
                    v-if="(getTabContent(tab.value) && getTabContent(tab.value).length > 0)"
                    class="mt-2"
                    align="center"
                    :limit="numberOfPageBtns"
                    :total-rows="(tableData[tab.value] && tableData[tab.value].length) || 0"
                    v-model="pageNumber"
                    :per-page="perPage"
                  >
                  </b-pagination>
                </b-tab>
              </div>
            </b-tabs>
          </div>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {attachTwoDigits, numberWithCommas} from "../../commons/utils";

  export default {
    data() {
      return {
        dataUrl: 'https://yong.alpha.lab.ai/tech_screen_set',
        step: 0,
        loading: false,
        tabs: [
          {
            label: 'Price > 52 W High',
            value: 'price_52W_high',
          },
          {
            label: 'Price < 52 W Low',
            value: 'price_52W_low',
          },
          {
            label: 'Gap UP',
            value: 'gap_up',
          },
          {
            label: 'Gap Down',
            value: 'gap_down',
          },
          {
            label: 'EMA Fast Cross Slow',
            value: 'ema_cross',
          },
        ],
        tableData: null,
        pageNumber: 1,
        perPage: 10,
        numberOfPageBtns: 9,
      }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      changeTab(index) {
        this.step = index;
      },
      async loadData() {
        this.loading = true;
        const res = await axios.get(this.dataUrl);
        this.tableData = res.data;
        this.loading = false;
      },
      getTabContent(value) {
        return this.tableData && this.tableData[value].slice((this.pageNumber - 1) * this.perPage, this.pageNumber * this.perPage);
      },
      numberWithCommas(x) {
        return numberWithCommas(x);
      },
      attachTwoDigits(x) {
        return attachTwoDigits(x);
      }
    }
  }
</script>

<style>
  .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #ef8157;
    text-decoration: underline;
  }

  .nav-tabs .nav-link:hover {
    color: #66615b;
  }

  .text-warning {
    color: red !important;
  }
</style>