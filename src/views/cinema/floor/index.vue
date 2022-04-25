<template>
  <div class="cinema-floor" v-if="scheduleList.length > 0">
    <div
      v-for="(schedule, index) in scheduleList"
      :key="index"
      style="margin-top: 40px"
    >
      <div style="display: flex; justify-content: space-between">
        <div>
          <div class="cinemaName">
            {{ schedule.hall.hallCinema.cinemaName }}
          </div>
          <div>地址：{{ schedule.hall.hallCinema.cinemaAddress }}</div>
        </div>
        <div style="position: relative; bottom: 0px; right: 20px; top: 15px">
          <span
            style="
              font-size: 15px;
              color: red;
              font-weight: 600;
              margin-right: 20px;
            "
            ><i class="glyphicon glyphicon-jpy"></i>{{ schedule.schedulePrice }}
          </span>
          <el-button type="danger" round @click="router('/selectSeat', schedule.hall.hallCinema.cinemaId)"
            >选座购票</el-button
          >
        </div>
      </div>
      <el-divider></el-divider>
    </div>
  </div>
  <div v-else class="cinema-floor" style="text-align: center;align-items: center;margin-top: 80px;">
    <h1>暂无可选场次</h1>
  </div>
</template>
<script>
import eventBus from "@/api/EventBus";
export default {
  name: "CinemaFloorIndex",
  components: {},
  props: {},
  data() {
    return {
      scheduleList: [],
      cinemaId: null,
      dateStatus: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    eventBus.$on("buyCinemaList", (buyCinemaList) => {
      this.scheduleList = buyCinemaList;
    });
    eventBus.$on("cinemaId", (cinemaId) => {
      this.cinemaId = cinemaId;
      console.log(cinemaId)
    });
    eventBus.$on("dateStatus", (dateStatus) => {
      this.dateStatus = dateStatus;
      console.log(dateStatus)
    });
  },
  methods: {
    router(val1,val2) {
      this.$router.push(val1 + "?movieId=" + this.$route.query.movieId+ '&cinemaId=' + val2 + '&dateStatus=' + this.dateStatus);
    },
  },
};
</script>
<style scoped lang='less'>
.cinema-floor {
  position: relative;
  background: #ffffff;
  width: 80%;
  top: 50px;
  margin: 0 auto;
}

.cinemaName {
  font-size: 20px;
  font-weight: bold;
  position: relative;
  bottom: 0%;
}
</style>