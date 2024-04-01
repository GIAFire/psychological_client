<template>
    <div class="slideshows">
        <div class="">
            <img :src="images[this.currentIndex.index]" alt="" class="slideshow">
        </div>
    </div>
  
</template>

<script>
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
import {reactive} from 'vue'
export default {
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
    setInterval(() => {
      this.currentIndex.index = (this.currentIndex.index + 1) % this.images.length;
    }, 3000); // 每3秒切换一次图片
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  
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
</style>