<template>
    
    <div class="outer_box">
      
      <div class="inner_box">
      <div class="left_label"></div>
      <router-view></router-view>

      <div class="right_label"></div>
      <div class="signIn_btn">
        <router-link to="/login-register/login" active-class="selected">
          <span style="float: left;">登录</span>
        </router-link>
        
        <router-link to="/login-register/register">
          <span style="float: right;">注册</span>
        </router-link>

      </div>
    </div>
    
  </div>


</template>

<script>

import login from '@/components/login.vue';

export default {
    components:{login,}
}
</script>

<style>


* {
  padding: 0px;
  margin: 0px;
  color: #fff;
}

/* 外部容器 */
.outer_box {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/tu1.jpg');
  background-size: 100% 100%;
}


.title {
  height: 50px !important;
  line-height: 50px;
  background-color: rgba(82, 202, 182, 0.575);
  margin-bottom: 40px;
}

input {
  width: 310px;
  margin: 10px 50px 0px 40px;
  height: 35px;
  padding-left: 20px;
  background: none;
  border: none;
  border-bottom: 1px solid #fff;
  font-size: 15px;
  
}
/* remember me */

.chk span input {
  width: 15px;
  height: 15px;
  margin: 10px;
}

/*两侧小三角形 */
.inner_box .left_label,.right_label {
  width: 0px;
  height: 0px;
  margin-top: 357px;
}

/* 登录按钮 */
.signIn_btn {
  height: 50px;
  width: 450px;
  line-height: 50px;
  background-color: #fff;
  text-align: center;
}
.signIn_btn span {
  font-size: 20px;
  color:rgb(93, 182, 204);
}

/* 内部登录窗口 */
.inner_box {
  position: absolute;
  width: 450px;
  height: 570px;
  /* background-color: rgba(127, 255, 212, 0.5); */
  left: 25%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* display: flex; */
}
.inner_box div {
  float: left;
}
/* 登录表单 */

.inner_box .left_label {
  border-top: solid 10px rgba(255, 255, 255, 0);
  border-right: solid 10px rgb(255, 255, 255);
  border-bottom: solid 10px rgb(255, 255, 255);
  border-left: solid 10px rgba(255, 255, 255, 0);
}
.inner_box .right_label {
  border-top: solid 10px rgba(255, 255, 255, 0);
  border-right: solid 10px rgba(255, 255, 255, 0);
  border-bottom: solid 10px rgb(255, 255, 255);
  border-left: solid 10px rgb(255, 255, 255);
}
</style>