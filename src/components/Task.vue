<template lang="pug">
  .task-wrapper
    h1 {{task.title}}
    .input-tags
      input(type="text" placeholder="tags area" v-model="newTag" @keyup.enter="addNewTag()")
      label теги
    .tag-wrapper
      ul(v-for="tag in tags")
        li.chip {{ tag }}
          i.close.material-icons(@click="deleteTag(tag)") close
    .textarea-wrapper
      textarea.materialize-textarea(
          id="descriptionTask"
          v-model="charecterCountDiscription"
          @keyup="checkCountChar()")
    label(for="descriptionTask" v-if="!checkCountChar()") описание задачи
    label.error(for="descriptionTask" v-if="checkCountChar()") хуету пишешь друг
    span.character-counter {{charecterCountDiscription.length}}/2048
    DatePicker(v-model="datePicker")
    button.btn.waves-effect.waves-light(type="submit" @click="submitHandler") Создать задачу
</template>

<script>
import DatePicker from 'vue-ctk-date-time-picker';

export default {
  components: {
    DatePicker,
  },

  props: {
    taskId: String,
  },

  data() {
    return {
      datePicker: '',
      charecterCountDiscription: '',
      newTag: '',
      tags: [],
    };
  },
  created() {
    this.charecterCountDiscription = this.task.descriptionTask;
    this.tags = [...this.task.tags];
    this.datePicker = this.task.date;
  },

  methods: {
    addNewTag() {
      if (this.newTag === '') {
        return;
      }
      this.tags.push(this.newTag);
      this.newTag = '';
    },
    deleteTag(tag) {
      const deleteIndex = this.tags.indexOf(tag);
      this.tags.splice(deleteIndex, 1);
    },
    checkCountChar() {
      if (this.charecterCountDiscription.length > 2048) {
        return true;
      }
      return false;
    },
    submitHandler() {
      const task = {
        descriptionTask: this.charecterCountDiscription,
        tags: this.tags,
        date: this.datePicker,
      };
      this.$store.dispatch('updateTask', { taskId: this.task.id, task });
      this.$router.push('/list');
    },
  },
  computed: {
    task() {
      return this.$store.state.tasks.find((task) => +task.id === +this.taskId);
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
