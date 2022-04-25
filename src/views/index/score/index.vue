<template>
  <div class="score-container" style="margin-left: 0px;">
    <div style="margin-bottom: 10px;justify-content: space-between;display: flex;">
      <span style="font-size: 20px;font-weight: bold;color: darkorange;">评分排名</span>
      <a href="javascript:void(0)" style="text-decoration: none;font-size: 15px;margin-right: 25px;color: darkorange;" @click="router('/movie')"><span>查看完整榜单 > </span></a>
    </div>
    <ul class="infinite-list" style="overflow: auto;height: 660px">
      <li class="infinite-list-item">
          <div :xs="1" :sm="1" :md="1" :lg="1"
            v-for="(movie, index) in movieList"
            :key="index"
          >
            <a
              href="javascript:void(0)"
              @click="router('/selectCinema', movie.movieId)"
            >
              <div>
                <el-row>
                  <el-col :span="12"
                    >
                    <el-image style="width: 150px; height: 200px;" :src="movie.moviePicture"></el-image>
                </el-col>
                <el-col :span="12"
                    >
                    <div style="font-size: 20px;font-weight: bold;color: black;margin: 15px;">
                      {{ movie.movieCnName }}
                    </div>
                    <div style="font-size: 15px;font-weight: bold;color: black;margin: 15px;">上映时间:
                      {{ movie.movieReleasedate }}
                    </div>
                    <div style="font-size: 25px;font-weight: bold;color: rgb(255, 0, 85);margin: 15px;">评分:
                      {{ movie.movieScore }} 分
                    </div>
                </el-col>
                </el-row>
                
              </div>
            </a>
          </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { sortMovieByScore } from '@/api/movie'

export default {
  name: "ScoreIndex",
  components: {},
  props: {},
  data() {
    return {
      movieList: [],
      totalCount: 0,
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadMovies();
  },
  mounted() {},
  methods: {
    loadMovies() {
      sortMovieByScore().then((res) => {
        console.log(res);
        this.totalCount = res.data.data.length;
        this.movieList = res.data.data;
      });
    },
    router(val1,val2) {
        if(val2 !== undefined){
          this.$router.push(val1+'?movieId='+val2)
        }else {
          this.$router.push(val1)
        }
      }
  },
};
</script>
<style scoped lang='less'>
</style>