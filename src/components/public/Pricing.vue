<!-- PAYPAL NOT CURRENTLY IN USE FOR FREE TRIAL GROUP
USER CHOOSES A PLAN AND IS REDIRECTED TO DASHBOARD IMMEDIATELY-->
<template>
  <div class="ntentbackground">
    <div class="row titlecontent">
      <div class="col">
        <div class="pricing-title mont">
          Choose Your Plan
        </div>
      </div>
    </div>
    <!-- packages -->
    <div class="container-fluid row row-eq-height no-gutters pricing-tables">
      <!-- passion: pkg #1 -->
      <div class="col-md-4 col-xs-12 outer-livcontainer">
        <div class="livcontainer" style="display: flex; flex-direction: column;">
          <div class="containertext">
            <div class="containertitle">
              <span class="block-elem">PASSION</span><span class="block-elem">“Discover Your NTENT”</span>
            </div>
            <div class="lato pricepoint">
              <span>$99.99 / month ***</span>
            </div>
          </div>
          <div class="innercontainer">
            <div class="containertext2">
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text">Personalized Dashboard</span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text">Personal Wellness Journal</span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text">Discounts on partnered organizations' services and products
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Monthly newsletter including NTENTIONAL Living Tips
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Weekly 1 hour NTENTIONAL Wellness Group (Virtual)</span>
              </p>
              <p class="containerp">
                <span class="bullet x"> x </span><span class="bullet-text"> Customized Wellness Profile</span>
              </p>
              <p class="containerp">
                <span class="bullet x"> x </span><span class="bullet-text"> Unlimited messaging with your health mentors
                </span>
              </p>
              <p class="containerp">
                <span class="bullet x"> x </span><span class="bullet-text"> Personalized scheduling
                </span>
              </p>
              <p class="containerp">
                <span class="bullet x"> x </span><span class="bullet-text"> Customized Wellness Plan
                </span>
              </p>
              <p class="containerp">
                <span class="bullet x"> x </span><span class="bullet-text"> Unlimited support with our NTENTION Setter Facebook Group
                </span>
              </p>
              <p class="containerp">
                <span class="bullet x"> x </span><span class="bullet-text"> Daily Accountability Check-In's
                </span>
              </p>
              <p class="containerp">
                <span class="bullet x"> x </span><span class="bullet-text"> Integrated tracking of your wellness applications
                </span>
              </p>
              <p class="containerp">
                <span class="bullet x"> x </span><span class="bullet-text"> Customized 30 minute session with your health mentor</span>
              </p>
              <p class="containerp">
                <span class="bullet x"> x </span><span class="bullet-text"> Advanced Team Support: 4 x 30 minute 1:1 individual sessions with your health mentor of choice (Lifestyle, Fitness, Nutrition, and/or Behavior Health Mentors)
                </span>
              </p>
            </div>
          </div>
          <!-- <div class="add-ons-container">
  <div class="row no-gutters" style="padding: 1.5em">
    <div class="col-1">
      <v-checkbox v-model="tier1AddGroupCheckbox"></v-checkbox>
    </div>
    <div class="col">
      <p class="add-on-title"><span class="plus">+ </span>Weekly 1 hour NTENTIONAL Wellness Group: $60</p>
      <p>This can be an additional group in your area of focus or you can maximize and focus on both fitness and nutrition at the same time.</p>
    </div>
  </div>
  <div class="row no-gutters" style="padding: 1.5em; padding-top: 0">
    <div class="col-1">
      <v-checkbox v-model="tier1AddSessionCheckbox"></v-checkbox>
    </div>
    <div class="col">
      <p class="add-on-title"><span class="plus">+ </span>Customized 30 minute session with your health mentor: $100</p>
      This can be an additional session with your current health mentor or one of our experts in a different NTENTION area.</p>
    </div>
  </div>
