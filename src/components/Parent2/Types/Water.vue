<template>
  <div class="water">
    <h6 class="mt-2">みず</h6>
    <b-button @click="closeTab" size="sm" class="float-right">
      閉じる
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    closeTab () {
      this.$emit('close')
    }
  }
}
</script>
