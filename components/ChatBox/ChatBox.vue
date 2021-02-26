<template>
  <div id="chatApp">
    <div class="usersChatList">
      <div>
        <a @click="expandChatList()">
          <div class="header">
            <p class="title">Friends ({{ users.length }})</p>
          </div>
        </a>
        <div
          id="userListBox"
          :class="{ show: showChatList }"
        >
          <article v-for="user in users" :key="user.id" class="user-item flex" @click="showUsuario('123')">
            <div class="left w-1/4 text-center">
              <img :src="require(`~/assets/users/avatar/${user.avatar}`)">
            </div>
            <div class="right w-3/4">
              <h7>{{ user.name }}</h7>
              <span>{{ user.lastMsg }}</span>
              <button v-tooltip.top="'Invite competition'" type="button" class="menu" title="Invite">
                <img :src="require(`~/assets/etc/3points.PNG`)">
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  data () {
    return {
      headUser: 'Marinho Gomes',
      showChatList: false,
      chatBoxArea: true,
      currentChats: [],
      users: [
        { id: 1, name: 'An', avatar: 'user-1.jpg', lastMsg: 'hello 1' },
        { id: 2, name: 'Na', avatar: 'user-2.jpg', lastMsg: 'hello 2' },
        { id: 3, name: 'Hoai', avatar: 'user-3.png', lastMsg: 'hello 3' }
      ]
    }
  },
  methods: {
    showUsuario (id) {
      console.log(id)
    },
    expandTextArea () {
      // $('#chatBox-textbox').height(80)
      // $('#chatTextarea').height(60)
    },
    dexpandTetArea () {
      // $('#chatBox-textbox').height(60)
      // $('#chatTextarea').height(40)
    },
    toggleChat () {
      if (this.chatBoxArea) {
        // $('#chatbox-area').hide()
      } else {
        // $('#chatbox-area').show()
      }
      this.chatBoxArea = !this.chatBoxArea
    },
    openChatBox (info) {},
    startChat (user) {},
    expandChatList () {
      $('#userListBox').slideToggle()
      this.showChatList = !this.showChatList
    }
  }
}
</script>

<style lang="scss" scoped>

.allUsersList {
  width: 300px;
  margin: 20px;
}
.usersChatList {
  position: absolute;
  width: 250px;
  bottom: 0;
  margin-bottom: 0;
  right: 10px;
  .header {
    background: #79dbea;
    padding: 10px;
    border-radius: 5px 5px 0px 0px;
    .title {
      font-family: 'Lato';
      font-size: 15px;
      font-weight: 800;
    }
  }
  .image img {
    border-radius: 16px;
  }
}

#userListBox {
  padding: 5px;
  background: #fff;
  .user-item {
    padding:10px 5px;
    transition: all 0.1s ease;
    border-radius: 4px;
    .left {
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 4px solid #cad0ce;
        margin: auto;
      }
    }
    .right {
      padding: 10px 10px 5px 5px;
      position: relative;
      h7 {
        line-height: 5px;
        font-weight: 500;
        font-size: 13px;
        display: block;
      }
      span {
        font-size: 11px;
        color: #a2a2a2;
      }
      .menu {
        border-radius: 50%;
        border: 1px solid #afaaaa;
        position: absolute;
        padding: 5px;
        right: 10px;
        top: 3px;
        outline: none;
        display: none;
        background: #fff;
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          transform: scale(0.8);
        }
      }
    }
    &:hover {
      background: #79dbea70;
      .right {
        h7 {
          color: #000;
        }
        .menu {
          display: block;
        }
      }
    }
  }
}

.show {
  display: block;
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
