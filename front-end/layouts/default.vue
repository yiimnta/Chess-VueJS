<template>
  <section>
    <div class="circle" />
    <Header />
    <Nuxt />
  </section>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
}

.circle {
  position: absolute;
  top: 0;
  left: 0;
  background: #b72828;
  width: 100%;
  height: 100%;
  clip-path: circle(600px at right 800px);

}
</style>
