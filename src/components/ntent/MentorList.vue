<template>
  <div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('Mentor list')">
          <b-pagination size="sm" v-model="currentPage" :per-page="4" :total-rows="plans.length">
          </b-pagination>
          <b-table :per-page="4" :current-page="currentPage" responsive hover :items="plans" :fields="fields">
          <template slot="addmsger" slot-scope="row">
            <b-btn class="btn btn-micro" @click.stop="addmsger(row.item.id, row.item.Name)">
              Add
            </b-btn>
          </template>
          </b-table>
        </vuestic-widget>
      </div>
    </div>


  </div>
</template>

<script>
import db from '../../firebaseInit.js'
import moment from 'moment'

export default {
  name: 'myplans',
  data () {
    return {
      fields: {
        Name: { label: 'User', sortable: true, 'class': 'text-center' },
        Join: { label: 'Join Date', sortable: true, 'class': 'text-center' },
        addmsger: { label: 'Add to Messanger', 'class': 'text-center' }
      },
      currentPage: 1,
      plans: [],
      user: {},
      userinfo: {},
      livingid: null,
      commentref: null,
      addoncomment: null,
      comments: {
        Goal: null,
        Baseline: null,
        Working: null,
        Strategies: null,
        Reinforcements: null
      }
    }
  },
  created () {
    let use = this.$store.getters.getUser
    this.user = use.user
    let id = this.user.uid
    db.collection('users').doc(id).get()
      .then(doc => {
        this.userinfo = doc.data()
      })
    db.collection('users').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = {
            'Name': doc.data().ntent.Name,
            'firstName': doc.data().firstName,
            'lastName': doc.data().lastName,
            'prov': doc.data().provider,
            'Join': '',
            'id': doc.id
          }
          if (doc.data().firstName === '') {
            data.Name = doc.data().email
          } else if (doc.data().firstName !== '') {
            data.Name = doc.data().firstName + ' ' + doc.data().lastName
          }
          data.Join = moment.unix(doc.data().joindateadv).format('MMM Do YYYY')
          if (data.prov) {
            this.plans.push(data)
          }
        })
      })
  },
  methods: {
    addmsger (id, name) {
      console.log(id)
      console.log(this.userinfo)
      let users = this.userinfo.users
      if (!users.includes(id)) {
        console.log('caffine')
        let convotemplate = {
          provid: localStorage.getItem('userid'),
          userid: id,
          created: moment().unix(),
          provider: this.userinfo.firstName + ' ' + this.userinfo.lastName,
          user: name,
          users: [localStorage.getItem('userid'), id],
          messages: []
        }
        let userarr = this.userinfo.users
        userarr.push(id)
        db.collection('users').doc(localStorage.getItem('userid')).update({
          users: userarr
        })
        db.collection('users').doc(id).get().then((doc) => {
          console.log(doc.id)
          let mentors = doc.data().mentors
          if (!mentors.includes(localStorage.getItem('userid'))) {
            mentors.push(localStorage.getItem('userid'))
            db.collection('users').doc(doc.id).update({
              mentors: mentors
            })
          }
        })
        db.collection('conversations').add(convotemplate)
      }
    }
  }
}
</script>

<style>
  a {
    cursor: pointer;
  }
  .modaltext{
    color: black;
  }
  .mods{
    background-color: beige
  }
</style>
