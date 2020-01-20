<template>
  <div class="left">
    <draggable>
    <div class="bg-info">header</div>
    <div class="bg-warning">body</div>
    <div class="bg-success">footer</div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  }
}
</script>
