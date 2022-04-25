<template>
  <div class='movie-container'>
    <search-index @fun='getList'></search-index>
    <div class="movieList" v-if="movieList.length > 0">
      <el-row :gutter="10">
        <el-col :xs="12" :sm="8" :md="6" :lg="4" v-for="(movie, index) in movieList" :key="index">
          <a href="javascript:void(0)" @click="router('/selectCinema',movie.movieId)">
            <el-image style="width: 150px; height: 200px;" :src="movie.moviePicture"></el-image>
          </a>
          <div style="margin-top: 2px;font-weight: bold;margin-bottom: 10px;">
            <span>{{ movie.movieCnName }}</span>
          </div>
          <div style="margin-top: 2px;margin-bottom: 20px;width: 150px;height: 20px;overflow: hidden;margin-left: 40px;">
            <span>主演：{{ movie.movieActor }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="movieList" v-else>
      <span style="font-size: 50px;margin-top: 30px;">未找到符合的电影</span>
    </div>
  </div>
</template>
<script>
import SearchIndex from '@/views/movie/search/index.vue'
export default {
  name: 'MovieIndex',
  components: {
    SearchIndex
  },
  props: {},
  data() {
    return {
      movieList: []
    }
  },
  computed: {},
  watch: {},
  created() {
    this.loadMovie()
  },
  mounted() {},
  methods: {
    getList(data) {
      this.movieList = data
      console.log(this.movieList);
    },
    loadMovie() {
      console.log(this.movieList);
    },
    router(val1,val2) {
        if(val2 !== undefined){
          this.$router.push(val1+'?movieId='+val2)
        }else {
          this.$router.push(val1)
        }
      }
  }
}
</script>
<style scoped lang='less'>
.movieList {
    left: 50%;
    top: 10%;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    align-content: center;
    padding-top: 40px;
}
</style>