<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const login = () =>{
    router.push("/login")
}
</script>

<template>
  <div class="register">
    <div class="title">
      <h3>登录</h3>
    </div>
    <div class="box">
      <input type="text" placeholder="请输入用户名" />
      <input type="password" placeholder="请输入密码" />
      <input type="password" placeholder="再次输入密码" />
      <div>
        <button>注册</button>
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register {
  width: auto;
  height: 100%;
  background: #1a2b45;
  text-align: center;
  padding-top: 120px;
  color: #fff;
  .title {
    width: auto;
    padding: 10px 0px;
    font-size: 18px;
  }
  .box {
    width: auto;
    height: 240px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    input {
      width: 60%;
      height: 35px;
      margin: 0 auto;
      border: 0;
      box-sizing: border-box;
      padding-left: 15px;
      font-size: 14px;
      color: #555;
    }
    div {
      width: 60%;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      button {
        width: 40%;
        height: 35px;
        background: #409eff;
        border: 0;
        font-size: 14px;
      }
    }
    p {
      position: absolute;
      right: 20%;
      bottom: -15px;
      font-size: 13px;
      color: #409eff;
    }
  }
}
</style>
 