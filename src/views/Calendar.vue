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
          dates: new Date()
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
