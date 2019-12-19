<!-- COMPONENT IS NOT CURRENTLY IN USE, WOULD NEED TO UPDATE USERINFO TO INCLUDE ALL NEW PROPERTIES -->
<template>
  <div class="signup">
    <h2>{{'auth.createNewAccount' | translate}}</h2>
    <div class="input-container">
      <div class="form-group">
        <div class="input-group">
          <input v-model="firstName" type="text" id="firstName" required="required" />
          <label class="control-label" for="firstName">First Name</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input v-model="lastName" type="text" id="lastName" required="required" />
          <label class="control-label" for="lastName">Last Name</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input v-model="email" type="text" id="email" required="required" />
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input v-model="password" type="password" id="password" required="required" />
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
    </div>
    <vuestic-checkbox class="checkbox1" v-model="checkboxOneModel">
      TOS here
      <template slot="label">I agree to the
        <router-link to="">
          <h1 class="terms">Terms of Use</h1>
        </router-link>
      </template>
    </vuestic-checkbox>
    <div class="sign-up-button-container">
      <button class="btn btn-primary" @click.stop="signUp()">
        {{'auth.signUp' | translate}}
      </button>
    </div>
    <div class="go-to-sign-in-container">
      <router-link class='link' :to="{name: 'login'}">Already have an account?</router-link>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import db from '../../../firebaseInit'
import moment from 'moment'
import axios from 'axios'

export default {
  name: 'signUp',
  data: function() {
    return {
      checkboxOneModel: false,
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    //must change signup in /public/Assessment.vue AND /public/SignupReg.vue
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          const id = user.user.uid
          let datenow = new Date()
          let daylimit = datenow.getUTCDate()
          let yearlimit = datenow.getUTCFullYear()
          let monthlimit = datenow.getUTCMonth()
          let datelimite = yearlimit + '_' + monthlimit + '_' + daylimit
          let userdata = {
            firstName: '',
            lastName: '',
            address: null,
            provider: false,
            DOB: null,
            phone: null,
            zip: null,
            email: user.user.email,
            joindateadv: moment().unix(),
            joindate: datelimite,
            users: [],
            notif: [],
            mentors: [],
            assessfilled: false,
            journalEntries: {
              mostRecentlyCreatedEntryDate: null,
            },
            purchaseHistory: {},
            tier: '',
            datesWithIntervalEntries: {},
            appointments: {},
            dailyCheckIns: {},
            status: {

            },
            ntent: {
              Name: '',
              provider: null,
              Ntent: 'User has not filled out data',
              NotMeetNtent: null,
              Struggles: null,
              Eat1: null,
              Eat2: null,
              Eat3: null,
              Eat4: null,
              Eat5: null,
              Eat6: null,
              Eat7: null,
              Fit1: null,
              Fit2: null,
              Fit3: null,
              Fit4: null,
              Fit5: null,
              Fit6: null,
              Fit7: null,
              Life1: null,
              Life2: null,
              Life3: null,
              Life4: null,
              Life5: null,
              Life6: null,
              Life7: null,
              Life8: null,
              Life9: null,
              Life10: null,
              Life11: null,
              Life12: null,
              Life13: null,
              NtentOther: null,
              NotMeetNtentOther: null,
            }
          }
          db.collection('users').doc(id).set(userdata)
          //     return doc.data()
          // }).then(function(response) {
          // console.log(response)
          // }).catch(function(error) {
          // console.log(error)
          // })

          this.$store.dispatch('login', user)
          this.$store.dispatch('setuser', user)
          localStorage.setItem('userid', user.user.uid)
          this.$router.replace('/pricing')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    }
  }
}

</script>
<style scoped lang="scss">

h1 {
  display: inline;
  font-size: 20px;
}

h2 {
  text-align: center;
}

input {
  font-size: 1em !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  height: 100%;
}

a {
  color: #4ae387;
  font-size: 20px;
}

.navbar {
  width: 100%;
}

.sign-up-button-container {
  text-align: center;

  button {
    font-size: 15px;
  }
}

.go-to-sign-in-container {
  text-align: center !important;
  margin-top: 1em;

  a {
    font-size: 1em;
  }
}

.input-container {
  font-size: 2em !important;
}

.checkbox1 {
  color: black !important;
  font-size: 20px !important;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .vuestic-checkbox__label-text {
    padding-top: 0;
    line-height: 100%;
  }
}
</style>
