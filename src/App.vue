<template>
  
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import index from './views/index.vue';
import Navbar from './components/Navbar.vue';

import {reactive} from 'vue'
import{userStore} from '@/utils/pinia'

export default {
  name : 'App',
  setup(){
    let images = [
      'https://xlingtong.oss-cn-beijing.aliyuncs.com/uploads/images/20240228/abac6ae2c2f932b655eb7a9b781d5db4.png',
      'https://xlingtong.oss-cn-beijing.aliyuncs.com/uploads/images/20220927/2ab1a2613995844b51075e4e835a6057.jpg',
      'https://xlingtong.oss-cn-beijing.aliyuncs.com/uploads/images/20231107/5ae7e2d2fd1270f44a1155c6731b2aa9.jpg'
    ]
    let currentIndex = reactive({
      index : 0
    })

    return {images,currentIndex}
  },
  mounted() {
    if (window.localStorage.getItem("userInfo")) {
      const user = userStore()
      user.getLocalStorage(window.localStorage.getItem("userInfo"))
    }
    setInterval(() => {
      this.currentIndex.index = (this.currentIndex.index + 1) % this.images.length;
    }, 3000); // 每3秒切换一次图片

    // window.addEventListener('beforeunload', this.clearLocalStorage);
  },
  // beforeUnmount() {
  //   window.removeEventListener('beforeunload', this.clearLocalStorage);
  // },
  components : {defineComponent,Navbar,index},
  // methods: {
  //   clearLocalStorage() {
  //     localStorage.clear();
  //   }
  // }
}
  

</script>

<style>
*{
  margin: 0;
  padding: 0;
  
}

#app {
  width: 100%;
  height: 100%;
}

.slideshows{
    width: 1285.6x;
    height: 520px;
    object-fit: cover;
  }  
.slideshow {
    width: 100%;
    height: 520px;
    object-fit: cover;
    
  }

  .swiper-container {
  width: 100%;
  height: 300px;
  
}

.swiper-slide {
  text-align: center;
  line-height: 300px;
  background-color: #eee;
  
}
/*interest 更改兴趣模块*/
.interest {
    width: 1206px;
    height: 60px;
    background: #edf7ee;
    border-radius: 2px;
    margin: 40px auto 0;
    line-height: 60px;
}

.interest .interest-l {
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    float: left;
}

.interest .interest-r {
    font-size: 13px;
    color: #60ba65;
    margin-left: 21px;
    background: url(./image/in-jt.gif) no-repeat right center;
    float: left;
    padding-right: 15px;
    cursor: pointer;
}

</style>