<template>
 
 
    <div class="center_form">
        <p class="title"><span>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</span></p>
        <p><input type="text"  placeholder="手机号" v-model="phone"></p>
        <p><input type="text"  placeholder="密码" v-model="password"></p>
        
        <div class="chk">
          <span><input type="checkbox" id="dd">记住密码</span><span>忘记密码</span>
        </div>
        <div class="chk">
          <el-button type="primary" @click="btn">学生登录</el-button>
          <el-button type="primary" @click="adminBtn">管理员登录</el-button>
        </div>
    </div>
  
  
</template>

<script>
import router from '../router/index'
import{toLogin} from '@/apis/loginAPI'
import{toAdminLogin} from '@/apis/adminLoginAPI'
import{userStore} from '@/utils/pinia'
import userManagement from '@/views/userManagement.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components:{userManagement},
  
  setup(){
    const phone= ref('');
    const password = ref('');
    const btn = () =>{
      const res = toLogin(phone.value,password.value)
      res.then(respone => {
        if(respone.code==='0000'){
          console.log(respone);
          const pinia = userStore();
          pinia.setUser(respone.data);
          alert('登录成功')
          window.location.href = '/'
        }else{
          alert('登录失败')
        }
      })
    }

    const adminBtn = () =>{
      const res = toAdminLogin(phone.value,password.value)
      res.then(respone => {
        if(respone.code==='0000'){
          const pinia = userStore();
          pinia.setUser(respone.data);
          alert('登录成功')
          window.location.href = '/'
        }else{
          alert('登录失败')
        }
      })
    }
    return {adminBtn,btn,phone,password} 
   
  }
})
</script>

<style>

* {
  padding: 0px;
  margin: 0px;
  color: #fff;
}
.center_form .chk{
  width: 330px;
  height: 60px;
  line-height: 60px;
  margin: 10px 40px 0px 40px;
  display: flex;
  justify-content:space-between;
  font-size: 14px;
}
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


</style>