<template>
  <div class="pay-container">
    <div>
      <step-index :active="3" />
    </div>
    <div>
      <count-down-index :startTime="currentTime" :endTime="currentTime + (15*60*1000)"/>
    </div>
    <div style="margin-top: 70px;">
      <div>
        <i
          class="el-icon-warning-outline"
          style="color: rgb(154, 176, 41); width: 20px; height: 20px"
        ></i
        >请仔细核对场次信息，出票后将
        <span style="color: rgb(206, 14, 14)">无法退票和改签</span>
      </div>
      <div style="background-color: rgb(242, 244, 245)">
        <div
          style="
            display: flex;
            text-align: center;
            font-size: 20px;
            font-weight: 600;
          "
        >
          <span style="flex: auto; width: 50px; margin-top: 20px">影片</span>
          <span style="flex: auto; width: 50px; margin-top: 20px">时间</span>
          <span style="flex: auto; width: 50px; margin-top: 20px">影院</span>
          <span style="flex: auto; width: 50px; margin-top: 20px">座位</span>
        </div>
        <hr />
        <div
          style="
            display: flex;
            text-align: center;
            font-size: 17px;
            margin-top: 20px;
          "
        >
          <span style="flex: auto; width: 50px; margin-top: 20px">{{
            schedule.movie.movieCnName
          }}</span>
          <span style="flex: auto; width: 50px; margin-top: 20px">{{
            schedule.scheduleStarttime
          }}</span>
          <span style="flex: auto; width: 50px; margin-top: 20px">{{
            schedule.hall.hallCinema.cinemaName
          }}</span>
          <div style="flex: auto; width: 50px; margin-top: 5px">
            <div style="font-weight: bold">{{ schedule.hall.hallName }}</div>
            <div style="margin-top: 5px; font-size: 15px; margin-bottom: 8px">
              <span v-for="(seat, index) in seleted" :key="index">
                <span v-if="index !== 0" style="color: rgb(255, 255, 255)">
                  |
                </span>
                {{ seat.element }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="position: absolute; right: 17%; margin-top: 10px">
        <span style="font-size: 18px">实际支付：</span>
        <span style="font-size: 20px; color: red"
          >{{ seleted.length * schedule.schedulePrice }} 元</span
        >
      </div>
      <div style="position: absolute; right: 15%; margin-top: 50px">
        <el-button round style="width: 200px" @click="addOrder"
          >确认支付</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import StepIndex from "@/views/pay/step/index.vue"
import CountDownIndex from "@/views/pay/countDown/index.vue"
import { addOrder } from "@/api/order";
export default {
  name: "PayIndex",
  components: {
    StepIndex,
    CountDownIndex
  },
  props: {},
  data() {
    return {
      user: {},
      schedule: {},
      seleted: [],
      order: {
        userId: '',
        scheduleId: '',
        orderPosition: '',
        orderState: 1,
        orderPrice: '',
        orderTime: '',
      },
      currentTime: new Date().getTime()
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {
      console.log(this.currentTime)
    },
  created() {
    this.schedule = JSON.parse(localStorage.getItem("schedule"));
    this.seleted = JSON.parse(localStorage.getItem("seleted"));
    this.user = JSON.parse(localStorage.getItem("user"));
    
    this.order.userId = this.user.userId
    this.order.scheduleId = this.schedule.scheduleId
    this.order.orderPrice = this.schedule.schedulePrice
    console.log(this.order)
  },
  mounted() {
   /*  setInterval(() => {
      let m = 60*15*1000
			localStorage.setItem('residue', m)
      m = m - 1
	}, 1000) */
  },
  updated() {
  },
  beforeDestroy() {
    localStorage.removeItem("schedule");
    localStorage.removeItem("seleted");
  },
  methods: {
    addOrder() {
      let date = new Date();
        const formatDate = (current_datetime) => {
          let current_month = ''
          if((current_datetime.getMonth() + 1) < 10){
            current_month = '0' + (current_datetime.getMonth() + 1)
          }else{
            current_month = current_datetime.getMonth() + 1
          }
          let formatted_date =
            current_datetime.getFullYear() +
            "-" +
            (current_month) +
            "-" +
            current_datetime.getDate() +
            " " +
            current_datetime.getHours() +
            ":" +
            current_datetime.getMinutes() +
            ":" +
            current_datetime.getSeconds();
          return formatted_date;
        };
      let count = 0
      for (let index = 0; index < this.seleted.length; index++) {
        const element = this.seleted[index];
        this.order.orderPosition = element.element;
        this.order.orderTime = formatDate(date);
        addOrder(this.order).then(
          count = count + 1
        )
      }
      console.log(count)
      if(count === this.seleted.length){
        this.$message.success('支付成功')
      }
      this.$router.push('/paySuccess')
    },
  },
};
</script>

<style scoped lang='less'>
.pay-container {
  width: 80%;
  margin: 0 auto;
}
</style>