<template>
  <div class="water">
    <h6 class="mt-2">みず</h6>
    <b-button @click="closeWater" size="sm">閉じる</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    closeWater () {
      alert('closeWater')
    }
  }
}
</script>
