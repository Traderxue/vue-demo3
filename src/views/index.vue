<script setup>
import { ref } from "vue";
import { showToast } from "vant";

const active = ref(0);

const loading = ref(false);

const onRefresh = () => {
  setTimeout(() => {
    showToast("刷新成功");
    loading.value = false;
  }, 1000);
};

</script>

<template>
  <div class="index">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <RouterView />
    </van-pull-refresh>
    <van-tabbar v-model="active" active-color="#3ED5B2" inactive-color="#CCC" route>
      <van-tabbar-item to="/home">
        <span class="material-symbols-outlined"> home </span><br />
        <span>{{$t('home.title')}}</span>
      </van-tabbar-item>
      <van-tabbar-item to="/market">
        <span class="material-symbols-outlined"> leaderboard </span><br />
        <span>市场</span>
      </van-tabbar-item>
      <van-tabbar-item to="/trade">
        <span class="material-symbols-outlined"> monitoring </span><br />
        <span>交易</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span class="material-symbols-outlined"> person </span><br />
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.index {
  width: auto;
  height: auto;
  .van-pull-refresh{
    width: auto;
    height: 100%;
  }
  .van-tabbar{
    background: #141919;
    padding: 10px 0px;
  }
  .van-tabbar-item--active{
    background: #141919;
  }
 
}
</style>