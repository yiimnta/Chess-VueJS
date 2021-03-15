<template>
  <div class="container">
    <h2 class="title" style="background: #f3f3f3">
      PAGE NOT FOUND :( !!!!
    </h2>
    <NuxtLink to="/">
      <b>Go Home</b>
    </NuxtLink>
    <br>
    <img src="~/assets/etc/404.png">
  </div>
</template>
<style>
body {
  background: #f0f8ff;
}
.container {
  margin: 0 auto;
  align-items: center;
  text-align: center;
  padding: 20px;
  max-height: 800px;
  margin-top: 10px;
  box-shadow: 0px 0px 4px 4px gray;
  border-radius: 10px;
  background: #fff;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  background: #9b84f996;
  padding: 10px;
  margin-bottom: 20px;
}
img {
  width: -webkit-fill-available;
}
</style>
