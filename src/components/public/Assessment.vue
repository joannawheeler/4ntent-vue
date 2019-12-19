<!-- current status: working
a new user can take the assessment, create an account, redirects to pricing page, they become logged in and can only logout from the profile dropdown, NOT yet access their dashboard -->
<template>
  <div class="form-wizard-page">
    <vuestic-widget class="no-h-padding assessment-wizard" :headerText='"4NTENT Wellness Profile"'>
      <vuestic-wizard :steps="hsSteps">
        <div slot="page1" class="form-wizard-tab-content">
          <div class="form-wizard-tab-content-text text-center">
            <p>
              Welcome to your wellness profile. Begin your NTENTION journey and find out if you are a nutrition nut, fitness freak, or lifestyle guru!
            </p>
            <img class="icongraph" src="../../assets/images/mod4interactiveplatform.png" />
          </div>
        </div>
        <div slot="page2" class="form-wizard-tab-content page-2">
          <p class="get-started">Let's get started</p>
          <div class="form-group with-icon-right" :class="{'has-error': errors.has('firstName'), 'valid': isFormFieldValid('firstName')}">
            <div class="col-xs-12 input-group">
              <input name="firstName" data-vv-as="firstName" v-model="firstName" v-validate="'required'"  autocomplete="off"  required title="" />
              <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
              <i class="fa fa-check valid-icon icon-right input-icon"></i>
              <label class="control-label">First Name</label><i class="bar"></i>
              <small v-show="errors.has('firstName')" class="help text-danger">
                First Name required
              </small>
            </div>
          </div>
          <div class="form-group with-icon-right" :class="{'has-error': errors.has('lastName'), 'valid': isFormFieldValid('lastName')}">
            <div class="col-xs-12 input-group last-name">
              <input name="lastName" data-vv-as="lastName" v-model="lastName" v-validate="'required'" autocomplete="off" required title="" />
              <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
              <i class="fa fa-check valid-icon icon-right input-icon"></i>
              <label class="control-label">Last Name</label><i class="bar"></i>
              <div class="bar-init">
                <small v-show="errors.has('lastName')" class="help text-danger">
                  Last Name required
                </small>
              </div>
            </div>
          </div>
          <div class="form-group with-icon-right" :class="{'has-error': errors.has('email'), 'valid': isFormFieldValid('email')}">
            <div v-if="!this.$store.state['app']['isLoggedIn']" class="col-xs-12 input-group">
              <input name="email" data-vv-as="email" v-model="email" v-validate="'required'" autocomplete="off" required title="" />

              <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
              <i class="fa fa-check valid-icon icon-right input-icon"></i>
              <label class="control-label">Email</label><i class="bar"></i>
              <small v-show="errors.has('email')" class="help text-danger">
                Email is required
              </small>
            </div>
          </div>
          <div class="form-group with-icon-right" :class="{'has-error': errors.has('password'), 'valid': isFormFieldValid('password')}">
            <div v-if="!this.$store.state['app']['isLoggedIn']" class="col-xs-12 input-group">
              <input type="password" name="password" data-vv-as="password" v-model="password" autocomplete="off" v-validate="'required'" required title="" />
              <input type="password" name="whatever" class="autocomplete-off" autocomplete="new-password" />
              <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
              <i class="fa fa-check valid-icon icon-right input-icon"></i>
              <label class="control-label">Password</label><i class="bar"></i>
              <small v-show="errors.has('password')" class="help text-danger">
                Password needs at least 6 characters
              </small>
            </div>
          </div>
          <div class="row">
            <div v-if="!this.$store.state['app']['isLoggedIn']" class="col-xs-12 input-group">
              <vuestic-checkbox class="checkbox1" v-model="checkboxOneModel">
                <template slot="label">I agree to the
                  <button v-on:click="termsAndCondDialog = true">
                    <p class="terms">Terms of Use</p>
                  </button>
                </template>
              </vuestic-checkbox>
              <v-dialog class="text-center" v-model="termsAndCondDialog" width="600">
                <v-card>
                  <v-card-text>
                    <terms-and-conditions />
                    <div class="text-center"><button v-on:click="termsAndCondDialog = false">Go Back</button></div>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </div>
        <div slot="page3" class="form-wizard-tab-content">
          <div class="row">
            <div class="col-md-12">
              <h2>Eating<br></h2>
              <h5>Rate out of 5 how satisfied you are in each field<br></h5>
              <h6>(1 = Not satisfied, 5 = Very Satisfied)</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <fieldset>
                Nutrition Content per meal
                <b-form-radio-group plain id="eatRadio1" v-model="eatOptions[0]" :options="optionsnum" name="eatRadio1">
                </b-form-radio-group>
                Eating Habits
                <b-form-radio-group plain id="eatRadio2" v-model="eatOptions[1]" :options="optionsnum" name="eatRadio2">
                </b-form-radio-group>
                Satisfaction during and after meals
                <b-form-radio-group plain id="eatRadio4" v-model="eatOptions[2]" :options="optionsnum" name="eatRadio4">
                </b-form-radio-group>
                Discipline with unhealthy foods
                <b-form-radio-group plain id="eatRadio5" v-model="eatOptions[3]" :options="optionsnum" name="eatRadio5">
                </b-form-radio-group>
                Knowledge of the best foods for you
                <b-form-radio-group plain id="eatRadio7" v-model="eatOptions[4]" :options="optionsnum" name="eatRadio7">
                </b-form-radio-group>
              </fieldset>
            </div>
          </div>
        </div>
        <div slot="page4" class="form-wizard-tab-content">
          <div class="row">
            <div class="col-md-12">
              <h2>Fitness<br></h2>
              <h5>Rate out of 5 how satisfied you are in each field<br></h5>
              <h6>(1 = Not satisfied, 5 = Very Satisfied)</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <fieldset>
                Amount of exercise
                <b-form-radio-group plain id="radios10" v-model="fitnessOptions[0]" :options="optionsnum" name="fitnessRadio1">
                </b-form-radio-group>
                Challenged in Workouts
                <b-form-radio-group plain id="radios13" v-model="fitnessOptions[1]" :options="optionsnum" name="fitnessRadio4">
                </b-form-radio-group>
                Physical Appearance
                <b-form-radio-group plain id="radios14" v-model="fitnessOptions[2]" :options="optionsnum" name="fitnessRadio5">
                </b-form-radio-group>
                Physical Health
                <b-form-radio-group plain id="radios15" v-model="fitnessOptions[3]" :options="optionsnum" name="fitnessRadio6">
                </b-form-radio-group>
                Energy
                <b-form-radio-group plain id="radios16" v-model="fitnessOptions[4]" :options="optionsnum" name="fitnessRadio7">
                </b-form-radio-group>
              </fieldset>
            </div>
          </div>
        </div>
        <div slot="page5" class="form-wizard-tab-content">
          <div class="row">
            <div class="col-md-12">
              <h2>Lifestyle<br></h2>
              <h5>Rate out of 5 how satisfied you are in each field<br></h5>
              <h6>(1 = Not satisfied, 5 = Very Satisfied)</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <fieldset>
                Giving back to causes I believe in
                <b-form-radio-group plain id="radios19" v-model="lifestyleOptions[0]" :options="optionsnum" name="lifestyleRadio3">
                </b-form-radio-group>
                Follow through on goals
                <b-form-radio-group plain id="radios21" v-model="lifestyleOptions[1]" :options="optionsnum" name="lifestyleRadio5">
                </b-form-radio-group>
                Relationship with family and friends
                <b-form-radio-group plain id="radios23" v-model="lifestyleOptions[2]" :options="optionsnum" name="lifestyleRadio7">
                </b-form-radio-group>
                Gratifying job/work
                <b-form-radio-group plain id="radios25" v-model="lifestyleOptions[3]" :options="optionsnum" name="lifestyleRadio9">
                </b-form-radio-group>
                Financial Stability
                <b-form-radio-group plain id="radios26" v-model="lifestyleOptions[4]" :options="optionsnum" name="lifestyleRadio10">
                </b-form-radio-group>
                Amount of rest, sleep, downtime
                <b-form-radio-group plain id="radios29" v-model="lifestyleOptions[5]" :options="optionsnum" name="lifestyleRadio13">
                </b-form-radio-group>
              </fieldset>
            </div>
          </div>
        </div>
        <div slot="page6" class="form-wizard-tab-content">
          <div class="row">
            <div class="col-md-12">
              <h2>More about you<br></h2>
              <!-- <h5>Rate out of 5 how satisfied you are in each field<br></h5> -->
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <fieldset>
                What is your daily health routine? (e.g. walk in the park)
                <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="miscOptions[0]"></b-form-textarea>
                What are you current eating habits like?
                <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="miscOptions[1]"></b-form-textarea>
                Please tell us about any past or current medical conditions, injuries, limitations, or other that we should be aware of?
                <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="miscOptions[2]"></b-form-textarea>
                Are you currently taking any medication? If yes please list medication(s) and the condition it is prescribed for.
                <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="miscOptions[3]"></b-form-textarea>
                What other programs have you tried in the past?
                <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="miscOptions[4]"></b-form-textarea>
                Describe your personality
                <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="miscOptions[5]"></b-form-textarea>
                What do you enjoy doing?
                <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="miscOptions[6]"></b-form-textarea>
              </fieldset>
            </div>
          </div>
        </div>
        <div slot="page7" class="form-wizard-tab-content">
          <h3> Hey {{assessedTitle}} ! </h3>
          <p>
            You scored the highest in wanting to {{assessedBio}} Check your email for information about your account.
          </p>
        </div>
        <div slot="wizardCompleted" class="form-wizard-tab-content">
          <h4>{{'forms.wizard.completed' | translate}}</h4>
          <p>
            You have completed the assessment!
          </p>
        </div>
      </vuestic-wizard>
    </vuestic-widget>
  </div>
