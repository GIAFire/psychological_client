<template>
    <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon label-width="auto"
        class="demo-ruleForm">
        <el-form-item label="视频名称" prop="pass">
            <el-input v-model="ruleForm.videoName" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="选择文件" prop="myFile" v-model="ruleForm.videoUrl">
            <el-upload name="myFile" :on-success="videoSuccess" class="upload-demo" drag action="uploudVideo" multiple>
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text" style="width: 330px;">
                    点击上传视频
                </div>
            </el-upload>
        </el-form-item>
        <el-form-item label="选择封面" prop="myImg" v-model="ruleForm.imageUrl">
            <el-upload class="avatar-uploader" action="uploudImg" name="myImg" :show-file-list="false"
                :on-success="imgSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                    <Plus />
                </el-icon>
            </el-upload>
        </el-form-item>
        <el-form-item label="序号" prop="age">
            <el-input v-model="ruleForm.sort" />
        </el-form-item>
        <el-form-item >
            <el-button type="primary" @click="submitForm(ruleFormRef)">上传视频</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { addVideo } from '@/apis/adminVideo'


const ruleFormRef = ref<FormInstance>()
const imageUrl = ref('')
const ruleForm = reactive({
    videoName: '',
    videoUrl: '',
    imageUrl: '',
    sort: ''

})


const imgSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    ruleForm.imageUrl = response
    console.log(ruleForm.imageUrl);

    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const videoSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    ruleForm.videoUrl = response
    console.log(ruleForm.videoUrl);
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage('上传文件必须为 jpeg 格式!')
        return false
    }
    return true
}


const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            const res = addVideo(ruleForm.videoName, ruleForm.videoUrl, ruleForm.imageUrl, ruleForm.sort)
            res.then(respone => {
                if (respone.data.code === '0000') {
                    alert('视频上传成功!')
                    window.location.reload();
                } else {
                    alert('视频上传失败!')
                }
            })
        } else {
            ElMessage('提交错误!')
            return false
        }
    })
}
</script>
  

<style scoped>
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>