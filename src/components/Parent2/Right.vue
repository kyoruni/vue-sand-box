<template>
  <div class="right">
    <h6>Parent2 Right</h6>
    <b-button-group class="d-flex">
      <b-button variant="outline-danger" class="w-100" :class="{'active':showFireType}" @click="clickFireButton">
        ほのお
      </b-button>
      <b-button variant="outline-info" class="w-100" :class="{'active':showWaterType}" @click="clickWaterButton">
        みず
      </b-button>
      <b-button variant="outline-success" class="w-100" :class="{'active':showGrassType}" @click="clickGrassButton">
        くさ
      </b-button>
    </b-button-group>

    <div>
      <fire></fire>
      <water></water>
      <grass></grass>
    </div>
  </div>
</template>

<script>
import fire from './Types/Fire.vue'
import water from './Types/Water.vue'
import grass from './Types/Grass.vue'

export default {
  components: {
    fire,
    water,
    grass
  },
  data () {
    return {
      currentTab: 'Fire'
    }
  },
  methods: {
    clickFireButton () {
      this.currentTab = 'Fire'
    },
    clickWaterButton () {
      this.currentTab = 'Water'
    },
    clickGrassButton () {
      this.currentTab = 'Grass'
    }
  },
  computed: {
    showFireType () {
      return this.currentTab === 'Fire'
    },
    showWaterType () {
      return this.currentTab === 'Water'
    },
    showGrassType () {
      return this.currentTab === 'Grass'
    }
  }
}
</script>
