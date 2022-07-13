import { createApp } from "vue";
import { createPinia } from "pinia";
import "virtual:windi.css";
import App from "./App.vue";
import router from "./router";

import ECharts from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent,
  GridComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent,
  GridComponent,
  LineChart,
]);

const app = createApp(App);
app.component("v-chart", ECharts);
app.use(createPinia());
app.use(router);
app.mount("#app");
