<template>
  <div id="messages" class="w-3/5">
    <div id="messageList" ref="messageList">
      <message v-for="message in listMessages" :key="message.id" :message="message" :current-user="currentUser" />
      <div v-if="listMessages.length === 0" class="no-messages">
        <font-awesome-icon :icon="['fas', 'american-sign-language-interpreting']" />
        <p>No Messages</p>
      </div>
    </div>
    <new-message-form />
  </div>
</template>
<script>
import NewMessageForm from '../NewMessageForm/NewMessageForm.vue'
export default {
  name: 'MessageList',
  components: { NewMessageForm },
  props: {
    listMessages: {
      type: Array,
      default: () => []
    },
    currentUser: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    listMessages () {
      setTimeout(() => {
        if (this.$refs.messageList) {
          this.$refs.messageList.scrollTop = this.$refs.messageList.scrollHeight
        }
      }, 0)
    }
  },
  mounted () {
    setTimeout(() => {
      if (this.$refs.messageList) {
        this.$refs.messageList.scrollTop = this.$refs.messageList.scrollHeight
      }
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
#messages {
  background: #7abcc7;
  overflow-y: hidden;
  height: 400px;
  #messageList {
    height: 350px;
    overflow: auto;
    padding-bottom: 10px;
    &::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
      border-radius: 10px;
    }

    &::-webkit-scrollbar
    {
      width: 5px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb
    {
      border-radius: 5px;
      background-image: -webkit-gradient(linear,
                        left bottom,
                        left top,
                        color-stop(0.44, #1fa6bb),
                        color-stop(0.72, #15fff1),
                        color-stop(0.86, #20d3dc));
    }
    .no-messages {
      text-align: center;
      margin-top: 45%;
      color: #fff;
      svg {
        font-size: 40px;
        color: beige;
      }
    }
  }
}
</style>
