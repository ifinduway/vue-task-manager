<template lang="pug">
  .task-wrapper.grid-center
    h1.ui-title-1 Create task
    .input-task
      input(type="text" placeholder="task area" v-model="title")
      label название задачи
    .input-tags
      input(type="text" placeholder="tags area" v-model="newTag"
        @keyup.enter.prevent="addNewTag")
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

  data() {
    return {
      datePicker: '',
      charecterCountDiscription: '',
      title: '',
      newTag: '',
      tags: [],
    };
  },
  methods: {
    addNewTag(event) {
      if (this.newTag === '') {
        return;
      }
      this.tags.push(this.newTag);
      this.newTag = '';
      event.stopPropagation();
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
        title: this.title,
        descriptionTask: this.charecterCountDiscription,
        id: Date.now(),
        status: true,
        tags: this.tags,
        date: this.datePicker,
      };
      if (task.title && task.descriptionTask && task.date) {
        this.$store.dispatch('createTask', task);
        this.$router.push('/list');
      }
    },
  },

  mounted() {
  },
};
</script>

<style lang="stylus" scoped>
  .error
    color red
  .tag-wrapper
    display flex
    flex-direction row
</style>
