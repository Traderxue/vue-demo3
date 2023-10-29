<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { init, dispose } from "klinecharts";

const router = useRouter();
const route = useRoute();

const active = ref("1M");

const timeData = ref([
  {
    time: "1M",
  },
  {
    time: "5M",
  },
  {
    time: "15M",
  },
  {
    time: "30M",
  },
  {
    time: "1H",
  },
  {
    time: "4H",
  },
]);

const goBack = () => {
  router.back();
};

const tabTime = (item) => {
  active.value = item.time;
};

const buyBtn = () => {
  router.push("/trade");
};

const sellBtn = () => {
  router.push("/trade");
};

const option = {
  grid: {
    show: false,
  },
  xAxis: {
    show: true,
    size: "auto",
    // x轴线
    axisLine: {
      show: true,
      color: "#FFF",
      size: 1,
    },
  },
  yAxis: {
    show: true,
    size: "auto",
    // 'left' | 'right'
    position: "right",
    // 'normal' | 'percentage' | 'log'
    type: "normal",
    inside: false,
    reverse: false,
    // y轴线
    axisLine: {
      show: true,
      color: "#FFF",
      size: 1,
    },
  },
};

let chart;

console.log(route.query._value);

onMounted(() => {
  chart = init("kline_box");
  chart.applyNewData([
    {
      close: 4976.16,
      high: 4977.99,
      low: 4970.12,
      open: 4972.89,
      timestamp: 1587660000000,
      volume: 204,
    },
    {
      close: 4977.33,
      high: 4979.94,
      low: 4971.34,
      open: 4973.2,
      timestamp: 1587660060000,
      volume: 194,
    },
    {
      close: 4977.93,
      high: 4977.93,
      low: 4974.2,
      open: 4976.53,
      timestamp: 1587660120000,
      volume: 197,
    },
    {
      close: 4966.77,
      high: 4968.53,
      low: 4962.2,
      open: 4963.88,
      timestamp: 1587660180000,
      volume: 28,
    },
    {
      close: 4961.56,
      high: 4972.61,
      low: 4961.28,
      open: 4961.28,
      timestamp: 1587660240000,
      volume: 184,
    },
    {
      close: 4964.19,
      high: 4964.74,
      low: 4961.42,
      open: 4961.64,
      timestamp: 1587660300000,
      volume: 191,
    },
    {
      close: 4968.93,
      high: 4972.7,
      low: 4964.55,
      open: 4966.96,
      timestamp: 1587660360000,
      volume: 105,
    },
    {
      close: 4979.31,
      high: 4979.61,
      low: 4973.99,
      open: 4977.06,
      timestamp: 1587660420000,
      volume: 35,
    },
    {
      close: 4977.02,
      high: 4981.66,
      low: 4975.14,
      open: 4981.66,
      timestamp: 1587660480000,
      volume: 135,
    },
    {
      close: 4985.09,
      high: 4988.62,
      low: 4980.3,
      open: 4986.72,
      timestamp: 1587660540000,
      volume: 76,
    },
  ]);
  chart.setStyles(option);
  chart.createIndicator("VOL");
});
</script>

<template>
  <div class="chart">
    <div class="header">
      <div>
        <span class="material-symbols-outlined arrow_back_ios" @click="goBack">
          arrow_back_ios
        </span>
        <span>{{ route.query.type}}/USDT</span>
      </div>
      <span>持仓列表</span>
    </div>
    <div class="top">
      <div>
        <span class="top_price" :class="route.query.up == '1' ? 'up' : 'down'">{{
          route.query.price
        }}</span>
        <p class="top_parcent" :class="route.query.up == '1' ? 'up' : 'down'">
          {{ route.query.parcent }}
        </p>
      </div>
      <div>
        <span>最高价</span>
        <span>最低价</span>
        <span>成交量</span>
      </div>
      <div>
        <span>21641.31</span>
        <span>24161.45</span>
        <span>23461.15</span>
      </div>
    </div>
    <div class="time">
      <span
        v-for="(item, index) in timeData"
        :key="index"
        @click="tabTime(item)"
        :class="active == item.time ? 'active' : ''"
        >{{ item.time }}</span
      >
      <span class="material-symbols-outlined"> legend_toggle </span>
    </div>
    <div
      id="kline_box"
      style="width: 100%; height: 500px; margin: 10px 0px"
    ></div>
    <div class="button">
      <button class="buy" @click="buyBtn">买入</button>
      <button class="sell" @click="sellBtn">卖出</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart {
  width: auto;
  height: 100%;
  background: #141919;
  color: #f5f5f5;
  padding: 15px;
  .header {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .arrow_back_ios {
        font-size: 18px;
        margin-right: 10px;
      }
    }
  }
  .top {
    display: flex;
    justify-content: space-between;
    height: 80px;
    font-size: 14px;
    padding: 5px 20px;
    div {
      height: 80px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .top_price {
        font-size: 20px;
        font-weight: 600;
      }
      .top_parcent {
        font-size: 13px;
        font-weight: 600;
      }
      .down {
        color: #e23e57;
      }
      .up {
        color: #21c397;
      }
    }
  }
  .time {
    margin: 10px 0px;
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    .active {
      color: #3ec1d3;
      font-weight: 600;
    }
  }
  .button {
    width: 90%;
    margin: 25px auto;
    display: flex;
    position: fixed;
    justify-content: space-around;
    button {
      width: 45%;
      height: 40px;
      border: 0;
      font-size: 14px;
    }
    .buy {
      background: #2dc08e;
    }
    .sell {
      background: #e23e57;
    }
  }
}
</style>