<template>
  <div class="content-editor">
    <div class="d-flex">
      <!-- Left -->
      <div class="col-8">
        <draggable group="layouts" :list="layouts" id="left">
          <div v-for="layout in layouts" :key="layout.id">
            <div :class="layout.class">
              {{ layout.body }}
            </div>
          </div>
        </draggable>
      </div>
      <!-- Right -->
      <div class="col-4">
        <draggable :group="{ name: 'layouts', pull: 'clone', put: false }" :move="checkMove" :list="parts" id="right">
          <b-card v-for="part in parts" :key="part.id" class="mb-2 mx-auto">
            <b-card-text>
              {{ part.name }}
            </b-card-text>
          </b-card>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  methods: {
    checkMove: function (e) {
      if (e.to.id === 'left') {
        return true
      }
      return false
    }
  },
  data () {
    return {
      parts: [
        { id: 1, name: 'Text' },
        { id: 2, name: 'Button' }
      ],
      layouts: [
        { id: 1, body: 'Header', class: 'bg-info' },
        { id: 2, body: 'Body', class: 'bg-warning' },
        { id: 3, body: 'Footer', class: 'bg-success' }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 60%;
  cursor: pointer
}
</style>
