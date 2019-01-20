<template>
  <div class='user'>
    <a v-if='user.id' @click='logout'>Sign out</a>
    <a v-else @click='login'>Sign in</a>
    <a @click='changeUserId'>Change userId</a>
    <p>- - - - - - - - - -</p>
    <p>Username: {{ user.username || '/' }}</p>
    <p>- - - - - - - - - -</p>
    <p v-for='(v, k) in user.posts' :key='k'>
      {{ v.title }}, {{ v.content }}
    </p>
  </div>
</template>

<script lang='ts'>
import { Component, Model, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';

@Component({
  apollo: {
    user: {
      query: gql`query ($id: ID!) {
        user(id: $id) {
          id
          username
          posts {
            title
            content
          }
        }
      }`,
      variables() {
        return {
          id: this.userId
        };
      },
      skip() {
        return this.userId === 0;
      },
      update: data => data.user || {},
      error: e => {
        if (e.graphQLErrors) {
          console.dir(e.graphQLErrors[0].message);
        }
      }
    }
  }
})
export default class Home extends Vue {
  userId: number = 0;
  user: object = {};

  created() {
    // this.userId = parseInt(localStorage.getItem('user_id') || '0', 10);
    this.getUser();
  }

  getUser() {
    // this.$apollo.query({
    //   query: gql`query {
    //     viewer {
    //       id,
    //       username,
    //       posts {
    //         title,
    //         content
    //       }
    //     }
    //   }`,
    // }).then(res => {
    //   this.user = res.data.viewer;
    // });
  }

  changeUserId() {
    if (this.userId === 1) {
      this.userId = 2;
    } else {
      this.userId = 1;
    }
  }

  login() {
    this.$router.push({ path: '/login' });
  }

  logout() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('apollo_token');
    this.$router.push({ path: '/login' });
  }
}
</script>

<style lang='scss'>
.user {
  a {
    display: inline-block;
    margin-bottom: 10px;
    width: 150px;
    height: 32px;
    line-height: 32px;
    background: #fff;
    border-radius: 5px;
    &:nth-child(1) {
      margin-right: 30px;
    }
  }
}
</style>
