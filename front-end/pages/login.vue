<template>
  <div class="login-container flex">
    <running-line v-for="index in 18" :key="`rl_${index}`" :id-line="index" />
    <Login />
  </div>
</template>

<script>
import RunningLine from '@/components/Login/RunningLine.vue'

export default {
  components: { RunningLine },
  layout: 'loginLA'
}
</script>

<style lang="scss" scoped>
.login-container {
    background: #111;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    flex-direction: column;
}
</style>