</template>
<script>
// import db from '../../firebaseInit'
import firebase from 'firebase'
import db from '../../firebaseInit'
import moment from 'moment'
import axios from 'axios'
import TermsAndConditions from './TermsAndConditions'

export default {
  name: 'assessment',
  components: {
    TermsAndConditions
  },
  data() {
    return {
      user: {},
      userinfo: {},
      id: null,
      password: '',
      lastName: '',
      firstName: '',
      email: '',
      termsAndCondDialog: false,
      checkboxOneModel: false,
      mentors: '',
      assessedTitle: '',
      assessedBio: '',
      eatOptions: ['', '', '', '', ''],
      eatFilled: false,
      eatMax: 105,
      fitnessOptions: ['', '', '', '', ''],
      fitnessFilled: false,
      fitnessMax: 95,
      lifestyleOptions: ['', '', '', '', '', ''],
      lifestyleFilled: false,
      lifestyleMax: 170,
      miscOptions: ['', '', '', '', '', '', ''],
      miscFilled: false,
      options1: [
        { text: 'Nutrition', value: 'Nutrition' },
        { text: 'Fitness', value: 'Fitness' },
        { text: 'Lifestyle', value: 'Lifestyle' }
      ],
      options2: [
        { text: 'Money', value: 'Money' },
        { text: 'Time', value: 'Time' },
        { text: 'Family', value: 'Family' },
        { text: 'Work', value: 'Work' },
        { text: 'Other', value: 'Other' }
      ],
      options3: [
        { text: 'Irritability', value: 'Irritability' },
        { text: 'Stress', value: 'Stress' },
        { text: 'Worry', value: 'Worry' },
        { text: 'Restlessness', value: 'Restlessness' },
        { text: 'Digestion Issues', value: 'Digestion Issues' },
        { text: 'Overeating or lack of appetite', value: 'Overeating or lack of appetite' },
        { text: 'Difficulty with Sleep', value: 'Difficulty with Sleep' },
        { text: 'Low Energy', value: 'Low Energy' }
      ],
      optionsnum: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 }
      ]
    }
  },
  created() {
    let use = this.$store.getters.getUser;
    //if user is logged in and completing their assessment
    //skip the login
    if (this.$store.state['app']['isLoggedIn']) {

      let id = use.user.uid;
      this.id = id;
      db.collection('users').doc(id).collection('userlogs').orderBy('datelimit', 'desc').limit(1).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // this.value = doc.data().points
          })
        })
      db.collection('users').doc(id).get()
        .then(doc => {
          this.userinfo = doc.data()
        })
      //if user is not logged in and completing the assessment
    } else {

    }
  },
  computed: {
    percentages() {
      return {
        eat: this.eatPoints.points / this.eatMax,
        fitness: this.fitnessPoints.points / this.fitnessMax,
        lifestyle: this.lifestylePoints.points / this.lifestyleMax
      }
    },
    eatPoints() {
      return {
        points: (
          (this.eatOptions[0] * 3) + (this.eatOptions[1] * 3) + (this.eatOptions[2] * 2) +
          (this.eatOptions[3] * 3) + (this.eatOptions[4] * 2) +
          (this.fitnessOptions[2] * 2) + (this.fitnessOptions[3] * 3) + (this.fitnessOptions[4] * 2) +
          (this.lifestyleOptions[5] * 1)
        )
      }
    },
    fitnessPoints() {
      return {
        points: (
          (this.eatOptions[4] * 2) +
          (this.fitnessOptions[0] * 3) + (this.fitnessOptions[1] * 3) +
          (this.fitnessOptions[2] * 3) + (this.fitnessOptions[3] * 3) + (this.fitnessOptions[4] * 3) +
          (this.lifestyleOptions[5] * 2)
        )
      }
    },
    lifestylePoints() {
      return {
        points: (
          (this.eatOptions[0] * 2) + (this.eatOptions[1] * 2) + (this.eatOptions[2] * 1) +
          (this.eatOptions[3] * 2) + (this.eatOptions[4] * 2) +
          (this.fitnessOptions[0] * 2) + (this.fitnessOptions[1] * 2) +
          (this.fitnessOptions[2] * 1) + (this.fitnessOptions[3] * 3) + (this.fitnessOptions[4] * 2) +
          (this.lifestyleOptions[0] * 3) + (this.lifestyleOptions[1] * 3) + (this.lifestyleOptions[2] * 3) +
          (this.lifestyleOptions[3] * 3) + (this.lifestyleOptions[4] * 3) + (this.lifestyleOptions[5] * 3)
        )
      }
    },
    hsSteps() {
      let steps = [{
          label: 'Welcome',
          slot: 'page1',
          onNext: () => {
            //will skip signup step if user is logged in
          },
          isValid: () => {
            return true
          },
        },
        {
          label: 'Account Information',
          slot: 'page2',
          onNext: () => {

            console.log('onnext')
            //this step will be skipped if they are logged in
            //check that user didnt leave any fields blank
            this.validateFormField('firstName');
            this.validateFormField('lastName');
            this.validateFormField('email');
            this.validateFormField('password');
            this.validatePass(this.password)
          },

          isValid: () => {
            console.log(this.password)
            //account is not made yet, will be made once they COMPLETE the assessment, however, we WILL subscribe them to our mailing list

            //if the email and password are valid format move on to next step
            if (this.validateEmail(this.email) && this.validatePass(this.password) && this.checkboxOneModel) {
              //add them to our mailing list because email and password are validated
              return true;
            } else {
              return false;
            }
          },
          isUnique: (callback) => {
            firebase.auth().fetchSignInMethodsForEmail(this.email)
              .then((signInMethods) => {
                //if email DOES exist in db, pass false to the callback
                if (signInMethods[0] === "password") {
                  callback(false)
                  //if email doesnt currently exist in the db, pass true to the callback
                } else {
                  //check if already subscribed? or does mailchimp already do that check automatically? I think it does...?
                  console.log('callback true')
                  this.subscribe()
                  callback(true)
                }
              })
          },
        },
        {
          label: 'Eating',
          slot: 'page3',
          onNext: () => {
            //if the field is not empty, set this.eatFilled to true
            if (!this.eatOptions.includes('')) {
              this.eatFilled = true
            }
          },
          isValid: () => {
            //if eatFilled === true, move on to the next step in the wizard
            return (this.eatFilled)
          },
        },
        {
          label: 'Fitness',
          slot: 'page4',
          onNext: () => {
            if (!this.fitnessOptions.includes('')) {
              this.fitnessFilled = true
            }
          },
          isValid: () => {
            return (this.fitnessFilled)
          },
        },
        {
          label: 'Lifestyle',
          slot: 'page5',
          onNext: () => {
            if (!this.lifestyleOptions.includes('')) {
              this.lifestyleFilled = true
            }
          },
          isValid: () => {
            return (this.lifestyleFilled)
          },
        },
        {
          label: 'More about you',
          slot: 'page6',
          onNext: () => {
            if (!this.miscOptions.includes('')) {
              this.miscFilled = true
            }
            if ((this.percentages.lifestyle > this.percentages.eat) && (this.percentages.lifestyle > this.percentages.fitness)) {
              this.assessedTitle = 'Lifestyle Guru'
              this.assessedBio = 'improve your relationships with yourself most importantly, friends, family, money, and more!'
            } else if (this.percentages.eat > this.percentages.fitness) {
              this.assessedTitle = 'Nutrition Nut'
              this.assessedBio = 'engage in healthier eating habits full of nourishment and mindfulness.'
            } else {
              this.assessedTitle = 'Fitness Freak'
              this.assessedBio = 'engage in a fitter, healthier, energetic you full of ample amounts of active exercise.'
            }
          },
          isValid: () => {
            return (this.miscFilled)
          },
        },
        {
          label: 'Confirmation',
          slot: 'page7',
          onNext: () => {
            //if user is not logged in, sign user up, if user is logged in, update their existing record
            !this.$store.state['app']['isLoggedIn'] ? this.signUp() :
              this.updateUserinfo();
          }
        },
      ];
      // var removed = this.$store.state['app']['isLoggedIn'] ? steps.splice(1, 1) : null;
      return steps;
    },
  },
  methods: {
    //once user enters their firstName, lastName, email, and password, and click next, they will be subscribed to our mailchimp list
    //they DO NOT yet have an account with us where they can login/logout
    subscribe() {
      axios.post('/signup', {
        'email': this.email,
        'firstName': this.firstName,
        'lastName': this.lastName
      }).then(res => {
        console.log('we received this response from our server: ' + res)
      }).catch(error => {
        console.log('the request failed with this error: ' + error);
      });
    },
    //if user created an account through the signup modal from the pricing page, and goes to their dashboard, they will be prompted to fill out their assessment first, and be redirected to the assessment page, skipping the firstname lastname email and password step, update their userinfo in db once they complete the assessment, then redirect back to their dashboard
    updateUserinfo() {
      var scott = {
        id: 'qyG47UrEG6N9Liud1eb8lvKaHov1',
      }
      var kate = {
        'id': 'Dp7llVY097eayuhRRl4TGe4U1uH3'
      }
      var angie = {
        'id': '1eJ6fiHNNUUE9NqHUW7vVZXsTVw1',
      }
      var marc = {
        'id': 'hHoU6eKtRcXzjFUl5QrYNrDav523'
      }
      if (this.assessedTitle === 'Fitness Freak') {
        this.mentors = [scott]
      } else if (this.assessedTitle === 'Nutrition Nut') {
        this.mentors = [kate]
      } else if (this.assessedTitle === 'Lifestyle Guru') {
        var possibleMentors = [angie, marc]
        var randomlyChosenMentor = possibleMentors[Math.floor(Math.random() * possibleMentors.length)];
        this.mentors = [randomlyChosenMentor];
      }
      let userdata = {
        // notif: [],
        'assessfilled': true,
        'mentors': this.mentors,
        'ntent.assessedTitle': this.assessedTitle,
        'ntent.Eat1': this.eatOptions[0],
        'ntent.Eat2': this.eatOptions[1],
        'ntent.Eat3': this.eatOptions[2],
        'ntent.Eat4': this.eatOptions[3],
        'ntent.Eat5': this.eatOptions[4],
        'ntent.Fit1': this.fitnessOptions[0],
        'ntent.Fit2': this.fitnessOptions[1],
        'ntent.Fit3': this.fitnessOptions[2],
        'ntent.Fit4': this.fitnessOptions[3],
        'ntent.Fit5': this.fitnessOptions[4],
        'ntent.Life1': this.lifestyleOptions[0],
        'ntent.Life2': this.lifestyleOptions[1],
        'ntent.Life3': this.lifestyleOptions[2],
        'ntent.Life4': this.lifestyleOptions[3],
        'ntent.Life5': this.lifestyleOptions[4],
        'ntent.Life6': this.lifestyleOptions[5],
        'ntent.Misc1': this.miscOptions[0],
        'ntent.Misc2': this.miscOptions[1],
        'ntent.Misc3': this.miscOptions[2],
        'ntent.Misc4': this.miscOptions[3],
        'ntent.Misc5': this.miscOptions[4],
        'ntent.Misc6': this.miscOptions[5],
        'ntent.EatPercent': this.percentages.eat,
        'ntent.FitPercent': this.percentages.fitness,
        'ntent.LifePercent': this.percentages.lifestyle
      }
      db.collection('users').doc(this.id).update(userdata)
        .then(deets => {
          alert('your profile has been updated!')
          return deets
        })
        .then(deets => {
          this.$router.replace('/dashboard')
          return deets;
        })
        .catch(err => {
          alert("there was this error when trying to update the user's info: " + err)
          console.log(err)
        })
    },
    signUp: function() {
      var scott = {
        id: 'qyG47UrEG6N9Liud1eb8lvKaHov1',
      }
      var kate = {
        'id': 'Dp7llVY097eayuhRRl4TGe4U1uH3'
      }
      var angie = {
        'id': '1eJ6fiHNNUUE9NqHUW7vVZXsTVw1',
      }
      var marc = {
        'id': 'hHoU6eKtRcXzjFUl5QrYNrDav523'
      }
      if (this.assessedTitle === 'Fitness Freak') {
        this.mentors = [scott]
      } else if (this.assessedTitle === 'Nutrition Nut') {
        this.mentors = [kate]
      } else if (this.assessedTitle === 'Lifestyle Guru') {
        var possibleMentors = [angie, marc]
        var randomlyChosenMentor = possibleMentors[Math.floor(Math.random() * possibleMentors.length)];
        this.mentors = [randomlyChosenMentor];
      }
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        user => {
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
            assessfilled: true,

            //to be filled out later from dashboard/my-profile
            address: '',
            DOB: '',
            phone: '',
            zip: '',

            //computed properties
            joindate: datelimite,

            //will be updated at time of purchase
            notif: [], //need to create function that, as soon as a user logs in, accumulates this value as it decides which notifications the user needs to see

            mentors: this.mentors,
            tier: '',
            purchaseHistory: {},
            subscriptions: {}, //will be empty until the user purchases a subscription

            //will be updated regularly via interaction with their dashboard
            journalEntries: {
              mostRecentlyCreatedEntryDate: null,
            },
            dailyCheckIns: {},

            //values will be filled out once user takes the assessment
            ntent: {
              assessedTitle: this.assessedTitle,
              Eat1: this.eatOptions[0],
              Eat2: this.eatOptions[1],
              Eat3: this.eatOptions[2],
              Eat4: this.eatOptions[3],
              Eat5: this.eatOptions[4],
              Fit1: this.fitnessOptions[0],
              Fit2: this.fitnessOptions[1],
              Fit3: this.fitnessOptions[2],
              Fit4: this.fitnessOptions[3],
              Fit5: this.fitnessOptions[4],
              Life1: this.lifestyleOptions[0],
              Life2: this.lifestyleOptions[1],
              Life3: this.lifestyleOptions[2],
              Life4: this.lifestyleOptions[3],
              Life5: this.lifestyleOptions[4],
              Life6: this.lifestyleOptions[5],
              Misc1: this.miscOptions[0],
              Misc2: this.miscOptions[1],
              Misc3: this.miscOptions[2],
              Misc4: this.miscOptions[3],
              Misc5: this.miscOptions[4],
              Misc6: this.miscOptions[5],
              EatPercent: this.percentages.eat,
              FitPercent: this.percentages.fitness,
              LifePercent: this.percentages.lifestyle
            },
            pastWellnessAssessments: {} //question : answer format
          }
          db.collection('users').doc(id).set(userdata)
            .then(x => {
              this.$store.dispatch('login', user)
              this.$store.dispatch('setuser', user)
              localStorage.setItem('userid', user.user.uid)
              return this.subscribe();
            }).then(x => {
              this.$router.replace('/pricing')
              return x;
            }).catch(err => {
              alert("there was this error when trying to update the user's info: " + err.message)
              console.log(err.message)
            })
        }).catch((err) => {
        alert('Oops. ' + err.message)
      })
    },
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/
      return re.test(email)
    },
    validatePass(password) {
      var reqLength = false
      if (password.length >= 6) {
        reqLength = true
      } else {
        alert("Please enter a password that is at least 6 characters long")
      }
      return reqLength
    },
    isFormFieldValid(field) {
      let isValid = false
      if (this.formFields[field]) {
        isValid = this.formFields[field].validated && this.formFields[field].valid
      }
      return isValid
    },
    validateFormField(fieldName) {
      this.$validator.validate(fieldName, this[fieldName])
    },
  },
}
</script>

