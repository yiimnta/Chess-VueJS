<template>
  <div class="newMessageForm flex">
    <span
      id="newMessageInput"
      class="textarea w-4/5"
      role="textbox"
      contenteditable
      @input="onInputNewsMessage($event)"
    />
    <button
      type="button"
      class="w-1/5 sendMsgBtn"
      :disabled="newMessageType === ''"
    >
      <font-awesome-icon :icon="['fas', 'paper-plane']" />
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newMessageType: ''
    }
  },
  methods: {
    onInputNewsMessage (event) {
      /* eslint-disable */
      this.newMessageType = event.target.innerText
      /* eslint-enable */
    }
  }
}
</script>
<style lang="scss" scoped>
.newMessageForm {
  width: 100%;
  bottom: 0px;
  .textarea {
    display: block;
    width: 100%;
    resize: none;
    min-height: 40px;
    max-height: 89px;
    line-height: 20px;
    background: white;
    overflow-y: auto;
    padding: 5px;
    margin: 3px;
    margin-left: 7px;
    border-radius: 3px;
    outline: none;
    font-size: 14px;
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
      border-radius: 10px;
    }

    &::-webkit-scrollbar {
      width: 5px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0.44, #1fa6bb),
        color-stop(0.72, #15fff1),
        color-stop(0.86, #20d3dc)
      );
    }
  }

  .textarea[contenteditable]:empty::before {
    content: "Aa";
    color: gray;
  }
  .sendMsgBtn {
    border-radius: 50%;
    width: 45px;
    max-height: 45px;
    margin: 5px 10px;
    padding: 5px 7px;
    background: aliceblue;
    color: #016a7b;
    outline: none;
    &:disabled {
      color: #c4eff6;
      background: #76a7af;
    }
  }
}
</style>
