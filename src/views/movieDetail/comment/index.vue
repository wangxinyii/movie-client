<template>
<div class='comment-container'>
  <div class="container">
    <div class="row clearfix">
      <div class="col-md-12 column">
        <div class="tabbable" id="tabs-247822">
          <ul class="nav nav-tabs">
            <li class="active">
               <a href="#detail" data-toggle="tab" style="color: red;font-size: 20px;">介绍</a>
            </li>
            <li>
               <a href="#comment" data-toggle="tab" style="color: red;font-size: 20px;">热门短评</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="detail" style="margin-top: 40px;">
              <div>
                <h3>剧情简介</h3>
              </div>
              <div style="margin-top: 15px;margin-bottom: 40px;">
                <p>{{ movie.movieDetail }}</p>
              </div>
              <div>
                <h3>演职人员</h3>
              </div>
              <div style="display: flex;justify-content: space-between;">
                <div style="margin-left: 20px;">
                  <div>
                    <h4>导演</h4>
                  </div>
                  <div style="margin-left: 40px;">
                    <p>{{ movie.movieDirector }}</p>
                  </div>
                </div>
                <div style="margin-right: 200px;">
                  <div>
                    <h4>演员</h4>
                  </div>
                  <div style="margin-left: 40px;">
                    <p>{{ movie.movieActor }}</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="tab-pane" id="comment">
              <div style="position: absolute;right: 0;top: 0;">
                <el-button style="background-color: rgb(208, 238, 198);" icon="el-icon-edit" circle>评论</el-button>
              </div>
              <div v-if="commentList.length > 0">
                <div v-for="(comment, index) in commentList" :key="index">
                <div style="display: flex;margin: 25px;">
                  <div style="margin-top: 15px;">
                    <el-avatar :src="comment.commentUser.userHeadimg"></el-avatar>
                  </div>
                  <div style="margin-left: 20px;">
                    <span style="color: #66686b;">{{ comment.commentUser.userName }}</span>
                    <div style="margin-top: 10px;font-size: 15px;">
                      <span>{{ comment.commentContent }}</span>
                    </div>
                    <div style="margin-top: 20px;color: #a8a9ab;">
                      <span>{{ comment.commentTime }}</span>
                    </div>
                  </div>
                </div>
                <div style="margin-left: 80px;">
                  <el-divider></el-divider>
                </div>
                
              </div>
              </div>
              <div v-else style="text-align: center;margin-top: 80px;">
                <h2>暂无相关评论</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { findMovieById } from '@/api/movie'
import { 
  findAllCommentsPageByMovieIdCount,
  findCommentsByMovieId
} from '@/api/comment'
export default {
name: 'CommentIndex',
components: {},
props: {},
data() {
return {
  activeName: 'first',
  movieId: null,
  movie: {},
  totalCount: 0,
  page: 1,
  limit: 10,
  commentList: []
}
},
computed: {},
watch: {},
created() {
  this.movieId = this.$route.query.movieId
  this.loadMovieDetail()
},
mounted() {},
methods: {
  handleClick(tab, event) {
    console.log(tab, event);
  },
  loadMovieDetail() {
    findMovieById(this.movieId).then(res => {
      this.movie = res.data.data
    })
    findAllCommentsPageByMovieIdCount(this.movieId).then(res => {
      this.totalCount = res.data.data
    })
    findCommentsByMovieId(this.movieId).then(res => {
      console.log(res)
      this.commentList = res.data.data
    })
  }
  }
}
</script>
<style scoped lang='less'>
.comment-container {
    position: relative;
    margin-top: 500px;
    width: 80%;
    top: 80px;
    margin: 0 auto;
  }

  .asset-detail-tabs {
		min-height: 400px;
		margin: 20px 0px;
		background-color: #fff;
		
		/* //修改tab-item样式 */
		.el-tabs__item {
			width: 166px;
			height: 47px;
			line-height: 47px;
			text-align: center;
			font-size: 16px;
			font-weight: bold;
		}
		
		/* // 修改nav背景色 */
		.el-tabs__nav-scroll {
			background-color: #ECEEF3;
		}
		
		/* //去除顶部线 */
		.el-tabs--card>.el-tabs__header .el-tabs__nav {
			border: none;
		}
		
		/* //内容区 */
		.el-tabs__content {
			padding: 10px;
		}
		
		/* //选中时样式设置 */
		.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
			background-color: rgba(255, 255, 255, 100);
			color: rgba(97, 154, 241, 100);
		}
		
	}
</style>