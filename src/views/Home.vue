<template>
  <div class="prose">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="mb-6">
      <p>
        {{ count }}
      </p>
      <button
        @click="increment"
        class="px-2 py-1 font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-400"
      >
        Increment
      </button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p>Version {{ version }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'
import { State } from '../types'

import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore<State>(key)
    const count = computed(() => store.state.count)
    const increment = () => {
      store.commit('INCREMENT')
    }

    return {
      version: process.env.APP_VERSION,
      count,
      increment,
    }
  },
})
</script>
