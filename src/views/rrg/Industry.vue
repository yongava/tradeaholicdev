<template>
  <div id="dashboard">
    <div class="row align-items-stretch">
      <div class="col-half-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-b-space">
        <app-card>
          <div class="clients-list-wrap">
            <b-tabs v-model="step">
              <b-tab title="ALL">
                <div class="row">
                  <div
                    v-for="(image, index) in contentImages"
                    class="mb-30 col-12 col-sm-6 col-md-6 col-lg-6"
                    :key="index"
                    style="cursor: pointer"
                  >
                    <app-card customClasses="mb-0 client-item">
                      <div v-on:click="changeTab(index)">
                        <img style="width: 100%" :src="image.url"/>
                      </div>
                    </app-card>
                  </div>
                </div>
              </b-tab>

              <div v-for="(tab, index) in tabs" :key="'sub-' + index">
                <b-tab :title="tab">
                  <div class="row" v-if="getTabImage(tab)">
                    <div class="col-sm-2 col-lg-3"></div>
                    <div class="mb-30 col-12 col-sm-8 col-md-8 col-lg-6">
                      <app-card customClasses="mb-0 client-item">
                        <div>
                          <img style="width: 100%" :src="getTabImage(tab).url"/>
                        </div>
                      </app-card>
                    </div>
                  </div>
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
	export default {
		data() {
			return {
				step: 0,
				tabs: [
					'AGRO', 'CONSUMP', 'FINCIAL', 'INDUS', 'PROPCON', 'RESOURC', 'SERVICE', 'TECH'
				],
				contentImages: [
					{
						tab: 'AGRO',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/AGRO.png',
					},
					{
						tab: 'CONSUMP',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/CONSUMP.png',
					},
					{
						tab: 'FINCIAL',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/FINCIAL.png',
					},
					{
						tab: 'INDUS',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/INDUS.png',
					},
					{
						tab: 'PROPCON',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/PROPCON.png',
					},
					{
						tab: 'RESOURC',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/RESOURC.png',
					},
					{
						tab: 'SERVICE',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/SERVICE.png',
					},
					{
						tab: 'TECH',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/TECH.png',
					}
				]
			}
		},
		methods: {
			getTabImage(tab) {
				return this.contentImages.find(item => item.tab === tab);
			},
			changeTab(index) {
				this.step = index + 1;
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
</style>
