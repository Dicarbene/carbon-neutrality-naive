<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return { MAC: ["0"], cyr_total: ["0"] };
    },
  },
});
const option = ref({
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: false,
      },
      saveAsImage: {
        pixelRatio: 2,
      },
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  dataZoom: [
    {
      type: "inside",
    },
    {
      type: "slider",
    },
  ],
  xAxis: {
    type: "value",
    data: props.data.MAC,
    interval: 0,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "line",
      step: "end",
      data: props.data.cyr_total,
    },
  ],
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
