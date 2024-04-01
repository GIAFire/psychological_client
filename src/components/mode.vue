<template>
  <div class="model1">
    <div class="model">
      <p>今日导读</p>
      <div class="min-box">
      <div class="block text-center">
        <span class="demonstration">Motion blur the switch (default)</span>
        <el-carousel height="200px" motion-blur>
        <el-carousel-item v-for="item in images" :key="item">
          <img :src="item" alt="image">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
      </div>
      <div class="min-box2">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
    let images = [
      'http://localhost:5174/assets/tu1.jpg',
      'https://xlingtong.oss-cn-beijing.aliyuncs.com/uploads/images/20220927/2ab1a2613995844b51075e4e835a6057.jpg',
      'https://xlingtong.oss-cn-beijing.aliyuncs.com/uploads/images/20231107/5ae7e2d2fd1270f44a1155c6731b2aa9.jpg'
    ]
    return {images}
  }
}
</script>

<style>
*{
  margin: auto;
  padding: auto;
}
.block img{
  width: 350px;
  height: 310px;
}
/* .model1{
  width: 1000px;
  height: 390px;
  margin: 20px auto; 
  border: 2px solid black; 
  padding: 10px; 
} */
.model1{
     border: 2px solid black; 
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1519px;
        height: 390px; 
        
}
.model{
        width: 1000px;
        height: 390px;
        border: 2px solid red;
        position: relative;
}

.model p{
  font-size: 30px;
  color: #f75c0d;
  
}
.min-box{
  width: 348px;
  height: 312px;
  border: 2px solid black;
}
.min-box2{
  width: 646px;
  height: 310px;
  border: 2px solid black;
  position: absolute;
  bottom: 36px; 
  left: 352px;
  
 
}


.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>