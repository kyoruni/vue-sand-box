<template>
  <div class="child">
    <h5 class="mt-2">Child</h5>
    <b-button variant="info" @click="childButton" class="mr-2">子ボタン</b-button>
    <b-button variant="outline-info" @click="childToParentButton">子コンポーネントから親メソッド</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    childButton () {
      alert('子コンポーネント')
    },
    childToParentButton () {
      this.$emit('childToParent')
    }
  }
}
</script>
