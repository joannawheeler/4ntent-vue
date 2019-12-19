<template>
  <div class="account-setting-page">
    <v-tabs v-model="active" color="transparent" dark slider-color="yellow">
      <v-tab :key="Personal" ripple class="setting-bar">
        Personal
      </v-tab>
      <v-tab-item :key="Personal" class="setting-window">
        <v-card flat>
          <v-form class="personal-info-form">
            <v-container>
              <div class="row">
                <div class="col-12 col-sm-6">
                  <v-text-field
                    v-model="user.firstName"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                    :readonly="!canEdit"
                  ></v-text-field>
                </div>
                <div class="col-12 col-sm-6">
                  <v-text-field
                    v-model="user.lastName"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    :readonly="!canEdit"
                  ></v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-6">
                  <v-text-field
                    v-model="user.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    :readonly="!canEdit"
                  ></v-text-field>
                </div>
                <div class="col-12 col-sm-6 password-col">
                  <v-text-field
                    v-model="userinfo.password"
                    label="Password"
                    :type="'password'"
                    required
                    :readonly="!canEdit"
                  ></v-text-field>
                  <v-btn class="ma-2" tile outlined color="success">
                    Change
                  </v-btn>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <v-text-field
                    v-model="userinfo.city"
                    label="City"
                    required
                    :readonly="!canEdit"
                  ></v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6">
                  <v-text-field
                    v-model="userinfo.state"
                    label="State"
                    required
                    :readonly="!canEdit"
                  ></v-text-field>
                </div>
                <div class="col-12 col-md-6">
                  <v-text-field
                    v-model="user.zip"
                    label="Zip"
                    required
                    :readonly="!canEdit"
                  ></v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6">
                  <v-text-field
                    v-model="userinfo.birthday"
                    label="Date of Birth"
                    placeholder="MM/DD/YYYY"
                    required
                    :readonly="!canEdit"
                  ></v-text-field>
                </div>
                <div class="col-12 col-md-6">
                  <v-text-field
                    v-model="userinfo.phone"
                    label="Phone"
                    placeholder="xxx-xxx-xxxx"
                    aria-placeholder="xxx-xxx-xxxx"
                    required
                    :readonly="!canEdit"
                  ></v-text-field>
                </div>
              </div>
              <div class="row buttons-row">
                <v-btn class="ma-2" tile outlined color="success" @click="canEdit = !canEdit">
                  {{canEdit ? 'Save' : 'Edit'}}
                </v-btn>
                <v-btn v-if="canEdit" class="ma-2" tile outlined color="danger" @click="canEdit = false">
                  Cancel
                </v-btn>
              </div>
            </v-container>
          </v-form>
        </v-card>
      </v-tab-item>
      <v-tab :key="Account" ripple class="setting-bar">
        Account
      </v-tab>
      <v-tab-item :key="Account" class="setting-window">
        <v-card flat>
          <v-container class="account-info">
            <div class="row assessed-title">
              <div class="info-item">
                <div class="info-item__title">
                  Assessed Title
                </div>
                <div class="info-item__val">
                  The Test Title
                </div>
              </div>
            </div>
            <div class="row mentors">
              <div class="group-title">
                Mentors
              </div>
              <div class="mentor">
                <div class="info-item">
                  <div class="info-item__title">
                    First Name
                  </div>
                  <div class="info-item__val">
                    Johon
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-item__title">
                    Last Name
                  </div>
                  <div class="info-item__val">
                    Doe
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-item__title">
                    Email
                  </div>
                  <div class="info-item__val">
                    test@email.com
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="info-item">
                <div class="info-item__title">
                  Tier
                </div>
                <div class="info-item__val">
                  {{user && user.tier}}
                </div>
              </div>
            </div>
          </v-container>
        </v-card>
      </v-tab-item>
      <v-tab :key="Billing" ripple class="setting-bar">
        Billing
      </v-tab>
      <v-tab-item :key="Billing" class="setting-window">
        <v-card flat>
          <v-container class="billing-container">
            <table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th v-for="item in billingTableHeaders" :key="item.text" class="text-left">{{ item.text }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in purchaseHistory" :key="item.name">
                    <td>{{ item.start_date }}</td>
                    <td>{{ item.end_date }}</td>
                    <td>{{ item.amount_paid }}</td>
                    <td>{{ item.tier }}</td>
                  </tr>
                </tbody>
              </template>
            </table>
          </v-container>
        </v-card>
      </v-tab-item>
      <v-tab :key="Terms" ripple class="setting-bar">
        Terms
      </v-tab>
      <v-tab-item :key="Terms" class="setting-window">
        <v-card flat>
          <v-container v-if="user && user.ntent" fill-height class="terms">
            <div class="row">
              <div class="col-md-12">
                <fieldset>
                  <div class="question">
                    Nutrition Content per meal
                  </div>
                  <b>Answer</b>: {{ user.ntent.Eat1 }}
                  <div class="question">
                    Eating Habits
                  </div>
                  <b>Answer</b>: {{ user.ntent.Eat2 }}
                  <div class="question">
                    Satisfaction during and after meals
                  </div>
                  <b>Answer</b>: {{ user.ntent.Eat3 }}
                  <div class="question">
                    Discipline with unhealthy foods
                  </div>
                  <b>Answer</b>: {{ user.ntent.Eat4 }}
                  <div class="question">
                    Knowledge of the best foods for you
                  </div>
                  <b>Answer</b>: {{ user.ntent.Eat5 }}
                </fieldset>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <fieldset>
                  <div class="question">
                    Amount of exercise
                  </div>
                  <b>Answer</b>: {{ user.ntent.Fit1 }}
                  <div class="question">
                    Challenged in Workouts
                  </div>
                  <b>Answer</b>: {{ user.ntent.Fit2 }}
                  <div class="question">
                    Physical Appearance
                  </div>
                  <b>Answer</b>: {{ user.ntent.Fit3 }}
                  <div class="question">
                    Physical Health
                  </div>
                  <b>Answer</b>: {{ user.ntent.Fit4 }}
                  <div class="question">
                    Energy
                  </div>
                  <b>Answer</b>: {{ user.ntent.Fit5 }}
                </fieldset>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <fieldset>
                  <div class="question">
                    Giving back to causes I believe in
                  </div>
                  <b>Answer</b>: {{ user.ntent.Fit1 }}
                  <div class="question">
                    Follow through on goals
                  </div>
                  <b>Answer</b>: {{ user.ntent.Fit2 }}
                  <div class="question">
                    Relationship with family and friends
                  </div>
                  <b>Answer</b>: {{ user.ntent.Fit3 }}
                  <div class="question">
                    Gratifying job/work
                  </div>
                  <b>Answer</b>: {{ user.ntent.Fit4 }}
                  <div class="question">
                    Financial Stability
                  </div>
                  <b>Answer</b>: {{ user.ntent.Fit5 }}
                  <div class="question">
                    Amount of rest, sleep, downtime
                  </div>
                  <b>Answer</b>: {{ user.ntent.Fit6 }}
                </fieldset>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <fieldset>
                  <div class="question">
                    What is your daily health routine? (e.g. walk in the park)
                  </div>
                  <b>Answer</b>: {{ user.ntent.Misc1 }}
                  <div class="question">
                    What are you current eating habits like?
                  </div>
                  <b>Answer</b>: {{ user.ntent.Misc2 }}
                  <div class="question">
                    Please tell us about any past or current medical conditions, injuries, limitations, or other that we should be aware of?
                  </div>
                  <b>Answer</b>: {{ user.ntent.Misc3 }}
                  <div class="question">
                    Are you currently taking any medication? If yes please list medication(s) and the condition it is prescribed for.
                  </div>
                  <b>Answer</b>: {{ user.ntent.Misc4 }}
                  <div class="question">
                    What other programs have you tried in the past?
                  </div>
                  <b>Answer</b>: {{ user.ntent.Misc5 }}
                  <div class="question">
                    Describe your personality
                  </div>
                  <b>Answer</b>: {{ user.ntent.Misc6 }}
                  <!-- What do you enjoy doing?
                  <b>Answer</b>: {{ user.ntent.Eat1 }} -->
                </fieldset>
              </div>
            </div>
          </v-container>
        </v-card>
      </v-tab-item>
      <!--       <v-tab :key="Notifications" ripple>
        Notifications
      </v-tab>
      <v-tab-item :key="Notifications">
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item> -->
    </v-tabs>
    <!-- <div class="text-xs-center mt-3">
  <v-btn @click="next">next tab</v-btn>
</div>
 -->
  </div>
</template>
<script>
import moment from 'moment'
import db from '../../../firebaseInit'

export default {
  name: 'account-settings',
  data() {
    return {
      canEdit: false,
      userinfo: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        city: '',
        state: '',
        zip: '',
        birthday: '',
        phone: '',
      },
      user: {},
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      id: '',
      active: null,
      Personal: 'Personal',
      Account: 'Account',
      Billing: 'Billing',
      Terms: 'Terms',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      billingTableHeaders: [
        {
          text: 'Start Date',
          value: 'start_date',
          sortable: true,
          align: 'left'
        },
        {
          text: 'End Date',
          value: 'end_date',
          sortable: true,
          align: 'left'
        },
        {
          text: 'Amount Paid',
          value: 'amount_paid',
          sortable: true,
          align: 'left'
        },
        {
          text: 'Tier',
          value: 'tier',
          sortable: false,
          align: 'left'
        }
      ],
      purchaseHistory: [
        {
          start_date: '11/12/2019',
          end_date: '',
          amount_paid: 120,
          tier: 'passion'
        },
        {
          start_date: '10/12/2019',
          end_date: '',
          amount_paid: 121,
          tier: 'empower'
        },
        {
          start_date: '09/12/2019',
          end_date: '',
          amount_paid: 125,
          tier: 'purpose'
        }
      ]
    }
  },
  created() {
    let use = this.$store.getters.getUser
    let id = use.user.uid
    this.id = id;

    db.collection('users').doc(id).get()
      .then(doc => {
        this.user = doc.data();
        console.log(this.user);
        return doc.data()
      }).catch(err => {
        alert('there was an error: ' + err)
      })
  },
  methods: {

  },
  computed: {
    calcEndDate: (start_date) => {
      return;
    }

  }
}

