<template>
  <div class="form-elements">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Profile Picture (1MB Max File Size)' | translate">
            <div class="row">
            <div class="col-md-6">
              <input type="file" @change="onFileChanged">
            </div>
            </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'User information' | translate">

            <div class="row">
              <div class="col-md-6">
                <fieldset>
                  <div class="form-group with-icon-right">
                    <div class="input-group">
                      <input v-model="userinfo.firstName" id="clear-input"
                             name="clear-input" required/>
                      <i class="fa fa-times icon-right input-icon pointer"
                         @click="clear('firstName')"></i>
                      <label class="control-label" for="clear-input"
                             role="button">{{'First Name'
                        | translate}}</label><i
                      class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group with-icon-right">
                    <div class="input-group">
                      <input v-model="userinfo.lastName" id="clear-input"
                             name="clear-input" required/>
                      <i class="fa fa-times icon-right input-icon pointer"
                         @click="clear('lastName')"></i>
                      <label class="control-label" for="clear-input"
                             role="button">{{'Last Name'
                        | translate}}</label><i
                      class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group with-icon-right"
                       :class="{'has-error': errors.has('email')}">
                    <div class="input-group">
                      <input
                        id="email"
                        name="email"
                        v-model="userinfo.email"
                        v-validate="'required|email'"
                        required/>
                      <i
                        class="fa fa-exclamation-triangle icon-right input-icon"
                        v-show="errors.has('email')"></i>
                      <label class="control-label" for="email">{{'forms.inputs.emailValidated'
                        | translate}}</label><i class="bar"></i>
                      <small v-show="errors.has('email')"
                             class="help text-danger">{{
                        errors.first('email')
                        }}
                      </small>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="col-md-6">
                <fieldset>
                  <div class="form-group with-icon-right">
                    <div class="input-group">
                      <input type="number" v-model="userinfo.zip" id="clear-input"
                             name="clear-input" required/>
                      <label class="control-label" for="clear-input"
                             role="button">{{'Zip Code'
                        | translate}}</label><i
                      class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group with-icon-right">
                    <div class="input-group">
                      <input type="number" v-model="userinfo.phone" id="clear-input"
                             name="clear-input" required/>
                      <label class="control-label" for="clear-input"
                             role="button">{{'Phone Number'
                        | translate}}</label><i
                      class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <!-- <vuestic-date-picker
                        id="date-picker-basic"
                        v-model="userinfo.DOB"
                      />
                      <label class="control-label" for="date-picker-basic">
                        {{ $t('Date of Birth') }}
                      </label>
                      <i class="bar"></i> -->
                      <input v-model="dobhold" id="clear-input"
                             name="clear-input" required/>
                      <label class="control-label" for="clear-input"
                             role="button">{{'Date of Birth in Month-Day-Year format (12-30-1990)'| translate}}</label>
                      <i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
              <button class="btn btn-primary" @click="editprof()">
                {{'Submit and Upload Profile Image' | translate}}
              </button>
              </div>
            </div>
        </vuestic-widget>
      </div>
    </div>

  </div>
</template>

<script>
  import db from '../../firebaseInit'
  import firebase from 'firebase'
  import moment from 'moment'
  
  export default {
    name: 'form-elements',
    computed: {
      datePickerDisabled: () => [date => !(date.getDate() % 5)],
      isSuccessfulEmailValid () {
        let isValid = false
        if (this.formFields.email) {
          isValid = this.formFields.email.validated && this.formFields.email.valid
        }
        return isValid
      },
    },
    data () {
      return {
        userinfo: {},
        user: {},
        dobhold: '',
        selectedFile: null
      }
    },
    methods: {
      clear (field) {
        this[field] = ''
      },
      editprof (event) {
        let id = this.user.uid
        console.log(id)
        this.userinfo.DOB = moment(this.dobhold, 'MM-DD-YYYY').unix()
        db.collection('users').doc(id).update(this.userinfo)
        this.user.updateProfile({
          displayName: this.firstName,
          email: this.email
        }).then(function () {
          console.log(this.userinfo)
          let storage = firebase.storage()
          let storageRef = storage.ref()
          let profpics = storageRef.child(this.user.uid)
          profpics.put(this.selectedFile).then(function (snapshot) {
            console.log('Uploaded a blob or file!')
            if (!this.userinfo.provider) {
              alert('You will have a mentor contact you shortly')
              this.$router.replace('/user/dashboard')
            } else {
              location.assign('/')
            }
          }.bind(this))
        }.bind(this)).catch(function (error) {
          console.log(error)
        })
      },
      onFileChanged (event) {
        this.selectedFile = event.target.files[0]
      }
    },
    created () {
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

  input[type=checkbox]:disabled + label, input[type=radio]:disabled + label,
  input[type=checkbox]:disabled, input[type=radio]:disabled {
    cursor: not-allowed;
  }
</style>
