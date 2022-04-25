<template>
<div class='my-order-container'>
  <div class="ordercss" v-for="(order, index) in orderList" :key="index">
    <div style="justify-content: space-between;display: flex; margin-top: 5px;margin-left: 10px;margin-bottom: 5px;margin-right: 10px;">
      <span >订单号：{{ order.orderId }}</span>
      <span>下单时间：{{ order.orderTime }}</span>
    </div>
    <div style="position: relative;display: flex;align-items: center;">
      <div style="display: flex;margin-left: 10px;">
        <div>
          <el-image :src="order.orderMovie.moviePicture" style="width: 60px;"></el-image>
        </div>
        <div style="margin-left: 10px;">
          <div style="font-size: 18px;">{{ order.orderMovie.movieCnName }}</div>
          <div>{{ order.orderSchedule.hall.hallCinema.cinemaName }}</div>
          <div>{{ order.orderSchedule.hall.hallName }} {{ order.orderPosition }}</div>
          <div style="color: black;">{{ order.orderSchedule.scheduleStarttime }}</div>
        </div>
      </div>
      <div style="position: absolute;left: 60%;font-size: 20px;"><span>￥{{ order.orderPrice }}</span></div>
      <div style="position: absolute;left: 80%;">
        <span v-if="order.orderState === 1" style="color: green;font-size: 18px;">支付完成</span>
        <span v-else-if="order.orderState === 0" style="color: red;font-size: 18px;">正在退款中</span>
        <span v-else style="color: rgb(111, 125, 175);font-size: 18px;">已退款</span>
      </div>
    </div>
  </div>
  <!-- 列表分页 -->
  <el-pagination
  style="padding-top: 20px;position: absolute;bottom: 20px;"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page.sync="page"
  :page-sizes="[4, 10, 20, 30]"
  :page-size.sync="pageSize"
  layout="total, sizes, prev, pager, next, jumper"
  :total="totalCount"
  background
>
</el-pagination>
</div>
</template>
<script>
import { findRefundOrderByUserId } from '@/api/order'
export default {
name: 'MyOrderIndex',
components: {},
props: {},
data() {
return {
  orderList: [],
  user: {},
  totalCount: 0,
  pageSize: 4,
  page: 1
}
},
computed: {},
watch: {},
created() {
  this.user = JSON.parse(localStorage.getItem('user'))
  this.loadOrder()
},
mounted() {},
methods: {
  loadOrder() {
    findRefundOrderByUserId(this.user.userId).then(res => {
      const { data } = res.data
      this.totalCount = data.length
    })
    findRefundOrderByUserId(this.user.userId, this.page, this.pageSize).then(res => {
      const { data } = res.data
      this.orderList = data
    })
  },
  handleSizeChange(size) {
      this.pageSize = size
      findRefundOrderByUserId(this.user.userId, this.page, size).then(res => {
        const { data } = res.data
        this.orderList = data
      })
    },
    handleCurrentChange(page) {
      this.page = page
      findRefundOrderByUserId(this.user.userId, page, this.pageSize).then(res => {
        const { data } = res.data
        this.orderList = data
      })
    }
}
}
</script>
<style scoped lang='less'>
.my-order-container{
  position: relative;
  width: 80%;
  margin: 0 auto;
  height: 600px;
}
.ordercss{
  height: 120px;
  border: rgb(186, 184, 184) solid 1px;
  margin-top: 10px;
}
</style>