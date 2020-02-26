<template>
  <div class="calendar">
    <VCalendar :attributes="attributes"/>
  </div>
</template>

<script>
import VCalendar from 'v-calendar/lib/components/calendar.umd'

export default {
  name: 'Calendar',
  components: {
    VCalendar
  },
  data () {
    return {
      attributes: [
        {
          key: 'today',
          highlight: true,
          dates: [
            { start: new Date(2020, 1, 3), end: new Date(2020, 1, 5) }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.calendar {
  margin: 20px;
}
</style>
