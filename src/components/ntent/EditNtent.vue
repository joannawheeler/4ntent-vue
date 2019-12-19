<template>

  <div>
  <div v-if='userinfo.assessfilled && !userinfo.provider'>
    <vuestic-widget>
      You already filled this form
    </vuestic-widget>
  </div>

  <div class="assessform" v-if='!userinfo.assessfilled || userinfo.provider'>
    
    <b-form @submit="onSubmit">
      <vuestic-widget :headerText="'Start your NTENT' | translate">
        <b-form-group label="What is your NTENTion?">
        <b-form-checkbox-group id="radios1" v-model="selected[30]" :options="options1" name="radioOptions1">
        </b-form-checkbox-group>
        <b-row>
        <b-col sm="12">
        <b-form-input size="lg" placeholder="If other why? (Type here)" v-model="selected[0]"></b-form-input>
        </b-col>
        </b-row>
        </b-form-group>
      </vuestic-widget>

      <div class="row">
      <div class="col-md-12">
        <vuestic-widget>
          <div class="row">
          <div class="col-md-12">
            <fieldset>
              <b-form-group label="Why aren't you meeting your NTENTion?">
              <b-form-checkbox-group id="radios2" v-model="selected[31]" :options="options2" name="radioOptions2">
              </b-form-checkbox-group>
              <b-form-input size="large" placeholder="If other why?" v-model="selected[1]"></b-form-input>
              </b-form-group>
            </fieldset>
          </div>
          </div>
          <div class="row">
          <div class="col-md-12">
            <fieldset>
              <b-form-group label="Do you struggle with any of the following?">
                <b-form-checkbox-group id="checkboxes1" v-model="selected[2]" :options="options3" name="checkboxes1">
                </b-form-checkbox-group>
              </b-form-group>
            </fieldset>
          </div>
          </div>
        </vuestic-widget>
      </div>
      </div>

      <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Eating' | translate">
          <h5>Rate out of 5 how satisfied you are in each field<br></h5>
          <h6>(1 = Not satisfied, 5 = Very Satisfied)</h6>
          <div class="row">
          <div class="col-md-12">
            <fieldset>
              <b-form-group label="Nutrition Content per meal">
                <b-form-radio-group id="radios3" v-model="selected[3]" :options="optionsnum" name="radioOptions3">
                </b-form-radio-group>
              </b-form-group>
              <b-form-group label="Eating Habits">
                <b-form-radio-group id="radios4" v-model="selected[4]" :options="optionsnum" name="radioOptions4">
                </b-form-radio-group>
              </b-form-group>
              <b-form-group label="Choices of foods made">
                <b-form-radio-group id="radios5" v-model="selected[5]" :options="optionsnum" name="radioOptions5">
                </b-form-radio-group>
              </b-form-group>
              <b-form-group label="Satisfaction during and after meals">
                <b-form-radio-group id="radios6" v-model="selected[6]" :options="optionsnum" name="radioOptions6">
                </b-form-radio-group>
              </b-form-group>
              <b-form-group label="Discipline with unhealthy foods">
                <b-form-radio-group id="radios7" v-model="selected[7]" :options="optionsnum" name="radioOptions7">
                </b-form-radio-group>
              </b-form-group>
              <b-form-group label="Mindful Eating">
                <b-form-radio-group id="radios8" v-model="selected[8]" :options="optionsnum" name="radioOptions8">
                </b-form-radio-group>
              </b-form-group>
              <b-form-group label="Knowledge of the best foods for you">
                <b-form-radio-group id="radios9" v-model="selected[9]" :options="optionsnum" name="radioOptions9">
                </b-form-radio-group>
              </b-form-group>
            </fieldset>
          </div>
          </div>
        </vuestic-widget>
      </div>
      </div>

      <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Fitness' | translate">
          <h5>Rate out of 5 how satisfied you are in each field <br></h5>
          <h6>(1 = Not satisfied, 5 = Very Satisfied)</h6>
          <div class="row">
          <div class="col-md-12">
            <fieldset>
                  <b-form-group label="Amount of exercise">
                    <b-form-radio-group id="radios10" v-model="selected[10]" :options="optionsnum" name="radioOptions10">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Kind of Exercise">
                    <b-form-radio-group id="radios11" v-model="selected[11]" :options="optionsnum" name="radioOptions11">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Daily Active Lifestyle">
                    <b-form-radio-group id="radios12" v-model="selected[12]" :options="optionsnum" name="radioOptions12">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Challenged in Workouts">
                    <b-form-radio-group id="radios13" v-model="selected[13]" :options="optionsnum" name="radioOptions13">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Physical Appearance">
                    <b-form-radio-group id="radios14" v-model="selected[14]" :options="optionsnum" name="radioOptions14">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Physical Health">
                    <b-form-radio-group id="radios15" v-model="selected[15]" :options="optionsnum" name="radioOptions15">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Energy">
                    <b-form-radio-group id="radios16" v-model="selected[16]" :options="optionsnum" name="radioOptions16">
                    </b-form-radio-group>
                  </b-form-group>
            </fieldset>
          </div>
          </div>
        </vuestic-widget>
      </div>
      </div>

      <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Lifestyle' | translate">
          <h5>Rate out of 5 how satisfied you are in each field <br></h5>
          <h6>(1 = Not satisfied, 5 = Very Satisfied)</h6>
          <div class="row">
          <div class="col-md-12">
            <fieldset>
                  <b-form-group label="Sense of Purpose in Daily Life">
                    <b-form-radio-group id="radios17" v-model="selected[17]" :options="optionsnum" name="radioOptions17">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Time spent in Community">
                    <b-form-radio-group id="radios18" v-model="selected[18]" :options="optionsnum" name="radioOptions18">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Giving back to causes I believe in">
                    <b-form-radio-group id="radios19" v-model="selected[19]" :options="optionsnum" name="radioOptions19">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Knowledge gained from spiritual community">
                    <b-form-radio-group id="radios20" v-model="selected[20]" :options="optionsnum" name="radioOptions20">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Follow through on convictions">
                    <b-form-radio-group id="radios21" v-model="selected[21]" :options="optionsnum" name="radioOptions21">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Follow through and completion of goals">
                    <b-form-radio-group id="radios22" v-model="selected[22]" :options="optionsnum" name="radioOptions22">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Relationship with family">
                    <b-form-radio-group id="radios23" v-model="selected[23]" :options="optionsnum" name="radioOptions23">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Relationship with friends">
                    <b-form-radio-group id="radios24" v-model="selected[24]" :options="optionsnum" name="radioOptions24">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Gratifying job/work">
                    <b-form-radio-group id="radios25" v-model="selected[25]" :options="optionsnum" name="radioOptions25">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Financial Stability">
                    <b-form-radio-group id="radios26" v-model="selected[26]" :options="optionsnum" name="radioOptions26">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Level of Education">
                    <b-form-radio-group id="radios27" v-model="selected[27]" :options="optionsnum" name="radioOptions27">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Feeling loved and supported in relationships">
                    <b-form-radio-group id="radios28" v-model="selected[28]" :options="optionsnum" name="radioOptions28">
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="Amount of rest, sleep, downtime">
                    <b-form-radio-group id="radios29" v-model="selected[29]" :options="optionsnum" name="radioOptions29">
                    </b-form-radio-group>
                  </b-form-group>
            </fieldset>
          </div>
          </div>
        </vuestic-widget>
      </div>
      </div>

      <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Misc' | translate">
          <h5> Please fill these forms out </h5>
          <div class="row">
          <div class="col-md-12">
            <fieldset>
                  <b-form-group label="What is your daily health routine? (e.g. walk in the park)">
                    <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="selected[32]"></b-form-textarea>
                  </b-form-group>
                  <b-form-group label="What are you current eating habits like?">
                    <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="selected[33]"></b-form-textarea>
                  </b-form-group>
                  <b-form-group label="Please tell us about any past or current medical conditions, injuries, limitations, or other that we should be aware of?">
                    <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="selected[34]"></b-form-textarea>
                  </b-form-group>
                  <b-form-group label="Are you currently taking any medication? If yes please list medication(s) and the condition it is prescribed for.">
                    <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="selected[35]"></b-form-textarea>
                  </b-form-group>
                  <b-form-group label="What other programs have you tried in the past?">
                    <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="selected[36]"></b-form-textarea>
                  </b-form-group>
                  <b-form-group label="Describe your personality">
                    <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="selected[37]"></b-form-textarea>
                  </b-form-group>
                  <b-form-group label="What do you enjoy doing?">
                    <b-form-textarea :rows="3" :max-rows="6" placeholder="Type here" v-model="selected[38]"></b-form-textarea>
                  </b-form-group>
                  <b-form-group label="If an alien landed on earth for one day and spent time with you what would they report back when they return home?">
                    <b-form-textarea :rows="3" :max-rows="6" size="16pt" type="text" placeholder="Type here" v-model="selected[39]"></b-form-textarea>
                  </b-form-group>
            </fieldset>
          </div>
          </div>
        </vuestic-widget>
      </div>
      </div>

    <b-button v-if="!userinfo.provider" type="submit" variant="primary">Finish</b-button>
    </b-form>

  </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '../../firebaseInit'