</div> -->
          <div style="width: 100%; text-align: center; flex-grow: 1; align-self: flex-end">
            <div class="row create-button-container justify-content-center">
              <div class="col-lg-11 col-md-10 col-sm-9 col-xs-8 ntentbutton containerbutton" v-scroll-to="'#pay-view-outer-container'" @click="choosePlan('passion')">
                {{ this.chooseButton }}
              </div>
            </div>
            <!--             <div class="commitment-text">***
              3 month commitment - (10% 6 month; 15% 9 month; 20% 12 month)</div> -->
            <div class="bottomborder"></div>
          </div>
        </div>
      </div>
      <!-- purpose: pkg #2 -->
      <div class="col-md-4 col-xs-12 outer-livcontainer">
        <div class="livcontainer" style="display: flex; flex-direction: column;">
          <div class="containertext">
            <div class="containertitle">
              <span class="block-elem">PURPOSE</span><span class="block-elem"> “Live with NTENTION"</span>
            </div>
            <div class="lato pricepoint">
              <span>$199.99 / month ***</span>
            </div>
          </div>
          <div class="innercontainer">
            <div class="containertext2">
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text">Personalized Dashboard</span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Personal Wellness Journal</span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Discounts on partnered organizations' services and products
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Monthly newsletter including NTENTIONAL Living Tips
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Weekly 1 hour NTENTIONAL Wellness Group (Virtual)</span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Customized Wellness Profile</span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Unlimited messaging with your health mentors
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Personalized scheduling
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Customized Wellness Plan
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Unlimited support with our NTENTION Setter Facebook Group
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Daily Accountability Check-In’s
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Integrated tracking of your wellness applications
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Customized 30 minute session with your health mentor</span>
              </p>
              <p class="containerp">
                <span class="bullet x"> x </span><span class="bullet-text"> Advanced Team Support: 4 x 30 minute 1:1 individual sessions with your health mentor of choice (Lifestyle, Fitness, Nutrition, and/or Behavior Health Mentors)
                </span>
              </p>
            </div>
          </div>
          <!-- <div class="add-ons-container">
            <div class="row no-gutters" style="padding: 1.5em">
              <div class="col-1">
                <v-checkbox v-model="tier1AddGroupCheckbox"></v-checkbox>
              </div>
              <div class="col">
                <p class="add-on-title"><span class="plus">+ </span>Weekly 1 hour NTENTIONAL Wellness Group: $60</p>
                <p>This can be an additional group in your area of focus or you can maximize and focus on both fitness and nutrition at the same time.</p>
              </div>
            </div>
            <div class="row no-gutters" style="padding: 1.5em; padding-top: 0">
              <div class="col-1">
                <v-checkbox v-model="tier1AddSessionCheckbox"></v-checkbox>
              </div>
              <div class="col">
                <p class="add-on-title"><span class="plus">+ </span>Customized 30 minute session with your health mentor: $100</p>
                <p>This can be an additional session with your current health mentor or one of our experts in a different NTENTION area.</p>
              </div>
            </div>
          </div> -->
          <div style="width: 100%; text-align: center; flex-grow: 1; align-self: flex-end">
            <div class="row create-button-container justify-content-center">
              <div class="col-lg-11 col-md-10 col-sm-9 col-xs-8 ntentbutton containerbutton" v-scroll-to="'#pay-view-outer-container'" @click="choosePlan('purpose')">
                {{ this.chooseButton }}
              </div>
            </div>
            <!--             <div class="commitment-text">*** 3 month commitment - (10% 6 month; 15% 9 month; 20% 12 month)</div> -->
            <div class="bottomborder"></div>
          </div>
        </div>
      </div>
      <!-- empower: pkg #3 -->
      <div class="col-md-4 col-xs-12 outer-livcontainer">
        <div class="livcontainer" style="display: flex; flex-direction: column;">
          <div class="containertext">
            <div class="containertitle">
              <span class="block-elem">EMPOWER</span><span class="block-elem"> “Elevate to a New You”</span>
            </div>
            <div class="lato pricepoint">
              <span>$499.99 / month ***</span>
            </div>
          </div>
          <div class="innercontainer">
            <div class="containertext2">
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text">Personalized Dashboard</span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Personal Wellness Journal</span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Discounts on partnered organizations' services and products
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Monthly newsletter including NTENTIONAL Living Tips
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Weekly 1 hour NTENTIONAL Wellness Group (Virtual)
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Customized Wellness Profile</span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Unlimited messaging with your health mentors
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Personalized scheduling
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Customized Wellness Plan
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Unlimited Support with our NTENTION Setter Facebook Group
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Daily Accountability Check-In’s
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Integrated tracking of your wellness applications
                </span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark"> ✓ </span><span class="bullet-text"> Customized 30 minute session with your health mentor</span>
              </p>
              <p class="containerp">
                <span class="bullet checkmark bold"> ✓ </span><span class="bullet-text bold"> Advanced Team Support: 4 x 30 minute 1:1 individual sessions with your health mentor of choice (Lifestyle, Fitness, Nutrition, and/or Behavior Health Mentors)
                </span>
              </p>
            </div>
          </div>
          <!-- <div class="add-ons-container">
            <div class="row no-gutters" style="padding: 1.5em">
              <div class="col-1">
                <v-checkbox v-model="tier1AddGroupCheckbox"></v-checkbox>
              </div>
              <div class="col">
                <p class="add-on-title"><span class="plus">+ </span>Weekly 1 hour NTENTIONAL Wellness Group: $60</p>
                <p>This can be an additional group in your area of focus or you can maximize and focus on both fitness and nutrition at the same time.</p>
              </div>
            </div>
            <div class="row no-gutters" style="padding: 1.5em; padding-top: 0">
              <div class="col-1">
                <v-checkbox v-model="tier1AddSessionCheckbox"></v-checkbox>
              </div>
              <div class="col">
                <p class="add-on-title"><span class="plus">+ </span>Customized 30 minute session with your health mentor: $100</p>
                <p>This can be an additional session with your current health mentor or one of our experts in a different NTENTION area.</p>
              </div>
            </div>
          </div> -->
          <div style="width: 100%; text-align: center; flex-grow: 1; align-self: flex-end">
            <div class="row create-button-container justify-content-center">
              <div class="col-lg-11 col-md-10 col-sm-9 col-xs-8 ntentbutton containerbutton" v-scroll-to="'#pay-view-outer-container'" @click="choosePlan('empower')">
                {{ this.chooseButton }}
              </div>
            </div>
            <!-- </router-link> -->
            <!--             <div class="commitment-text">*** 3 month commitment - (10% 6 month; 15% 9 month; 20% 12 month)</div> -->
            <div class="bottomborder"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="pay-view-outer-container">
      <div v-show="showPaypal" class="pay-view-inner-container">
        <h1>You selected {{this.tier.toUpperCase()}} for {{ this.price }}!</h1>
        <h2>Please select your preferred way to pay below:</h2>
        <div v-show="showPaypal" ref="paypal" id="#paypal-button-container"></div>
      </div>
    </div>
    <v-dialog class="text-center" v-model="termsAndCondDialog" width="600">
      <v-card>
        <v-card-text>
          <terms-and-conditions />
          <div class="text-center"><button v-on:click="termsAndCondDialog = false">Go Back</button></div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog class="text-center" v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
        </v-card-title>
        <v-card-text>
          <div>
            <div v-if="display === 'signup' ">
              <div class="signup">
                <h2>First You'll Need to Create an Account!</h2>
                <div class="input-container">
                  <div class="form-group">
                    <div class="input-group">
                      <input v-model="firstName" type="firstName" id="firstName" required="required" />
                      <label class="control-label" for="firstName">First Name</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input v-model="lastName" type="lastName" id="lastName" required="required" />
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
                  <template slot="label">I agree to the
                    <button v-on:click="setTermModel(true)">
                      <p class="terms">Terms of Use</p>
                    </button>
                  </template>
                </vuestic-checkbox>
                <div class="sign-up-button-container">
                  <button class="btn btn-primary" @click.stop="signUp()">
                    Continue</button>
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
                    <button class="btn btn-primary" @click.stop="signIn()">Continue
                    </button>
                  </div>
                  <div class="go-to-signup-container">
                    <div v-on:click="switchDisplay('signup')">Not a member yet? Sign up here!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <div class="flex-grow-1"></div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
