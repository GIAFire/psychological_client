<template>
  <div class="outer_box">
    <div class="inner_box">
      <div class="left_label"></div>
      <div class="center_form">
        <p class="title"><span>S&nbsp;i&nbsp;g&nbsp;n&nbsp;I&nbsp;n&nbsp;&nbsp;&nbsp;&nbsp;F&nbsp;o&nbsp;r&nbsp;m</span></p>
        <p><input type="text" value="User Name" v-model="phone"></p>
        <p><input type="text" value="Password" v-model="password"></p>
        <p><input type="text" value="姓名" v-model="username"></p>
        <p><input type="text" value="学校" v-model="school"></p>
        <p><input type="text" value="性别" v-model="sex"></p>
        <div class="chk">
            <el-button type="primary" @click="btn">点击注册</el-button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>
.btn-style {
  width: 100px;
  height: 40px;
  background-color: #c6deed; /* 设置背景颜色为蓝色 */
  color: green; /* 设置文本颜色为白色 */
  padding: 10px 20px; /* 设置内边距 */
  border: none; /* 去除边框 */
  border-radius: 5px; /* 设置圆角 */
  cursor: pointer; /* 设置鼠标指针样式为手型 */
  font-size: 2px;
 
        }
* {
  padding: 0px;
  margin: 0px;
  color: #fff;
}




/* 登录表单 */
.inner_box .center_form {
  width: 410px;
  height: 300px;
  background-color: rgba(134, 221, 221, 0.219);
  box-shadow: 0px 0px 3px rgb(76, 219, 219);
}
.inner_box .center_form p {
  height: 60px;
  width: 410px;
  text-align: center;
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
.center_form .chk{
  width: 330px;
  height: 60px;
  line-height: 60px;
  margin: 10px 40px 0px 40px;
  display: flex;
  justify-content:space-between;
  font-size: 14px;
}
.chk span input {
  width: 15px;
  height: 15px;
  margin: 10px;
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

</style>