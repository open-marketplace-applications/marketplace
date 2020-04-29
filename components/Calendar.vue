<template>
  <kalendar :configuration="calendar_settings" :events.sync="events" />
</template>

<script>

export default {
  name: "Calendar",
  components: {},
  data() {
    return {
      calendar_settings: {
        style: "material_design",
        view_type: "week",
        cell_height: 20,
        scrollToNow: true,
        start_day: new Date().toISOString(),
        read_only: false,
        day_starts_at: 0,
        day_ends_at: 24,
        overlap: true,
        hide_dates: ["2019-10-31"], // Spooky
        hide_days: [6],
        past_event_creation: true
      },
      events: [
        {
          from: "2020-05-1T18:00:00Z",
          to: "2020-05-1T19:00:00Z",
          data: "Event 1"
        },
        {
          from: "2020-05-2T19:00:00Z",
          to: "2020-05-2T21:00:00Z",
          data: "Olive & Friends"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    handleDateClick(arg) {
      alert(arg);
    }
  }
};
</script>