//need to move code from this component into PricingModal.vue
import PricingModal from './PricingModal'
import init from '../../firebaseInit';
import moment from 'moment'
import axios from 'axios'
import TermsAndConditions from './TermsAndConditions'

export default {
  name: 'pricing',
  components: {
    PricingModal,
    TermsAndConditions
  },
  // props: {},
  // watch: {},
  data() {
    return {
      //for now, user will need to buy using our sandbox email address
      //username: empower-buyer@4ntent.com
      //password: empower-buyer
      plan: {
        addOns: {
          // weeklyGroup: {
          //   pricePerGroup: 0.01,
          //   numMinsOfGroup: 60
          // },
          // oneOnOneIndivSession: {
          //   pricePerSession: 0.01,
          //   numMinsOfSession: 30
          // }
        },
        tierFullDesc: {
          passion: {
            subtitle: 'Discover Your NTENT',
            pricePerMonth: 99.99,
            minimumNumMonthsToPurchase: 3,
            features: {
              included: ['Personalized Dashboard',
                'Personal Wellness Journal',
                'Discounts on partnered organizations services and products',
                'Monthly newsletter including NTENTIONAL Living Tips',
                'Weekly 1 hour NTENTIONAL Wellness Group (Virtual)'
              ],
              notIncluded: [
                'Customized Wellness Profile',
                'Unlimited messaging with your health mentors',
                'Personalized scheduling',
                'Customized Wellness Plan',
                'Unlimited support with our NTENTION Setter Facebook Group',
                'Daily Accountability Check-Ins',
                'Integrated tracking of your wellness applications',
                'Customized 30 minute session with your health mentor',
                'Advanced Team Support: 4 x 30 minute 1:1 individual sessions with your health mentor of choice (Lifestyle, Fitness, Nutrition, and/or Behavior Health Mentors)'
              ]
            },
          },
          purpose: {
            subtitle: 'Live with NTENTION',
            pricePerMonth: 199.99,
            minimumNumMonthsToPurchase: 3,
            features: {
              included: ['Personalized Dashboard',
                'Personal Wellness Journal',
                'Discounts on partnered organizations services and products',
                'Monthly newsletter including NTENTIONAL Living Tips',
                'Weekly 1 hour NTENTIONAL Wellness Group (Virtual)',
                'Customized Wellness Profile',
                'Unlimited messaging with your health mentors',
                'Personalized scheduling',
                'Customized Wellness Plan',
                'Unlimited support with our NTENTION Setter Facebook Group',
                'Daily Accountability Check-Ins',
                'Integrated tracking of your wellness applications',
                'Customized 30 minute session with your health mentor'
              ],
              notIncluded: [
                'Advanced Team Support: 4 x 30 minute 1:1 individual sessions with your health mentor of choice (Lifestyle, Fitness, Nutrition, and/or Behavior Health Mentors)'
              ]
            }
          },
          empower: {
            subtitle: 'Elevate to a New You',
            pricePerMonth: 499.99,
            minimumNumMonthsToPurchase: 3,
            features: {
              included: ['Personalized Dashboard',
                'Personal Wellness Journal',
                'Discounts on partnered organizations services and products',
                'Monthly newsletter including NTENTIONAL Living Tips',
                'Weekly 1 hour NTENTIONAL Wellness Group (Virtual)',
                'Customized Wellness Profile',
                'Unlimited messaging with your health mentors',
                'Personalized scheduling',
                'Customized Wellness Plan',
                'Unlimited support with our NTENTION Setter Facebook Group',
                'Daily Accountability Check-Ins',
                'Integrated tracking of your wellness applications',
                'Customized 30 minute session with your health mentor',
                'Advanced Team Support: 4 x 30 minute 1:1 individual sessions with your health mentor of choice (Lifestyle, Fitness, Nutrition, and/or Behavior Health Mentors)'
              ],
              notIncluded: []
            }
          }
        }
      },
      user: {},
      userinfo: {},
      id: '',
      loaded: false,

      //
      //addons are currently turned off for testing
      // tier1AddGroupCheckbox: false,
      // tier1AddSessionCheckbox: false,
      // tier2AddGroupCheckbox: false,
      // tier2AddSessionCheckbox: false,
      // tier3AddGroupCheckbox: false,
      // tier3AddSessionCheckbox: false,
      //

      showPaypal: false,
      showModal: false,
      tier: "",
      price: "",
      dialog: false,
      display: 'signup',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      checkboxOneModel: false,
      termsAndCondDialog: false,
      chooseButton: 'Try our 2 week FREE TRIAL',
      curSubscription: '',
      startDate: '',
      endDate: '',
      //change this when people start actually paying
      amountPaidForSubscription: 0.00 //$0 only for free trial rn; when using paypal, switch to this: this.price + this.addOnsPrice
    }
  },
  created() {
    //authenticate user first
    this.user = firebase.auth().currentUser;

    //get and set id
    let use = this.$store.getters.getUser

    if (this.$store.state['app']['isLoggedIn']) {
      let id = use.user.uid
      this.id = id;
      db.collection('users').doc(id).get()
        .then(doc => {
          this.userinfo = doc.data();
          console.log("this.userinfo from pricing.vue: " + this.userinfo)
          return doc.data()
        })
        .catch(err => {
          alert('there was the following error when requesting userinfo: ' + err)
        })
    }
  },
  mounted: function() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AQ-lLQzyFXfy1ASIYQF0tgTQK75T8tB4SqSga_MMdVjCXBIYjo_1c14uASDquWLDGtIE3cYQRri7q8d-";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setTermModel(trueOrFalse) {
      if (true) {
        this.termsAndCondDialog = true
      } else if (false) {
        this.termsAndCondDialog = false;
      }
    },
    subscribe: function() {
      axios.post('/signup', {
        'email': this.email,
        'firstName': this.firstName,
        'lastName': this.lastName
      }).then(res => {
        console.log('we received this response from our server: ' + res)
      }).catch(err => {
        alert('the request failed with this error: ' + err);
      });
    },
    switchDisplay(displayType) {
      this.display = displayType
    },
    signIn: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.dialog = false;
            this.$store.dispatch('login', user)
            this.$store.dispatch('setuser', user)
            localStorage.setItem('userid', user.user.uid)
            this.id = user.user.uid;
          })
        .catch((err) => {
          alert('Oops. ' + err.message)
        })
    },
    signUp: function() {
      if (!this.checkboxOneModel) {
        alert('Please agree to the terms and conditions by checking the checkbox before continuing.')
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
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
            purchaseHistory: {}, //only active when using Paypal to purchase
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
          this.id = id;
          //give the new user userdata
          db.collection('users').doc(id).set(userdata)
            .then(x => {
              this.$store.dispatch('login', user)
              this.$store.dispatch('setuser', user)
              localStorage.setItem('userid', user.user.uid)
              this.dialog = false;

              //subscribe to mailchimp
              return this.subscribe()
            }).then(x => {
              //REDIRECT TO DASHBOARD FOR TEST GROUP
              this.updateUserinfo()
              // this.showPaypal = true;
              // var elmnt = document.getElementById("pay-view-outer-container");
              // elmnt.scrollIntoView({ block: 'end', behavior: 'smooth' });
            }).catch(err => {
              alert('There was a problem when setting the current user and displaying the paypal modal' + error)
            })
        }).catch((err) => {
        alert('There was a problem. Refer to code in Pricing.vue to address the following error code: ' + err.code)
      })
    },
    displayModal(trueOrFalse) {
      this.showModal = trueOrFalse
    },
    addUserToMentorsListOfUsers() {

    },
    goToDashboard() {
      this.$router.replace('/dashboard')
    },
    updateUserinfo() {
      this.startDate = moment().toString();
      this.endDate = moment().add(13, 'day').toString();
      db.collection('users').doc(this.id).update({
          // purchaseHistory: firebase.firestore.FieldValue.arrayUnion(details),
          tier: this.tier,
          subscriptions: {
            curSubscription: {
              startDate: this.startDate,
              endDate: this.endDate,
              amountPaidForSubscription: this.amountPaidForSubscription,
              tier: this.tier,
              plan: {
                addOns: this.plan.addOns, //will be an empty object for now til we make users able to add add-ons
                tierFullDesc: this.plan.tierFullDesc[this.tier]
              }
            },
            upcomingSubscription: {},
            pastSubscriptions: []
          },
        })
        //add user to the user's mentors' 'user' array IF assessFilled === true and mentors [] is not empty
        .then(deets => {
          if (this.userinfo.assessfilled && this.mentors) {
            for (var i = 0; i < this.userinfo.mentors.length; i++) {
              var mentor = this.userinfo.mentors[i];
              //will add current user to mentor's users array ONLY if it doesnt already exist
              db.collection('users').doc(mentor.id).update({
                  users: firebase.firestore.FieldValue.arrayUnion({ id: this.id }),
                })
                .then(doc => {
                  return doc.data()
                })
                .catch(err => {
                  alert("There was the following error: " + err + " when trying to let your mentor know to get in touch with you. Please let us know you received this error message by emailing us at 4ntent@gmail.com so we can ensure your mentors get in touch with you!")
                })
            }
          }


        })
        .then(deets => {
          alert('Your purchase is confirmed!')
          this.goToDashboard();
        })
        .catch(error => {
          console.log('the request failed with this error: ' + error.message);
        });
    },
    choosePlan(tier) {
      // this.tier = tier;
      // this.selectedPlan = {
      //   plan: this.planData[tier],
      //   trial: {
      //     apply: true,
      //     numMonths: 1,
      //     price: 0.01
      //   }
      // }
      // if (this.trial.apply) {
      //   this.selectedPlan.pricePerMonth = this.trial.price;
      // }
      this.tier = tier;
      if (this.$store.state['app']['isLoggedIn']) {
        //skip payment gateway for testing group, need to edit this for real group after test



        //update data then REDIRECT TO DASHBOARD
        this.updateUserinfo();

        //enable this code below when using paypal
        // this.showPaypal = true;
        // var elmnt = document.getElementById("pay-view-outer-container");
        // elmnt.scrollIntoView({ block: 'end', behavior: 'smooth' });

      } else if (!this.$store.state['app']['isLoggedIn']) {
        this.dialog = true;
      }
    },
    setLoaded: function() {
      this.loaded = true;
      paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                //need to add the data from this.updateUserInfo() somehow to be saved in db
                description: this.tier,
                curSubscription: {
                  startDate: this.startDate,
                  endDate: this.endDate,
                  amountPaidForSubscription: this.amountPaidForSubscription,
                  tier: this.tier,
                  plan: {
                    addOns: this.plan[addOns], //will be an empty object for now til we make users able to add add-ons
                    tierFullDesc: this.plan[this.tierFullDesc][this.tier]
                  }
                },
                amount: {
                  currency_code: "USD",
                  value: this.price + this.addOnsPrice
                }
              }]
            });
          },
          onApprove: async (data, actions) => {
            // const order = await actions.order.capture();
            //here is where we would call our server in order to save the details to our database, see below url for more info on how to implement this (w/firebase?)

            //https://developer.paypal.com/docs/checkout/integrate/#6-verify-the-transaction
            // this.data;


            return actions.order.capture().then(details => {
                // this.tierType = details.purchase_units[details.purchase_units.length - 1].description;
                return details
              })
              .then(details => {

                if (this.tier === 'passion') {
                  //1 weekly group * number of weeks purchased


                  //need to input code here that adds any add-ons purchased


                } else if (this.tier === 'purpose') {
                  //1 weekly group * number of weeks purchased
                  //1 individual appointment every 4 weeks

                  //need to input code here that adds any add-ons purchased

                } else if (this.tier === 'empower') {
                  //1 weekly group * number of weeks purchased
                  //1 individual appointment every 4 weeks

                  //need to input code here that adds any add-ons purchased
                }
                console.log(data)
                console.log('details', details);
                db.collection('users').doc(this.id).update({
                  purchaseHistory: firebase.firestore.FieldValue.arrayUnion(details),
                  tier: this.tier,
                })
                return deets
              })
              .then(deets => {
                alert('Your purchase is confirmed!')
                this.$router.replace('/dashboard')
              })
              .catch(error => {
                console.log('the request failed with this error: ' + error.message);
              });

          },
          onError: err => {
            console.log(err);
            alert('Unfortunately, your payment did not process successfully. Please try again or try another form of payment.')
          }
        })
        .render(this.$refs.paypal);
    }
  },
}

