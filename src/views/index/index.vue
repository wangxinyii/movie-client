<template>
    <div class="container-fluid">
	<div class="row clearfix">
		<div class="col-md-12 column">
			<div class="carousel slide" id="carousel-126451">
				<ol class="carousel-indicators">
					<li class="active" data-slide-to="0" data-target="#carousel-126451">
					</li>
					<li data-slide-to="1" data-target="#carousel-126451">
					</li>
					<li data-slide-to="2" data-target="#carousel-126451">
					</li>
				</ol>
				<div class="carousel-inner">
					<div class="item active">
						<img alt="" style="width: 1400;height: 500px;" src="http://r9uqwduuj.hd-bkt.clouddn.com/lhy.jpg" />
						<div class="carousel-caption">
						</div>
					</div>
					<div class="item">
						<img alt="" src="http://r9uqwduuj.hd-bkt.clouddn.com/%E7%8B%82%E7%83%AD%E8%A1%8C%E5%8A%A8.jpg" />
					</div>
					<div class="item">
						<img alt="" src="http://r9uqwduuj.hd-bkt.clouddn.com/tt3.jpg" />
						<div class="carousel-caption">
						</div>
					</div>
				</div> <a class="left carousel-control" href="#carousel-126451" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-126451" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
			</div>
			<div class="row clearfix" style="margin-top:35px;margin-left: 1px;margin-right: 1px;">
				<div class="col-md-9 column">
					<hit-index/>
				</div>
				<div class="col-md-3 column">
					<score-index/>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import HitIndex from '@/views/index/hit/index.vue'
import ScoreIndex from '@/views/index/score/index.vue'

export default {
  name: "Index",
  components: {
		HitIndex,
		ScoreIndex
	},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='less'>
  .carousel .item {
  height: 500px;
  background-color: #777;
}
.carousel-inner > .item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 500px;
}
</style>