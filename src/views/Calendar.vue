<template>
  <div class="calendar">
    <VCalendar/>
  </div>
</template>

<script>
import VCalendar from 'v-calendar/lib/components/calendar.umd'

export default {
  name: 'Calendar',
  components: {
    VCalendar
  }
}
</script>
