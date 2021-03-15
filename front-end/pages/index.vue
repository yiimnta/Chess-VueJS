<template>
  <div class="content">
    <div class="textBox">
      <h2>It's not just Chess<br> It's a <span>Fight</span></h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <a href="#">Learn More</a>
    </div>
    <div class="imgBox">
      <img :src="require(`~/assets/etc/chess-left-img.png`)" class="chess-left-img">
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  .textBox {
    position: relative;
    max-width: 600px;
    h2 {
      color: white;
      font-size: 4em;
      line-height: 1.4em;
      font-weight: 500;
      span {
        color: #b72828;
        font-size: 1.2em;
        font-weight: 900;
      }
    }
    p {
      color: #fff;
    }
    a {
      display: inline-block;
      margin-top: 20px;
      padding: 8px 20px;
      background: #b72828;
      color: #fff;
      border-radius: 40px;
      font-weight: 500;
      letter-spacing: 1px;
      text-decoration: none;
    }
  }
  .imgBox {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    margin-top: 50px;
    img {
      min-width: 340px;
    }
  }
}

</style>
