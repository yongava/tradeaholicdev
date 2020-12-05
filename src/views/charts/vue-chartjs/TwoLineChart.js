import {Line} from 'vue-chartjs'

export default {
	extends: Line,
	data() {
		return {

		}
	},
	props: ['border'],
	mounted() {
		const scales = {xAxes: [{ticks: {display: false}}]}

		this.renderChart({
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'Data',
					borderWidth: 2,
					backgroundColor: 'transparent',
					borderColor: '#ef534f',
					data: [100, 120, 150, 170, 180, 170, 160, 190]
				},
				{
					label: 'Data',
					borderWidth: 2,
					backgroundColor: 'transparent',
					borderColor: '#38ada1',
					data: [45, 67, 234, 74, 235, 163, 34, 90]
				}
			]
		}, {responsive: true, maintainAspectRatio: false, legend: {position: 'top', display: false}, scales})
	}
}
