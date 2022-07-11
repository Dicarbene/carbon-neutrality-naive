<template>
  <n-upload
    action="http://47.103.132.247:8802/get_oCoCarbon"
    :custom-request="customRequest"
  >
    <n-button>上传文件</n-button>
  </n-upload>
</template>

<script lang="ts" setup>
import { useMessage } from "naive-ui";
import type { UploadCustomRequestOptions } from "naive-ui";

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
    .then((result) => console.log(result))
    .catch((error) => message.error(error.message));
};
</script>
