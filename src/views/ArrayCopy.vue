<template>
  <div class="array-copy">
    <!-- categories -->
    <div class="categories">
      <h5>Categories</h5>
      <div class="row">
        <div v-for="category in categories" :key="category.id" class="col-4">
          <h6>{{ category.id }}：{{ category.name }}</h6>
          <ul class="list-group">
            <li v-for="item in category.items" :key="item.id" class="list-group-item">
              {{ item.id }}-{{ item.id }}：{{ item.name }}
            </li>
          </ul>
          <!-- ボタン -->
          <div class="button mt-2">
            <button class="btn btn-info" @click="addButton(category.id)">
              {{ category.name }} +
            </button>
          </div>
        </div>
      </div>
  </div>

    <!-- before Categories -->
    <div class="before-categories mt-3">
      <h5>before Categories</h5>
      <div class="row">
        <div v-for="beforeCategory in beforeCategories" :key="beforeCategory.id" class="col-4">
          <h6>{{ beforeCategory.id }}：{{ beforeCategory.name }}</h6>
          <ul class="list-group">
            <li v-for="beforeItem in beforeCategory.items" :key="beforeItem.id" class="list-group-item">
              {{ beforeItem.id }}-{{ beforeItem.id }}：{{ beforeItem.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        {
          id: 1,
          name: '野菜',
          items: [
            { id: 1, name: 'トマト' },
            { id: 2, name: 'レタス' },
            { id: 3, name: 'たまねぎ' }
          ]
        },
        {
          id: 2,
          name: '果物',
          items: [
            { id: 1, name: 'りんご' },
            { id: 2, name: 'メロン' },
            { id: 3, name: 'さくらんぼ' }
          ]
        }
      ],
      beforeCategories: []
    }
  },
  // 画面表示時に、CategoriesをbeforeCategoriessにコピーする
  mounted () {
    this.beforeCategories = this.categories.slice()
  },
  methods: {
    // Itemsの末尾に新しいアイテムを追加
    addButton (categoryId) {
      // 対象カテゴリーのインデックスを取得
      let categoryIndex = this.categories.findIndex(category => category.id === categoryId)

      // 対象カテゴリーの名前を取得
      let categoryName = this.categories[categoryIndex].name

      // 新規アイテムのidと名前を設定
      let newItemId = this.categories[categoryIndex].items.length + 1
      let newItemName = categoryName + newItemId

      // 対象カテゴリーに、新規アイテムを追加
      let newItem = { id: newItemId, name: newItemName }
      this.categories[categoryIndex].items.push(newItem)
    }
  }
}
</script>
