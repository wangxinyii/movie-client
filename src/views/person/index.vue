<template>
<div class='person-container'>
  <el-container>
  <el-header>
    <div style="text-align: center;">
      <div><h1>个人中心</h1>
      </div>
    </div>
    
  </el-header>
  <el-divider></el-divider>
  <el-container style="height: 720px;margin-top: -23px;">
    <el-aside style="width: 210px;">
      <el-menu
      style="width: 200px;height: 712px;"
      :default-active="active"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router="true"
      >
      <el-menu-item index="myOrder">
        <i class="el-icon-tickets"></i>
        <span slot="title">我的订单</span>
      </el-menu-item>
      <el-menu-item index="myInfo">
        <i class="el-icon-user-solid"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
      <div class="main">
        <router-view></router-view>
      </div>
      
    </el-main>
  </el-container>
</el-container>
</div>
</template>
<script>
export default {
name: 'PersonIndex',
components: {},
props: {},
data() {
return {
  active: 'myOrder',
}
},
computed: {},
watch: {},
created() {
  let sign = this.$route.path
  const string = sign.split('/')
  sign = string[1]
  this.active = sign
  
},
mounted() {},
methods: {}
}
</script>
<style scoped lang='less'>
.person-container{
  margin: 0 auto;
  margin-top: 40px;
  width: 60%;
  height: 800px;
  border: rgb(232, 226, 226) solid 1px;

}
.main{
  margin-top: 50px;
  
}
</style>