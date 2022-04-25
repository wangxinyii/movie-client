<template>
<div class='header-container'>
    <div class="cinemaInfo">
      <div style="font-size: 30px;font-weight:bold;margin-bottom: 10px;">
        {{ cinema.cinemaName }}
      </div>
      <div style="font-size: 18px;font-weight: 550;margin-bottom: 10px;">
        {{ cinema.cinemaAddress }}
      </div>
      <div style="font-size: 16px;font-weight: 550;margin-bottom: 20px;">
        电话：0335-2661222
      </div>
      <div>
        <div style="font-size: 18px;">影院服务</div>
        <div><hr/></div>
        <div style="display: flex;">
          <div style="border: #6085eb solid 1px;width: 50px;text-align: center;">可停车</div>
          <div style="margin-left: 5px;">停车场可凭电影票在影城票台领取3小时内免停权益</div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import { findMovieById } from '@/api/movie'
import { findCinemaById } from '@/api/cinema'
export default {
name: 'HeaderIndex',
components: {},
props: {},
data() {
return {
  movie: {},
  cinema: {}
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
    const cinemaId = this.$route.query.cinemaId
    findCinemaById(cinemaId).then(res => {
      this.cinema = res.data.data
      console.log(res)
    })
  }
}
}
</script>
<style scoped lang='less'>
.header-container {
  position: relative;
  background-color: rgb(213, 199, 199);
  left: 0;
  right: 0;
  height: 400px;
  margin: 0 auto;
  background-image: linear-gradient(#f99c9c, #a9aeed);
}
.cinemaInfo {
  position: absolute;
  top: 100px;
  left:400px;
  bottom: -4px;
  height: 320px;
}
</style>