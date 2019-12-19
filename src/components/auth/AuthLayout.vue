<template>
  <div class="auth-layout">
    <app-navbar />
    <!--     <div class="nav d-lg-none"><router-link class="i-vuestic" :to="{path: '/'}"></router-link></div> -->
    <div class="main row no-gutters">
      <div class="auth-content col-lg-6 col-12 align-self-center">
        <router-view></router-view>
      </div>
      <div class="auth-wallpaper col-6 d-none d-lg-flex" :style="{'background': 'url(' + require('../../assets/images/login.png') + ')' }">
        <!-- <div class="auth-wallpaper col-6 d-none d-lg-flex">
 -->
        <div class="oblique"></div>
        <router-link class="i-vuestic" :to="{path: '/login'}"></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import AppNavbar from '../home/app-navbar/AppNavbar';


export default {
  name: 'AuthLayout',
  components: {
    AppNavbar
  }
}

</script>
<style lang="scss">
html {
  overflow: hidden;
}

.auth-layout {
  margin: 0;
  height: 100%;
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $top-mobile-nav-height;
    background-color: $top-nav-bg;
    .i-vuestic {
      height: $auth-mobile-nav-ivuestic-h;
      width: 100%;
    }
  }
  .main {
    margin: 0;
    height: 100%;
    padding-top: 50px;
    .auth-content {
      padding: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
    }
    .auth-wallpaper {
      // background: url('../../assets/images/login.png');
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: cover !important;
      overflow: hidden !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      .i-vuestic {
        z-index: 2;
        height: 100%;
        width: 100%;
      }

      .oblique {
        position: absolute;
        background-color: $auth-wallpaper-oblique-line;
        opacity: 0.2;
        left: calc(50% - 27%/2);
        transform: rotate(15deg);
        width: 27%;
        height: 115%;
      }
    }

    .d-none {
      @include media-breakpoint-down(md) {
        display: none !important;
      }
    }
  }
  // Responsive
  @include media-breakpoint-down(md) {
    background-color: white;
    height: 100%;

    .login {
      padding-left: 25% !important;
      padding-right: 25% !important;
    }
  }
  @include media-breakpoint-down(xs) {
    .input-container {
      input {
        font-size: 0.5em!important;
      }
    }
    .login {
      width: 100%;
      padding-left: 5% !important;
      padding-right: 5% !important;
      div {
        width: 100%;
      }
    }
    .main {
      height: $auth-mobile-main-h;
      .auth-content {
        align-items: flex-start;

      }
    }
  }
}
</style>
