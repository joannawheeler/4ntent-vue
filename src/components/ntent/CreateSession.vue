<template>
  <div class="form-elements">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Create Session' | translate">
            <div class="row">
              <div class="col-md-4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input state="state" v-model="sessiontitle" id="inputWithDescription" required title=""/>
                      <label class="control-label" for="simple-input">{{'Title of Session'
                        | translate}}</label><i
                      class="bar"></i>
                      <small class="help text-secondary">
                        Title of Session, Please include things such as the Ntent of the session and whatnot
                      </small>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="col-md-4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input state="state" v-model="sessionlink" id="inputWithDescription" required title=""/>
                      <label class="control-label" for="simple-input">{{'Link to Session'
                        | translate}}</label><i
                      class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="col-md-4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <vuestic-date-picker
                        id="date-picker-time"
                        :config="{enableTime: true}"
                        v-model="datepicker.time"
                      />
                      <label class="control-label" for="date-picker-time">
                        {{ $t('forms.dateTimePicker.time') }}
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <button class="btn btn-primary" @click="onSub()">
                  {{'Submit' | translate}}
                </button>
              </div>
              <div class="col-md-6">
                <fieldset>
                  <vuestic-checkbox
                    :label="'This is a group session' | translate"
                    :id="'checkbox'"
                    :isCircle="true"
                    v-model="checkbox"/>
                </fieldset>
              </div>

            </div>

        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <advance-session></advance-session>
      </div>
    </div>

  </div>
</template>

<script>
  import db from '../../firebaseInit'
  import AdvanceSession from '../tables/AdvanceSession'

  export default {
    name: 'create-session',
    components: {
      AdvanceSession
    },
    computed: {
      datePickerDisabled: () => [date => !(date.getDate() % 5)],
    },
    props: {
      userinfo: {}
    },
    data () {
      return {
        checkbox: false,
        sessiontitle: '',
        sessionlink: '',
        datepicker: { time: '' },
        user: {},
        userplans: {}
      }
    },
    methods: {
      onSub (evt) {
        db.collection('ProviderPlans').add({
          title: this.sessiontitle,
          date: this.datepicker.time,
          provider: this.userinfo.firstName + ' ' + this.userinfo.lastName,
          pid: this.user.uid,
          pemail: this.user.email,
          zoomlink: this.sessionlink,
          participant: [],
          groupsession: this.checkbox
        }).then(evt => {
          location.reload()
        })
      }
    },
    created () {
      let use = this.$store.getters.getUser
      this.user = use.user
      db.collection('users').doc(this.user.uid).get()
      .then(doc => {
        this.userplans = doc.data()
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