</script>
<style lang="scss" scoped>
#pay-view-outer-container {}

#paypal-button-container {
  padding: 2em;
}

.pay-view-inner-container {
  text-align: center;
  padding: 8em 0em 10em 0em;
}

.commitment-text {
  padding: .5em;
}

.plus {
  font-size: 24px;
  font-style: normal !important;
  // font-weight: bold;
  // color: #001b65;
}

.add-ons-container {
  font-size: 16px;

  p {
    margin: 0;
    margin-bottom: 2px;
    font-style: italic;
  }

  .add-on-title {
    font-size: 20px;
    // color: #001b65;
  }
}


.pricing-container {
  margin-top: 50px;
  height: 100%;
}

.pricing-header {
  font-size: 4rem;
  padding: 1em;
  margin: 0;
}

.outer-container {
  height: 100%;
  padding: 2em;
}

.inner-container {
  border: solid white 1px $almost-black;
  height: 100%;
  padding: 2em;
  background-color: $white;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  //title
  h3 {
    font-size: 2rem;
    text-align: center;
    margin: 0;
    margin-bottom: 1em;
  }

  .features-container {
    height: 80%;
  }

  //features
  div {
    font-size: 1rem;
    padding: .5em 0;
  }

  .button-container {
    height: 10%;
    text-align: center;
  }

  //price
  button {
    font-size: 2rem;
    text-align: center;
  }

}

