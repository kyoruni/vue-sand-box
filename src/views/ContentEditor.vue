<template>
  <div class="content-editor">
    <div class="d-flex">
      <div class="col-8 bg-info">
        left
      </div>
      <!-- Right -->
      <div class="col-4 bg-warning">
        <b-card v-for="part in parts" :key="part.id" class="mb-2 mx-auto">
          <b-card-text>
            {{ part.name }}
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      parts: [
        { id: 1, name: 'Text' },
        { id: 2, name: 'Button' }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 60%
}
</style>
