<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const goWallet = () =>{
  router.push("/wallet")
}

const goRecord = ()=>{
  router.push("/record")
}
</script>

<template>
  <div class="mine">
    <div class="header">
      <div class="top">
        <span class="title">最爱劳力士</span>
        <span>低调奢华有内涵</span>
        <div>
          <img src="@/assets/img/hot.png" alt="" />
          <span style="color: #ea5455">1569.2</span>
        </div>
        <img src="@/assets/img/acvotor.png" alt="" class="acvotor" />
      </div>
      <div class="bottom">
        <div>
          <span>余额</span>
          <span style="color: #3490de;font-weight: 600;font-size: 16px;padding: 5px 0px;">888.88</span>
        </div>
        <div>
          <span>团队</span>
          <span style="color: #3ec1d3;font-weight: 600;font-size: 16px;padding: 5px 0px;">2</span>
        </div>
        <div>
          <span>邀请人数</span>
          <span style="color: #ff2e63;font-weight: 600;font-size: 16px; padding: 5px 0px;">12</span>
        </div>
        <div>
          <span>勋章</span>
          <span style="color: #08d9d6;font-weight: 600;font-size: 16px;padding: 5px 0px;">8</span>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="box">
        <div>
            <img src="@/assets/img/我的_.png" alt="">
            <span>我的</span>
        </div>
        <span class="material-symbols-outlined"> arrow_forward_ios </span>
      </div>
      <div class="box">
        <div>
            <img src="@/assets/img/签到_.png" alt="">
            <span>签到</span>
        </div>
        <span class="material-symbols-outlined"> arrow_forward_ios </span>
      </div>
      <div class="box" @click="goWallet">
        <div>
            <img src="@/assets/img/钱包_.png" alt="">
            <span>钱包</span>
        </div>
        <span class="material-symbols-outlined"> arrow_forward_ios </span>
      </div>
      <div class="box" @click="goRecord">
        <div>
            <img src="@/assets/img/记录_.png" alt="">
            <span>开单记录</span>
        </div>
        <span class="material-symbols-outlined"> arrow_forward_ios </span>
      </div>
      <div class="box">
        <div>
            <img src="@/assets/img/邮件_.png" alt="">
            <span>消息中心</span>
        </div>
        <span class="material-symbols-outlined"> arrow_forward_ios </span>
      </div>
      <div class="box">
        <div>
            <img src="@/assets/img/设置_.png" alt="">
            <span>设置</span>
        </div>
        <span class="material-symbols-outlined"> arrow_forward_ios </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  width: auto;
  height: 100vh;
  background: #141919;
  padding: 15px;
  .header {
    width: auto;
    height: 215px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .top {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      position: relative;
      .title {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        margin: 10px 0px;
      }
      span {
        color: #454553;
        font-size: 14px;
        padding: 5px 0px;
      }
      div {
        span {
          color: #ccc;
        }
        img {
          width: 10px;
          height: 10px;
        }
      }
      .acvotor {
        position: absolute;
        right: 15px;
        top: 20px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      div {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;
        color: #ccc;
        font-size: 14px;
        span {
          padding: 2px 0px;
        }
      }
    }
  }
  .main{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 15px 0px;
    .box{
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 5px 15px;
        margin: 10px 0px;
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
            img{
                width: 20px;
                height: 20px;
            }
            span{
                color: #CCC;
                font-size: 15px;
                padding-left: 10px;
            }
        }
        span{
            color: #CCC;
            font-size: 18px;
        }
    }
  }
}
</style>