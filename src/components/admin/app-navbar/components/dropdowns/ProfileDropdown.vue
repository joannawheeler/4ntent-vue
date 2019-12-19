<template>
  <div class="profile-dropdown flex-center">
    <span class="profile-dropdown__avatar-container">
      <slot />
    </span>
    <vuestic-dropdown v-model="isShown" position="bottom">
      <div v-for="option in options" :key="option.name" class="dropdown-item plain-link-item">
        <router-link :to="{name: option.redirectTo}" class="plain-link" href="#">
          <span v-on:click="actionOnClick(option.name)">{{ option.name }}</span>
        </router-link>
      </div>
    </vuestic-dropdown>
  </div>
</template>
<script>
import firebase from 'firebase'
import db from '../../../../../firebaseInit'

export default {
  name: 'profile-section',
  data() {
    return {
      isShown: false,
    }
  },
  props: {
    options: {
      type: Array,
      default: () => [{
          name: 'Go to Dashboard',
          redirectTo: 'dashboard',
        }, {
          name: 'Account Settings',
          redirectTo: 'account-settings',
        },
        {
          name: 'Logout',
          redirectTo: 'login',
        },
      ],
    },
  },
  methods: {
    logout() {
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
    actionOnClick(optionName) {
      if (optionName === 'Logout') {
        return this.logout();
      } else {
        return;
      }
    }
  }
}

</script>
<style lang="scss">
@import '../../../../../vuestic-theme/vuestic-sass/resources/resources';

.profile-dropdown {
  cursor: pointer;

  &__avatar-container {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid $lighter-gray;
    overflow: hidden;


    img {
      height: 100%;
      width: 100%;
    }

  }
}

.prof-pic {
  span {
    display: inline-block;
    height: $nav-prof-pic-height !important;
    width: $nav-prof-pic-width !important;
    background-color: transparent;
    border: none;
  }
}

</style>
