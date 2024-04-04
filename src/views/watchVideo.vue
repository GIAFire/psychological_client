<template>
    <div v-if="isPlaying" class="btn">
        <el-button type="primary" @click="stopVideo" class="back-button">返回视频列表</el-button>
    </div>

    <div class="centered-container">
        <video v-if="isPlaying" :src="currentVideoUrl" controls autoplay style="max-width: 880px;"></video>
        <div v-else class="card-container">
            <el-card @click="playVideo(item)" class="custom-card" v-for="item in data.value" :key="item.id"
                style="max-width: 240px;max-height: 250px;">
                <img :src="item.image_url" style="width: 200px;height: 150px;" />
                <el-divider />
                <p class="text-center">{{ item.video_name }}</p>
            </el-card>
        </div>
    </div>
</template>

<script>

import { getWatchVideoList } from '@/apis/watchVideo.js';
import { reactive, ref } from 'vue'


export default {
    setup() {
        var data = reactive([])
        const isPlaying = ref(false);
        const currentVideoUrl = ref('');
        getWatchVideoList().then(res => {
            data.value = res.data
            console.log(res.data);
        })
        const playVideo = (item) => {
            isPlaying.value = true;
            currentVideoUrl.value = item.video_url;
            console.log('播放视频：', item.video_url);
        };
        const stopVideo = () => {
            isPlaying.value = false;
            currentVideoUrl.value = '';
        };
        return { data, playVideo, isPlaying, currentVideoUrl, stopVideo }
    }
}
</script>

<style>
.centered-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-left: 20px;
    /* 水平居中 */
}

.btn {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    /* 水平居中 */
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    /* 间距 */
}

.custom-card {
    cursor: pointer;
    /* 设置鼠标指向时显示小手图标 */
}

.text-center {
    text-align: center;
}
</style>