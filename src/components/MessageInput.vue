
<script setup>
  import {ref, defineEmits} from "vue";

  // 发送消息消息事件
  const emit = defineEmits(["send"]);
  // 输入框内的消息
  const message = ref("");
  const sendMessage = () => {
    console.log("发送消息", message.value);
    emit("send", message.value);
    // 发送完清除
    message.value = "";
  };
</script>

<template>
  <div class="message-input">
    <div class="input-wrapper">
      <!-- 按回车键发送，输入框高度三行 -->
      <el-input
          v-model="message"
          :autosize="false"
          :rows="3"
          class="input"
          resize="none"
          type="textarea"
          placeholder="请输入内容"
          @keydown.enter="sendMessage"
      >
      </el-input>
      <div class="button-wrapper">
        <el-button type="primary" class="el-button--primary" @click="sendMessage">
          <el-icon class="el-icon--left">
            <Position/>
          </el-icon>
          发送
        </el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message-input {
  width: 100%;
}

.input-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch; /* 让输入框高度和父容器一致 */
}

.input-wrapper .el-input {
  width: 100%;
  height: 100%;
  flex: 1; /* 让输入框占据整个父容器的高度 */
  display: flex; /* 让内部元素铺满整个高度 */
}

.input-wrapper .el-input .el-textarea__inner {
  height: 100% !important; /* 让输入框内部文本域铺满整个高度 */
}

.button-wrapper {
  margin: 20px 0;
}

</style>
