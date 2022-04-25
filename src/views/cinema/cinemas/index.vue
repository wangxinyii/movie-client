<template>
    <div class="cinemas-container" style="background-color: rgb(253, 250, 250);border:none">
      <el-container class="layout-container">
        <el-aside width="200px"
          style="background-color: rgb(253, 249, 249);text-align: center;align-items: center;font-size: 17px;">
          <div style="margin: 30px;">日期</div>
          <div style="margin: 30px;">影院</div>
        </el-aside>
        <el-main style="background-color: rgb(251, 249, 249);">
          <div style="margin-bottom: 13px;" class="ai-tab-change">
            <el-radio-group v-model="form.date" @change="search">
              <el-radio-button style="margin-right: 20px;" :key="3" :label=0>
                <date-index @date="getDate" :val="0" />
              </el-radio-button>
              <el-radio-button style="margin-right: 20px;" v-for="(val, index) in 2" :key="index" :label="val">
                <date-index @date="getDate" :val="val" />
              </el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-bottom: 13px;">
            <el-radio-group v-model="form.cinema" @change="search">
              <el-radio-button style="margin-right: 20px;" key="0" :label=0>全部</el-radio-button>
              <el-radio-button style="margin-right: 20px;" v-for="(cinema, index) in cinemaList" :key="index+'a'"
                :label="cinema.cinemaId">{{ cinema.cinemaName }}</el-radio-button>
            </el-radio-group>
          </div>
        </el-main>
      </el-container>
  </div>
  
</template>
<script>
  import {
    findAllCinemas,
    findScheduleByCineamIdAndMovieId
  } from '@/api/cinema'
  import DateIndex from '@/views/cinema/date/index.vue'
  import eventBus from '@/api/EventBus'
  export default {
    name: 'CinemasIndex',
    components: {
      DateIndex
    },
    props: {},
    data() {
      return {
        form: {
          date: 0,
          cinema: 0
        },
        cinemaList: [],
        buyCinemaList: [],
        movieId: 0,
        dateString: '哈哈',
        date: ''
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
        this.movieId = this.$route.query.movieId
        findAllCinemas().then(res => {
          this.cinemaList = res.data.data
        })
        let date = new Date();
        let year = date.getFullYear(); // 年
        let month = date.getMonth() + 1; // 月
        let day = date.getDate(); // 日
        if(month < 10){
          this.dateString = this.dateString + ',' + `${year}-${'0'+month}-${day}`
        }else {
          this.dateString = this.dateString + ',' + `${year}-${month}-${day}`
        }
        this.search()
        this.dateString = '哈哈'
      },
      search() {
        if (this.form.date === 0) {
          let strings = this.dateString.split(',')
          let string = strings[1]
          this.date = string
        }
        if (this.form.date === 1) {
          let strings = this.dateString.split(',')
          let string = strings[2]
          this.date = string
        }
        if (this.form.date === 2) {
          let strings = this.dateString.split(',')
          let string = strings[3]
          this.date = string
        }
        findScheduleByCineamIdAndMovieId(this.$route.query.movieId, this.form.cinema, this.date).then(res => {
          console.log(res)
          this.buyCinemaList = res.data.data
          // 通过事件总线发送消息
          eventBus.$emit('buyCinemaList',this.buyCinemaList)
          eventBus.$emit('cinemaId',this.form.cinema)
          eventBus.$emit('dateStatus',this.form.date)
        })
      },
      getDate(dateString) {
        this.dateString = this.dateString + ',' + dateString
      }
    }
  }
</script>
<style scoped lang='less'>
  .cinemas-container {
    position: relative;
    margin-top: 500px;
    background: #eee;
    border: 1px solid #ccc;
    width: 80%;
    top: 30px;
    margin: 0 auto;
  }


  ::v-deep.el-radio-button {
    margin-right: 15px;
    border-radius: 4px;

    .el-radio-button__inner {
      background: #F7F8FA;
      color: rgb(139, 130, 127);
      border: 0;
      border-radius: 10px;
      font-weight: bold;
    }

    .el-radio-button__orig-radio:checked+.el-radio-button__inner {
      color: #ec0c0c;
      background-color: #efd4d6;
      border-color: #f63;
      box-shadow: -1px 0 0 0 #f63;
    }
  }
</style>