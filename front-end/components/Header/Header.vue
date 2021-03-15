<template>
  <header>
    <a href="#" class="logo">
      <img :src="require(`~/assets/etc/logo2.png`)">
      <span>Chess</span>
    </a>
    <ul>
      <li><a href="" :class="activeClass()">Home</a></li>
      <li><a href="/service" :class="activeClass('service')">News</a></li>
      <li><a href="/board" :class="activeClass('board')">Game service</a></li>
      <li><a href="/contact" :class="activeClass('contact')">Contact</a></li>
      <li v-if="getAuthentication() == false">
        <a href="/login" :class="activeClass('login')">Login</a>
      </li>
      <li v-else>
        <a @click="handleLogout()">Logout</a>
      </li>
    </ul>
    <div class="user">
      <img :src="require(`~/assets/users/avatar/tinhcv.jpg`)" alt="tinhcv" class="user-image">
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      currentLink: ''
    }
  },
  computed: {
    routes () {
      return window.routes
    }
  },
  mounted () {
    this.setCurrentLink()
  },
  methods: {
    ...mapActions('auth', ['logout', 'getToken']),
    ...mapGetters('auth', ['isAuthenticated']),
    route (url) {
      return this.routes.route(url)
    },
    activeClass (segment) {
      return segment === this.currentLink ? 'active' : ''
    },
    setCurrentLink () {
      this.currentLink = new URL(location.href).pathname.split('/').pop()
    },
    handleLogout () {
      this.logout()
      this.$router.push({ path: '/contact' })
    },
    getAuthentication () {
      return this.isAuthenticated()
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d4a2a2;
  color: white;
  .logo {
    position: relative;
    max-width: 80px;
    display: flex;
    span {
        color: #ffffff;
        font-size: 2.1em;
        padding-top: 36px;
        font-family: 'Lato', sans-serif;
        font-weight: 900;
        text-shadow: 1px 1px 0px #b72828, 2px 2px 0px #b72828, 3px 3px 0px #b72828, 4px 4px 0px #b72828, 5px 5px 0px #b72828, 6px 6px 0px #b72828;
    }
  }
  ul {
    display: flex;
    list-style-type: none;
    li {
        a {
            display: inline-block;
            color: white;
            font-weight: 400;
            margin-left: 40px;
            text-decoration: none;
            &.active {
                color:#fff;
            }
        }
    }
  }
  .user{
    display: flex;
    .user-image{
      width: 100px;
      height: 100px;
      position: absolute;
      right: 100px;
      top: 13px;
    }
  }
}
</style>
