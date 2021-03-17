<template>
  <header>
    <a href="#" class="logo">
      <img :src="require(`~/assets/etc/logo2.png`)">
      <span>Chess</span>
    </a>
    <ul>
      <li>
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/service">
          News
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/board">
          Game service
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">
          Contact
        </NuxtLink>
      </li>
      <li v-if="getAuthentication() == false">
        <NuxtLink to="/login">
          Login
        </NuxtLink>
      </li>
      <li v-else>
        <a @click="handleLogout()">Logout</a>
      </li>
    </ul>
    <!-- <div class="user">
      <img :src="require(`~/assets/users/avatar/tinhcv.jpg`)" alt="tinhcv" class="user-image">
    </div> -->
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions('auth', ['logout', 'getToken']),
    ...mapGetters('auth', ['isAuthenticated']),
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
            color: #928080;
            font-weight: 400;
            margin-left: 40px;
            text-decoration: none;
            &.nuxt-link-exact-active {
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
