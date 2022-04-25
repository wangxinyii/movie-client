<template>
  <div style="margin-left: 10px;">
    <div style="margin-bottom: 10px;justify-content: space-between;display: flex;">
      <span style="font-size: 20px;font-weight: bold;color: cornflowerblue;">正在热映：{{ totalCount }}</span>
      <a href="javascript:void(0)" style="text-decoration: none;font-size: 20px;font-weight: bold;margin-right: 60px;color: cornflowerblue;" @click="router('/movie')"><span>全部 > </span></a>
    </div>
    <el-row :gutter="10">
      <el-col :xs="12" :sm="8" :md="6" :lg="4" v-for="(movie, index) in movieList" :key="index">
        <a href="javascript:void(0)" @click="router('/selectCinema',movie.movieId)">
          <el-image style="width: 150px; height: 200px;" :src="movie.moviePicture"></el-image>
        </a>
        <div style="margin-top: 2px;font-weight: bold;margin-bottom: 20px;">
          <span>{{ movie.movieCnName }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {
    findAllMovies1
  } from '@/api/movie'

  export default {
    name: 'HitIndex',
    components: {},
    props: {},
    data() {
      return {
        movieList: [],
        totalCount: 0
      }
    },
    computed: {},
    watch: {},
    created() {
      this.loadMovies()
    },
    mounted() {},
    methods: {
      loadMovies() {
        findAllMovies1({
          page: null,
          limit: null
        }).then(res => {
          console.log(res)
          this.totalCount = res.data.data.length
        })
        findAllMovies1({
          page: 1,
          limit: 18
        }).then(res => {
          this.movieList = res.data.data
        })
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
</style>