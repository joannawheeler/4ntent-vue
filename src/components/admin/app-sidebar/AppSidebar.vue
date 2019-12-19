<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <profile-dropdown class="col nav-item">
        <img src="https://i.imgur.com/nfa5itq.png" />
      </profile-dropdown>
      <!-- <span class="profile-dropdown__avatar-container  avatar">
  <img src="https://i.imgur.com/nfa5itq.png" />
</span>
 -->
      <span class="member-name">
        {{userinfo.firstName + ' ' + userinfo.lastName}}
      </span>
      <span class="join-date">
        Member Since: {{userinfo.joindate}}
      </span>
      <sidebar-link :to="{ name: 'dashboard' }">
        <span slot="title">
          <span>{{ $t('menu.dashboard') }}</span>
        </span>
      </sidebar-link>
      <!-- <sidebar-link :to="{ name: 'my-weekly-ntention-plan' }">
        <span slot="title">
          <span>
            My Weekly Ntention Plan</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'my-wellness-profile' }">
        <span slot="title">
          <span>

            My Wellness Profile</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'scheduling' }">
        <span slot="title">
          <span>
            Scheduling</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'my-trackers' }">
        <span slot="title">
          <span>
            My Trackers</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'my-wellness-plan' }">
        <span slot="title">
          <span>
            My Wellness Plan</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'my-giving-back' }">
        <span slot="title">
          <span>
            My Giving Back</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'ntention-setter-access' }">
        <span slot="title">
          <span>
            Ntention Setter Access</span>
        </span>
      </sidebar-link> -->
    </template>
  </vuestic-sidebar>
</template>
<script>
import VuesticSidebar
from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'
import ProfileDropdown from '../app-navbar/components/dropdowns/ProfileDropdown'

export default {
  name: 'app-sidebar',
  components: {
    VuesticSidebar,
    SidebarLink,
    SidebarLinkGroup,
    ProfileDropdown
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    userinfo: {}
  },
}

</script>
<style lang="scss" scoped>
//colors: light blue-#05ebd8 darkblue-#001b65 midblue-#1f82e5

.avatar_li {
  background-color: $sidebar-bg;
  text-align: center;
  padding-top: 0rem;
}



.member-name {
  display: block;
  font-size: 1.25rem;
  text-align: center;
  padding: .3rem 0 .2rem 0;
}

.join-date {
  display: block;
  font-size: .65rem;
  text-align: center;
  padding-bottom: 15%;
}

</style>
