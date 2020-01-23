<template>
  <div class="drag-resize">
    <div style="background: red;height: 500px; width: 500px; border: 1px solid red; position: relative;">
      <vue-draggable-resizable :w="500" :h="300" :min-width="500" :handles="['bm']" @resizing="onResize" :parent="true" :draggable="false" class="bg-info">
        <p>X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
      </vue-draggable-resizable>
    </div>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
  components: {
    VueDraggableResizable
  },
  data () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    }
  }
}
</script>
