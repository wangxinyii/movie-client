<template>
  <div class="login-child-container">
    <el-form ref="login-form" :model="user" :rules="formRules" label-width="80px">
      <el-form-item label="手机号" prop="userPhone">
        <el-input v-model="user.userPhone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="userPwd">
        <el-input v-model="user.userPwd" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <div style="margin-left: -45px;">
        <el-form-item prop="agree">
        <el-checkbox v-model="user.agree">我已阅读并同意与用户协议和隐私条款</el-checkbox>
      </el-form-item>
      </div>
      <div style="margin-left: -45px;">
        <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
      </el-form-item>
      </div>
      <div style="margin-left: -45px;margin-top: 80px;">
        <el-form-item>
        <el-button type="primary" @click="router('/faceLogin')">人脸登录</el-button>
      </el-form-item>
      </div>
      </el-form>
  </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  name: "LoginChildIndex",
  components: {},
  props: {},
  data() {
    return {
      user: {
        userPhone: "",
        userPwd: "",
        agree: false
      },
      user1: {},
      formRules: {
        userPhone: [
          {required: true, message: '请输入手机号', trigger: 'change'},
          {pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'change'},
        ],
        userPwd: [
          {required: true, message: '请输入密码', trigger: 'change'},
          {pattern: /^\w{5,17}$/, message: '长度在6~18之间', trigger: 'change'},
        ],
        agree: [
          {validator: (rule, value, callback) => {
            if(value){
              callback()
            }else {
              callback(new Error('请同意用户协议'))

            }
            },
          message: '请勾选同意用户协议',
          trigger: 'change'},
        ]
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onLogin() {
      //获取表单数据
      //const user = this.user
      //表单验证
      this.$refs["login-form"].validate(vaild => {
        if(!vaild) {
          return
        }else {
          this.login()
        }
      })
      //处理后端响应结果
      //成功
      //失败
    },
    login() {
      login(this.user.userPhone, this.user.userPwd).then(res => {
        console.log(res)
        const { code } = res.data
        console.log(code)
        if(code === 200) {
          localStorage.setItem('token', res.data.data.token)
          localStorage.setItem('user', JSON.stringify(res.data.data))
          this.user1 = res.data.data
          this.$message.success('登录成功')
          this.$router.go(-1);//返回上一层
        } else {
          this.$message.error('手机号或密码错误')
        }
        
      })
    },
    router(val1) {
      this.$router.push(val1)
    }
  },
};
</script>
<style scoped lang='less'>
</style>