</script>
<style lang="scss">
.account-setting-page {
  width: 100%;
  .v-tabs {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    &__bar {
      .v-tabs__item {
        font-size: 2rem;
      }
    }
    .setting-window {
      min-height: 800px;
      background-color: white;
    }
  }

  @include media-breakpoint-down(md) {
    .v-tabs {
      &__bar {
        .v-tabs__item {
          font-size: 0.8rem;
        }
      }
    }
  }

  .personal-info-form {
    padding: 1.5rem 0;
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .container {
    .row {
      width: 100%;
      .password-col {
        display: flex;
      }
    }
    &.account-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: $charcoal;
      padding: 3rem 0;
      .assessed-title {
        .info-item {
          width: 100%;
        }
      }
      .mentors {
        flex-direction: column;
        .group-title {
          font-size: 1.4rem;
          font-weight: 600;
        }
        .mentor {
          padding: 0 0 0 20px;
        }
      }
      .info-item {
        display: flex;
        align-items: center;
        &__title {
          font-size: 1.3rem;
          font-weight: 600;
          width: 50%;
          flex-basis: 50%;
          max-width: 50%;
        }
        &__val {
          width: 50%;
          flex-basis: 50%;
          max-width: 50%;
          font-size: 1.3rem;
          font-weight: 400;
          padding: 0 10px;
        }
      }
      @include media-breakpoint-down(sm) {
        padding: 3rem 3rem;
      }
    }
    &.billing-container {
      padding: 3rem 0;
      table {
        width: 100%;
        font-size: 1.3rem;
        thead {
          padding: 0.5rem 0;
        }
        tbody {
          tr {
            td {
              padding: 10px 0;
            }
          }
        }
      }
      @include media-breakpoint-down(sm) {
        padding: 3rem 1rem;
        table {
          font-size: 1rem;
        }
      }
    }
    &.terms {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      fieldset {
        .question {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 5px 0 0 0;
        }
      }
    }
  }
}
</style>
