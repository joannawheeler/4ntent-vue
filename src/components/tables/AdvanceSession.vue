<template>
  <div>
    <vuestic-widget :headerText="$t('Your Scheduled Sessions')">
      <div class="row">

      <div class="table-responsive col-md-12">
          <b-table hover :items="myplans" :fields="fields">
            <template slot="group" slot-scope="row">
              <span v-if="row.item.group">Yes</span>
              <span v-if="!row.item.group">No</span>
            </template>
            <template slot="userrmv" slot-scope="row">
              <div class="dropdown d-inline-flex" v-dropdown>
                <button class="btn btn-primary dropdown-toggle theme-toggle " type="button" id="dropdownMenuButton"
                        data-toggle="dropdown">
                  Select User
                  <i class="ion-ios-arrow-down arrow-down"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="dropdown-menu-content">
                    <a v-for="people in row.item.participant" class="dropdown-item" @click.stop='rmvuser(row.item.id, row.item.participant, people.uid)'>
                      <div v-if="!(people.name===' ')">{{people.name}}</div>
                      <div v-if="(people.name===' ')">{{people.email}}</div>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <b-button size="sm" @click.stop='onRmv(row.item.id, user.uid, row.item.pid, row.item.participant)'>Remove</b-button> -->

            </template>
            <template slot="adduser" slot-scope="row">
              <div class="dropdown d-inline-flex" v-dropdown>
                <button class="btn btn-primary dropdown-toggle theme-toggle " type="button" id="dropdownMenuButton"
                        data-toggle="dropdown">
                  Select User
                  <i class="ion-ios-arrow-down arrow-down"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="dropdown-menu-content">
                    <a v-for="people in userslist" class="dropdown-item" @click.stop='adduser(row.item.id, row.item.participant, people.id, people.name, people.email)'>
                      <div v-if="!(people.name===' ')">{{people.name}}</div>
                      <div v-if="(people.name===' ')">{{people.email}}</div>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <b-button size="sm" @click.stop='onRmv(row.item.id, user.uid, row.item.pid, row.item.participant)'>Remove</b-button> -->
            </template>

            <template v-if="userinfo.provider" slot="actions" slot-scope="row">
              <b-button size="sm" @click.stop='onRmv(row.item.id, user.uid, row.item.pid, row.item.participant)'>Remove</b-button>
            </template>
            <template slot="launch" slot-scope="row">
              <b-button size="sm" @click.stop='launchlink(row.item.zoomlink)'>Launch</b-button>
            </template>
            <div class="row">hello</div>
          </b-table>
      </div>

      </div>
    </vuestic-widget>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BadgeColumn from './BadgeColumn.vue'
  import db from '../../firebaseInit'
  import moment from 'moment'

  Vue.component('badge-column', BadgeColumn)

  export default {
    name: 'Mysessions',
    created () {
      let use = this.$store.getters.getUser
      this.user = use.user
      db.collection('users').doc(this.user.uid).get()
        .then(doct => {
          let di = doct.data().users
          di.forEach((docta) => {
            db.collection('users').doc(docta).get()
              .then(dia => {
                let usesa = dia.data().firstName + ' ' + dia.data().lastName
                if (usesa === ' ') { usesa = dia.data().email }
                let objuse = {
                  id: docta,
                  name: usesa
                }
                this.userslist.push(objuse)
              })
          })
        })
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
              'full': false
            }
            if (pararr.includes(this.user.uid) || doc.data().pid === this.user.uid) {
              this.datepicker.multiple = this.datepicker.multiple + ', ' + doc.data().date
              this.myplans.push(data)
            }
          })
        })
    },
    data () {
      return {
        userinfo: {},
        fields: {
          title: { label: 'Title', sortable: true, 'class': 'text-center' },
          date: { label: 'Date', sortable: true, 'class': 'text-center' },
          provider: { label: 'Mentor', 'class': 'text-center' },
          group: { label: 'Group Session', 'class': 'text-center' },
          userrmv: { label: 'Remove User', 'class': 'text-center' },
          adduser: { label: 'Add User', 'class': 'text-center' },
          actions: { label: 'Remove Session', 'class': 'text-center' },
          launch: { label: '', 'class': 'text-center' }
        },
        datepicker: { multiple: '' },
        myplans: [],
        userslist: []
      }
    },
    firestore () {
      return {
        userinfo: db.collection('users').doc(localStorage.getItem('userid'))
      }
    },
    methods: {
      onRmv (evt, user, provider, partarr) {
        if (provider === user) {
          db.collection('ProviderPlans').doc(evt).delete().then(function () {
            console.log('Document successfully deleted!')
            location.reload()
          }).catch(function (error) {
            console.error('Error removing document: ', error)
          })
        }
      },
      rmvuser (tableid, partarr, uuid) {
        let result = partarr.map(a => a.uid)
        function useridfun (element) { return element === uuid }
        let arrin = result.findIndex(useridfun)
        if (arrin > -1) {
          partarr.splice(arrin, 1)
          let planupdate = db.collection('ProviderPlans').doc(tableid)
          planupdate.update({
            'participant': partarr
          })
            .then(function () {
              console.log('updated')
              location.reload()
            })
            .catch(function (e) {
              console.error(e)
            })
        }
      },
      adduser (tableid, partarr, uuid, uname, uemail) {
        for (let i = 0; i < partarr.length; i++) {
          if (partarr[i].uid === uuid) {
            console.log('already in')
            alert('User is already in session')
            return
          }
        }
        let uslist = {
          name: uname,
          uid: uuid
        }
        if (uname === ' ') {
          uslist.name = uemail
        }
        partarr.push(uslist)
        let planupdate = db.collection('ProviderPlans').doc(tableid)
        planupdate.update({
          'participant': partarr
        })
        .then(function () {
          console.log('updated')
          location.reload()
        })
        .catch(function (e) {
          console.error(e)
        })
      },
      launchlink (link) {
        location.assign(link)
      }
    }
  }
</script>

<style lang="scss">

  fieldset {
    width: 248px
  }

  .color-icon-label-table {
    td:first-child {
      width: 1rem;
    }
  }
</style>
