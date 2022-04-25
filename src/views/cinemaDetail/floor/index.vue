<template>
<div class='floor-container'>
  <div>
    <div style="display: flex;">
      <div><h2>{{ movie.movieCnName }}</h2></div>
      <div style="margin-left: 30px;margin-top: 19px;color: red;font-size: 28px;font-weight: bold;"><span>{{ movie.movieScore }}</span></div>
    </div>
    <div>
      <span style="color: #958f8f;">时长：<span style="color: black;">{{ movie.movieDuration }}</span></span>
      <span style="color: #958f8f;margin-left: 20px;">类型：<span style="color: black;">{{ movie.movieType }}</span></span>
      <span style="color: #958f8f;margin-left: 20px;">导演：<span style="color: black;">{{ movie.movieDirector }}</span></span>
    </div>
  </div>
  <div>
    <dates-index @buyCinemaList="getCinemaList"/>
  </div>
  <div style="margin-top: 60px;text-align: center;font-size: 16px;font-weight: bold;">
    <div style="display: flex;margin-bottom: 40px;">
      <div style="flex: auto;margin-left: 30px;">放映时间</div>
      <div style="flex: auto;margin-left: 50px;">语言版本</div>
      <div style="flex: auto;margin-left: 30px;">放映厅</div>
      <div style="flex: auto;">售价（元）</div>
      <div style="flex: auto;">选座购票</div>
    </div>
    <div v-for="(schedule,index) in cinemaList" :key="index">
      <div  style="display: flex;">
        <div style="flex: auto;">{{ schedule.scheduleStarttime }}</div>
      <div style="flex: auto;">{{ schedule.movie.movieCountry }}</div>
      <div style="flex: auto;">{{ schedule.hall.hallName }}</div>
      <div style="flex: auto;">{{ schedule.schedulePrice }}</div>
      <div style="flex: auto;"><el-button type="danger" round @click="router('/buySeat', schedule.scheduleId)"
        >选座购票</el-button
      ></div>
      </div>
      <div>
        <hr>
      </div>     
    </div>
  </div>
</div>
</template>
<script>
import { findMovieById } from '@/api/movie'
import DatesIndex from '@/views/cinemaDetail/date/index.vue' 
export default {
name: 'FloorIndex',
components: {
  DatesIndex
},
props: {},
data() {
return {
  movie: {},
  cinemaList: []
}
},
computed: {},
watch: {},
created() {
  this.loadMovie()
},
mounted() {},
methods: {
  loadMovie() {
    const movieId = this.$route.query.movieId
    findMovieById(movieId).then(res => {
      console.log(res);
      this.movie = res.data.data
    })
  },
  getCinemaList(val) {
    console.log(val)
    this.cinemaList = val
  },
  router(val1,val2) {
    const token = localStorage.getItem('token')
    console.log(token)
    if(token != null){
      this.$router.push(val1 + "?scheduleId=" + val2);
    }else {
      this.$message('请先登录你的账号')
      this.$router.push('/login');
    }
      
    }
}
}
</script>
<style scoped lang='less'>
.floor-container {
  position: relative;
  background: #ffffff;
  width: 80%;
  top: 50px;
  margin: 0 auto;
}
</style>