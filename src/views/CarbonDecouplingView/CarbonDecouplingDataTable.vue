<template>
  <n-upload
    action="http://47.103.132.247:8802/get_oCoCarbon"
    :custom-request="customRequest"
    directory-dnd
    multiple
  >
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :depth="3">
          <archive-icon />
        </n-icon>
      </div>
      <n-text style="font-size: 16px"> 点击或者拖动文件到该区域来上传 </n-text>
      <n-p depth="3" style="margin: 8px 0 0 0">
        请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
      </n-p>
    </n-upload-dragger>
  </n-upload>
  <CarbonDataChart v-if="loadChart" :data="chartData" />
</template>

<script lang="ts" setup>
import { useMessage } from "naive-ui";
import type { UploadCustomRequestOptions } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { ref } from "vue";
import CarbonDataChart from "./CarbonDataChart.vue";

const chartData = ref({ MAC: [], cyr_total: [] });
const loadChart = ref(false);

const message = useMessage();
const customRequest = ({ file, data }: UploadCustomRequestOptions) => {
  const formData = new FormData();
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(
        key,
        data[key as keyof UploadCustomRequestOptions["data"]]
      );
    });
  }
  formData.append("file", file.file as File);
  const requestOptions = {
    method: "POST",
    body: formData,
  };

  fetch("http://47.103.132.247:8802/get_oCoCarbon", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      message.success("计算成功");
      chartData.value = Object.assign({}, result.msg);
      loadChart.value = true;
    })
    .catch((error) => message.error(error.message));
};
</script>
