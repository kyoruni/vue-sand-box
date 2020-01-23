<template>
  <div class="drag-resize">
    <div>

      <div class="div1">
        <vue-draggable-resizable :w="500" :h="200" :min-height="200" :min-width="500" :handles="['bm']" @resizing="onResize" :parent="true" :draggable="false" style="background: rgba(0,0,0,0.5); padding: 20px;">
          <p>X: {{ x1 }} / Y: {{ y1 }} - Width: {{ width1 }} / Height: {{ height1 }}</p>
          div1
        </vue-draggable-resizable>
      </div>

      <div class="div2">
        <vue-draggable-resizable :w="500" :h="200" :min-width="500" :handles="['bm']" @resizing="onResize2" :parent="true" :draggable="true" style="background: rgba(255,0,0,0.5); padding: 20px;">
          <p>X: {{ x2 }} / Y: {{ y2 }} - Width: {{ width2 }} / Height: {{ height2 }}</p>
          div2
        </vue-draggable-resizable>
      </div>
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
      width1: 0,
      height1: 0,
      x1: 0,
      y1: 0,
      width2: 0,
      height2: 0,
      x2: 0,
      y2: 0
    }
  },
  methods: {
    onResize (x, y, width, height) {
      this.x = x
      this.y = y
      this.width1 = width
      this.height1 = height
    },
    onResize2 (x, y, width, height) {
      this.x = x
      this.y = y
      this.width2 = width
      this.height2 = height
    }
  }
}
</script>

<style>
.handle {
  cursor: row-resize
}
</style>

<style scoped>
.div1 {
  background: yellow;
  height: 300px;
  width: 500px;
  border: 1px solid red;
  position: relative;
  z-index: 999
}

.div2 {
  height: 300px;
  width: 500px;
  border: 1px solid blue;
  position: relative;
  top: 0px;
  z-index: 888
}
</style>
