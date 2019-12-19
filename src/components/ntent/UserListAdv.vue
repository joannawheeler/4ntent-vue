<template>
  <div>

    <div class="row">
      <div class="col-md-12">
          <b-pagination size="sm" v-model="currentPage" :per-page="4" :total-rows="plans.length">
          </b-pagination>
          <b-table :per-page="4" :current-page="currentPage" responsive hover :items="plans" :fields="fields">
          <template slot="viewform" slot-scope="row">
            <b-button v-if="row.item.Ntent === ('User has not filled out data')" variant="success-outline" class="btn btn-micro" @click.stop='formview(row.item, row.item.Name, row.item.email)'>
              View Plan
            </b-button>
            <b-button v-if="!(row.item.Ntent === ('User has not filled out data'))" class="btn btn-micro" @click.stop='formview(row.item, row.item.Name, row.item.email)'>
              View Plan
            </b-button>
          </template>
          <template slot="viewcomments" slot-scope="row">
            <b-btn class="btn btn-micro" @click.stop='commentview(row.item.id, row.item.Name)'>
              View Comments
            </b-btn>
          </template>
          <template slot="addmsger" slot-scope="row">
            <b-btn class="btn btn-micro" @click.stop="addmsger(row.item.id, row.item.Name)">
              Add
            </b-btn>
          </template>
          </b-table>
      </div>
    </div>

  </div>
</template>

<script>
import db from '../../firebaseInit.js'
import moment from 'moment'

export default {
  name: 'Userlist',
  data () {
    return {
      fields: {
        Name: { label: 'User', sortable: true, 'class': 'text-center' },
        Join: { label: 'Join Date', sortable: true, 'class': 'text-center' },
        Ntent: { label: 'Ntent', sortable: true, 'class': 'text-center' },
        viewform: { label: 'Wellness Assessment', 'class': 'text-center' },
        viewcomments: { label: 'View Comments', 'class': 'text-center' },
        addmsger: { label: 'Add to Messenger', 'class': 'text-center' }
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
            'Name': doc.data().firstName + ' ' + doc.data().lastName,
            'firstName': doc.data().firstName,
            'lastName': doc.data().lastName,
            'provider': doc.data().ntent.provider,
            'prov': doc.data().provider,
            'Ntent': doc.data().ntent.Ntent,
            'NotMeetNtent': doc.data().ntent.NotMeetNtent,
            'Struggles': doc.data().ntent.Struggles,
            'Join': '',
            'Eat1': doc.data().ntent.Eat1,
            'Eat2': doc.data().ntent.Eat2,
            'Eat3': doc.data().ntent.Eat3,
            'Eat4': doc.data().ntent.Eat4,
            'Eat5': doc.data().ntent.Eat5,
            'Eat6': doc.data().ntent.Eat6,
            'Eat7': doc.data().ntentEat7,
            'Fit1': doc.data().ntent.Fit1,
            'Fit2': doc.data().ntent.Fit2,
            'Fit3': doc.data().ntent.Fit3,
            'Fit4': doc.data().ntent.Fit4,
            'Fit5': doc.data().ntent.Fit5,
            'Fit6': doc.data().ntent.Fit6,
            'Fit7': doc.data().ntent.Fit7,
            'Life1': doc.data().ntent.Life1,
            'Life2': doc.data().ntent.Life2,
            'Life3': doc.data().ntent.Life3,
            'Life4': doc.data().ntent.Life4,
            'Life5': doc.data().ntent.Life5,
            'Life6': doc.data().ntent.Life6,
            'Life7': doc.data().ntent.Life7,
            'Life8': doc.data().ntent.Life8,
            'Life9': doc.data().ntent.Life9,
            'Life10': doc.data().ntent.Life10,
            'Life11': doc.data().ntent.Life11,
            'Life12': doc.data().ntent.Life12,
            'Life13': doc.data().ntent.Life13,
            'Comments': doc.data().ntent.Comments,
            'id': doc.id
          }
          if (doc.data().firstName === '') {
            data.Name = doc.data().email
          } else if (doc.data().firstName !== '') {
            data.Name = doc.data().firstName + ' ' + doc.data().lastName
          }
          data.Join = moment.unix(doc.data().joindateadv).format('MMM Do YYYY')
          if (!data.prov) {
            this.plans.push(data)
          }
        })
      })
  },
  methods: {
    addmsger (id, name) {
      let users = this.userinfo.users
      if (!users.includes(id)) {
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
        console.log('caffine')
        db.collection('conversations').where('provid', '==', localStorage.getItem('userid')).get()
        .then((docsnap) => {
          if (!docsnap.empty) {
            let docid = docsnap.docs[0].id
            console.log(docid)
            console.log(id)
            let pid = localStorage.getItem('userid')
            console.log(pid)
            let usrs = [pid, id]
            db.collection('conversations').doc(docid).update({
              users: usrs
            })
          } else {
            let convotemplate = {
              provid: localStorage.getItem('userid'),
              userid: id,
              created: moment().unix(),
              provider: this.userinfo.firstName + ' ' + this.userinfo.lastName,
              user: name,
              users: [localStorage.getItem('userid'), id],
              messages: []
            }
            db.collection('conversations').add(convotemplate).then((doct) => {
              location.reload()
            })
          }
        })
      }
    },
    formview (info, name, email) {
      localStorage.setItem('formEmail', email)
      localStorage.setItem('viewName', name)
      localStorage.setItem('formName', info.Name)
      localStorage.setItem('formProvider', info.provider)
      localStorage.setItem('formNtent', info.Ntent)
      localStorage.setItem('formNotMeetNtent', info.NotMeetNtent)
      localStorage.setItem('formStruggles', info.Struggles)
      localStorage.setItem('formEat1', info.Eat1)
      localStorage.setItem('formEat2', info.Eat2)
      localStorage.setItem('formEat3', info.Eat3)
      localStorage.setItem('formEat4', info.Eat4)
      localStorage.setItem('formEat5', info.Eat5)
      localStorage.setItem('formEat6', info.Eat6)
      localStorage.setItem('formEat7', info.Eat7)
      localStorage.setItem('formFit1', info.Fit1)
      localStorage.setItem('formFit2', info.Fit2)
      localStorage.setItem('formFit3', info.Fit3)
      localStorage.setItem('formFit4', info.Fit4)
      localStorage.setItem('formFit5', info.Fit5)
      localStorage.setItem('formFit6', info.Fit6)
      localStorage.setItem('formFit7', info.Fit7)
      localStorage.setItem('formLife1', info.Life1)
      localStorage.setItem('formLife2', info.Life2)
      localStorage.setItem('formLife3', info.Life3)
      localStorage.setItem('formLife4', info.Life4)
      localStorage.setItem('formLife5', info.Life5)
      localStorage.setItem('formLife6', info.Life6)
      localStorage.setItem('formLife7', info.Life7)
      localStorage.setItem('formLife8', info.Life8)
      localStorage.setItem('formLife9', info.Life9)
      localStorage.setItem('formLife10', info.Life10)
      localStorage.setItem('formLife11', info.Life11)
      localStorage.setItem('formLife12', info.Life12)
      localStorage.setItem('formLife13', info.Life13)
      localStorage.setItem('formid', info.id)
      location.assign('edit-ntent')
    },
    commentview (id, name) {
      localStorage.setItem('viewName', name)
      localStorage.setItem('commentid', id)
      location.assign('comment-history')
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
