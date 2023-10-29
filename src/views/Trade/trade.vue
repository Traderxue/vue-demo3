<script setup>
import { ref } from "vue";

const value = ref(10);

const num = ref(0);

</script>

<template>
  <div class="trade">
    <div class="box">
      <div class="left">
        <select >
            <option value="市价">市价</option>
            <option value="限价">限价</option>
        </select>
        <div>
          <p>杠杆倍数1-200</p>
          <van-stepper v-model="value" step="10" min="1" max="2000" />
        </div>
        <div>
          <p>开仓数量 USDT</p>
          <input type="text" v-model="num" />
        </div>
        <button>买入</button>
      </div>
      <div class="right">
        <div class="top">
            <span>价格</span>
            <span>数量</span>
        </div>
        <div class="main">
            <div class="down">
                <div><span style="color:#1fa58e">26495.36</span><span>0.16</span></div>
                <div><span style="color:#1fa58e">26495.36</span><span>0.16</span></div>
                <div><span style="color:#1fa58e">26495.36</span><span>0.16</span></div>
                <div><span style="color:#1fa58e">26495.36</span><span>0.16</span></div>
            </div>
            <span class="mid">29461.56</span>
            <div class="up">
                <div><span style="color:#e23e57">26495.36</span><span>0.16</span></div>
                <div><span style="color:#e23e57">26495.36</span><span>0.16</span></div>
                <div><span style="color:#e23e57">26495.36</span><span>0.16</span></div>
                <div><span style="color:#e23e57">26495.36</span><span>0.16</span></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trade {
  width: auto;
  height: 100%;
  background: #141919;
  padding: 15px;
  .box {
    display: flex;
    justify-content: space-between;
    .left {
      color: #fff;
      width: 50%;
      height: 300px;
      padding: 10px 0px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      box-sizing: border-box;
      select{
        height: 35px;
        width: auto;
        background: #1a2b45;
        border: 0;
        outline: none;
        color: #fff;
        padding-left: 15px;
      }
      div {
        p {
          font-size: 14px;
          margin: 5px 0px;
        }
        ::v-deep(.van-stepper__input) {
          width: 50%;
          margin: 0;
          height: 35px;
          background: #1a2b45;
          color: #fff;
        }
        ::v-deep(.van-stepper__minus) {
          width: 25%;
          border-radius: 0;
          height: 35px;
          background: #1a2b45;
          color: #fff;
        }
        ::v-deep(.van-stepper__plus) {
          width: 25%;
          border-radius: 0;
          height: 35px;
          background: #1a2b45;
          color: #fff;
        }
        input {
          color: #fff;
          width: 100%;
          height: 35px;
          padding-left: 15px;
          box-sizing: border-box;
          background: #1a2b45;
          border: 0;
        }
      }
      button {
        height: 35px;
        background: #1fa58e;
        color: #fff;
        border: 0;
      }
    }
    .right {
      width: 50%;
      padding: 10px 15px;
      .top{
        width: auto;
        height: 15px;
        display: flex;
        justify-content: space-around;
        color: #fff;
        font-size: 14px;
      }
      .main{
        width: auto;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 0px 10px;
        .mid{
            color: #1fa58e;
            font-weight: 600;
            font-size: 16px;
        }
        .up{
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            div{
                margin: 5px 0px;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: #fff;
            }
        }
        .down{
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            div{
                margin: 5px 0px;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: #fff;
            }
        }
      }
    }
  }
}
</style>