<template>
  <div class="drag-resize2">
    <div class="parent-area">
      <div class="child-area" ref="hoge">
        child area
        <div class="child-area-handle" @click="clickAction">↓</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drag-resize2',
  methods: {
    clickAction () {
      alert('clickAction')
      this.$refs.hoge.style.height = '100px'
    }
  }
}
</script>

<style scoped>
.parent-area {
  width: 500px;
  height: 500px;
  border: 1px solid red
}

.child-area {
  width: 500px;
  height: 300px;
  background: #ff99cc;
  position: relative;
}

.child-area-handle {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  border-radius: 50%;
  background: rgba(0,0,0,0.5); /* ウィンドウは透過させる */
  position: absolute;
  bottom: -1rem;
  right: 1rem;
  cursor: pointer
}
</style>
