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
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/AGRI.png',
					},
					{
						tab: 'FOOD',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/FOOD.png',
					},
					{
						tab: 'FASHION',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/FASHION.png',
					},
					{
						tab: 'HOME',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/HOME.png',
					},
					{
						tab: 'PERSON',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/PERSON.png',
					},
					{
						tab: 'BANK',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/BANK.png',
					},
					{
						tab: 'FIN',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/FIN.png',
					},
					{
						tab: 'INSUR',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/INSUR.png',
					},
					{
						tab: 'AUTO',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/AUTO.png',
					},
					{
						tab: 'IMM',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/IMM.png',
					},
					{
						tab: 'PAPER',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/PAPER.png',
					},
					{
						tab: 'PETRO',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/PETRO.png',
					},
					{
						tab: 'PKG',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/PKG.png',
					},
					{
						tab: 'STEEL',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/STEEL.png',
					},
					{
						tab: 'CONMAT',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/CONMAT.png',
					},
					{
						tab: 'CONS',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/CONS.png',
					},
					{
						tab: 'PROP',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/PROP.png',
					},
					{
						tab: 'ENERG',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/ENERG.png',
					},
					{
						tab: 'COMM',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/COMM.png',
					},
					{
						tab: 'HELTH',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/HELTH.png',
					},
					{
						tab: 'MEDIA',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/MEDIA.png',
					},
					{
						tab: 'PROPF',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/PROF.png',
					},
					{
						tab: 'TROURISM',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/TOURISM.png',
					},
					{
						tab: 'TRANS',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/TRANS.png',
					},
					{
						tab: 'ETRON',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/ETRON.png',
					},
					{
						tab: 'ICT',
						url: 'https://alpharesearch.blob.core.windows.net/yongcontainer/ICT.png',
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
