import * as types from '../constants';
import { HomeState } from './interface';
import request from '@/utils/api';
import { Commit } from 'vuex';

const state: HomeState = {
  count: 0,
};

const getters = {
  count: (state: HomeState) => state.count,
};

const mutations = {
  [types.INCREMENT](state: HomeState, num: number) {
    state.count += num;
  },
  [types.DECREMENT](state: HomeState, num: number) {
    state.count -= num;
  },
};

const actions = {
  async getCNode(context: { commit: Commit }, id: string) {
    return request.get(`https://cnodejs.org/api/v1/user/${ id }`);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
