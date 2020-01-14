<template>
  <div class="draggable">
    <b-row class="mt-2">
      <!-- フルーツ -->
      <b-col cols="3">
        <b-list-group>
          <draggable tag :options="{group:'foods'}">
            <b-list-group-item v-for="fruit in fruits" :key="fruit.no">
              {{ fruit.name }}
              <b-badge pill variant="info" class="pull-right">{{ fruit.categoryName }}</b-badge>
            </b-list-group-item>
          </draggable>
        </b-list-group>
      </b-col>
      <!-- 野菜 -->
      <b-col cols="3">
        <b-list-group>
          <draggable tag :options="{group:'foods'}">
            <b-list-group-item v-for="vegetable in vegetables" :key="vegetable.no">
              {{ vegetable.name }}
              <b-badge pill variant="info">{{ vegetable.categoryName }}</b-badge>
            </b-list-group-item>
          </draggable>
        </b-list-group>
      </b-col>
      <!-- 曜日 -->
      <b-col cols="3">
        <b-list-group>
          <draggable tag>
            <b-list-group-item v-for="weekday in weekdays" :key="weekday.no">
              {{ weekday.name }}
              <b-badge pill variant="info">{{ weekday.categoryName }}</b-badge>
            </b-list-group-item>
          </draggable>
        </b-list-group>
      </b-col>
      <!-- 紅茶 -->
      <b-col cols="3">
        <b-list-group>
          <draggable tag>
            <b-list-group-item v-for="tea in teas" :key="tea.no">
              {{ tea.name }}
              <b-badge pill variant="info">{{ tea.categoryName }}</b-badge>
            </b-list-group-item>
          </draggable>
        </b-list-group>
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
        { no: 1, name: 'りんご', categoryName: '果物' },
        { no: 2, name: 'いちご', categoryName: '果物' },
        { no: 3, name: 'ぶどう', categoryName: '果物' },
        { no: 4, name: 'みかん', categoryName: '果物' }
      ],
      vegetables: [
        { no: 5, name: 'キャベツ', categoryName: '野菜' },
        { no: 6, name: 'にんじん', categoryName: '野菜' },
        { no: 7, name: 'トマト', categoryName: '野菜' },
        { no: 8, name: 'レタス', categoryName: '野菜' }
      ],
      weekdays: [
        { no: 9, name: '月曜日', categoryName: '曜日' },
        { no: 10, name: '火曜日', categoryName: '曜日' },
        { no: 11, name: '水曜日', categoryName: '曜日' },
        { no: 12, name: '木曜日', categoryName: '曜日' },
        { no: 13, name: '金曜日', categoryName: '曜日' },
        { no: 14, name: '土曜日', categoryName: '曜日' },
        { no: 15, name: '日曜日', categoryName: '曜日' }
      ],
      teas: [
        { no: 16, name: '午後の紅茶', categoryName: '紅茶' },
        { no: 17, name: 'リプトン', categoryName: '紅茶' },
        { no: 18, name: '紅茶花伝', categoryName: '紅茶' }
      ]
    }
  }
}
</script>
