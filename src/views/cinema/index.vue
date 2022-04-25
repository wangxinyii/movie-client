<template>
<div class='cinema-container'>
  <div>
    <movie-info-index :score='true'/>
  </div>
  <div>
    <cinemas-index/>
  </div>
  <div style="margin-top: 30px;">
    <cinema-floor-index/>
  </div>
</div>
</template>
<script>
import MovieInfoIndex from '@/views/cinema/movieInfo/index.vue'
import CinemasIndex from '@/views/cinema/cinemas/index.vue'
import CinemaFloorIndex from '@/views/cinema/floor/index.vue'
export default {
name: 'CinemaIndex',
components: {
  MovieInfoIndex,
  CinemasIndex,
  CinemaFloorIndex
},
props: {},
data() {
return {
  movie: {},
  movieId
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
  }
}
}
</script>
<style scoped lang='less'>

</style>