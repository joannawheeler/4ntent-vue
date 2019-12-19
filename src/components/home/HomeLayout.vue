<template>
  <div class="HomeLayout">
    <div class="max-width">
      <app-navbar :userinfo='userinfo' />
      <router-view :userinfo='userinfo'></router-view>
    </div>
  </div>
</template>
<script>
import AppNavbar from './app-navbar/AppNavbar'
import HomePage from './HomePage'
import db from '../../firebaseInit'
import firebase from 'firebase'
import VueMatchHeights from 'vue-match-heights';


export default {
  name: 'HomeLayout',
  components: {
    AppNavbar,
    HomePage
  },
  data() {
    return {
      userinfo: {}
    }
  },
  methods: {
    gotoassess: function() {}
  },
  created() {
    this.userinfo = firebase.auth().currentUser;
  },
  firestore() {
    return {}
  }
}

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato:900&display=swap');

@font-face {}

body,
html {
  font-family: 'Open Sans', sans-serif;
  color: $almost-black;
  background-color: #F5F5F5;
  height: 100%;
  width: 100%;
}

.dropdown-item {
  padding-left: 10px;
}

.dropdown-menu {
  margin-top: -10px;
  margin-right: -120px;
  opacity: .9;
}

.dropdown-item {}

.dropdown-item:hover,
.dropdown-item:focus {
  color: black !important;
  text-decoration: none !important;
  background-color: white !important;
}

.dropdown-item:hover {
  color: white !important;
  text-decoration: none !important;
  background-color: white !important;
}

@font-face {
  font-family: poet-font;
  src: url('../../assets/fonts/PoetsenOne-Regular.ttf');
}

.gradient-light-to-mid-diag-down-right {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#05ebd8+0,1f82e5+99 */
  background: rgb(5, 235, 216);
  /* Old browsers */
  background: -moz-linear-gradient(-45deg, rgba(5, 235, 216, 1) 0%, rgba(31, 130, 229, 1) 99%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgba(5, 235, 216, 1) 0%, rgba(31, 130, 229, 1) 99%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgba(5, 235, 216, 1) 0%, rgba(31, 130, 229, 1) 99%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#05ebd8', endColorstr='#1f82e5', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */
  color: white;

}

.gradient-mid-to-light-diag-down-right {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1f82e5+0,05ebd8+100 */
  background: rgb(31, 130, 229);
  /* Old browsers */
  background: -moz-linear-gradient(-45deg, rgba(31, 130, 229, 1) 0%, rgba(5, 235, 216, 1) 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgba(31, 130, 229, 1) 0%, rgba(5, 235, 216, 1) 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgba(31, 130, 229, 1) 0%, rgba(5, 235, 216, 1) 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1f82e5', endColorstr='#05ebd8', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */
  color: white;
}


.all-titles {
  text-align: left;
  font-size: 2.5vw;
  vertical-align: middle;
  margin: 0;
  color: white;
  line-height: 5vw;
  padding-left: .75em;

  @include media-breakpoint-down(lg) {
    font-size: 2.75vw;
    line-height: 5.25vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 3.5vw;
    line-height: 5.75vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 5.25vw;
    line-height: 7.75vw
  }

  @include media-breakpoint-down(xs) {
    text-align: left;
    font-size: 6vw;
    line-height: 6.75vw;
    vertical-align: middle;
    margin: 0;
    padding: .3em 0;
    color: white;
  }
}

.our-offerings-header-text {
  font-size: 4.5vw;
  padding: 0;
  margin: 0;

  @include media-breakpoint-down(lg) {
    font-size: 4.75vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 5.5vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 7.25vw;
  }

  @include media-breakpoint-down(xs) {
    font-size: 9vw;
  }
}

.mont {
  font-family: 'Lato', sans-serif;
}

.mont-bold {
  font-family: 'Lato', sans-serif;
  font-weight: 900;
}

.raleway {
  font-family: 'Raleway', sans-serif;
}

.center {
  text-align: center;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;

  >.col,
  >[class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}

// .max-width {
// max-width: 1920px;
// align-items: center;
// @media (min-width: 1920px) {
// body {
// background: white !important;
// }
// }
// }






#footer {
  background-color: #001b65;
  min-height: 50px;
  padding: 20px;
}

</style>
