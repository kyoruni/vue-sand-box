<template>
  <div class="filter">
    <!-- 総務部だけ -->
    <div v-for="(department, index) in departments" :key="index">
      <strong>{{ department.name }}</strong>
      <div v-for="(employee, index) in employeesList(department)" :key="index">
        {{ employee.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 従業員
      employees: [
        { id: 1, name: '総務一郎', department_id: 1 },
        { id: 2, name: '総務二郎', department_id: 1 },
        { id: 3, name: '開発一郎', department_id: 2 },
        { id: 4, name: '開発二郎', department_id: 2 },
        { id: 5, name: '開発三郎', department_id: 2 },
        { id: 6, name: '人事一郎', department_id: 3 }
      ],
      // 部署
      departments: [
        { id: 1, name: '総務部' },
        { id: 2, name: '開発部' },
        { id: 3, name: '人事部' }
      ]
    }
  },
  computed: {
    employeesList: function (department) {
      return this.employees.filter(function (employee, department) {
        return employee.department_id === department.id
      })
    }
  }
}
</script>
