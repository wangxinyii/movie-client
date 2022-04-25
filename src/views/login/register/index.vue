<template>
<div class='register-container'>
  <el-form ref="register-form" :model="user" label-width="80px" :rules="formRules">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="user.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="userPwd">
            <el-input v-model="user.userPwd" type="password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="userEmail">
            <el-input v-model="user.userEmail"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="userPhone">
            <el-input v-model="user.userPhone"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <div style="display: flex;">
              <el-input v-model="user.code" :disabled="flag"></el-input>
              <el-button type="warning" :disabled="flag" @click="sendCode">发送</el-button>
            </div>
          </el-form-item>
        <div style="margin-left: -45px;">
          <el-form-item>
          <el-button type="primary" @click="onRegister">注册</el-button>
        </el-form-item>
        </div>


        </el-form>
</div>
</template>
<script>
  import { 
    sendCode,
    addUser
     } from '@/api/user'
export default {
name: 'RegisterIndex',
components: {},
props: {},
data() {
return {
  flag: true,
  user: {
        userPhone: '',
        userName: '',
        userPwd: '',
        userEmail: '',
        code: ''
      },
      formRules: {
        userPhone: [
        {validator: (rule, value, callback) => {
          let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
            if(phoneCodeVerification.test(value)){
              this.flag = false
              callback()
            }else {
              callback(new Error('请填写正确的手机号格式'))
              this.user.code = ''
              this.flag = true
            }
            },
          message: '请填写正确的手机号格式',
          trigger: 'change'},
        ],
        userName: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        userPwd: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {pattern: /^\w{5,17}$/, message: '密码长度在6~18之间', trigger: 'change'}
        ],
        userEmail: [
          {required: true, message: '邮箱不能为空', trigger: 'blur'},
          {pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: '邮箱格式不正确', trigger: 'change'}
        ],
        code: [
          {required: true, message: '请填写验证码', trigger: 'blur'},
          {pattern: /^\d+$/, message: '请填写验证码', trigger: 'change'}
        ]
      }
}
},
computed: {},
watch: {},
created() {},
mounted() {},
methods: {
  onRegister() {
      //获取表单数据
      //const user = this.user
      //表单验证
      this.$refs["register-form"].validate(vaild => {
        if(!vaild) {
          return
        }else {
          this.register()
        }
      })
      //处理后端响应结果
      //成功
      //失败
    },
  sendCode() {
    sendCode(this.user.userPhone).then(res => {
      const { code } = res.data
      if(code === 200){
        this.$message.success('已发送，请注意接收')
      }else {
        this.$message.error('发送失败')
      }
    })
  },
  register() {
    addUser(this.user).then(res => {
      const { msg } = res.data
      console.log(res)
      console.log(msg)
      console.log(msg === '验证码错误')
      if(msg === '验证码错误'){
        this.$message.error('验证码错误')
      }else if(msg === '改手机号已被注册'){
        this.$message.error('改手机号已被注册')
      }else {
        this.$message.success('注册成功，请登录')
      }
    })
  }

}
}
</script>
<style scoped lang='less'>
</style>