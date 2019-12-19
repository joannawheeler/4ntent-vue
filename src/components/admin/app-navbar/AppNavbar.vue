<template>
  <div class="nav-wrap">
    <message-dropdown class="nav-item" />
    <notification-dropdown class="nav-item" />
    <profile-dropdown class="nav-item prof-pic">
      <img src="https://i.imgur.com/nfa5itq.png" />
    </profile-dropdown>
  </div>
</template>
<script>
import VuesticIconVuestic
from '../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'
import VuesticNavbar
from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
import HeaderSelector from './components/HeaderSelector'

import LanguageDropdown from './components/dropdowns/LanguageDropdown'
import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import NotificationDropdown from './components/dropdowns/NotificationDropdown'
import MessageDropdown from './components/dropdowns/MessageDropdown'

export default {
  name: 'app-navbar',

  components: {
    VuesticIconVuestic,
    VuesticNavbar,
    HeaderSelector,
    MessageDropdown,
    NotificationDropdown,
    LanguageDropdown,
    ProfileDropdown,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    valueProxy: {
      get() {
        return this.isOpen
      },
      set(opened) {
        this.$emit('toggle-menu', opened)
      },
    },
  },
}

</script>
<style lang="scss" scoped>
//colors: light blue-#05ebd8 darkblue-#001b65 midblue-#1f82e5


.vuestic-navbar {
  background-color: #1f82e5 !important;
}

.nav-wrap {
  padding: 10px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .nav-item {
    position: relative;
    margin: 0 10px;
    span {
      color: white;
    }
  }
  height: 100px;
  margin: 10px;

  @include media-breakpoint-down(md) {
    height: 50px;
    margin: 20px;
  }

  @include media-breakpoint-down(sm) {
    justify-content: space-between;
    padding: 10px 5%;
  }
}

</style>
