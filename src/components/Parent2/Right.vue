<template>
  <div class="right">
    <h6>Parent2 Right</h6>
    <b-button-group class="d-flex">
      <b-button variant="outline-danger" class="w-100" @click="clickFireButton">
        ほのお
      </b-button>
      <b-button variant="outline-info" class="w-100" @click="clickWaterButton">
        みず
      </b-button>
      <b-button variant="outline-success" class="w-100" @click="clickGrassButton">
        くさ
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  methods: {
    clickFireButton () {
      alert('fire')
    },
    clickWaterButton () {
      alert('water')
    },
    clickGrassButton () {
      alert('grass')
    }
  }
}
</script>
