<template lang="pug">
    nav
      .nav-wrapper
        a.brand-logo(href="/") Task manager
        ul#nav-mobile.right
          li(v-for="navElem in linkMenu" :key="navElem.title")
            router-link.navbar-link(:to="`${navElem.url}`") {{ navElem.title }}
      button.btn-floating.btn-large.waves-effect.waves-light.red(@click="themeSwitch")
        i.material-icons brightness_3

</template>

<script>
export default {
  data() {
    return {
      menuShow: false,
      linkMenu: [
        { title: 'Create', url: '/create' },
        { title: 'List', url: '/list' },
      ],
    };
  },

  methods: {
    setDarkTheme() {
      const darkThemeLinkEl = document.createElement('link');
      darkThemeLinkEl.setAttribute('rel', 'stylesheet');
      darkThemeLinkEl.setAttribute('href', '/css/darktheme.css');
      darkThemeLinkEl.setAttribute('id', 'dark-theme-style');
      const docHead = document.querySelector('head');
      docHead.append(darkThemeLinkEl);
    },
    removeDarkTheme() {
      const darkThemeLinkEl = document.querySelector('#dark-theme-style');
      const prntNode = darkThemeLinkEl.parentNode;
      prntNode.removeChild(darkThemeLinkEl);
    },
    themeSwitch() {
      const darkThemeLinkEl = document.querySelector('#dark-theme-style');
      if (!darkThemeLinkEl) {
        this.setDarkTheme();
      } else {
        this.removeDarkTheme();
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.nav-wrapper, .btn-floating
  margin-left 15px
  margin-right 15px

.btn-floating
  margin-top 15px
</style>
