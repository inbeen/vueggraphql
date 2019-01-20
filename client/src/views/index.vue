<template>
  <div class='container'>
    <div id='nav'>
      <router-link to='/'>Home</router-link> |
      <router-link to='/user'>User</router-link> |
      <router-link to='/about'>About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Index extends Vue {
}
</script>

<style lang='scss'>
.container {
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
