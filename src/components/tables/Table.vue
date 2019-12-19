<template>
  <div>
    
    <!-- <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('Available Sessions')">
          <b-table id="addtable" hover :items="plans" :fields="fields">
            <template slot="group" slot-scope="row">
              <div v-if="row.item.group">Yes {{row.group}}</div>
              <div v-if="!row.item.group">No {{row.group}}</div>
            </template>
            <template slot="participants" slot-scope="row">
              {{row.item.parnum}} / <span v-if="row.item.group">8</span><span v-if="!row.item.group">1</span>
            </template>
            <template slot="partic" slot-scope="row">
              <div class="dropdown d-inline-flex" v-dropdown>
                <button class="btn btn-primary dropdown-toggle theme-toggle " type="button" id="dropdownMenuButton"
                        data-toggle="dropdown">
                  Participants
                  <i class="ion-ios-arrow-down arrow-down"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="dropdown-menu-content">
                    <a v-for="people in row.item.participant" class="dropdown-item" @click.stop='rmvuser(row.item.id, row.item.participant, people.uid)'>
                      <div>{{people.name}}</div>
                    </a>
                  </div>
                </div>
              </div>
            </template>
            <template slot="actions" slot-scope="row">
              <b-button :disabled="row.item.full" type="submit" size="sm" @click.stop='onAdd(row.item.id, row.item.participant, row.item.pemail, user.email, user.uid)'>Add</b-button>
            </template>
          </b-table>
        </vuestic-widget>
      </div>
    </div> -->

    <div class="row">
      <div class="col-md-12">
        <my-sessions></my-sessions>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import BadgeColumn from './BadgeColumn.vue'
  import FieldsDef from 'vuestic-components/vuestic-datatable/data/fields-definition'
  import ItemsPerPageDef from 'vuestic-components/vuestic-datatable/data/items-per-page-definition'
  import QueryParams from 'vuestic-components/vuestic-datatable/data/query-params'
  import db from '../../firebaseInit'
  import moment from 'moment'
  import MySessions from './Mysessions.vue'

  Vue.component('badge-column', BadgeColumn)

  export default {
    name: 'Table',
    components: {
      MySessions
    },
    created () {
      let use = this.$store.getters.getUser
      this.user = use.user
      db.collection('ProviderPlans').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let pararr = doc.data().participant
            let parnum = pararr.length
            let data = {
              'title': doc.data().title,
              'date': moment(doc.data().date).format('llll'),
              'provider': doc.data().provider,
              'pemail': doc.data().pemail,
              'slug': doc.data().slug,
              'zoomlink': doc.data().zoomlink,
              'group': doc.data().groupsession,
              'id': doc.id,
              'participant': pararr,
              'parnum': parnum,
              'full': false
            }
            if (data.group && parnum >= 8) {
              data.full = true
            } else if (!data.group && parnum >= 1) {
              data.full = true
            }
            var result = pararr.map(a => a.uid)
            if (!result.includes(this.user.uid)) {
              this.plans.push(data)
            }
          })
        })
    },
    firestore () {
      return {
        userinfo: db.collection('users').doc(localStorage.getItem('userid'))
      }
    },
    data () {
      return {
        fields: {
          title: { label: 'Title', sortable: true, 'class': 'text-center' },
          date: { label: 'Date', sortable: true, 'class': 'text-center' },
          provider: { label: 'Mentor', 'class': 'text-center' },
          group: { label: 'Group Session', 'class': 'text-center' },
          participants: { labels: 'Participants', 'class': 'text-center' },
          partic: { label: 'Participants', 'class': 'text-center' },
          actions: { label: '', 'class': 'text-center' }
        },
        myplans: [],
        plans: [],
        tableFields: FieldsDef.tableFields,
        itemsPerPage: ItemsPerPageDef.itemsPerPage,
        sortFunctions: FieldsDef.sortFunctions,
        paginationPath: '',
        defaultTablePerPage: 6,
        queryParams: QueryParams,
        user: {}
      }
    },
    methods: {
      onAdd (evt, partarr, pemail, uemail, uuid) {
        let updateprovider = db.collection('users').where('email', '==', pemail)
        updateprovider.get().then(function (doc) {
          let provid = doc.docs[0].id
          db.collection('users').doc(provid).collection('clients').add({
            email: uemail
          })
        })
        let updates = partarr
        var result = partarr.map(a => a.uid)
        if (!result.includes(uuid)) {
          updates.push({
            uid: uuid,
            name: this.userinfo.firstName + ' ' + this.userinfo.lastName
          })
        }
        let planupdate = db.collection('ProviderPlans').doc(evt)
        planupdate.get()
          .then(function (doc) {
            planupdate.update({
              'participant': updates
            })
              .then(function () {
                location.reload()
              })
              .catch(function (e) {
                console.error(e)
              })
          })
      }
    }
  }
</script>

<style lang="scss">

  .color-icon-label-table {
    td:first-child {
      width: 1rem;
    }
  }
</style>
