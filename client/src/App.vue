<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<style lang='scss'>
* {
  margin: 0;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100vh;
  background: #eee;
}
input,
input.select {
  background: transparent;
  outline: none;
  border: none;
}
</style>
