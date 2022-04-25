<template>
<div class='movie-info-container'>
  <div style="display: flex;">
    <div style="margin-top: 10px;margin-left: 10px;"><el-image :src="schedule.movie.moviePicture" style="width: 120px;height: 170px;"></el-image></div>
    <div style="margin-left: 20px;color: rgb(136, 146, 155);">
      <div style="margin-bottom: 30px;color: black;">
        <h3>{{ schedule.movie.movieCnName }}</h3>
      </div>
      <div style="margin-bottom: 30px;">类型：<span style="color: black;">{{ schedule.movie.movieType }}</span></div>
      <div>时长：<span style="color: black;">{{ schedule.movie.movieDuration }}</span></div>
    </div>
  </div>
  <div style="color: rgb(136, 146, 155);margin-top: 5px;margin-left: 10px;">
    <div style="margin-bottom: 5px;">影院：<span style="color: rgba(250, 250, 249, 0.892);">{{ schedule.hall.hallCinema.cinemaName }}</span></div>
    <div style="margin-bottom: 5px;">影厅：<span style="color: black;">{{ schedule.hall.hallName }}</span></div>
    <div style="margin-bottom: 5px;">地区：<span style="color: black;">{{ schedule.movie.movieCountry }}</span></div>
    <div style="margin-bottom: 5px;">场次：<span style="color: black;">{{ schedule.scheduleStarttime }}</span></div>
    <div>票价：<span style="color: black;">{{ schedule.schedulePrice }} 元/位</span></div>
    <hr>
  </div>
  <div style="color: rgb(136, 146, 155);margin-top: 5px;margin-left: 10px;">
    <div style="margin-bottom: 20px;">座位：</div>
    <div>总价：</div>
  </div>
  <div style="text-align: center;margin-top: 50px;">
    <el-button v-if="flag" round style="width: 200px;" @click="pay('/pay')">确认选座</el-button>
    <el-button v-else round style="width: 200px;" disabled>确认选座</el-button>
  </div>
</div>
</template>
<script>
import { findScheduleById } from '@/api/schedule'
import event from '@/api/EventBus'
export default {
name: 'MovieInfoIndex',
components: {},
props: {},
data() {
return {
  scheduleId: null,
  schedule: {},
  flag: false
}
},
computed: {},
watch: {},
created() {
  this.scheduleId = this.$route.query.scheduleId
  this.loadSchedule()
},
mounted() {
  setInterval(this.getFlag, 1000)
},
methods: {
  loadSchedule() {
    findScheduleById(this.scheduleId).then(res => {
      console.log(res)
      const { data } = res.data
      this.schedule = data
    })
  },
  getFlag() {
    event.$on('flag', (flag) => {
                this.flag = flag
            })
            
  }
}
}
</script>
<style scoped lang='less'>
</style>