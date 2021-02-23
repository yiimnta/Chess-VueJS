<template>
  <div id="chatApp">
    <div class="usersChatList">
      <div class="card">
        <a @click="expandChatList()">
          <div class="card-header">
            <p class="card-header-title">
              <span class="tag is-primary">2</span>&nbsp; Chats Ativos
            </p>
          </div>
        </a>
        <div
          id="userListBox"
          class="card-content thumb-user-list"
          :class="{ show: showChatList }"
        >
          <article class="media" @click="showUsuario('123')">
            <figure class="media-left">
              <p class="image is-32x32">
                <img src="http://bulma.io/images/placeholders/32x32.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Barbara Middleton</strong>
                  <br>
                </p>
              </div>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <p class="image is-32x32">
                <img src="http://bulma.io/images/placeholders/32x32.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Jonathan Cales</strong>
                  <br>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div id="chatBox" class="chatBox">
      <div class="card">
        <header class="card-header header-title" @click="toggleChat()">
          <p class="card-header-title">
            <i class="fa fa-circle is-online" /><img
              src="https://k0.okccdn.com/php/load_okc_image.php/images/32x0/971x939/0/10846088441021659030.webp?v=2"
              style="width: 30px"
            >&nbsp;{{ headUser }}
          </p>
          <a class="card-header-icon">
            <span class="icon">
              <i class="fa fa-close" />
            </span>
          </a>
        </header>

        <div id="chatbox-area">
          <div class="card-content chat-content">
            <div class="content">
              <div class="chat-message-group">
                <div class="chat-thumb">
                  <figure class="image is-32x32">
                    <img
                      src="https://k0.okccdn.com/php/load_okc_image.php/images/32x0/971x939/0/10846088441021659030.webp?v=2"
                    >
                  </figure>
                </div>
                <div class="chat-messages">
                  <div class="message">
                    Olá meu nome é Camila
                  </div>
                  <div class="from">
                    Hoje 04:55
                  </div>
                </div>
              </div>
              <div class="chat-message-group writer-user">
                <div class="chat-messages">
                  <div class="message">
                    Olá meu nome é Marinho
                  </div>
                  <div class="from">
                    Hoje 04:55
                  </div>
                </div>
              </div>
              <div class="chat-message-group">
                <div class="chat-thumb">
                  <figure class="image is-32x32">
                    <img
                      src="https://k0.okccdn.com/php/load_okc_image.php/images/32x0/971x939/0/10846088441021659030.webp?v=2"
                    >
                  </figure>
                </div>
                <div class="chat-messages">
                  <div class="message">
                    Olá meu nome é Marinho
                  </div>
                  <div class="message">
                    Caro marinho
                  </div>
                  <div class="from">
                    Hoje 04:55
                  </div>
                </div>
              </div>
              <div class="chat-message-group">
                <div class="typing">
                  Typing
                </div>
                <div class="spinner">
                  <div class="bounce1" />
                  <div class="bounce2" />
                  <div class="bounce3" />
                </div>
              </div>
            </div>
          </div>
          <footer id="chatBox-textbox" class="card-footer">
            <div style="width: 63%">
              <textarea
                id="chatTextarea"
                class="chat-textarea"
                placeholder="Digite aqui"
                @focus="expandTextArea()"
                @blur="dexpandTetArea()"
              />
            </div>
            <div class="has-text-centered" style="width: 37%">
              <a class="button is-white">
                <i class="fa fa-smile-o fa-5" aria-hidden="true" />
              </a>
              <a class="button is-white">send</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
    <div class="emojiBox" style="display: none">
      <div class="box" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      headUser: 'Marinho Gomes',
      showChatList: false,
      chatBoxArea: true,
      currentChats: [],
      users: [
        { id: 1, name: 'An', avatar: '' },
        { id: 2, name: 'Na', avatar: '' },
        { id: 3, name: 'Hoai', avatar: '' }
      ]
    }
  },
  methods: {
    showUsuario (id) {
      console.log(id)
    },
    expandTextArea () {
      $('#chatBox-textbox').height(80)
      $('#chatTextarea').height(60)
    },
    dexpandTetArea () {
      $('#chatBox-textbox').height(60)
      $('#chatTextarea').height(40)
    },
    toggleChat () {
      if (this.chatBoxArea) {
        $('#chatbox-area').hide()
      } else {
        $('#chatbox-area').show()
      }
      this.chatBoxArea = !this.chatBoxArea
    },
    openChatBox (info) {

    },
    startChat (user) {

    },
    expandChatList () {
      $('#userListBox').slideToggle()
      this.showChatList = !this.showChatList
    }
  }
}
</script>

