<template>
  <div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget>
          <h6>For {{viewname}}</h6>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('Mentor Comment Archive')">
            <b-btn v-if="userinfo.provider" class="btn btn-micro" v-b-modal.modal2 v-on:click="modals(cid)">
              Add Addon Comment
            </b-btn>
          <b-table hover :items="commentss" :fields="fieldss">
            <template slot="action" slot-scope="row">
              <b-btn class="btn btn-micro" @click.stop='editaddon(row.item.id, row.item.cid)'>
                Remove
              </b-btn>
            </template>
          </b-table>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('Initial Comments')">
          <b-btn v-if="userinfo.provider" class="btn btn-micro" v-b-modal.modal1 v-on:click="modals(cid)">
            Add Initial Comment
          </b-btn>
          <b-table hover :items="comments" :fields="fields">
            <template slot="action" slot-scope="row">
              <b-btn class="btn btn-micro" @click.stop='editinit(row.item.id, row.item.cid)'>
                Remove
              </b-btn>
            </template>
          </b-table>
        </vuestic-widget>
      </div>
    </div>    
    
    <b-modal  ref="modal1" hide-footer id="modal1">
      Initial Comments
      <b-form>
        <b-form-input
          v-model="initcomments.Goal"
          class="mods"
          type="text"
          placeholder="Goal (Type here)"></b-form-input>
          <b-form-input
          v-model="initcomments.Baseline"
          class="mods"
          type="text"
          placeholder="Baseline (Type here)"></b-form-input>
          <b-form-input
          v-model="initcomments.Working"
          class="mods"
          type="text"
          placeholder="What's working / not (Type here)"></b-form-input>
          <b-form-input
          v-model="initcomments.Strategies"
          class="mods"
          type="text"
          placeholder="Proactive Strategies (Type here)"></b-form-input>
          <b-form-input
          v-model="initcomments.Reinforcements"
          class="mods"
          type="text"
          placeholder="Reinforcements and Maintenance (Type here)"></b-form-input>
      <b-button class="btn btn-micro" @click.stop='submit(initcomments, livingid)'>Save Comments</b-button>
      </b-form>
    </b-modal>

    <b-modal ref="modal2" hide-footer id="modal2">
      AddOn Comments
      <b-form>
        <b-form-input
          v-model="addoncomment"
          class="mods"
          type="text"
          placeholder="Comment"></b-form-input>
          <b-form-input
          v-model="commentref"
          class="mods"
          type="text"
          placeholder="Who are you? (The nutritionist, physical therapist etc)"></b-form-input>
      <b-button class="btn btn-micro" @click.stop='submitaddon(comments, livingid)'>Save Comments</b-button>
      </b-form>
    </b-modal>

  </div>
</template>

<script>
import firebase from 'firebase'
import db from '../../firebaseInit'
import moment from 'moment'

export default {
  name: 'dashboard',
  data () {
    return {
      fields: {
        Provider: { label: 'Provider', sortable: true, 'class': 'text-center' },
        Goal: { label: 'Goal', 'class': 'text-center' },
        Baseline: { label: 'Baseline', 'class': 'text-center' },
        Reinforcements: { label: 'Reinforcements', 'class': 'text-center' },
        Strategies: { label: 'Strategies', 'class': 'text-center' },
        Working: { label: 'What is not working / Working', 'class': 'text-center' },
        time: { label: 'Time', 'class': 'text-center', sortable: true },
        action: { label: 'Remove', 'class': 'text-center' }
      },
      fieldss: {
        Provider: { label: 'Provider', sortable: true, 'class': 'text-center' },
        comment: { label: 'Comment', sortable: true, 'class': 'text-center' },
        ref: { label: 'Role', sortable: true, 'class': 'text-center' },
        time: { label: 'Time', 'class': 'text-center', sortable: true },
        action: { label: 'Remove', 'class': 'text-center' }
      },
      user: {},
      userinfo: {},
      viewname: null,
      comments: [],
      commentss: [],
      livingid: null,
      commentref: null,
      addoncomment: null,
      cid: null,
      initcomments: {
        Goal: null,
        Baseline: null,
        Working: null,
        Strategies: null,
        Reinforcements: null
      }
    }
  },
  created () {
    this.user = firebase.auth().currentUser
    let id = this.user.uid
    db.collection('users').doc(id).get()
      .then(doc => {
        this.userinfo = doc.data()
        if (this.userinfo.provider === false) {
          this.cid = id
          this.viewname = this.userinfo.firstName
        } else if (this.userinfo.provider === true) {
          this.cid = localStorage.getItem('commentid')
          this.viewname = localStorage.getItem('viewName')
        }
      })
      .then(data => {
        db.collection('users').doc(this.cid).collection('comments').orderBy('time', 'desc').get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let info = {
                'Baseline': doc.data().Comment.Baseline,
                'Goal': doc.data().Comment.Goal,
                'Reinforcements': doc.data().Comment.Reinforcements,
                'Strategies': doc.data().Comment.Strategies,
                'Working': doc.data().Comment.Working,
                'Provider': doc.data().provider,
                'time': moment.unix(doc.data().time).format('llll'),
                'cid': doc.id,
                'id': this.cid
              }
              this.comments.push(info)
            })
          })
        db.collection('users').doc(this.cid).collection('addoncomments').orderBy('time', 'desc').get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let info = {
                'comment': doc.data().Comment,
                'ref': doc.data().ref,
                'Provider': doc.data().provider,
                'time': moment.unix(doc.data().time).format('llll'),
                'cid': doc.id,
                'id': this.cid
              }
              this.commentss.push(info)
            })
          })
      })
  },
  computed: {
    state () {
      return null
    }
  },
  methods: {
    modals (id) {
      localStorage.setItem('ref', id)
      this.livingid = localStorage.getItem('ref')
    },
    submit (comment, id) {
      let timenow = moment().unix()
      db.collection('users').doc(id).collection('comments').add({
        Comment: comment,
        provider: this.userinfo.firstName + ' ' + this.userinfo.lastName,
        pemail: this.user.email,
        time: timenow
      }).then(dos => {
        this.$refs.modal1.hide()
        location.reload()
      })
    },
    submitaddon (comment, id) {
      let timenow = moment().unix()
      db.collection('users').doc(id).collection('addoncomments').add({
        Comment: this.addoncomment,
        provider: this.userinfo.firstName + ' ' + this.userinfo.lastName,
        ref: this.commentref,
        pemail: this.user.email,
        time: timenow
      }).then(dos => {
        this.$refs.modal2.hide()
        location.reload()
      })
    },
    editinit (id, cid) {
      console.log(id, cid)
      db.collection('users').doc(id).collection('comments').doc(cid).delete().then(function () {
        location.reload()
      })
    },
    editaddon (id, cid) {
      console.log(id, cid)
      db.collection('users').doc(id).collection('addoncomments').doc(cid).delete().then(function () {
        location.reload()
      })
    }
  }
}
</script>

<style>
  a {
    cursor: pointer;
  }
</style>
