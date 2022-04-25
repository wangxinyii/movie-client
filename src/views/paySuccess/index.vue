<template>
<div class='pay-success-container'>
  <div style="margin-top: 80px;">
      <step-index :active="4" />
    </div>
    <div style="text-align: center;background-color: rgb(246, 249, 249);width: 90%;margin: 0 auto;margin-top: 50px;">
      <div  style="padding-bottom: 40px;">
        <i class="el-icon-success" style="font-size: 250px;color: rgb(134, 198, 88);margin-top: 70px;margin-bottom: 20px;"></i>
        <div style="font-size: 30px;color: rgb(134, 198, 88);margin-bottom: 50px;">
          <span>已完成支付</span>
          </div>
      </div>
    </div>
    <div style="width: 90%;margin: 0 auto;position: relative;">
      <div style="position: absolute;right: 0;top: 5px;">
        <div>
          <i class="el-icon-warning" style="font-size: 18px;color: rgb(246, 169, 53);"></i>
          <span style="font-size: 15px;margin-left: 4px;">该页面关闭后可以在
            <a href="javascript:void(0)" @click="router('/personage')" style="color: rgb(230, 158, 49);">个人订单</a>
            页面查看订单信息</span>
        </div>
        <div style="position: relative;">
          <el-button round style="width: 200px;position: absolute;right: 20px;top: 40px;" @click="router('/myOrder')"
          >返回个人订单</el-button
        >
        </div>
      </div>
    </div>
</div>
</template>
<script>
import StepIndex from "@/views/pay/step/index.vue";
export default {
name: 'PaySuccessIndex',
components: {
  StepIndex,
},
props: {},
data() {
return {}
},
computed: {},
watch: {},
created() {},
mounted() {},
methods: {
  router(val1) {
        this.$router.push(val1)
      },
}
}
</script>
<style scoped lang='less'>
.pay-success-container {
  width: 80%;
  margin: 0 auto;
}
</style>