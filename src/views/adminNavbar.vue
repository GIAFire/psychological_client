<template>
    <div class="navigation">
      <div class="navig">
        <img src="../assets/logo.b8150b68.png" alt="">
      </div>
      <div class="nav" >
        <router-link to="/index" class="none"><h1>首页</h1></router-link>
      </div>
      <div class="nav" >
        <router-link to="/userManagement" class="none"><h1>用户管理</h1></router-link>
      </div>
      <div class="nav" >
        <router-link to="/video" class="none"><h1>视频管理</h1></router-link>
      </div>
      <div class="nav" >
        <router-link to="/data" class="none"><h1>数据统计</h1></router-link>
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
    background-color: rgb(233, 240, 126);
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
    color: rgb(29, 21, 21);
    padding: 10px; /* 文字与边框的间距 */
    white-space: nowrap; /* 防止文字换行 */
    
  }
  .navig img{
    width: 100px;
  }
  .center{
    border: 2px solid red;
  }
  
  </style>