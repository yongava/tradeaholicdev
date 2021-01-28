<template>
  <div class="row" id="chart-wrapper">
    <div class="col-md-12">
      <trading-vue
        :data="{ohlcv: ohlcv}"
        :width="this.width"
        :height="this.height"
        :key="count"
      ></trading-vue>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import TradingVue from 'trading-vue-js'

  export default {
    name: 'app',
    components: { TradingVue },
    mounted() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
      this.loadChartData();
    },
    data() {
      return {
        ohlcv: [
          [ 1551128400000, 33,  37.1, 14,  14,  196 ],
          [ 1551132000000, 13.7, 30, 6.6,  30,  206 ],
          [ 1551135600000, 29.9, 33, 21.3, 21.8, 74 ],
          [ 1551139200000, 21.7, 25.9, 18, 24,  140 ],
          [ 1551142800000, 24.1, 24.1, 24, 24.1, 29 ],
        ],
        width: window.innerWidth,
        height: window.innerHeight - 150,
        count: 1,
      }
    },
    methods: {
      onResize(event) {
        this.width = document.getElementById('chart-wrapper').getBoundingClientRect().width - 15;
        this.height = window.innerHeight - 150;
      },
      async loadChartData() {
        try {
          const apiUrl = 'https://yong.alpha.lab.ai/prices/';
          const response = await axios.get(`${apiUrl}AOT`);

          if (response && response.data) {
            const data = response.data.data;
            this.ohlcv = data && data.map(entity => {
              const dateStrArray = entity.date.split('-');
              return [(new Date(dateStrArray[0], dateStrArray[1], dateStrArray[2])).getTime(), entity.open, entity.high, entity.low, entity.close, entity.volume];
            });
            this.count++;
          }
        } catch (e) {
          console.log(e);
        }
      },
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
    },
  }

</script>