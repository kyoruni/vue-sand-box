<template>
  <div class="left" id="left">
    <draggable group="poke" :list="leftBlocks">
      <!-- item -->
      <div v-for="leftBlock in leftBlocks" :key="leftBlock.no" class="card mb-2">
        <div class="card-body">
          {{ leftBlock.kind }}
        </div>
        <div class="card-footer">
          {{ leftBlock.name }}
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data () {
    return {
      leftBlocks: [
        { no: '025', name: 'ピカチュウ', kind: 'ねずみポケモン' },
        { no: '151', name: 'ミュウツー', kind: 'いでんしポケモン' }
      ]
    }
  }
}
</script>