<style scoped>
.allUsersList {
  width: 300px;
  margin: 20px;
}
.allUsersList .card-header {
  background: #683db8;
  color: #fff;
  padding: 10px;
}
.allUsersList .image img {
  border-radius: 16px;
}
.usersChatList {
  position: absolute;
  width: 250px;
  bottom: 0;
  margin-bottom: 0;
  right: 360px;
}
.show {
  display: block;
}
.thumb-user-list {
  display: none;
}
.thumb-user-list .image img {
  border-radius: 30px;
}
.usersChatList .card-header {
  background: #683db8;
  font-size: 13px;
}
.chatBox {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  margin: 40px;
  margin-bottom: 0;
  font-size: 13px;
}
.chat-content {
  overflow: auto;
  height: 300px;
}
.chatBox .card {
  border-radius: 4px;
}
.chatBox .card-header {
  background: #683db8;
}
.header-title {
  height: 50px;
}
.card-header-title i {
  font-size: 10px;
  color: #32e4cd;
  margin-right: 6px;
}
.card-header .card-header-title {
  color: #fff;
}
.chat-content small {
  margin: 0;
}
.chat-content p {
  background: #ecf1f8;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 0;
}
.my-content .media-content {
  width: 80%;
}
.my-content .message {
  float: right;
  background: #683db8;
  color: #fff;
  text-align: right;
  padding: 10px;
  margin-bottom: 4px;
  font-size: 13px;
}
.my-content .chat-content small {
  float: right;
}
.my-content small {
  display: block;
  float: right;
  width: 100%;
  text-align: right;
}
.chat-textarea {
  font-size: 14px;
  padding: 8px;
  height: 40px;
  width: 100%;
  border: none;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
}
.chat-message-group {
}
.chat-message-group .chat-thumb {
  float: left;
  width: 20%;
}
.chat-message-group .chat-messages {
  float: left;
  width: 80%;
  margin-bottom: 20px;
}
.chat-message-group .message {
  float: left;
  padding: 10px;
  background: #ecf1f8;
  font-size: 13px;
  border-radius: 5px;
  margin-bottom: 3px;
}
.chat-messages .from {
  float: left;
  display: block;
  width: 100%;
  text-align: left;
  font-size: 11px;
}
.chat-thumb img {
  border-radius: 40px;
}
.writer-user .chat-messages {
  float: right;
  width: 100%;
}
.writer-user .chat-messages .message {
  float: right;
  background: #683db8;
  color: #fff;
}
.writer-user .chat-messages .from {
  float: left;
  display: block;
  width: 100%;
  text-align: right;
}
.chat-message-group .typing {
  float: left;
}
.chatBox .card-header-icon i {
  color: #fff;
  font-size: 13px;
}
/* CSSS */
.outside-box {
  height: 100px;
  background: #f8c;
  width: 200px;
  margin: 20px;
  overflow: auto;
}
.outside-box .content-insider {
  height: 300px;
  background: #c9c;
}
/* CSS Spinner */
.spinner {
  margin: 0 30px;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 4px;
  height: 4px;
  background-color: #888;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
/* EmojiBox */
.emojiBox {
  width: 150px;
  margin: 30px;
}
.emojiBox .box {
  height: 100px;
  padding: 4px;
}
/* */
.card-header-title img {
  border-radius: 40px;
}
</style>
