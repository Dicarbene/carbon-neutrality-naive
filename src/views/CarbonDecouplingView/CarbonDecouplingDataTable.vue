<template>
  <n-upload
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :max="1"
    :custom-request="customRequest"
  >
    <n-button class="flex">上传文件</n-button>
  </n-upload>
</template>

<script lang="ts" setup>

import { useMessage } from "naive-ui";
import type { UploadCustomRequestOptions } from "naive-ui";

const message = useMessage();
const customRequest = ({
  file,
  data,
  headers,
  withCredentials,
  action,
  onFinish,
  onError,
  onProgress,
}: UploadCustomRequestOptions) => {
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
    redirect: "follow",
    mode: "no-cors",
  };

  fetch("http://47.103.132.247:8802/get_oCoCarbon", requestOptions)
    .then((response) => response.text())
    .then((result) => message.info(result))
    .catch((error) => message.error("error", error));
  /* lyla
        .post(action as string, {
          withCredentials,
          headers: headers as Record<string, string>,
          body: formData,
          onUploadProgress: ({ percent }) => {
            onProgress({ percent: Math.ceil(percent) });
          },
        })
        .then(({ json }) => {
          message.success(json);
          onFinish();
        })
        .catch((error) => {
          message.success(error.message);
          onError();
        }); */
};


</script>
