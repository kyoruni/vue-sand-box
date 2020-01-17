<template>
  <div class="child">
    <h5 class="mt-2">Child</h5>
    <b-button variant="info" @click="childButton">子ボタン</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    childButton () {
      alert('子コンポーネント')
    }
  }
}
</script>
