<template>
  <div class="login-signup-form">
    <form @submit.prevent="submit()">
      <h4>Login</h4>
      <div>
        <div class="form-data">
          <span :class="{ active : formData.email && formData.email !== '' }">Username</span>
          <input v-model="formData.email" type="email" name="emailn" tabindex="1">
        </div>
        <div class="form-data">
          <span :class="{ active : formData.password && formData.password !== '' }">Password</span>
          <input v-model="formData.password" type="password" name="passwordn" tabindex="2">
        </div>
        <div>
          <a href="#">Have already an account?</a>
          <button type="submit" tabindex="3">
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    submit () {
      return false
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
        }
      }
      button {
        border: 1px solid #0f0;
        color: #0f0;
        padding: 8px 20px;
        border-radius: 3px;
        float: right;
        width: 100px;
        &:focus {
          background: #3cec93;
          color: black;
          outline: none;
          box-shadow: 0 0 120px #0f0;
        }
      }
      a {
        color: #0f0;
        position: relative;
        top: 10px;
        text-decoration: none;
        outline: none;
      }
    }
  }
}
</style>
