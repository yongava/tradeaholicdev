import {Bar} from 'vue-chartjs';

export default {
	extends: Bar,
	data: function () {
		return {
			options: {
				responsive: true,
				legend: {display: false},
				maintainAspectRatio: false,
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {display: false},
						gridLines: {
							display: false
						},
						categoryPercentage: 0.5,
						barPercentage: 0.8
					}]
				}
			}
		}
	},
	mounted() {
		this.renderChart({
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'Data One',
					// backgroundColor: ChartConfig.color.warning,
					backgroundColor: '#ef534f',
					data: [40, 35, 60, 70, 20, 35, 40]
				},
				{
					label: 'Data One',
					// backgroundColor: ChartConfig.color.warning,
					backgroundColor: '#38ada1',
					data: [56, 12, 90, 33, 88, 23, 40]
				},
			]
		}, this.options)
	}
}
