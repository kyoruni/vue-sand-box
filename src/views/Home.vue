<template>
  <div class="home">
    <div class="row">
      <div class="col-10">
        <div class="col-4">
          <h6 class="font-weight-bold">お試し</h6>
          <div class="list-group">
            <b-link to="/todo" class="list-group-item list-group-item-action">TODOリスト</b-link>
            <b-link to="/parent" class="list-group-item list-group-item-action">親子コンポーネントの処理1</b-link>
            <b-link to="/parent2" class="list-group-item list-group-item-action">親子コンポーネントの処理2</b-link>
            <b-link to="/array-copy" class="list-group-item list-group-item-action">配列のコピー</b-link>
          </div>
          <h6 class="font-weight-bold mt-2">ライブラリお試し</h6>
          <div class="list-group">
            <b-link to="/draggable" class="list-group-item list-group-item-action">ドラッグ＆ドロップ</b-link>
            <b-link to="/editor" class="list-group-item list-group-item-action">エディター表示</b-link>
            <b-link to="/calendar" class="list-group-item list-group-item-action">カレンダー表示</b-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
