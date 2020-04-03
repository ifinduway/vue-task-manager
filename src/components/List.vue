<template lang="pug">
  .list-wrapper
    h1 List
    table(v-if="tasks.length")
      thead
      tr
        th #
        th Title
        th Date
        th Descript
        th Status
        th Open
      tbody
        tr(v-for="(task, index) of tasks" :key="task.id"
          :class="{activeTR: task.status, unactiveTR: !task.status}")
          td {{task.id+1}}
          td {{task.title}}
          td {{task.date}}
          td.textTD
            .text {{task.descriptionTask}}
          td {{task.status}}
          td
            router-link.btn.waves-effect.waves-light(tag="button" :to="`/task/${task.id}`") открыть
    p(v-else) Нету задач
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>

<style lang="stylus" scoped>
  .activeTR
    background-color #a3ffd7
  .unactiveTR
    background-color #ff7a7a
  .textTD
    max-width 500px
  .text
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
</style>
