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
            <div class="d-flex justify-content-between">
              <div class="text-left">
                <b-badge pill v-if="task.status === 0" class="task-label mr-2">
                  New
                </b-badge>
                <b-badge pill v-if="task.status === 1" variant="warning" class="task-label mr-2">
                  Now
                </b-badge>
                <b-badge pill v-if="task.status === 2" variant="success" class="task-label mr-2">
                  Done
                </b-badge>
                {{ task.id }}：{{ task.title }}
              </div>
              <div class="text-right">
                <b-button type="button" variant="outline-danger" size="sm" @click="deleteButton(task)">削除</b-button>
              </div>
            </div>
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
        { id: 1, title: '買い物', status: 0 },
        { id: 2, title: 'ゴミ捨て', status: 1 },
        { id: 3, title: '掃除機', status: 2 }
      ]
    }
  },
  methods: {
    addButton () {
      let newTask = { id: this.maxId + 1, title: this.textInput }
      this.tasks.push(newTask)
    },
    deleteButton (task) {
      let targetTaskIndex = this.tasks.indexOf(task)
      this.tasks.splice(targetTaskIndex, 1)
    }
  },
  computed: {
    maxId () {
      // タスクが1件もない場合、0を返す
      if (this.tasks.length === 0) return 0

      let allTasksId = this.tasks.map(task => {
        return task.id
      })
      return Math.max.apply(null, allTasksId)
    }
  }
}
</script>

<style scoped>
.task-label {
  width: 50px
}
</style>
