<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const dataList = ref([
    {
        type:"BTC",
        available:"0.0000",
        locking:"0.00",
        convert:"0.00"
    },
    {
        type:"ETH",
        available:"0.0000",
        locking:"0.00",
        convert:"0.00"
    },
    {
        type:"APE",
        available:"0.0000",
        locking:"0.00",
        convert:"0.00"
    },
    {
        type:"DOGE",
        available:"0.0000",
        locking:"0.00",
        convert:"0.00"
    },
    {
        type:"SOL",
        available:"0.0000",
        locking:"0.00",
        convert:"0.00"
    },
    {
        type:"USDT",
        available:"0.0000",
        locking:"0.00",
        convert:"0.00"
    },
    {
        type:"BCH",
        available:"0.0000",
        locking:"0.00",
        convert:"0.00"
    },
])

const goBack = () => {
  router.back();
};

</script>

<template>
  <div class="wallet">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>钱包</span>
    </div>
    <div class="top">
      <span class="span1">总资产折合</span>
      <span class="span2">0.0000 USDT</span>
      <div class="btn">
        <div>
          <span>今日收益</span>
          <span>0</span>
        </div>
        <div>
          <span>总收益</span>
          <span>0</span>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="box" v-for="(item,index) in dataList" :key="index">
        <div class="top_box">
          <span class="top_type">{{item.type}}</span>
          <span class="material-symbols-outlined right_arrow"> arrow_forward_ios </span>
        </div>
        <div>
            <span>可用额度</span>
            <span>锁定</span>
            <span>折合($)</span>
        </div>
        <div>
            <span>{{item.available}}</span>
            <span>{{item.locking}}</span>
            <span>{{item.convert}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wallet {
  width: auto;
  height: auto;
  background: #1a2b45;
  padding: 15px;
  margin-bottom: 70px;
  .header {
    width: auto;
    height: 25px;
    text-align: center;
    color: #fff;
    position: relative;
    .arrow {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
    }
  }
  .top {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    margin: 20px 0px;
    color: #fff;
    span {
      padding: 10px 0px;
    }
    .span1 {
      font-weight: 600;
    }
    .span2 {
      font-weight: 600;
    }
    .btn {
      display: flex;
      justify-content: space-around;
      div {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  .main{
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .box{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        color: #fff;
        font-size: 14px;
        background: #364f6b;
        padding: 15px;
        border-radius: 5px;
        margin: 10px 0px;
        div{
            display: flex;
            justify-content: space-between;
            margin: 5px;
            .top_type{
                font-weight: 600;
                font-size: 15px;
            }
            .right_arrow{
                font-size: 18px;
            }
        }
        .top_box{
            padding-bottom: 10px;
        }
    }
  }
}
</style>