<template>
	<div class="login-container">
		<div class="login-div">
			<div class="container" style="width: 310px;">
				<div class="row clearfix" style="margin-top: 20px;font-size: 16px;">
					<div class="col-md-12 column">
						<div class="tabbable" id="tabs-510556">
							<ul class="nav nav-tabs">
								<li class="active">
									 <a href="#login" data-toggle="tab">登录</a>
								</li>
								<li>
									 <a href="#register" data-toggle="tab">注册</a>
								</li>
							</ul>
							<div class="tab-content" style="margin-right: 10px;margin-top: 30px;text-align: center;margin-left: -20px;">
								<div class="tab-pane active" id="login">
									<login-child-index/>
								</div>
								<div class="tab-pane" id="register">
									<register-index/>
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
	import LoginChildIndex from '@/views/login/loginChild/index.vue'
	import RegisterIndex from '@/views/login/register/index.vue'
	export default {
		name: 'LoginIndex',
		components: {
			LoginChildIndex,
			RegisterIndex
		},
		props: {},
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
	.login-container {
		background-image: url('https://tse1-mm.cn.bing.net/th/id/R-C.83cf02f77a0ce65f18c156969b365a7a?rik=cOWANffs%2fii0Hw&riu=http%3a%2f%2fup.36992.com%2fpic%2fc4%2f0a%2fff%2fc40aff7c48d2a986b9880f1b63e55653.jpg&ehk=VMvYXmx3qkHLnZ8HHqQ61ez8rUAvkHnp90xWafcYcVE%3d&risl=&pid=ImgRaw&r=0');
		width: 100%;
		height: 100%;
		position: fixed;
		background-size: 100%;
	}
	.login-div {
		position: absolute;
		top:18%;
		left: 63%;
		width: 350px;
		height: 600px;
		background-color: aliceblue;
	}
</style>