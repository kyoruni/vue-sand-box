<template>
  <div class="parent">
    <h5 class="mt-2">Parent</h5>
    <b-button variant="info" @click="parentButton">親ボタン</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    parentButton () {
      alert('親コンポーネント')
    }
  }
}
</script>
