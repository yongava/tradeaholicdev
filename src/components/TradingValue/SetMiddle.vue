<template>
  <div :key="count + 'wrapper' + individual">
    <div class="text-center">
      <h5>{{title}}</h5>
    </div>

    <div>
      <bar-chart
        :key="count + '-first-' + individual + '-' + title"
        :height="200"
        :data="data"
        :labels="labels"
      ></bar-chart>
    </div>

    <div>
      <line-chart
        :key="count + '-second-' + individual + '-' + title"
        border="#ef534f"
        :height="200"
        :background="'#ef534f'"
        :data="sumData"
        :labels="labels"
        :x-show="true"
      ></line-chart>
    </div>
  </div>
</template>

<script>
	import BarChart from "../../views/charts/vue-chartjs/BarChart";
	import LineChart from "../../views/charts/vue-chartjs/LineChart";

  export default {
  	name: 'SetMiddle',
    props: ['title', 'data', 'sumData', 'labels', 'count', 'individual'],
    components: {
  		BarChart,
			LineChart,
    },
  }
</script>
