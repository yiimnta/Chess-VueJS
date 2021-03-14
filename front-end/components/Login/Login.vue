<template>
  <div class="login-signup-form">
    <form @submit.prevent="submit()">
      <h4>Login</h4>
      <div>
        <div class="form-data">
          <span :class="{ active : formData.email && formData.email !== '' }">Username</span>
          <input v-model.trim="formData.email" v-focus  type="email" name="emailn" tabindex="1">
        </div>
        <div class="form-data">
          <span :class="{ active : formData.password && formData.password !== '' }">Password</span>
          <input v-model.trim="formData.password" type="password" name="passwordn" tabindex="2">
        </div>
        <div>
          <a href="#">Not registerd! Create an account?</a>
          <button type="submit" tabindex="3" :disabled="loading || !valid">
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { UNKNOWN_ERROR, LOGIN_ERRORS } from '@/static/errors'

export default {
  data () {
    return {
      formData: {
        email: null,
        password: null
      },
      error: null,
      loading: false
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async submit () {
      try {
        this.error = null
        this.loading = true
        await this.login({ ...this.formData })
        this.$router.push({ path: '/' })
      } catch (ex) {
        let message = ex.message.replace('GraphQL error:', ' ').trim()
        if (!LOGIN_ERRORS.includes(message)) {
          message = UNKNOWN_ERROR
        }
        this.error = { message }
      } finally {
        this.loading = false
      }
    }
  },
  computed: {
    valid () {
      return this.formData.email && this.formData.password
    }
  }
}
</script>

<style lang="scss" scoped>
.login-signup-form {
  position: absolute;
  width: 400px;
  right: 0;
  left: 0;
  margin: auto;
  top: 40%;
  background: #0000008c;
  padding: 20px 30px;
  box-shadow: 0 0 20px #0f0;
  border-radius: 10px;
  h4 {
    color: #0f0;
    border-bottom: 5px solid;
  }
  form {
    div {
      padding: 15px 0px;
      position: relative;
      .form-data {
        position: relative;
        span {
          display: block;
          position: absolute;
          z-index: 0;
          font-size: 1em;
          color: #0f0;
          transition: all 0.3s ease;
          &.active {
            top: 0px;
            color: #0f0;
            font-size: 0.6em;
          }
        }
        input {
          display: block;
          border-bottom: 1px dotted #0f0;
          position: relative;
          z-index: 1;
          background: transparent!important;
          outline: none;
          width: 100%;
          color: #fff;
          padding-left: 5px;
        }
      }
      button {
        border: 1px solid #0f0;
        color: #0f0;
        padding: 8px 20px;
        border-radius: 3px;
        float: right;
        width: 100px;
        transition: all 0.3s ease;
        &:focus, &:hover {
          background: #1d791d;
          box-shadow: 0 0 120px #0f0;
        }
        &:disabled {
          background: none;
          cursor: no-drop;
          box-shadow: none;
        }
      }
      a {
        color: #0f0;
        position: relative;
        top: 10px;
        text-decoration: none;
        outline: none;
        font-size: 12px;
      }
    }
  }
}
</style>
