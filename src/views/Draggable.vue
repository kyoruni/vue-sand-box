<template>
  <div class="draggable">
    <b-row class="mt-2">
      <!-- 果物 -->
      <b-col cols="3">
        <h6 class="font-weight-bold">果物</h6>
        <ul class="list-group">
          <draggable tag group="foods">
            <li class="list-group-item" v-for="fruit in fruits" :key="fruit.no">
              {{ fruit.name }}
              <b-badge pill variant="info" class="pull-right">
                ID: {{ fruit.no }}
              </b-badge>
            </li>
          </draggable>
        </ul>
      </b-col>
      <!-- 野菜 -->
      <b-col cols="3">
        <h6 class="font-weight-bold">野菜</h6>
        <ul class="list-group">
          <draggable tag group="foods">
            <li class="list-group-item" v-for="vegetable in vegetables" :key="vegetable.no">
              {{ vegetable.name }}
              <b-badge pill variant="info">
                ID: {{ vegetable.no }}
              </b-badge>
            </li>
          </draggable>
        </ul>
      </b-col>
      <!-- 曜日 -->
      <b-col cols="3">
        <h6 class="font-weight-bold">曜日</h6>
        <ul class="list-group">
          <draggable tag>
            <li class="list-group-item" v-for="weekday in weekdays" :key="weekday.no">
              {{ weekday.name }}
              <b-badge pill variant="info">
                ID: {{ weekday.no }}
              </b-badge>
            </li>
          </draggable>
        </ul>
      </b-col>
      <!-- 紅茶 -->
      <b-col cols="3">
        <h6 class="font-weight-bold">紅茶</h6>
        <ul class="list-group">
          <draggable tag>
            <li class="list-group-item" v-for="tea in teas" :key="tea.no">
              {{ tea.name }}
              <b-badge pill variant="info">
                ID: {{ tea.no }}
              </b-badge>
            </li>
          </draggable>
        </ul>
      </b-col>
    </b-row>
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
      fruits: [
        { no: 1, name: 'りんご' },
        { no: 2, name: 'いちご' },
        { no: 3, name: 'ぶどう' },
        { no: 4, name: 'みかん' }
      ],
      vegetables: [
        { no: 5, name: 'キャベツ' },
        { no: 6, name: 'にんじん' },
        { no: 7, name: 'トマト' },
        { no: 8, name: 'レタス' }
      ],
      weekdays: [
        { no: 9, name: '月曜日' },
        { no: 10, name: '火曜日' },
        { no: 11, name: '水曜日' },
        { no: 12, name: '木曜日' },
        { no: 13, name: '金曜日' },
        { no: 14, name: '土曜日' },
        { no: 15, name: '日曜日' }
      ],
      teas: [
        { no: 16, name: '午後の紅茶' },
        { no: 17, name: 'リプトン' },
        { no: 18, name: '紅茶花伝' }
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
