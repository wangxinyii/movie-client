<template>
<div class='movieDetail-container'>
  <div>
    <movie-info-index/>
  </div>
  <div>
    <comment-index/>
  </div>
</div>
</template>
<script>
import MovieInfoIndex from '@/views/cinema/movieInfo/index.vue'
import CommentIndex from '@/views/movieDetail/comment/index.vue'
export default {
name: 'MovieDetailIndex',
components: {
  MovieInfoIndex,
  CommentIndex
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