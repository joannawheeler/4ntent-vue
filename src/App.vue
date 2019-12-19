<template>
  <v-app id="app" class="app">
    <router-view />
  </v-app>
</template>
<script>
export default {
  name: 'app',
  created() {},
  data() {
    return {
      userinfo: {}
    }
  }
}

</script>
<style lang="scss">
@import "sass/main";

html {
  height: 100%;
}

button, a,input {
  outline: none;
}

body {
  height: 100%;
  margin: 0px;
  padding: 0px;
  background: white;
  color: $almost-black;
  #app {
    height: 100%;
    .vuestic-layout {
      &::before {
        content: "";
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#05ebd8+0,1f82e5+99 */
        background: rgb(5, 235, 216) !important;
        /* Old browsers */
        background: -moz-linear-gradient(-45deg, rgba(5, 235, 216, 1) 0%, rgba(31, 130, 229, 1) 99%) !important;
        /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg, rgba(5, 235, 216, 1) 0%, rgba(31, 130, 229, 1) 99%) !important;
        /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, rgba(5, 235, 216, 1) 0%, rgba(31, 130, 229, 1) 99%) !important;
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#05ebd8', endColorstr='#1f82e5', GradientType=1) !important;
        z-index: 0;
      }
      .content-wrap {
        z-index: 1;
      }
    }
  }
}

</style>
