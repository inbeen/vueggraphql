<template>
  <div class='home'>
    <img alt='Vue logo' src='@/assets/logo.png'>
    <HelloWorld msg='Welcome to Vue.js + TypeScript App'
                :count='count'
                :increment='increment'
                :decrement='decrement'
                :getCNode='getCNode'/>
  </div>
</template>

<script lang='ts'>
import * as types from '@/store/constants';
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @Getter('count') count: number;
  @Mutation(types.INCREMENT) increment: () => void;
  @Mutation(types.DECREMENT) decrement: () => void;
  @Action('getCNode') getCNode: () => void;
}
</script>
