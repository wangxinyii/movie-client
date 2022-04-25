<template>
<div class='face-login-container'>
  <div style="text-align: center;">
	<p ref="flag" class="tishi"></p>
</div>
<div class="getface">
	<video ref="video" width="400px" height="400px" autoplay="autoplay"></video>
	<canvas ref="canvas" width="400px" height="400px" style="display: none;"></canvas>
	<img ref="imgTag" src="" alt="imgTag" style="display: none;">
</div>
</div>
</template>
<script>
import { faceLogin } from '@/api/user'
import { 
  findUserById
   } from '@/api/user'
export default {
name: 'FaceLoginIndex',
components: {},
props: {},
data() {
return {
  number: 0,
	sign: 0,
	mediaStreamTrack: null
}
},
computed: {},
watch: {},
created() {},
mounted() {
  this.openMedia()
	setInterval(() => {
			this.tishi()
	}, 1000)
	setInterval(() => {
			this.tishi2()
	}, 3000)
	
	setInterval(() => {
		if(this.sign === 0){
			this.takePhoto()
		}else{
			this.closeMedia()
	}
	}, 5000)
		
	
	//setTimeout(this.takePhoto(),10000);
},
beforeDestroy() {
	this.closeMedia()
},
methods: {
  first(){
		openMedia();
	},
  tishi(){
		//this.$refs.flag.html("正在打开摄像头")
	},
  tishi2(){
		//this.$refs.flag.html("请正视摄像头")
	},
  tishi3(){
		window.location.href="/";
	},
  openMedia() {
		let constraints = {
			video: { width: 500, height: 500 },
			audio: false
		};
		//获得video摄像头
		let video = this.$refs.video
		let promise = navigator.mediaDevices.getUserMedia(constraints);
		promise.then((mediaStream) => {
		this.mediaStreamTrack = typeof mediaStream.stop === 'function' ? mediaStream : mediaStream.getTracks()[1];
			video.srcObject = mediaStream;
			video.play();
		});
	},

	// 拍照
	takePhoto() {
		//获得Canvas对象
		//number++;
		let video = this.$refs.video
		let canvas = this.$refs.canvas
		let ctx = canvas.getContext('2d');
		ctx.drawImage(video, 0, 0, 500, 500);
		// toDataURL  ---  可传入'image/png'---默认, 'image/jpeg'
		let img = this.$refs.canvas.toDataURL();
		// 这里的img就是得到的图片
		// console.log('img-----', img);
		this.$refs.imgTag.src=img;
		console.log(img)
		//this.$refs.html("正在识别");
		faceLogin({
			imagePath: img
		}).then(res => {
			const { code } = res.data
			const { msg }  = res.data
			console.log(msg)
			if(code === 200) {
				findUserById(1).then(res => {
          console.log(res)
          const { data } = res.data
          const { code } = res.data
          this.user = data
					
          if( msg === '100'){
						this.$message.success('识别成功')
						this.sign = 1
						localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data))
						this.$router.go(-2);//返回上一层
          }
        })
			}else{
				this.$message.error('识别失败,请重试')
			}
		})
		this.mediaStreamTrack.stop();
		/* $.ajax({
			url:"/login/searchface",    //请求的url地址
			dataType:"json",   //返回格式为json
			async:true,//请求是否异步，默认为异步，这也是ajax重要特性
			// contentType:"application/json",
			data: {"imagebast64": img} , //参数值
			type: "POST", //请求方式
			success: function (data) {
				console.log(data);
				console.log("1324556");
				console.log(data);
				if(!data){
					$("#flag").html("识别失败，请保持人像处于框内 2秒后重新识别");
					if(number<3){
						setTimeout("takePhoto()","3000");
					}else {
						$("#flag").html("识别失败请使用账号密码登录 三秒后回到主页");
						setTimeout("tishi3()","3000");
					}
					window.location.href="/"
				}else {
					window.location.href="/login/facesucceed"
					console.log(data);
				}
			}
		})
 */
	},

	// 关闭摄像头
	closeMedia() {
		this.mediaStreamTrack.stop();
	}
}
}

</script>
<style scoped lang='less'>
.getface{
		position: absolute;
		top: 20%;
		left: 35%;
		
	}
	.tishi{
		font-size: 20px;
	}
</style>