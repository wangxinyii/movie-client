<template>
  <div class="cinema-div1">
    <div class="image">
      <el-image :src="movie.moviePicture" fit="fill" style="width: 226px;height: 310px;"></el-image>
    </div>
    <div class="movieInfo">
      <div style="font-size: 25px;font-weight:bold;margin-bottom: 2px;">
        {{ movie.movieCnName }}
      </div>
      <div style="font-size: 20px;font-weight: 550;margin-bottom: 2px;">
        {{ movie.movieFgName }}
      </div>
      <div style="font-size: 15px;font-weight: 550;margin-bottom: 2px;">
        {{ movie.movieType }}
      </div>
      <div style="font-size: 15px;font-weight: 550;margin-bottom: 2px;">
        {{ movie.movieDuration }} / {{ movie.movieCountry }}
      </div>
      <div style="font-size: 15px;font-weight: 550;margin-bottom: 2px;">
        {{ movie.movieReleasedate }}
      </div>
      <div style="margin-top: 20px;">
        <el-button size="medium" style="background-color: #8d868a08;color: aliceblue;"><i class="el-icon-star-on"></i> 评分</el-button>
      </div>
      <div style="margin-top: 20px;" v-if="score ? style='hidden': null">
        <el-button @click="router('/movieDetail')" size="medium" style="background-color: #3a7ad3;color: aliceblue;"><i class="el-icon-chat-dot-square"></i> 查更多详情信息</el-button>
      </div>
    </div>
    <div class="score">
      <div style="font-size: 20px;font-weight: bold;">
        用户评分: {{ movie.movieScore }} 分
      </div>
      <div>
        <my-rate :score="movie.movieScore" disabled/>
      </div>
      <div style="font-size: 18px;margin-top: 20px;">
        {{ movie.commentList.length }} 人已评分
      </div>
    </div>
    <div class="video-movie">
      <video-index/>
    </div>
  </div>
</template>
<script>
import MyRate from '@/views/cinema/star/index'
import VideoIndex from '@/views/cinema/movieInfo/video/index'
import { findMovieById } from '@/api/movie'
export default {
name: 'MovieInfoIndex',
components: {
  VideoIndex
},
props: ['score'],
data() {
return {
  movie: {}
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
  router(val1) {
    this.$router.push(val1+'?movieId='+this.movie.movieId)
  }
}
}
</script>
<style scoped lang='less'>
.cinema-div1 {
  position: relative;
  background-color: rgb(213, 199, 199);
  left: 0;
  right: 0;
  height: 400px;
  margin: 0 auto;
  background-image: linear-gradient(#f99c9c, #a9aeed);
}
.image {
  border: aliceblue solid 02px;
  position: absolute;
  left:15%;
  bottom: -6px;
  width: 230px;
  height: 313px;
}

.movieInfo {
  position: absolute;
  top: 100px;
  left:30%;
  bottom: -4px;
  height: 320px;
}

.score { 
  position: absolute;
  left:50%;
  bottom: 180px;
  width: 230px;
  height: 100px;
}

.video-movie {
position: absolute;
left: 65%;
top: 40px;
}

.star-before{
    color:#f19e38;
    position: absolute;
    left:0;
    top:0;
    overflow: hidden;
}
</style>