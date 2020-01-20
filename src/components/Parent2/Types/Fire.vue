<template>
  <div class="fire mt-2">
    <draggable :group="{ name: 'poke', pull: 'clone', put: false }" :list="pokemons">
      <!-- item -->
      <div v-for="pokemon in pokemons" :key="pokemon.no" class="card mb-2">
        <div class="card-body">
          {{ pokemon.kind }}
        </div>
        <div class="card-footer">
          {{ pokemon.name }}
        </div>
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
  data () {
    return {
      pokemons: [
        { no: '004', name: 'ヒトカゲ', kind: 'とかげポケモン' },
        { no: '155', name: 'ヒノアラシ', kind: 'ひねずみポケモン' },
        { no: '255', name: 'アチャモ', kind: 'ひよこポケモン' }
      ]
    }
  },
  methods: {
    closeTab () {
      this.$emit('close')
    }
  }
}
</script>
