<template>
  <div class="sched-container">
    <vuestic-widget :headerText="$t('Your Scheduled Sessions')">
      <div class="row">
        <div class="table-responsive col-md-12">
          <b-table hover :items="myplans" :fields="fields">
            <template slot="partic" slot-scope="row">
              <div class="dropdown d-inline-flex" v-dropdown>
                <button class="btn btn-sm dropdown-toggle theme-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown">
                  Participants
                  <i class="ion-ios-arrow-down arrow-down"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="dropdown-menu-content">
                    <a v-for="people in row.item.participant" :key="people.name" class="dropdown-item" @click.stop='null'>
                      <div>{{people.name}}</div>
                    </a>
                  </div>
                </div>
              </div>
            </template>
            <template slot="group" slot-scope="row">
              <span v-if="row.item.group">Yes</span>
              <span v-if="!row.item.group">No</span>
            </template>
            <template slot="launch" slot-scope="row">
              <button class="btn" size="sm" @click.stop='launchlink(row.item.zoomlink)'>Launch</button>
            </template>
          </b-table>
        </div>
      </div>
    </vuestic-widget>
  </div>
</template>
<script>
import Vue from 'vue'
import BadgeColumn from '../tables/BadgeColumn.vue'
import db from '../../firebaseInit'
import moment from 'moment'
Vue.component('badge-column', BadgeColumn)
export default {
  name: 'scheduling',
  mounted() {
    let use = this.$store.getters.getUser
    this.user = use.user
    db.collection('ProviderPlans').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let pararr = doc.data().participant
          let data = {
            'title': doc.data().title,
            'date': moment(doc.data().date).format('llll'),
            'provider': doc.data().provider,
            'pid': doc.data().pid,
            'pemail': doc.data().pemail,
            'slug': doc.data().slug,
            'zoomlink': doc.data().zoomlink,
            'group': doc.data().groupsession,
            'id': doc.id,
            'participant': pararr,
            'parlen': pararr.length,
            'full': false
          }
          var result = pararr.map(a => a.uid)
          if (result.includes(this.user.uid) || doc.data().pid === this.user.uid) {
            this.datepicker.multiple = this.datepicker.multiple + ', ' + doc.data().date
            this.myplans.push(data)
          }
        })
      })
  },
  data() {
    return {
      userinfo: {},
      fields: {
        title: { label: 'Title', sortable: true, 'class': 'text-center' },
        date: { label: 'Date', sortable: true, 'class': 'text-center' },
        provider: { label: 'Mentor', 'class': 'text-center' },
        group: { label: 'Group Session', 'class': 'text-center' },
        parlen: { label: 'Participants', 'class': 'text-center' },
        partic: { label: 'Participants', 'class': 'text-center' },
        launch: { label: '', 'class': 'text-center' }
      },
      datepicker: { multiple: '' },
      myplans: []
    }
  },
  firestore() {
    return {
      userinfo: db.collection('users').doc(localStorage.getItem('userid'))
    }
  },
  methods: {
    launchlink(link) {
      location.assign(link)
    }
  }
}

</script>
<style lang="scss">
.sched-container {
  color: black;
}

fieldset {
  width: 248px
}

.color-icon-label-table {
  td:first-child {
    width: 1rem;
  }
}

.btn {
  color: white;
  background-image: linear-gradient(to right, #05ebd8, #1f82e5);
  font-size: 0.8rem;
}

</style>
