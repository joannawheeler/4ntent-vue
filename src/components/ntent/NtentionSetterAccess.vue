<template>
  <div class="dashboard-page my-giving-back-page">
    <div class="page-title">
      NTENTION SETTER ACCESS
    </div>
    <div class="page-content">
      <div class="coming-soon">
      </div>
    </div>
  </div>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'

export default {
  name: 'ntention-setter-access',
  computed: {

  },
  data() {
    return {
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      userinfo: {},
      user: {},
      dobhold: '',
      selectedFile: null
    }
  },
  methods: {
    next() {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  },
  created() {
    //authenticate user first
    this.user = firebase.auth().currentUser
    let use = this.$store.getters.getUser
    let user = use.user
    let id = user.uid
    db.collection('users').doc(id).get()
      .then(doc => {
        this.userinfo = doc.data()
        this.dobhold = moment.unix(doc.data().DOB).format('MM-DD-YYYY')
      })
    this.$nextTick(() => {
      this.$validator.validateAll()
    })
  },
}

</script>
<style lang="scss">
input[type=checkbox]:disabled+label,
input[type=radio]:disabled+label,
input[type=checkbox]:disabled,
input[type=radio]:disabled {
  cursor: not-allowed;
}

</style>
