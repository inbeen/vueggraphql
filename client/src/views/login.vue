<template>
  <div class='login'>
    <input type='text' v-model='username' placeholder='Username'>
    <input type='password' v-model='password' placeholder='Password'>
    <a @click='login'>Sign in</a>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';

@Component({
})
export default class Login extends Vue {
  username: string = '';
  password: string = '';

  login() {
    if (!this.username || this.password.length < 5) {
      alert('Error');
      return;
    }
    this.$apollo.mutate({
      mutation: gql`mutation ($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          id
          token
        }
      }`,
      variables: {
        username: this.username,
        password: this.password
      }
    }).then(res => {
      localStorage.setItem('user_id', res.data.login.id);
      localStorage.setItem('apollo_token', res.data.login.token);
      this.$router.replace({ path: '/user' });
    }).catch(e => {
      alert(e);
    });
  }
}
</script>

<style lang='scss'>
.login {
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  padding: 20px 40px;
  border-radius: 20px;
  background: #fff;
  input {
    margin-bottom: 20px;
    display: block;
    width: 100%;
    font-size: 20px;
  }
  a {
    display: block;
    width: 100%;
    height: 30px;
    color: #fff;
    background: #42b983;
    line-height: 30px;
    text-align: center;
    border-radius: 6px;
  }
}
</style>
