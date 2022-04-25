<template>
<div class='step-container'>
  <el-steps :active="active" align-center>
  <el-step title="选择影片场次"></el-step>
  <el-step title="选择座位"></el-step>
  <el-step title="付款"></el-step>
  <el-step title="取票观影"></el-step>
</el-steps>
</div>
</template>
<script>
export default {
name: 'StepIndex',
components: {},
props: ['active'],
data() {
return {

}
},
computed: {},
watch: {},
created() {},
mounted() {},
methods: {}
}
</script>
<style scoped lang='less'>
.step-container{
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}
</style>