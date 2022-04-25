<template>
<div class='buy-seat-container'>
  <div class="big-div">
    <div style="width: 75%;text-align: center;">
      <img src="../../assets/icon-screen.png" style="width: 100%;"/>
      <div style="color: rgb(234, 89, 45);">荧屏中心</div>
    </div>
  </div>
  <div class="big-div">
    <div style="width: 100%;">
      <seat-index/>
    </div>
    <!-- <div style="background-color: rgba(250, 250, 249, 0.892);width: 25%;">
      <movie-info-index/>
    </div> -->
  </div>
</div>
</template>
<script>
  import SeatIndex from '@/views/buySeat/seat/index.vue'
  import MovieInfoIndex from '@/views/buySeat/movieInfo/index.vue'
export default {
name: 'BuySeatIndex',
components: {
  SeatIndex,
  MovieInfoIndex
},
props: {},
data() {
return {}
},
computed: {},
watch: {},
created() {},
mounted() {},
methods: {}
}
</script>
<style scoped lang='less'>
  .buy-seat-container {
    margin-top: 30px;
  }
  .big-div {
    display: flex;
    width: 70%;
    margin: 0 auto;
  }
</style>