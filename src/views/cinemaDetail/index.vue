<template>
<div class='cinemaDetail-container'>
  <header-index/>
  <floor-index/>
</div>
</template>
<script>
import HeaderIndex from '@/views/cinemaDetail/head/index.vue'
import FloorIndex from '@/views/cinemaDetail/floor/index.vue'
export default {
name: 'CinemaDetailIndex',
components: {
  HeaderIndex,
  FloorIndex
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
</style>