<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";
import { defineProps } from "vue";
const data = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
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
    type: "category",
    data: data.MAC,
    interval: 0,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "line",
      step: "end",
      data: data.cyr_total,
    },
  ],
});
</script>

<script lang="ts">
export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
