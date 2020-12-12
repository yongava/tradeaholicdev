import {Bar} from 'vue-chartjs';
import ChartConfig from 'Constants/ChartConfig';

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
	props: ['data', 'labels', 'colors'],
	mounted() {
		this.renderChart({
			labels: this.labels || ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'Data One',
					// backgroundColor: ChartConfig.color.warning,
					backgroundColor: this.colors || '#ef534f',
					data: this.data || [40, 35, 60, 70, 20, 35, 40]
				}
			]
		}, this.options)
	}
}
