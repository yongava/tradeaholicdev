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
					'AGRI', 'FOOD', 'FASHION', 'HOME', 'PERSON', 'BANK', 'FIN', 'INSUR', 'AUTO', 'IMM', 'PAPER', 'PETRO', 'PKG', 'STEEL'
					, 'CONMAT', 'CONS', 'PROP', 'ENERG', 'COKMM', 'HELTH', 'MEDIA', 'PROF', 'TOURISM', 'TRANS', 'ETRON', 'ICT'
				],
				contentImages: [
					{
						tab: 'AGRI',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/AGRI.png',
					},
					{
						tab: 'FOOD',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/FOOD.png',
					},
					{
						tab: 'FASHION',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/FASHION.png',
					},
					{
						tab: 'HOME',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/HOME.png',
					},
					{
						tab: 'PERSON',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/PERSON.png',
					},
					{
						tab: 'BANK',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/BANK.png',
					},
					{
						tab: 'FIN',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/FIN.png',
					},
					{
						tab: 'INSUR',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/INSUR.png',
					},
					{
						tab: 'AUTO',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/AUTO.png',
					},
					{
						tab: 'IMM',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/IMM.png',
					},
					{
						tab: 'PAPER',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/PAPER.png',
					},
					{
						tab: 'PETRO',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/PETRO.png',
					},
					{
						tab: 'PKG',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/PKG.png',
					},
					{
						tab: 'STEEL',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/STEEL.png',
					},
					{
						tab: 'CONMAT',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/CONMAT.png',
					},
					{
						tab: 'CONS',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/CONS.png',
					},
					{
						tab: 'PROP',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/PROP.png',
					},
					{
						tab: 'ENERG',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/ENERG.png',
					},
					{
						tab: 'COMM',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/COMM.png',
					},
					{
						tab: 'HELTH',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/HELTH.png',
					},
					{
						tab: 'MEDIA',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/MEDIA.png',
					},
					{
						tab: 'PROPF',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/PROF.png',
					},
					{
						tab: 'TROURISM',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/TOURISM.png',
					},
					{
						tab: 'TRANS',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/TRANS.png',
					},
					{
						tab: 'ETRON',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/ETRON.png',
					},
					{
						tab: 'ICT',
						url: 'https://ava-scbam.s3-ap-southeast-1.amazonaws.com/rrg-images/ICT.png',
					},
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
