<template>
  <div class="todo">
    <b-row>
      <b-col cols="4">
        <b-form class="mt-3">
          <b-form-group label="タスク" label-for="task">
            <b-form-input id="task" type="text" placeholder="タスクを入力">
            </b-form-input>
          </b-form-group>
          <div class="text-right">
            <b-button type="button" variant="outline-info" class="mr-2">登録</b-button>
            <b-button type="reset" variant="outline-danger">クリア</b-button>
          </div>
        </b-form>
      </b-col>
      <b-col cols="8">
        <b-list-group flush>
          <b-list-group-item>item 1</b-list-group-item>
          <b-list-group-item>item 1</b-list-group-item>
          <b-list-group-item>item 1</b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>
