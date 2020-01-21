<template>
  <div class="draggable">
    <div class="d-flex">
      <!-- ポケモン -->
      <div class="col-4">
        <h6 class="font-weight-bold">ポケモン</h6>
        <draggable group="monsters" tag="ul" class="list-group" :list="pokemons">
          <li class="list-group-item" v-for="pokemon in pokemons" :key="pokemon.no">
            {{ pokemon.name }}
          </li>
        </draggable>
      </div>
      <!-- デジモン -->
      <div class="col-4">
        <h6 class="font-weight-bold">デジモン</h6>
        <draggable group="monsters" tag="ul" class="list-group" :list="digimons">
          <li class="list-group-item" v-for="digimon in digimons" :key="digimon.no">
            {{ digimon.name }}
          </li>
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
  data () {
    return {
      pokemons: [
        { no: '001', name: 'フシギダネ' },
        { no: '004', name: 'ヒトカゲ' },
        { no: '007', name: 'ゼニガメ' },
        { no: '025', name: 'ピカチュウ' }
      ],
      digimons: [
        { no: '111', name: 'アグモン' },
        { no: '222', name: 'カブテリモン' },
        { no: '333', name: 'エンジェウーモン' },
        { no: '444', name: 'セントガルゴモン' }
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
