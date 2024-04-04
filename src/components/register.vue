<template>
  <div class="center_form">
    <p class="title"><span>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</span></p>
    <p><input type="text" placeholder="手机号" v-model="phone"></p>
    <input type="text" placeholder="密码" v-model="password">
    <input type="text" placeholder="姓名" v-model="username">
    <input type="text" placeholder="学校" v-model="school">
    <input type="text" placeholder="学号" v-model="stuNum">
    <div class="chk">
      <!-- <button class="btn-style">点击注册</button> -->
      <el-button type="primary" @click="btn">点击注册</el-button>
      <!-- <span><input type="checkbox" id="dd">记住密码</span><span>忘记密码</span> -->
    </div>
  </div>
</template>

<script>
import { toRegister } from '@/apis/registerAPl'
import { data } from 'autoprefixer';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const phone = ref('');
    const password = ref('')
    const username = ref('');
    const school = ref('')
    const stuNum = ref('');

    const btn = () => {
      const res = toRegister(phone.value, password.value, username.value, school.value, stuNum.value)
      res.then((res) => {
        if (res.code == "0000") {
          alert("注册成功!")
          window.location.href = '/'
        }
      });
    };


    return { btn, phone, password, username, school, stuNum }
  }

})
</script>

<style>
.btn-style {
  width: 100px;
  height: 40px;
  background-color: #c6deed;
  color: green;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 2px;

}

* {
  padding: 0px;
  margin: 0px;
  color: #fff;
}

.center_form .chk {
  width: 330px;
  height: 60px;
  line-height: 60px;
  margin: 10px 40px 0px 40px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.inner_box .center_form {
  width: 410px;
  height: 375px;
  background-color: rgba(134, 221, 221, 0.219);
  box-shadow: 0px 0px 3px rgb(76, 219, 219);
}

.inner_box .center_form p {
  height: 40px;
  width: 410px;
  text-align: center;
  color: #fff;

}

.signIn_btn {
  height: 50px;
  width: 450px;
  line-height: 50px;
  background-color: #fff;
  text-align: center;
}

.signIn_btn span {
  font-size: 20px;
  color: rgb(93, 182, 204);
}

.center_form p {
  color: #fff;
}</style>