.pricing-title {
  padding: 5%;
  text-align: center;
  color: white;
  font-size: 5rem;
  letter-spacing: 2px;
  font-weight: bold;
  margin: auto;

  @include media-breakpoint-down(lg) {
    font-size: 4rem;
  }

  @include media-breakpoint-down(md) {
    font-size: 2.5rem;
  }

  @include media-breakpoint-down(xs) {
    font-size: 2.5rem;
  }

}

.ntentbutton {
  border-radius: 35px;
  text-align: center;
  background-image: linear-gradient(to right, #05ebd8, #1f82e5);
  color: white;
  padding: 7px;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
}


.containerbutton {
  font-weight: bold;
  font-size: 1.5rem;
}

.ntentbackground {
  background-image: linear-gradient(to right, #1f82e5, #05ebd8);
  height: 100%;
  z-index: 1;
  padding-left: 4%;
  padding-right: 4%;

  .titlecontent {
    padding-top: 80px;
  }
  .pricing-tables {
    padding: 0;
  }

  @include media-breakpoint-down(lg) {
    padding-left: 3%;
    padding-right: 3%;
  }

  @include media-breakpoint-down(md) {
    padding-left: 1%;
    padding-right: 1%;
  }

  @include media-breakpoint-down(sm) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @include media-breakpoint-down(xs) {
    padding-left: 3%;
    padding-right: 3%;
  }
}

.containertitle {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 5%;

  @include media-breakpoint-down(md) {
    font-size: 1.25rem;
  }

  :first-child {
    font-size: 2.7rem;

    @include media-breakpoint-down(md) {
      font-size: 1.95rem;
    }
  }
}

.containerp {
  padding: 1%;
  text-align: left;
  font-size: 1.25rem;

  @include media-breakpoint-down(md) {
    font-size: 1rem;
  }
}

.pricepoint {
  text-align: center;
  color: white;
  background-color: #001b65;
  width: 100%;
  padding: 5%;
  margin: 0;
  font-size: 2.8rem;
  font-weight: bold;

  @include media-breakpoint-down(md) {
    font-size: 2.2rem;
  }
}

ul {
  list-style-type: none;
  padding-bottom: 1em;

  li {
    padding-bottom: 5px;
  }
}



.align-right {
  text-align: right;
}

.prices {
  margin: auto;

  span {
    font-size: 3rem;
    line-height: 3rem;

    vertical-align: middle;
    text-align: right;

    @include media-breakpoint-down(lg) {
      font-size: 1.5rem;
    }
  }

  .num-items {
    font-size: 3rem;
    text-align: left;

    @include media-breakpoint-down(lg) {
      font-size: 1.5rem;
    }
  }
}

.bullet {
  color: #05ebd8;
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  display: inline-block;
}

.bullet-text {
  vertical-align: bottom;
  line-height: 2rem;
  margin-left: 2em;
  display: inline-block;
  position: relative;
  top: 10px;
}

.containertext2 {
  padding-left: 2%;
  padding-right: 2%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.bottomborder {
  background-color: #001b65;
  height: 20px;
  margin: 0px;
  padding: 0px;
}

.outer-livcontainer {
  padding: 2%;
  padding-top: 0;
  padding-bottom: 5%;

  @include media-breakpoint-down(lg) {
    padding: 1%;
    padding-top: 0;
    padding-bottom: 5%;
  }

  @include media-breakpoint-down(md) {
    padding: 1%;
    padding-top: 0;
    padding-bottom: 5%;
  }

  @include media-breakpoint-down(sm) {
    padding-bottom: 50px;
    padding-top: 0;
    padding-bottom: 5%;

  }

  @include media-breakpoint-down(xs) {
    padding-bottom: 50px;
    padding-top: 0;
  }
}

.livcontainer {
  border: solid grey 3px;
  background-color: rgb(235, 235, 235);
  height: 100%;
}


ul {
  padding: 0
}

.create-button-container {
  text-align: center;
  padding: 20px;
  @include media-breakpoint-down(sm) {
    padding: 20px 50px;
    .ntentbutton {
      padding: 10px 30px;
      font-size: 1.3rem;
    }
  }
}

.create-button {
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 35px;
}

.row-eq-height {
  display: flex;
}

.block-elem {
  display: block;
}

.x {
  color: red;
  font-size: 31px; // top: 2px;
}

</style>
