<template>
  <div class="home">
    <div class="row">
      <div class="col-10">
        <div class="col-4">
          <h6 class="font-weight-bold">お試し</h6>
          <div class="list-group">
            <router-link to="/todo" class="list-group-item list-group-item-action">TODOリスト</router-link>
            <router-link to="/parent" class="list-group-item list-group-item-action">親子コンポーネントの処理1</router-link>
            <router-link to="/parent2" class="list-group-item list-group-item-action">親子コンポーネントの処理2</router-link>
            <router-link to="/array-copy" class="list-group-item list-group-item-action">配列のコピー</router-link>
          </div>
          <h6 class="font-weight-bold mt-2">ライブラリお試し</h6>
          <div class="list-group">
            <router-link to="/draggable" class="list-group-item list-group-item-action">ドラッグ＆ドロップ</router-link>
            <router-link to="/editor" class="list-group-item list-group-item-action">エディター表示</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
