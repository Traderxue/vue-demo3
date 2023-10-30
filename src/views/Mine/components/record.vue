<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const listData = ref([
    {
        type:"ETH",
        time:"2023/04/02 16:00:04",
        income:"0.03122",
        balance:"0.012"
    },
    {
        type:"BTC",
        time:"2023/04/02 16:00:04",
        income:"0.03122",
        balance:"0.012"
    },
    {
        type:"APE",
        time:"2023/04/02 16:00:04",
        income:"0.03122",
        balance:"0.012"
    },
    {
        type:"ETH",
        time:"2023/04/02 16:00:04",
        income:"0.03122",
        balance:"0.012"
    },
    {
        type:"BTC",
        time:"2023/04/02 16:00:04",
        income:"0.03122",
        balance:"0.012"
    },
    {
        type:"APE",
        time:"2023/04/02 16:00:04",
        income:"0.03122",
        balance:"0.012"
    },
    {
        type:"ETH",
        time:"2023/04/02 16:00:04",
        income:"0.03122",
        balance:"0.012"
    },
    {
        type:"BTC",
        time:"2023/04/02 16:00:04",
        income:"0.03122",
        balance:"0.012"
    },
    {
        type:"APE",
        time:"2023/04/02 16:00:04",
        income:"0.03122",
        balance:"0.012"
    },
])

const goBack = () =>{
    router.back()
}
</script>

<template>
  <div class="record">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>开单记录</span>
    </div>
    <div class="main">
        <div class="box" v-for="(item,index) in listData" :key="index">
            <div>
                <span>{{item.type}}</span>
            </div>
            <div>
                <p>{{item.time}}</p>
            </div>
            <div>
                <span>{{item.type}}USDT</span>
                <span>{{item.income}}</span>
            </div>
            <div>
                <span>手续费</span>
                <span>余额: {{item.balance}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.record {
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
  .main{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 15px 0px;
    .box{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        font-size: 15px;
        color: #fff;
        box-sizing: border-box;
        padding: 15px 10px;
        border-bottom: 1px solid gray;
        div{
            display: flex;
            justify-content: space-between;
            padding: 5px 0px;
            .up{
                color: #1fa58e;
            }
            .down{
                color: #e23e57;
            }
        }
    }
  }
}
</style>