<template>
  <div>
    <div class="row">
      <div class="col-md-12" style="height: 80vh">
        <div ref="tradingview" class="tradingview-widget-container">
          <div class="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	const SCRIPT_ID = 'tradingview-widget-script';

	export default {
		data() {
			return {
				options: {
					"colorTheme": "light",
					"dateRange": "12M",
					"showChart": true,
					"locale": "en",
					"width": "100%",
					"height": "100%",
					"largeChartUrl": "",
					"isTransparent": false,
					"showSymbolLogo": true,
					"plotLineColorGrowing": "rgba(33, 150, 243, 1)",
					"plotLineColorFalling": "rgba(33, 150, 243, 1)",
					"gridLineColor": "rgba(240, 243, 250, 1)",
					"scaleFontColor": "rgba(120, 123, 134, 1)",
					"belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
					"belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
					"symbolActiveColor": "rgba(33, 150, 243, 0.12)",
					"tabs": [
						{
							"title": "Indices",
							"symbols": [
								{
									"s": "FOREXCOM:SPXUSD",
									"d": "S&P 500"
								},
								{
									"s": "FOREXCOM:NSXUSD",
									"d": "Nasdaq 100"
								},
								{
									"s": "FOREXCOM:DJI",
									"d": "Dow 30"
								},
								{
									"s": "INDEX:DEU30",
									"d": "DAX Index"
								},
								{
									"s": "FOREXCOM:UKXGBP",
									"d": "FTSE 100"
								},
								{
									"s": "INDEX:NKY",
									"d": "Nikkei 225"
								},
								// {
								// 	"s": "TVC:HSI",
								// 	"d": "Hang Seng"
								// },
								// {
								// 	"s": "SET:SET",
								// 	"d": "SET"
								// }
							],
							"originalTitle": "Indices"
						},
						{
							"title": "Futures",
							"symbols": [
								{
									"s": "OSE:DJIA1!",
									"d": "DJIA"
								},
								{
									"s": "CME:SP1!",
									"d": "S&P 500"
								},
								{
									"s": "CME_MINI:NQ1!",
									"d": "NASDAQ 100"
								},
								{
									"s": "EUREX:FDAX1!",
									"d": "DAX"
								},
								{
									"s": "CME:NKD1!",
									"d": "Nikkei 225"
								}
							]
						},
						{
							"title": "Forex",
							"symbols": [
								{
									"s": "FX:EURUSD"
								},
								{
									"s": "FX:GBPUSD"
								},
								{
									"s": "FX:USDJPY"
								},
								{
									"s": "FX:USDCHF"
								},
								{
									"s": "FX:AUDUSD"
								},
								{
									"s": "FX:USDCAD"
								}
							],
							"originalTitle": "Forex"
						},
						{
							"title": "Energy",
							"symbols": [
								{
									"s": "NYMEX:CL1!",
									"d": "Crude Oil"
								},
								{
									"s": "NYMEX:RB1!",
									"d": "Gasoline"
								},
								{
									"s": "NYMEX:HO1!",
									"d": "Heating Oil"
								},
								{
									"s": "NYMEX:AEZ1!",
									"d": "Ethanol"
								}
							]
						},
						{
							"title": "Commodities",
							"symbols": [
								{
									"s": "CME_MINI:ES1!",
									"d": "S&P 500"
								},
								{
									"s": "CME:6E1!",
									"d": "Euro"
								},
								{
									"s": "COMEX:GC1!",
									"d": "Gold"
								},
								{
									"s": "NYMEX:CL1!",
									"d": "Crude Oil"
								},
								{
									"s": "NYMEX:NG1!",
									"d": "Natural Gas"
								},
								{
									"s": "CBOT:ZC1!",
									"d": "Corn"
								}
							],
							"originalTitle": "Commodities"
						}
					]
				}
			}
		},
    methods: {
			canUseDOM() {
				return typeof window !== 'undefined' && window.document && window.document.createElement;
			},
			getScriptElement() {
				return document.getElementById(SCRIPT_ID);
			},
			scriptExists() {
				return this.getScriptElement() !== null;
			},
			updateOnloadListener(onload) {
				const script = this.getScriptElement();
				const oldOnload = script.onload;
				return script.onload = () => {
					oldOnload();
					onload();
				};
			},
			appendScript(onload) {
				if (!this.canUseDOM()) {
					onload();
					return;
				}

				if (this.scriptExists()) {
					if (typeof TradingView === 'undefined') {
						this.updateOnloadListener(onload);
						return;
					}
					onload();
					return;
				}
				const script = document.createElement('script');
				script.id = SCRIPT_ID;
				script.type = 'text/javascript';
				script.async = true;
				script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
				script.onload = onload;
				script.textContent = JSON.stringify(this.options)

				this.$refs.tradingview.appendChild(script);
			},
			initWidget() {
				console.log('[widget-trading-view-widget] loaded')
			},
    },
		mounted() {
			setTimeout(() => {
				this.appendScript(this.initWidget)
			}, 300)
		},
	}
</script>
