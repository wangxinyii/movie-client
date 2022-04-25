<template>
  <nav class="navbar navbar-fixed-top navbar-transparent" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header" >
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="javascript:void(0);" @click="test('/movie')">简易购票</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active" style="margin-left: 60px">
            <a href="javascript:void(0);" @click="test('/')">首页<span class="sr-only">(current)</span></a>
          </li>
          <li style="margin-left: 60px"><a href="javascript:void(0);" @click="test('/movie')">电影</a></li>
        </ul>
        <form class="navbar-form navbar-left" style="margin-left: 450px">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="请输入关键词" />
          </div>
          <button type="submit" class="btn btn-default">搜 索</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Dropdown <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a href="javascript:void(0);" @click="handoff">切换账号</a></li>
              <li><a href="javascript:void(0);" @click="logout">退出</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="javascript:void(0);" @click="router('/myInfo')">个人中心</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>
<script>
export default {
name: 'HeaderIndex',
components: {},
props: {},
data() {
return {}
},
computed: {},
watch: {},
created() {},
mounted() {},
methods: {
  router(val) {
    console.log(val);
  },
  test(val) {
    this.$router.push(val)
  },
  handoff() {
    localStorage.removeItem('token')
    this.$router.push('/login')
  },
  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.$router.push('/')
    this.$message.success('已退出')
  },
  router(val) {
    this.$router.push(val)

  }
}
}
</script>
<style scoped lang='less'>

</style>