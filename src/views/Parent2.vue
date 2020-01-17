<template>
  <div class="parent2">
    Parent2
    <div class="d-flex">
      <left class="col-8"></left>
      <right class="col-4"></right>
    </div>
  </div>
</template>

<script>
import left from '../components/Parent2/Left.vue'
import right from '../components/Parent2/Right.vue'

export default {
  components: {
    left,
    right
  }
}
</script>
