<template>
  <!-- <div> -->
  <div class="parentview">
    <b-navbar :sticky='this.sticky' class="vuestic-navbar navbar">
      <b-navbar-nav class="navbar nav-content-container">
        <!-- <b-navbar-nav class="navLinks-sm-and-above-viewports">
          <b-nav-item href="#" class="navItem navItem1">
            <router-link :to="{path: '/home'}">
              <div class="selectorpad navLinksLeft" name="selector"> Home </div>
            </router-link>
          </b-nav-item>
          <b-nav-item href="#" class="navItem navItem2">
            <router-link :to="{path: '/about'}">
              <div class="selectorpad" name="selector"> About </div>
            </router-link>
          </b-nav-item>
          <b-nav-item href="#" class="navItem navItem3">
            <router-link :to="{path: '/events'}">
              <div class="selectorpad" name="selector"> Events </div>
            </router-link>
          </b-nav-item>
        </b-navbar-nav> -->
        <router-link :to="{path: '/home'}">
          <b-img class="ntentlogo" :src='require("../../../assets/images/logo.png")' />
        </router-link>
        <b-navbar-nav class="navLinks-sm-and-above-viewports">
          <b-nav-item href="#" class="navItem navItem2">
            <router-link :to="{path: '/about'}">
              <div class="selectorpad" name="selector"> About </div>
            </router-link>
          </b-nav-item>
          <b-nav-item href="#" class="navItem navItem3">
            <router-link :to="{path: '/events'}">
              <div class="selectorpad" name="selector"> Events </div>
            </router-link>
          </b-nav-item>
          <b-nav-item href="#" class="navItem navItem2">
            <router-link :to="{path: '/pricing'}">
              <div class="selectorpad" name="selector"> Pricing </div>
            </router-link>
          </b-nav-item>
          <b-nav-item href="#" class="navItem navItem2">
            <router-link to="https://4ntent.blogspot.com/ ">
              <div class="selectorpad" name="selector"> Blog </div>
            </router-link>
          </b-nav-item>
          <!-- if user is unregistered or not signed in, show Login/Signup -->
          <b-nav-item v-if="!this.$store.state['app']['isLoggedIn']" href="#" class="navItem navItem4">
            <!-- v-if="this.checkIfLoggedIn() === false" -->
            <router-link :to="{path: '/login' }">
              <div class="selectorpad navLinksRight" name="selector"> Login</div>
            </router-link>
            <router-link class='link' :to="{name: 'assessment'}">
              <div class="selectorpad" name="selector"> | Sign Up</div>
            </router-link>
          </b-nav-item>
          <!-- if user is signed in, show dropdown with options to Go To Dashboard or Logout -->
          <b-nav-item v-else-if="this.$store.state['app']['isLoggedIn']">
            <span class="">
              <img class="profile-pic" src="https://i.imgur.com/nfa5itq.png" />
            </span>
            <vuestic-dropdown v-model="isShown" position="bottom" style="margin-left: -10px; padding: 10px">
              <div v-if="this.userinfo['tier']" v-on:click="goToDashboard()" style="padding: 5px; cursor: pointer;">
                Go To Dashboard
              </div>
              <div v-on:click="signOut()" style="padding: 5px; cursor: pointer">
                Logout
              </div>
            </vuestic-dropdown>
          </b-nav-item>
        </b-navbar-nav>
        <!-- MOBILE VIEW -->
        <!-- <b-navbar-nav class="hamburgerIcon">
  <b-nav-item-dropdown right no-caret>
    <template class="hamburgerTemplate dropdown-toggle" slot="button-content"><img class="hamburger dropdown-toggle
" :src='require("../../../assets/icons/blackHam.svg")' /></template>
    <b-dropdown-item href="https://www.4ntent.com/home" class="dropdown-item">
      <router-link :to="{path: '/home', params: { userinfo }}">
        <div class="selectorpad" name="selector"> Home </div>
      </router-link>
    </b-dropdown-item>
    <b-dropdown-item href="https://www.4ntent.com/about" class="dropdown-item">
      <router-link :to="{path: '/about', params: { userinfo }}">
        <div class="selectorpad" name="selector"> About</div>
      </router-link>
    </b-dropdown-item>
    <b-dropdown-item href="https://www.4ntent.com/events" class="dropdown-item">
      <router-link :to="{path: '/events', params: { userinfo }}">
        <div class="selectorpad" name="selector"> Events</div>
      </router-link>
    </b-dropdown-item>
    <b-dropdown-item href="https://www.4ntent.com/events" class="dropdown-item">
      <router-link :to="{path: '/pricing', params: { userinfo } }">
        <div class="selectorpad" name="selector"> Pricing</div>
      </router-link>
    </b-dropdown-item>
    <b-dropdown-item href="https://www.4ntent.com/events" class="dropdown-item">
      <router-link to="https://blogger.com">
        <div class="selectorpad" name="selector"> Blog</div>
      </router-link>
    </b-dropdown-item>
    <div v-if="!this.$store.state['app']['isLoggedIn']">
      <b-dropdown-item class="dropdown-item">
        <router-link :to="{path: '/login', params: { userinfo }}" style="color: rgba(74, 227, 135, 0.5)">
          <div class="selectorpad" name="selector"> Login |
          </div>
        </router-link>
        <router-link class='link' :to="{name: 'assessment', params: { userinfo }}">
          <div class="selectorpad" name="selector"> Sign Up</div>
        </router-link>
      </b-dropdown-item>
    </div>
    <div v-else-if="this.$store.state['app']['isLoggedIn']">
      <b-dropdown-item class="dropdown-item">
        <div class="selectorpad" name="selector" v-on:click="signOut()">
          Logout
        </div>
      </b-dropdown-item>
    </div>
  </b-nav-item-dropdown>
