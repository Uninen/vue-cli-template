import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { State } from './types'

export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    INCREMENT(state) {
      state.count += 1
    },
  },
})
