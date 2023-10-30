<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import i18n from "../i18n/index.js";

const router = useRouter();

const current_lang = ref("zh");

const langData = ref([
  {
    lang: "zh",
  },
  {
    lang: "zh_hk",
  },
  {
    lang: "en",
  },
]);

const goBack = () => {
  router.back();
};

const selectLang = (item) => {
  current_lang.value = item.lang;
  i18n.global.locale = item.lang;
  router.back();
};
</script>

<template>
  <div class="lang">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>language</span>
    </div>
    <div class="select">
      <span
        v-for="(item, index) in langData"
        :key="index"
        @click="selectLang(item)"
        :class="current_lang == item.lang ? 'active' : ''"
        >{{ item.lang }}</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lang {
  width: auto;
  height: 100%;
  padding: 15px;
  background: #141919;
  color: #f5f5f5;
  .header {
    font-size: 15px;
    text-align: center;
    position: relative;
    .arrow {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
    }
  }
  .select {
    margin: 15px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-size: 15px;
    span {
      width: 100%;
      display: inline-block;
      padding: 10px 0px;
      font-weight: 600;
      text-align: center;
      color: #3ed5b4;
      margin: 5px;
    }
  }
}
</style>