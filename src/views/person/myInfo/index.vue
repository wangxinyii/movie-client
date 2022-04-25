<template>
    <div class="my-info-container">
        <el-card class="box-card">

            <el-row>
                <el-col :span="16">
                    <el-form
                            ref="form"
                            :model="user"
                            label-width="80px"
                            :rules="formRules"
                    >
                      <el-form-item label="手机号">
                        <el-input v-model="user.userPhone" disabled></el-input>
                      </el-form-item>
                        <el-form-item label="用户名">
                            <el-input v-model="user.userName"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="user.userPwd"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="user.userEmail"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button
                                    type="primary"
                                    :disabled="isDisabled"
                                    @click="onUpdateInfo"
                            >保存</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :offset="2" :span="4">
                        <el-avatar
                                shape="square"
                                :size="200"
                                fit="cover"
                                :src="userHeadimg"
                        ></el-avatar>
                </el-col>
            </el-row>
            <el-dialog
                    title="修改头像"
                    :visible.sync="dialogVisible"
                    append-to-body
                    @opened="onDialogOpened"
                    @closed="onDialogClosed"
            >
                <div class="preview-image-wrap">
                    <img
                            class="preview-image"
                            :src="previewPhoto"
                            ref="preview-image"
                    >
                </div>

                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button
                            type="primary"
                            :loading="clickLoading"
                            @click="onUpdatePhoto"
                    >确 定</el-button>
                </span>
            </el-dialog>
        </el-card>
    </div>
</template>

<script>
import { 
  updateUserInfo,
  findUserById
   } from '@/api/user'
export default {
  name: 'MyInfoIndex',
  components: {},
  props: {},
  data() {
    return {
      user: {
       userId: null, 
        userPhone: '',
        userName: '',
        userPwd: '',
        userEmail: '',
        
      },
      userHeadimg: '',
      dialogVisible: false, //控制上传图片裁切预览
      previewImage: '', // 头像链接
      cropper: null, // 裁切对象
      updatePhotoLoading: false, // 上传头像 loading
      updateProfileLoading: false // 保存基本信息 loading
    }
  },
  computed: {},
  watch: {},
  created() {
    const user1 = JSON.parse(localStorage.getItem('user'))
    this.user.userName = user1.userName
    this.user.userPwd = user1.userPwd
    this.user.userEmail = user1.userEmail
    this.user.userPhone = user1.userPhone
    this.user.userId = user1.userId
    this.userHeadimg = user1.userHeadimg
    console.log(this.user)
  },
  mounted() {},
  methods: {
    onUpdateUser() {
      //console.log('onUpdateUser!')
      this.updateProfileLoading = true
      updateUserprofile(this.user).then(res => {
        this.updateProfileLoading = false
        globalBus.$emit('update-user',this.user)
      })

    },
    onFileChange() {
      const file = this.$refs.file
      const blobData = window.URL.createObjectURL(file.files[0]);
      this.previewImage = blobData
      this.dialogVisible = true
      this.$refs.file.value = ''
    },
    onDialogOpened() {
      //获取图片 DOM 节点
      const image = this.$refs['preview-image']
      //初始化裁切器
      this.cropper = new Cropper (image, {
        aspectRatio: 1,
        //dragMode: 'none',
        //cropBoxResizable: false
        //当你移动裁切器的时候会调用 crop 方法
        // crop(event) {
        //   console.log(event.detail.x);
        //   console.log(event.detail.y);
        //   console.log(event.detail.width);
        //   console.log(event.detail.height);
        //   console.log(event.detail.rotate);
        //   console.log(event.detail.scalex);
        //   console.log(event.detail.scaley);
        // },
      });
    },
    onDialogClosed() {
      this.cropper.destroy()
    },
    onUpdatePhoto() {
      this.updatePhotoLoading = true
      //获取截取图片对象
      this.cropper.getCroppedCanvas().toBlob(file => {
        //console.log(file);
        const fd = new FormData()
        fd.append('photo', file)
        //请求提交
        //请求更新用户头像
        updateUserPhoto(fd).then(res => {
          //关闭对话框
          this.dialogVisible = false
          //更新视图展示
          this.user.photo = window.URL.createObjectURL(file)
          //this.user.photo = res.data.data.photo
          this.updatePhotoLoading = false
          this.$message({
            type: 'success',
            message: '上传成功'
          })
          globalBus.$emit('update-user',this.user)
        })
      })
    },
    onUpdateInfo() {
      updateUserInfo(this.user).then(res => {
        findUserById(this.user.userId).then(res => {
          console.log(res)
          const { data } = res.data
          const { code } = res.data
          this.user = data
          if( code === 200){
            localStorage.setItem('user', JSON.stringify(data))
            this.$message({
            type: 'success',
            message: '修改成功'
          })
          }
        })
      })
    }
  }
}
</script>
<style scoped>
.preview-image {
    display: block;

    max-width: 100%;

    height: 200px;
}

</style>
