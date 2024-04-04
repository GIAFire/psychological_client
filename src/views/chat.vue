<script setup>
import { ref, onMounted, watch } from 'vue';
import MessageInput from '../components/MessageInput.vue';
import getURL from '../utils/getURL';
const APPID = '6012ccfa'
let modelDomain = 'generalv3';

let url = getURL()



const messageInputRef = ref(null);

const messages = ref([
])
const handleSendMessage = (message) => {
  console.log(message);
  messageInputRef.value = null
  messages.value.push({ sender: 'user', content: message });

  var params = {
      "header": {
          "app_id": APPID, "uid": "fd3f47e4-d"
      }, "parameter": {
          "chat": {
              "domain": modelDomain, "temperature": 0.5, "max_tokens": 1024
          }
      }, "payload": {
          "message": {
              "text": [{
                  "role": "user", "content": message
              }]
          }
      }
  }

  const ws = new WebSocket(url); // 替换为您的WebSocket服务器URL
  ws.onopen = (e) => {
      console.log(e);
      ws.send(JSON.stringify(params)); // 向讯飞星火大模型发送请求
    };
  var text = '';
  ws.onmessage = (event) => {
    // 处理从服务器返回的数据
    const jsonData = JSON.parse(event.data);
    console.log(jsonData.payload.choices.text[0].content);
    if(jsonData.payload.choices.status===2 ){
      messages.value.push({ sender: 'AI', content: text});
    }else{
      text += jsonData.payload.choices.text[0].content;
    }
    
  };
};
const showMessage = (message,index) => {
  //请求回来的是数组，传进来处理
  message[index];

}
watch(messageInputRef, (newValue) => {
  if (newValue && newValue.message) {
    messages.push(newValue.message);
  }
});
</script>

<template>
  <div class="home-view">
    <div class="chat-panel">
      <div class="session-panel">
        <div class="title">ChatGPT助手</div>
        <div class="description">请向你的心理AI咨询助手提问吧！</div>
      </div>
      <div class="message-panel">
        <div class="chatBox">
          <div class="message-content" v-for="message in messages" :key="message.id"
            :class="{ 'sent-by-user': message.sender === 'user', 'sent-by-bot': message.sender === 'AI' }">
            <div v-if="message.sender === 'user'" class="message-row sent-by-user">
              <div>
                <el-avatar> 我 </el-avatar>
              </div>
              <div class="message-text" style="margin-top: 10px">{{ message.content }}</div>
            </div>
            <div v-else class="message-row sent-by-bot">
              <div>
                <el-avatar> AI </el-avatar>
              </div>
              <div class="message-text">{{ message.content }}</div>
            </div>
          </div>
        </div>
        <div class="inputBox">
          <MessageInput ref="messageInputRef"  @send="handleSendMessage"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home-view {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.chat-panel {
  display: flex;
  height: auto;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.05);
  /* margin-top: 10px; */
  padding: 15px;
  margin-top: 15px;
}

.session-panel {
  background-color: rgb(231, 248, 255);
  width: 300px;
  height: 100px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 20px;
  position: relative;
  border-right: 1px solid rgba(0, 0, 0, 0.07);
}

.title {
  /* margin-top: 20px; */
  font-size: 20px;
}

.description {
  color: rgba(0, 0, 0, 0.7);
  font-size: 10px;
  margin-top: 10px;
}

.message-panel {
  width: 700px;
  height: calc(100% - 300px);
}

.chatBox {
  height: 400px;
  overflow-y: auto;
  position: relative;
}

.message-content {
  width: 100%;
  height: auto;
}


.sent-by-user {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
}

.sent-by-bot {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.message-row {
  display: flex;
  /* flex-direction: column; */
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  max-width: 70%;
  /* 设置最大宽度防止消息框过长 */
}

.message-avatar {
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-right: 10px;
}

.message-avatar img {
  width: 100%;
  height: 100%;
}

.message-text {
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  color: #000;
  max-width: 100%;
  margin-top: 10px;
  /* 让消息框自动换行 */
}

.inputBox {
  width: 100%;
  height: 120px;
}

.timestamp {
  font-size: 12px;
  color: #999;
  margin-left: auto;
}
</style>
