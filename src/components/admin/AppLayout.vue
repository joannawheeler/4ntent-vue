<template>
  <vuestic-layout class="">
    <app-navbar :isOpen=false class="" style="" />
    <main slot="content" id="content" class="" role="main" style="display: flex; flex: 1">
      <vuestic-pre-loader v-show="isLoading" class="pre-loader" />
      <router-view :userinfo="userinfo"></router-view>
    </main>
  </vuestic-layout>
  <!-- <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar" /> -->
</template>
<script>
import VuesticLayout
from '../../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
// import AppNavbar from '../home/app-navbar/AppNavbar'
import AppNavbar from './app-navbar/AppNavbar'
import AppSidebar from './app-sidebar/AppSidebar'
import Dashboard from '../dashboard/Dashboard'
// import AppBreadcrumbs from './app-breadcrumbs/AppBreadcrumbs'
import Layout from '../../vuestic-theme/vuestic-directives/Layout'
import { mapGetters } from 'vuex'
import db from '../../firebaseInit'
import EditProfile from '../ntent/EditProfile'

export default {
  name: 'app-layout',
  components: {
    VuesticLayout,
    AppNavbar,
    AppSidebar,
    Dashboard, //
    EditProfile //
  },
  directives: {
    // layout: Layout,
  },
  data() {
    return {
      opened: true,
      userinfo: {}, //
      formfill: false, //
      profilefill: false //
    }
  },
  methods: {
    toggleSidebar(opened) {
      this.opened = opened
    },
  },
  created() {
    db.collection('users').doc(localStorage.getItem('userid')).get()
      .then(doc => {
        this.userinfo = doc.data()
      })
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
}

</script>
<style lang="scss" scoped>
// .vuestic-sidebar .vuestic-scrollbar .scrollbar-content {
// background-color: white !important;
// color: $ntent-light-blue;
// }

// .default-text {
// color: black;
// font-family: 'Open Sans', sans-serif;
// font-size: 1rem;
// }
// h2 {
// font-family: 'Lato', sans-serif;
// }

</style>
<!-- <template>
  <vuestic-layout v-resize :class="classObject">
    <div class="row entire-dash-row">
      <div class="col-md-2 left-panel-container">
        sidebar
        <app-sidebar :assess="userinfo.assessfilled" :isProvider="userinfo.provider" :isOpen="opened" />
      </div>
      <div class="col-md-10">
        <main slot="content" id="content" class="content" role="main">
          <vuestic-pre-loader v-show="isLoading" ref="preLoader" class="pre-loader"></vuestic-pre-loader>
          <router-view :userinfo="userinfo"></router-view>
        </main>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <span slot="footer"> 4ntent ©2018 </span>
      </div>
    </div>
  </vuestic-layout>
</template>
<script>
import VuesticLayout from '../../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppSidebar from './app-sidebar/AppSidebar'
import Dashboard from '../dashboard/Dashboard'
import { mapGetters } from 'vuex'
import db from '../../firebaseInit'
import EditProfile from '../ntent/EditProfile'

export default {
  name: 'app-layout',

  components: {
    VuesticLayout,
    AppNavbar,
    AppSidebar,
    Dashboard,
    EditProfile
  },
  data() {
    return {
      opened: true,
      userinfo: {},
      formfill: false,
      profilefill: false
    }
  },
  methods: {
    toggleSidebar(opened) {
      this.opened = opened
    }
  },
  created() {
    db.collection('users').doc(localStorage.getItem('userid')).get()
      .then(doc => {
        this.userinfo = doc.data()
      })
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}

</script>
<style lang="scss" scoped>

</style> -->
