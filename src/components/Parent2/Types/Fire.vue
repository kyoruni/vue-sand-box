<template>
  <div class="fire">
    <h6 class="mt-2">ほのお</h6>
    <b-button @click="closeFire" size="sm">閉じる</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    closeFire () {
      alert('closeFire')
    }
  }
}
</script>
