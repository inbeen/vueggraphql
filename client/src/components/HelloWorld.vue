<template>
  <div class='hello'>
    <p>{{ getMessage }}</p>
    <p class='btn'>
      <button @click='increment(1)'>+ 1</button>
      {{ count }}
      <button @click='decrement(1)'>- 1</button>
    </p>
    <p><input v-model='id' placeholder='请输入 CNode 用户名'></p>
    <p><button @click='setUser()'>获 取 头 像</button></p>
    <!-- <p><img v-if='img.length == 0' :src='img'></p> -->
    <p><img :src='avatar'></p>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  avatar: string = '';
  id: string = '';

  @Prop() msg: string;
  @Prop() count: number;
  @Prop() increment: (n: number) => void;
  @Prop() decrement: (n: number) => void;
  @Prop() getCNode: (id: string) => Promise<any>;

  get getMessage(): string {
    return this.msg;
  }

  setUser() {
    if (this.id.length === 0) {
      alert('报上名来');
      return;
    }
    this.getCNode(this.id).then((res: Ajax.AjaxResponse) => {
      this.avatar = res.data.data.avatar_url;
    }).catch((err) => {
      alert('查无此人');
    });
  }
}
</script>

<style scoped lang='scss'>
p {
  width: 333px;
  margin: 16px auto;
  text-align: center;
}
.btn {
  display: flex;
  justify-content: space-around;
}
</style>
