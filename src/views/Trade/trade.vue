<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const value = ref(10);

const num = ref(0);

const drawer = ref(false);

const category = ref("BTC");

const direction = ref("ltr");

const typeList = ref([
  {
    type: "ETH",
  },
  {
    type: "DOGE",
  },
  {
    type: "APE",
  },
  {
    type: "SOL",
  },
  {
    type: "BNB",
  },
  {
    type: "LINK",
  },
  {
    type: "MATIC",
  },
  {
    type: "SUSHIB",
  },
]);

const entrustData = ref([
  {
    time:"2023/10/30 10:13:02",
    num:"12054",
    profit:"+1.61",
    up:1
  },
  {
    time:"2023/10/30 10:13:02",
    num:"12054",
    profit:"-1.61",
    up:0
  },
  {
    time:"2023/10/30 10:13:02",
    num:"12054",
    profit:"+1.61",
    up:1
  },
  {
    time:"2023/10/30 10:13:02",
    num:"12054",
    profit:"-1.61",
    up:0
  },
])

const goChart = (type) => {
  router.push({
    path: "/chart",
    query: {
      type: category.value,
    },
  });
};

const changeTab = () => {
  drawer.value = !drawer.value;
};

const changeType = (item) => {
  category.value = item.type;
  drawer.value = !drawer.value;
};

const allRecord = () =>{
  router.push("/record")
}
</script>

<template>
  <div class="trade">
    <div class="header">
      <div>
        <el-drawer v-model="drawer" :with-header="false" :direction="direction">
          <span
            v-for="(item, index) in typeList"
            :key="index"
            @click="changeType(item)"
            >{{ item.type }}/USDT</span
          >
        </el-drawer>
        <span class="material-symbols-outlined" @click="changeTab">
          reorder
        </span>
        <span class="type">{{ category }}/USDT</span>
      </div>
      <span class="material-symbols-outlined" @click="goChart">
        leaderboard
      </span>
    </div>
    <div class="box">
      <div class="left">
        <select>
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
            <div>
              <span style="color: #1fa58e">26495.36</span><span>0.16</span>
            </div>
            <div>
              <span style="color: #1fa58e">26495.36</span><span>0.16</span>
            </div>
            <div>
              <span style="color: #1fa58e">26495.36</span><span>0.16</span>
            </div>
            <div>
              <span style="color: #1fa58e">26495.36</span><span>0.16</span>
            </div>
          </div>
          <span class="mid">29461.56</span>
          <div class="up">
            <div>
              <span style="color: #e23e57">26495.36</span><span>0.16</span>
            </div>
            <div>
              <span style="color: #e23e57">26495.36</span><span>0.16</span>
            </div>
            <div>
              <span style="color: #e23e57">26495.36</span><span>0.16</span>
            </div>
            <div>
              <span style="color: #e23e57">26495.36</span><span>0.16</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="entrust">
      <div class="top">
        <span class="top_left">当前委托</span>
        <div @click="allRecord">
          <span class="material-symbols-outlined"> summarize </span>
          <span>全部</span>
        </div>
      </div>
      <div class="main">
        <div class="en_box" v-for="(item,index) in entrustData" :key="index">
          <div class="en_left">
          <span>时间</span>
          <span>数量(USDT)</span>
          <span>盈/损</span>
          </div>
          <div class="en_right">
            <span>{{item.time}}</span>
            <span>{{item.num}}</span>
            <span :class="item.up==1?'up':'down'">{{item.profit}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trade {
  width: auto;
  height: auto;
  background: #141919;
  padding: 15px;
  margin-bottom: 70px;
  overflow: auto;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 10px 0px;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .type {
        font-size: 15px;
        padding-left: 5px;
        font-weight: 600;
      }
    }
  }
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
      select {
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
      .top {
        width: auto;
        height: 15px;
        display: flex;
        justify-content: space-around;
        color: #fff;
        font-size: 14px;
      }
      .main {
        width: auto;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 0px 10px;
        .mid {
          color: #1fa58e;
          font-weight: 600;
          font-size: 16px;
        }
        .up {
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          div {
            margin: 5px 0px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #fff;
          }
        }
        .down {
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          div {
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
  ::v-deep(.el-drawer) {
    width: 40% !important;
    background: #1a2b45 !important;
    .el-drawer__body {
      display: flex;
      flex-direction: column;
      span {
        display: inline-block;
        font-size: 14px;
        padding: 15px 0px;
        border-bottom: 1px solid gray;
      }
    }
  }
  .entrust{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 15px 0px;
    .top{
      height: 25px;
      width: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #F5F5F5;
      padding: 0px 10px;
      div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
      }
    }
    .main{
        width: auto;
        height: auto;
        .en_box{
          height: 120px;
          margin: 25px 0px;
          box-sizing: border-box;
          padding: 15px 15px;
          background: #1a2b45;
          display: flex;
          justify-content: space-between;
          border-radius: 5px;
          color: #F5F5F5;
          font-size: 14px;
          font-weight: 600;
          div{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          .en_left{
            text-align: left;
          }
          .en_right{
            text-align: right;
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
}
</style>