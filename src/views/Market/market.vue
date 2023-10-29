<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const listData = ref([
    {
        type:"BTC",
        price:"16346.63",
        parcent:"+0.23%",
        logo:"https://etherscan.io/token/images/wbtc_28.png",
        up:1
    },
    {
        type:"ETH",
        price:"1567.3",
        parcent:"+0.11%",
        logo:"https://etherscan.io/token/images/trontrx_32.png",
        up:1
    },
    {
        type:"BNB",
        price:"16346.63",
        parcent:"+0.23%",
        logo:"https://etherscan.io/token/images/bnb_28_2.png",
        up:1 
    },
    {
        type:"LINK",
        price:"10.96",
        parcent:"-0.31%",
        logo:"https://etherscan.io/token/images/chainlinktoken_32.png",
        up:0
    },
    {
        type:"SUHIB",
        price:"0.0046",
        parcent:"-0.12%",
        logo:"https://etherscan.io/token/images/shibatoken_32.png",
        up:0
    },
    {
        type:"UNI",
        price:"4.16",
        parcent:"+1.36%",
        logo:"https://etherscan.io/token/images/uniswap_32.png",
        up:1
    },
    {
        type:"ETH",
        price:"44.16",
        parcent:"+2.36%",
        logo:"https://etherscan.io/token/images/okex_32.png",
        up:0
    }
])


const goChart = (item)=>{
  router.push({
    path:"/chart",
    query:item
  })
}
</script>

<template>
  <div class="market">
    <div class="header">
      <span class="type">种类</span>
      <span>价格</span>
      <span>涨跌幅</span>
    </div>
    <div class="box">
      <div class="box_per" v-for="(item,index) in listData" :key="index" @click="goChart(item)">
        <div class="box_left">
          <img :src="item.logo" alt="" />
          <span class="box_btc">{{item.type}}/USDT</span>
        </div>
        <div><span :class="item.up==1?'price_up':'price_down'">{{item.price}}</span></div>
        <div><span :class="item.up==1?'parcent_up':'parcent_down'">{{item.parcent}}</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.market {
  width: auto;
  height: 100%;
  padding: 15px;
  background: #141919;
  color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    span{
        width: 30%;
        text-align: right;
        font-size: 14px;
    }
    .type{
        text-align: center;
    }
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 15px 0px;
    font-size: 14px;
    font-weight: 600;
    .box_per {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 10px 0px;
      margin: 5px 0px;
      .box_left{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 33%;
        .box_btc {
          padding-left: 10px;
        }
      }
      div{
        width: 33%;
        text-align: right;
      }
      .price_up{
        color: #21C397;
      }
      .parcent_up{
        display: inline-block;
        width: 70px;
        height: 30px;
        background: #21C397;
        text-align: center;
        line-height: 30px;
      }
      .price_down{
        color: #e23e57;
      }
      .parcent_down{
        display: inline-block;
        width: 70px;
        height: 30px;
        background: #e23e57;
        text-align: center;
        line-height: 30px;
      }
    }
  }
}
</style>