<style lang="scss">
textarea {
  overflow: auto!important;
}
.form-wizard-page {
  width: 100vw;
  padding: 50px 20px;
  .assessment-wizard {
    width: 100%;
    display: flex;
    flex-direction: column;
    .vuestic-widget-header {
      flex: 1 0 55px;
      max-height: 55px;
    }
    .vuestic-widget-body {
      min-height: 650px;
      flex: 1 0;
      .wizard.horizontal {
        height: 100%;
        display: flex;
        flex-direction: column;
        .indicator-container.indicator-container-horizontal {
          flex: 1 0 100px;
          max-height: 100px;
        }
        .wizard-body {
          flex: 1 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .wizard-body-step {
            .form-wizard-tab-content {
              &.page-2 {
                p.get-started { // Slot2
                  font-size: 1.5rem;
                }
                .last-name {
                  .bar-init {
                    position: relative;
                    &::before {
                      content: "";
                      position: absolute;
                      top: 0px;
                      left: 0;
                      height: 1px;
                      width: 100%;
                      background-color: #696773;
                      z-index: 1;
                    }
                  }
                }
                input.autocomplete-off {
                  display: none;
                }
                p.terms {
                  color: $ntent-mid-blue;
                  font-size: 1.2rem;
                }
              }

              h2 {
                margin:  0 0;
              }
            }
            fieldset {
              div {
                margin: 0 0 5px 0;
                .form-check {
                  margin: 0 5px 0 0;
                }
              }
            }
          }
          .wizard-body-actions {
            button {
              margin: 10px 10px;
              padding: 0.5rem 2.5rem;
              box-sizing: border-box;
              border: 2px solid #4ab2e3;
            }
          }
        }
      }
    }
  }
}

@include media-breakpoint-down(sm) {
  .form-wizard-page {
    padding: 5px;
    .assessment-wizard {
      .vuestic-widget-body {
        .wizard.horizontal {
          .wizard-body {
            padding: 10px 10px;
          }
        }
      }
    }
  }
}

.form-wizard-tab-content-text {
  width: 100%; // IE11 only
}

</style>
