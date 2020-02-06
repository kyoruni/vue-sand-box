<template>
  <div class="todo">
    <b-row>
      <b-col cols="4">
        <b-form class="mt-3">
          <b-form-group label="タスク" label-for="task">
            <b-form-input v-model="textInput" id="task" type="text" placeholder="タスクを入力">
            </b-form-input>
          </b-form-group>
          <div class="text-right">
            <b-button type="button" variant="outline-info" class="mr-2" @click="addButton">登録</b-button>
            <b-button type="reset" variant="outline-danger">クリア</b-button>
          </div>
        </b-form>
      </b-col>
      <b-col cols="8">
        <b-list-group flush>
          <b-list-group-item v-for="task in tasks" :key="task.id">
            {{ task.id }}：{{ task.title }}
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textInput: '',
      tasks: [
        { id: 1, title: '買い物' },
        { id: 2, title: 'ゴミ捨て' },
        { id: 3, title: '掃除機' }
      ]
    }
  },
  methods: {
    addButton () {
      let newTask = { id: this.maxId + 1, title: this.textInput }
      this.tasks.push(newTask)
    }
  },
  computed: {
    maxId () {
      let allTasksId = this.tasks.map(task => {
        return task.id
      })
      return Math.max.apply(null, allTasksId)
    }
  }
}
</script>
