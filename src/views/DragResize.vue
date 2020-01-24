<template>
  <div class="drag-resize">
    <div>
      <!-- 1つ目の要素 -->
      <div class="div1" :style="{ height: changeheight1 } ">
        <vue-draggable-resizable :w="width1" :h="height1" :min-height="100" :min-width="500" :handles="['bm']" :parent="false" :draggable="false"
          @resizing="onResize" class="divSection">
          <p>Width: {{ width1 }} / Height: {{ height1 }}</p>
          div1
        </vue-draggable-resizable>
      </div>
      <!-- 2つ目の要素 -->
      <div class="div2" :style="{ height: changeheight2 } ">
        <vue-draggable-resizable :w="width2" :h="height2" :min-height="100" :min-width="500" :handles="['bm']" :parent="false" :draggable="false"
          @resizing="onResize2" class="divSection">
          <p>Width: {{ width2 }} / Height: {{ height2 }}</p>
          div2
        </vue-draggable-resizable>
      </div>
      <!-- 3つ目の要素 -->
      <div class="div3" :style="{ height: changeheight3 } ">
        <vue-draggable-resizable :w="width3" :h="height3" :min-height="100" :min-width="500" :handles="['bm']" :parent="false" :draggable="false"
          @resizing="onResize3" class="divSection">
          <p>Width: {{ width3 }} / Height: {{ height3 }}</p>
          div3
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
      width1: 500,
      height1: 200,
      width2: 500,
      height2: 200,
      width3: 500,
      height3: 200
    }
  },
  methods: {
    /* xとyも渡さないとリサイズ失敗するので必要 */
    onResize (x, y, width, height) {
      this.width1 = width
      this.height1 = height
    },
    onResize2 (x, y, width, height) {
      this.width2 = width
      this.height2 = height
    },
    onResize3 (x, y, width, height) {
      this.width3 = width
      this.height3 = height
    }
  },
  computed: {
    changeheight1 () {
      return this.height1 + 'px'
    },
    changeheight2 () {
      return this.height2 + 'px'
    },
    changeheight3 () {
      return this.height3 + 'px'
    }
  }
}
</script>

<style scoped>
.div1 {
  background: yellow;
  width: 500px;
  border: 1px solid red;
  position: relative;
  z-index: 999 /* div1の上にdiv2が重なるとドラッグできなくなるので、上のブロックから順に大きい数を振る */
}

.div2 {
  background: pink;
  width: 500px;
  border: 1px solid blue;
  position: relative;
  z-index: 888
}

.div3 {
  background: lime;
  width: 500px;
  border: 1px solid green;
  position: relative;
  z-index: 777
}

.divSection {
  padding: 20px
}
</style>

<style>
/* style scope だと別コンポーネントにスタイル持っていけないので、styleに別出し */
.handle {
  background: red;
  cursor: pointer
}
/* ハンドルドラッグ中 */
.handle:active {
  background: blue;
  cursor: row-resize
}
</style>
