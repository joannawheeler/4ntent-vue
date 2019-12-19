<!-- not currently in use -->
<template>
  <div>
    <div v-if="display === 'signup' ">
      <div class="signup">
        <h2>First You'll Need to Create an Account!</h2>
        <div class="input-container">
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
            Continue
          </button>
        </div>
        <div class="go-to-sign-in-container">
          <div v-on:click="switchDisplay('login')">Already have an account?</div>
        </div>
      </div>
    </div>
    <div v-else-if="display === 'login' ">
      <div class="login">
        <h2>Please login to make changes to your account</h2>
        <div>
          <div class="input-container">
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
          <div class="login-button-container">
            <button class="btn btn-primary" @click.stop="signIn()">
              Continue
            </button>
          </div>
          <div class="go-to-signup-container">
            <div v-on:click="switchDisplay('signup')">Not a member yet? Sign up here!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import db from '../../firebaseInit'
import moment from 'moment'
import axios from 'axios'
import init from '../../firebaseInit';

export default {
  name: 'signup-reg',
  props: {
    display: '',
    displayModal: ''
  },
  data: function() {
    return {
      checkboxOneModel: false,
      email: '',
      password: '',
    }
  },
  methods: {
    switchDisplay(displayType) {
      this.display = displayType
    },
    signIn: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          // need to figureo ut how to dispatch to store later , for now gonna use localstorage
          this.$store.dispatch('login', user)
          this.$store.dispatch('setuser', user)
          localStorage.setItem('userid', user.user.uid)
          this.display = false;
          this.displayModal(false)
          // this.$router.replace('pricing')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    },
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
        const id = user.user.uid
        let datenow = new Date()
        let daylimit = datenow.getUTCDate()
        let yearlimit = datenow.getUTCFullYear()
        let monthlimit = datenow.getUTCMonth()
        let datelimite = yearlimit + '_' + monthlimit + '_' + daylimit;
        let userdata = {
          //provided at sign up
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          provider: false,
          assessfilled: false,

          //to be filled out later from dashboard/my-profile
          address: '',
          DOB: '',
          phone: '',
          zip: '',

          //computed properties
          joindate: datelimite,

          //will be updated at time of purchase
          notif: [], //need to create function that, as soon as a user logs in, accumulates this value as it decides which notifications the user needs to see
          mentors: [],
          tier: "",
          purchaseHistory: {}, //will not be filled until we start using Paypal, for now we are redirecting to dashboard
          subscriptions: {}, //will be empty until the user purchases a subscription

          //will be updated regularly via interaction with their dashboard
          journalEntries: {
            mostRecentlyCreatedEntryDate: null,
          },
          dailyCheckIns: {},
          //values will be filled out once user takes the assessment
          ntent: {
            assessedTitle: '',
            Ntent: '', //what part of the assessment should record this?
            Eat1: null,
            Eat2: null,
            Eat3: null,
            Eat4: null,
            Eat5: null,
            Fit1: null,
            Fit2: null,
            Fit3: null,
            Fit4: null,
            Fit5: null,
            Life1: null,
            Life2: null,
            Life3: null,
            Life4: null,
            Life5: null,
            Life6: null,
            Misc1: null,
            Misc2: null,
            Misc3: null,
            Misc4: null,
            Misc5: null,
            Misc6: null,
            EatPercent: null,
            FitPercent: null,
            LifePercent: null
          },
          pastWellnessAssessments: {} //question : answer format
        }
        db.collection('users').doc(id).set(userdata)
          .then(function(response) {
            console.log(response)
          }).then(x => {
            axios.post('/signup', {
                method: 'post',
                data: {
                  email: this.email,
                  firstName: this.firstName,
                  lastName: this.lastName
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          }).then(x => {
            this.$store.dispatch('login', user)
            this.$store.dispatch('setuser', user)
            localStorage.setItem('userid', user.user.uid)
            this.display = false;
            this.displayModal(false);
          }).catch(function(error) {
            console.log(error)
          })
      }).catch((err) => {
        alert('There was a problem. Refer to code in SignupReg.vue to address the following error code: ' + err.code)
      })
    }
  }
}

</script>
<style scoped lang="scss">
.navbar {
  width: 100%;
}

h2 {
  text-align: center;
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

.checkbox1 {
  color: black !important;
  font-size: 20px !important;
  margin-bottom: 2em;
}

h1 {
  display: inline;
  font-size: 20px;
}

</style>
