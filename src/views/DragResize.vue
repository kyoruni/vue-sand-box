<template>
  <div class="drag-resize">
    <div v-for="(content, index) in contents" :key="index" class="section">
      <vue-draggable-resizable class="contents" :style="content.styles"
        :w="content.width"
        :h="content.height"
        :min-width="500"
        :min-height="100"
        :handles="['bm']"
        :draggable="false"
        @resizing="onResize"
        @activated="onActivate(content, index)"
        @change="changeElement">
        {{ content.name }}
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
      contents: [
        { name: 'header', width: 500, height: 200, styles: [{ background: 'red', zIndex: 9999, position: 'relative' }] },
        { name: 'body', width: 500, height: 200, styles: [{ background: 'pink', zIndex: 8888, position: 'relative' }] },
        { name: 'footer', width: 500, height: 200, styles: [{ background: 'lime', zIndex: 7777, position: 'relative' }] }
      ],
      width: '',
      height: '',
      index: ''
    }
  },
  methods: {
    /* クリックした要素の情報を取得 */
    onActivate (element, index) {
      this.width = element.width
      this.height = element.height
      this.index = index
    },
    /* アクティブな要素の変更があったら反映する */
    changeElement () {
      this.contents[this.index].height = this.height
    },
    /* リサイズ後の高さを取得 */
    onResize (height) {
      this.height = height
    }
  }
}
</script>

<style scoped>
.contents {
  padding: 20px
}
</style>

<style>
/* style scope だと別コンポーネントにスタイル持っていけないので、styleに別出し */
.handle {
  background: red
}
/* ハンドルドラッグ中 */
.handle:active {
  background: blue;
  cursor: row-resize
}
</style>
