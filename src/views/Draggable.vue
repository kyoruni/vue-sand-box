<template>
  <div class="draggable">
    <h6 class="font-weight-bold">ポケモン</h6>
    <draggable
      element="ul"
      class="list-group col-4"
      :list="pokemons">
      <li class="list-group-item"
        v-for="pokemon in pokemons"
        :key="pokemon.no">
        {{ pokemon.name }}
      </li>
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
      pokemons: [
        { no: '001', name: 'フシギダネ' },
        { no: '004', name: 'ヒトカゲ' },
        { no: '007', name: 'ゼニガメ' },
        { no: '025', name: 'ピカチュウ' }
      ]
    }
  }
}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
