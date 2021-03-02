<template>
  <div
    :class="
      'message-item flex' +
        (message.user === currentUser ? ' flex-row-reverse' : '')
    "
  >
    <div class="w-1/6 avatar">
      <img :src="require(`~/assets/users/avatar/${message.user.avatar}`)">
    </div>
    <div
      :class="'message w-5/6' + (message.user === currentUser ? ' owner' : '')"
    >
      <p>{{ message.content }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Message',
  props: {
    message: {
      type: Object,
      default: () => {}
    },
    currentUser: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.message-item {
  margin: 5px 8px;
  .avatar {
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 4px solid #cad0ce;
      margin: auto;
    }
  }
  .message {
    background: rgba(253, 252, 252, 0.85098);
    padding-left: 12px;
    padding-bottom: 8px;
    padding-top: 10px;
    padding-right: 12px;
    word-break: break-word;
    font-size: 0.9375rem;
    max-width: 75%;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    border-radius: 5px;
    overflow: hidden;
    &.owner {
      background: #016a7b;
      color: white;
    }
  }
}
</style>
