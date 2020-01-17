<template>
  <div class="grass">
    <h6 class="mt-2">くさ</h6>
    <b-button @click="closeGrass" size="sm">閉じる</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    closeGrass () {
      alert('closeGrass')
    }
  }
}
</script>
