<template>
  <div class="parent">
    <h5 class="mt-2">Parent</h5>
    <b-button variant="info" @click="parentButton">親ボタン</b-button>

    <!-- 子コンポーネント -->
    <child></child>
  </div>
</template>

<script>
import child from '../components/child.vue'

export default {
  components: {
    child
  },
  methods: {
    parentButton () {
      alert('親コンポーネント')
    }
  }
}
</script>
