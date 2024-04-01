<template>
  <div class="navigation">
    <div class="navig">
      <img src="../assets/logo.b8150b68.png" alt="">
    </div>
    <div class="nav" >
      <router-link to="/index" class="none"><h1>首页</h1></router-link>
      
    </div>
    <div class="nav" >
      <router-link to="/chat" class="none"><h1>智能AI聊天辅导</h1></router-link>
    </div>
    <div class="nav" >
      <h1>心理微视频</h1>
    </div>
    <div class="nav" >
    <router-link to="/login-register" class="none"><h1>登录\注册</h1></router-link>
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  
}
.none{
  text-decoration: none;
}
.navigation{
  /* border: 2px solid red; */
  width: 100%;
  height: 100px;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  
}
.nav{
  /* border: 2px solid wheat; */
  width: 50px;
  flex-direction: row;
  
  
}
.nav h1{
  font-size: 20px;
  color: white;
  padding: 10px; /* 文字与边框的间距 */
  white-space: nowrap; /* 防止文字换行 */
  
}
.navig img{
  width: 100px;
}
.center{
  border: 2px solid red;
}

/* .swiper-container {
  width: 100%;
  height: 300px;
}

.swiper-slide {
  text-align: center;
  line-height: 300px;
  background-color: #eee;
} */
</style>