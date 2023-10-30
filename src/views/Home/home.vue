<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const drawer = ref(false);

const direction = ref("ltr");

const login = ()=>{
  router.push("/login")
}

const register = ()=>{
  router.push("/register")
}

const openDrawer = () => {
  drawer.value = !drawer.value;
};

const selectLang = ()=>{
  router.push("/lang")
}

const goTrade = () =>{
  router.push("/trade")
}

const goMine = () =>{
  router.push("/mine")
}
</script>

<template>
  <div class="home">
    <div class="header">
      <el-drawer v-model="drawer" :with-header="false" :direction="direction">
        <div class="box">
          <img src="@/assets/img/acvotor.png" alt="" />
          <div class="drawer_span">
            <span @click="login">登录</span>
            <span @click="register">注册</span>
          </div>
          <div class="person" @click="goMine">
            <span class="material-symbols-outlined"> person </span>
            <span>个人中心</span>
          </div>
          <div class="person" @click="goTrade">
            <span class="material-symbols-outlined"> monitoring </span>
            <span>交易中心</span>
          </div>
          <div class="person" @click="selectLang">
            <span class="material-symbols-outlined"> language </span>
            <span>语言</span>
          </div>
          <div class="person">
            <span class="material-symbols-outlined"> settings </span>
            <span>设置</span>
          </div>
        </div>
      </el-drawer>
      <div class="header_left">
        <span class="material-symbols-outlined" @click="openDrawer">
          link
        </span>
        <span>137xxx@qq.com</span>
      </div>
      <span class="material-symbols-outlined"> chat </span>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner1.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner2.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner3.png" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav">
      <div>
        <img src="@/assets/img/Component management.png" alt="" />
        <span>Menu</span>
      </div>
      <div>
        <img src="@/assets/img/Menu_Showcase_unselected.png" alt="" />
        <span>Member</span>
      </div>
      <div>
        <img src="@/assets/img/Menu_ad_unselected.png" alt="" />
        <span>Activity</span>
      </div>
      <div>
        <img src="@/assets/img/Page settings.png" alt="" />
        <span>Mill</span>
      </div>
    </div>
    <div class="mainbox">
      <p>2.36</p>
      <span>CBF</span>
      <img src="@/assets/img/bg_1.png" alt="" />
      <button>Harvest</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: auto;
  background: #141919;
  padding: 15px 15px 100px 15px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    color: #fff;
    .header_left {
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #3ed5b4;
      font-weight: 600;
      span {
        padding-right: 5px;
      }
    }
  }
  .banner {
    width: auto;
    height: 210px;
    margin: 15px 0px;
    img {
      width: 100%;
      height: 210px;
      border-radius: 5px;
    }
  }
  .nav {
    width: auto;
    height: 70px;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      text-align: center;
      padding: 5px;
      color: #3ed5b4;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
  .mainbox {
    width: auto;
    height: auto;
    padding: 15px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    p {
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 10px;
    }
    span {
      font-size: 14px;
      color: #ccc;
      font-weight: 600;
    }
    img {
      width: 240px;
      height: 240px;
    }
    button {
      margin-top: 15px;
      width: 200px;
      height: 35px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      border: 0;
      color: #fff;
      background: linear-gradient(to right, #54e4b2, #f79560);
    }
  }
  ::v-deep(.el-drawer) {
    width: 50% !important;
    background: #1a2b45;
    .box {
      width: auto;
      height: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      padding: 50px 0px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .drawer_span {
        width: 100%;
        height: 35px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 5px 15px;
        font-size: 14px;
        span {
          color: #3ed5b4;
        }
      }
      .person {
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 14px;
        box-sizing: border-box;
        padding: 0px 10px;
        margin: 10px 0px;
        cursor: pointer;
        span {
          padding-right: 10px;
        }
      }
    }
  }
}
</style>