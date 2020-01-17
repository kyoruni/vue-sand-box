<template>
  <div class="parent">
    <h5 class="mt-2">Parent</h5>
    <b-button variant="info" @click="parentButton" class="mr-2">親ボタン</b-button>
    <b-button variant="outline-info" @click="parentToChildButton">親コンポーネントから子メソッド</b-button>

    <!-- 子コンポーネント -->
    <child ref="childComponent" @childToParent="parentButton"></child>
  </div>
</template>

<script>
import child from '../components/Child.vue'

export default {
  components: {
    child
  },
  methods: {
    parentButton () {
      alert('親コンポーネント')
    },
    parentToChildButton () {
      this.$refs.childComponent.childButton()
    }
  }
}
</script>