export default {
  name: 'dashboard',
  data () {
    return {
      user: {},
      userinfo: {},
      selected: ['', '', '', '', ''],
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
  created () {
    this.user = firebase.auth().currentUser
    let id = this.user.uid
    db.collection('users').doc(id).get()
      .then(doc => {
        this.userinfo = doc.data()
      })
    this.selected[30] = localStorage.getItem('formNtent').split(',')
    this.selected[31] = localStorage.getItem('formNotMeetNtent').split(',')
    this.selected[2] = localStorage.getItem('formStruggles').split(',')
    this.selected[3] = localStorage.getItem('formEat1')
    this.selected[4] = localStorage.getItem('formEat2')
    this.selected[5] = localStorage.getItem('formEat3')
    this.selected[6] = localStorage.getItem('formEat4')
    this.selected[7] = localStorage.getItem('formEat5')
    this.selected[8] = localStorage.getItem('formEat6')
    this.selected[9] = localStorage.getItem('formEat7')
    this.selected[10] = localStorage.getItem('formFit1')
    this.selected[11] = localStorage.getItem('formFit2')
    this.selected[12] = localStorage.getItem('formFit3')
    this.selected[13] = localStorage.getItem('formFit4')
    this.selected[14] = localStorage.getItem('formFit5')
    this.selected[15] = localStorage.getItem('formFit6')
    this.selected[16] = localStorage.getItem('formFit7')
    this.selected[17] = localStorage.getItem('formLife1')
    this.selected[18] = localStorage.getItem('formLife2')
    this.selected[19] = localStorage.getItem('formLife3')
    this.selected[20] = localStorage.getItem('formLife4')
    this.selected[21] = localStorage.getItem('formLife5')
    this.selected[22] = localStorage.getItem('formLife6')
    this.selected[23] = localStorage.getItem('formLife7')
    this.selected[24] = localStorage.getItem('formLife8')
    this.selected[25] = localStorage.getItem('formLife9')
    this.selected[26] = localStorage.getItem('formLife10')
    this.selected[27] = localStorage.getItem('formLife11')
    this.selected[28] = localStorage.getItem('formLife12')
    this.selected[29] = localStorage.getItem('formLife13')
    this.selected[32] = localStorage.getItem('formMisc1')
    this.selected[33] = localStorage.getItem('formMisc2')
    this.selected[34] = localStorage.getItem('formMisc3')
    this.selected[35] = localStorage.getItem('formMisc4')
    this.selected[36] = localStorage.getItem('formMisc5')
    this.selected[37] = localStorage.getItem('formMisc6')
    this.selected[38] = localStorage.getItem('formMisc7')
    this.selected[39] = localStorage.getItem('formMisc8')
  },
  computed: {
    state () {
      return null
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      let id = this.user.uid
      if (this.selected.includes() || this.selected.includes(null) || this.selected.includes('undefined')) {
        alert('Fill all parts')
      } else {
        db.collection('users').doc(id).update({
          ntent: {
            Name: this.userinfo.firstName + ' ' + this.userinfo.lastName,
            provider: null,
            Ntent: this.selected[30],
            NotMeetNtent: this.selected[31],
            Struggles: this.selected[2],
            Eat1: this.selected[3],
            Eat2: this.selected[4],
            Eat3: this.selected[5],
            Eat4: this.selected[6],
            Eat5: this.selected[7],
            Eat6: this.selected[8],
            Eat7: this.selected[9],
            Fit1: this.selected[10],
            Fit2: this.selected[11],
            Fit3: this.selected[12],
            Fit4: this.selected[13],
            Fit5: this.selected[14],
            Fit6: this.selected[15],
            Fit7: this.selected[16],
            Life1: this.selected[17],
            Life2: this.selected[18],
            Life3: this.selected[19],
            Life4: this.selected[20],
            Life5: this.selected[21],
            Life6: this.selected[22],
            Life7: this.selected[23],
            Life8: this.selected[24],
            Life9: this.selected[25],
            Life10: this.selected[26],
            Life11: this.selected[27],
            Life12: this.selected[28],
            Life13: this.selected[29],
            Misc1: this.selected[32],
            Misc2: this.selected[33],
            Misc3: this.selected[34],
            Misc4: this.selected[35],
            Misc5: this.selected[36],
            Misc6: this.selected[37],
            Misc7: this.selected[38],
            Misc8: this.selected[39],
            NtentOther: this.selected[0],
            NotMeetNtentOther: this.selected[1]
          }
        }).then(function (things) {
          db.collection('users').doc(id).update({
            assessfilled: true
          }).then(function () {
            alert('Thanks for filling the assessment, now fill your profile information')
            location.assign('/user/edit-profile')
          })
        })
      }
    }
  }
}
</script>

<style>
  a {
    cursor: pointer;
  }
  .assessform {
    font-size: 14pt;
  }
  .form-group input {
    font-size: 1.4rem;
  }
  .form-group textarea {
    font-size: 1.4rem;
  }
</style>
