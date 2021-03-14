<template>
  <header>
    <a href="#" class="logo">
      <img :src="require(`~/assets/etc/logo2.png`)">
      <span>Chess</span>
    </a>
    <ul>
      <li><a href="" class="active">Home</a></li>
      <li><a href="/service">Service</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </header>
</template>

<script>
export default {}
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
            color: #333;
            font-weight: 400;
            margin-left: 40px;
            text-decoration: none;
            &.active {
                color:#fff;
            }
        }
    }
  }
}
</style>
