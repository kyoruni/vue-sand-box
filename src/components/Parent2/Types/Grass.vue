<template>
  <div class="grass">
    <h6 class="mt-2">くさ</h6>
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
