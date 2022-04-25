<template>
<div class="search-container" style="background-color: rgb(253, 250, 250);border:none">
      <el-container class="layout-container">
        <el-aside width="200px" style="background-color: rgb(253, 249, 249);text-align: center;align-items: center;font-size: 17px;">
         <div style="margin: 30px;">排序</div>
         <div style="margin: 30px;">地区</div>
         <div style="margin: 30px;">类型</div>
         <div style="margin: 30px;">年份</div> 
        </el-aside>
        <el-main style="background-color: rgb(251, 249, 249);">
          <div style="margin-bottom: 13px;" class="ai-tab-change">
            <el-radio-group v-model="form.order" @change="search">
            <el-radio-button style="margin-right: 20px;" v-for="(order, index) in orders" :key="index" :label="order"></el-radio-button>
          </el-radio-group>
          </div>
          <div style="margin-bottom: 13px;">
            <el-radio-group v-model="form.area" @change="search">
            <el-radio-button style="margin-right: 20px;" v-for="(country, index) in movieCountrys" :key="index" :label="country"></el-radio-button>
          </el-radio-group>
          </div>
          <div style="margin-bottom: 13px;">
            <el-radio-group v-model="form.type" @change="search">
            <el-radio-button style="margin-right: 20px;" v-for="(type, index) in types" :key="index" :label="type"></el-radio-button>
          </el-radio-group>
          </div>
          <div>
            <el-radio-group v-model="form.year" @change="search">
            <el-radio-button style="margin-right: 20px;" v-for="(year, index) in years" :key="index" :label="year"></el-radio-button>
          </el-radio-group>
          </div>
        </el-main>
      </el-container>
    </div>
</template>
<script>
import { findMoviesLikeType } from '@/api/movie'
export default {
name: 'SearchIndex',
components: {},
props: {},
data() {
  return {
    movieCountrys: ['全部', '中国大陆', '中国香港', '韩国', '美国', '日本', '英国', '欧洲', '法国', '德国', '印度', '其他'],
    orders: ['全部' ,'最热', '最新', '高分好评'],
    types: ['全部' ,'武侠','古装','动作','爱情','剧情','喜剧','家庭','伦理','恐怖','惊悚','冒险','犯罪','悬疑'],
    years: ['全部', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'],
    form: {
      order: '全部',
      type: '全部',
      area: '全部',
      year: '全部',
    },
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
  loadMovie() {
    findMoviesLikeType(this.form).then(res => {
      this.movieList = res.data.data
      this.$emit('fun', this.movieList)
    })
  },
  search() {
    findMoviesLikeType(this.form).then(res => {
      this.movieList = res.data.data
      this.$emit('fun', this.movieList)
    })
  }
}
}
</script>
<style scoped lang='less'>
.search-container {
    background: #eee;
    border: 1px solid #ccc;
    width: 80%;
    margin: 0 auto;
}


::v-deep.el-radio-button{
  margin-right: 15px;
  border-radius:4px;
  .el-radio-button__inner {
    background: #F7F8FA;
    color: rgb(139, 130, 127);
    border: 0;
    border-radius: 10px;
    font-weight: bold;
  }
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      color: #ec0c0c;
      background-color: #efd4d6;
      border-color: #f63;
      box-shadow: -1px 0 0 0 #f63;
  }
}
</style>