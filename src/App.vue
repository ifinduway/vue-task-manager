<template lang="pug">
  .wrapper
    Navbar
    .container
      router-view
</template>

<script>
import Navbar from '@/components/NavBar.vue';

export default {
  components: {
    Navbar,
  },
  methods: {
  },
};
</script>
<style lang="stylus">
</style>