</b-navbar-nav>
 -->
      </b-navbar-nav>
    </b-navbar>
    <!-- </div> -->
    <!-- </router-view> -->
  </div>
</template>
<script>
import 'node_modules/bootstrap-vue/src/components/dropdown/_dropdown.scss';
import db from '../../../firebaseInit'
import firebase from 'firebase'

export default {
  name: 'app-navbar',
  components: {},
  props: {},
  data() {
    return {
      sticky: true,
      isShown: "",
      userinfo: {},
    }
  },
  watch: {

  },
  created() {
    let use = this.$store.getters.getUser
    // console.log(use.user)
    if (this.$store.state['app']['isLoggedIn']) {
      let id = use.user.uid
      db.collection('users').doc(id).get()
        .then(doc => {
          this.userinfo = doc.data()
        })
    }
  },
  methods: {
    goToDashboard() {
      this.$router.replace('/dashboard')
    },
    signOut() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('signed out successfully')
      }).catch(function(error) {
        // An error happened.
        console.log('error on signout')
      });
      this.$store.dispatch('logout', this.user)
      this.$store.dispatch('clearuser', this.user)
    },
    capitalizeFirstLetter: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  }
}

</script>
<style lang="scss" scoped>
.profile-pic {
  height: 20%;
  width: 20%;
  display: inline-block;
  background-color: transparent;
  border: none;
  border-radius: 2px;
}

.ntentlogo {
  height: 2.2em;
  width: auto;
  vertical-align: middle;
  line-height: 50px;

  @include media-breakpoint-down(lg) {
    height: 2em;
  }

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    padding-left: 20px;
  }

  @include media-breakpoint-down(xs) {
    height: 30px;
    padding-left: 20px;
  }
}

.align-right {
  text-align: right
}

.hamburgerIcon {
  display: none;
  width: auto;
  text-align: right;
  background-position: 100%;

  @include media-breakpoint-down(sm) {
    display: inline;
  }

  @include media-breakpoint-down(xs) {
    display: inline;
    width: 80px;
    margin-right: 10px;
  }
}

.hamburger {
  height: 30px;
  width: 30px;

  @include media-breakpoint-down(xs) {}
}

.dropdown-item {
  color: #1f82e5;
  background-color: white;
  height: 2em;
  width: 100%;
  font-size: 1rem;
}

.hamburgerTemplate {
  display: none;
  position: absolute;

  @include media-breakpoint-down(sm) {
    display: inline;
    position: absolute;
    padding: 0;
  }

  @include media-breakpoint-down(xs) {
    display: inline;
    position: absolute;
    padding: 0;
    margin: 0;
  }
}

.navLinks-sm-and-above-viewports {
  position: static;

  @include media-breakpoint-down(sm) {
    display: none;
    position: absolute;
  }

  @include media-breakpoint-down(xs) {
    display: none;
    position: absolute;
  }
}

.navbar {
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 80px;
  background-color: rgba(white, .9) !important;

  -webkit-box-shadow: 0 5px 10px -1px #00000014;
  -moz-box-shadow: 0 5px 10px -1px #00000014;
  box-shadow: 0 5px 10px -1px #00000014;

  .navItem {
    margin: 0 15px;
    position: relative;
    &:hover {
      transition: all 0.3s $transition-secondary;
      transform: scale(1.1);
    }
  }
}

.nav-content-container {
  vertical-align: middle;
  background-color: white;
  padding: 0px;
  width: 100%;
  height: 80px;
  padding-left: 100px;
  padding-right: 100px;

  @media only screen and (min-width: 1620px) {
    padding-left: 280px;
    padding-right: 280px;
  }

  @media only screen and (min-width: 1420px) {
    padding-left: 185px;
    padding-right: 185px;
  }


  @include media-breakpoint-down(lg) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}

.selectorpad {
  display: inline;
  color: black;
  font-size: 1.5rem !important;
  text-align: center;

  @include media-breakpoint-down(lg) {
    font-size: 1.1rem !important;
  }

  @include media-breakpoint-down(md) {
    font-size: 1.0rem !important;
  }

  @include media-breakpoint-down(sm) {
    font-size: 1.0rem !important;
  }

  @include media-breakpoint-down(xs) {
    font-size: 1rem !important;
  }
}

//ntent logo
.vuestic-navbar {
  font-size: 18px;
}

.dropdown-toggle::after {
  content: none;
}

.navbar .navbar-nav>.nav-item>.nav-link {
  padding-left: 1.1em;
  padding-right: 1.1em;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}

}

</style>
