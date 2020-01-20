<template>
  <div class="fire">
    <h6 class="mt-2">ほのお</h6>

    <draggable group="poke">
      <!-- item -->
      <div class="card mb-2">
        <div class="card-body">とかげポケモン</div>
        <div class="card-footer">ヒトカゲ</div>
      </div>
      <!-- item -->
      <div class="card mb-2">
        <div class="card-body">ひねずみポケモン</div>
        <div class="card-footer">ヒノアラシ</div>
      </div>
      <!-- item -->
      <div class="card mb-2">
        <div class="card-body">ひよこポケモン</div>
        <div class="card-footer">アチャモ</div>
      </div>
    </draggable>

    <!-- 閉じるボタン -->
    <b-button @click="closeTab" size="sm" class="float-right">
      閉じる
    </b-button>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  methods: {
    closeTab () {
      this.$emit('close')
    }
  }
}
</script>
