<template>
  <div id="chatApp">
    <div class="usersChatList">
      <div>
        <a @click="expandChatList()">
          <div class="header">
            <p class="title"><font-awesome-icon :icon="['fa', 'comments']" /> Messagers</p>
          </div>
        </a>
        <div class="chatContent flex">
          <div
            id="userListBox"
            class="w-2/5"
          >
            <article v-for="user in listUsers" :key="user.id" :class="'user-item flex' + ( friendUser && user.id === friendUser.id ? ' active': '') " @click="assignFriendUser(user)">
              <div class="left w-1/4 text-center">
                <img :src="require(`~/assets/users/avatar/${user.avatar}`)">
              </div>
              <div class="right w-3/4">
                <h6>{{ user.nameFixed }}</h6>
                <span>{{ user.lastMsgFixed }}</span>
              </div>
            </article>
          </div>
          <message-list :list-messages="listMessages" :current-user="currentUser" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import MessageList from '../MesssageList/MessageList.vue'

export default {
  components: { MessageList },
  data () {
    const users = [
      { id: 1, name: 'An', avatar: 'user-1.jpg', lastMsg: 'hello 1', messages: [] },
      { id: 2, name: 'Na', avatar: 'user-2.jpg', lastMsg: 'hello 2', messages: [] },
      { id: 3, name: 'Hoai', avatar: 'user-3.png', lastMsg: 'hello 3', messages: [] },
      { id: 4, name: 'User-4', avatar: 'user-1.jpg', lastMsg: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.', messages: [] },
      { id: 5, name: 'User-5', avatar: 'user-2.jpg', lastMsg: 'At vero eos et accusam et justo duo', messages: [] },
      { id: 6, name: 'User-6', avatar: 'user-3.png', lastMsg: 'At vero eos et accusam et justo duo dolores et ea rebum.', messages: [] }
    ]

    const messages = [
      [
        { id: 'm_1', user: users[0], content: 'hello Na', time: Date.now() },
        { id: 'm_2', user: users[0], content: 'what are u doing?', time: Date.now() },
        { id: 'm_3', user: users[1], content: 'hello An', time: Date.now() },
        { id: 'm_4', user: users[1], content: 'I\'m chatting with you =]]z', time: Date.now() },
        { id: 'm_5', user: users[0], content: 'shut up! :))) ', time: Date.now() },
        { id: 'm_6', user: users[1], content: 'phắc du', time: Date.now() },
        { id: 'm_7', user: users[0], content: 'shut up! :))) ', time: Date.now() },
        { id: 'm_8', user: users[1], content: 'phắc du', time: Date.now() }
      ],
      [
        { id: 'm_9', user: users[0], content: 'hello Na', time: Date.now() },
        { id: 'm_10', user: users[2], content: 'what are u doing?', time: Date.now() },
        { id: 'm_11', user: users[2], content: 'hello An', time: Date.now() },
        { id: 'm_12', user: users[2], content: 'I\'m chatting with you =]]z', time: Date.now() },
        { id: 'm_13', user: users[0], content: 'shut up! :))) ', time: Date.now() },
        { id: 'm_14', user: users[2], content: 'phắc du', time: Date.now() },
        { id: 'm_15', user: users[0], content: 'shut up! :))) ', time: Date.now() },
        { id: 'm_16', user: users[2], content: 'phắc du', time: Date.now() }
      ],
      [
        { id: 'm_17', user: users[0], content: 'hello Na', time: Date.now() },
        { id: 'm_18', user: users[3], content: 'what are u doing?', time: Date.now() },
        { id: 'm_16', user: users[3], content: 'phắc du', time: Date.now() }
      ]
    ]

    users[1].messages = messages[0]
    users[2].messages = messages[1]
    users[3].messages = messages[2]

    return {
      showChatList: false,
      chatBoxArea: true,
      users,
      currentUser: users[0],
      friendUser: users[1]
    }
  },
  computed: {
    listUsers () {
      const _users = [...this.users]
      return _users.map((e) => {
        e.lastMsgFixed = e.lastMsg.length <= 25 ? e.lastMsg : (e.lastMsg.substr(0, 25) + '...')
        e.nameFixed = e.name.length <= 25 ? e.name : (e.name.substr(0, 25) + '...')
        return e
      })
    },
    listMessages () {
      if (!this.friendUser) {
        return []
      }
      return this.users.find(e => e.id === this.friendUser.id).messages
    }
  },
  methods: {
    assignFriendUser (user) {
      this.friendUser = { ...user }
    },
    expandChatList () {
      $('#userListBox').slideToggle()
      $('#messages').slideToggle()
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
  width: 600px;
  bottom: 0;
  margin-bottom: 0;
  right: 10px;
  .header {
    background: #98e6f3;
    padding: 10px;
    border-radius: 5px 5px 0px 0px;
    .title {
      font-family: 'Lato';
      font-size: 15px;
      font-weight: 800;
      svg {
        color: #008196;
      }
    }
  }
  .image img {
    border-radius: 16px;
  }
}

#userListBox {
  padding: 5px;
  background: #fff;
  height: 400px;
  overflow-y: auto;
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
  .user-item {
    padding:10px 5px;
    transition: all 0.1s ease;
    border-radius: 4px;
    overflow-y: auto;
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
      h6 {
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
        h6 {
          color: #000;
        }
        .menu {
          display: block;
        }
      }
    }
    &.active {
      background: #79dbea70;
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
