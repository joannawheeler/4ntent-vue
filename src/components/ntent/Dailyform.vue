  <template>
    <div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="fullwidth" :headerText="$t('Daily Form')">
          <b-form @submit="onSubmit">
          <div><h6>Journal Area</h6></div>
          <b-form-textarea class="fullwidth" id="textarea1" placeholder="Enter something"
                           :rows="3" :max-rows="6" v-model="journal">
          </b-form-textarea>
          <span>
          <b-form-group v-for="(value, index) in questions" v-bind:key="(value)">
              {{ index + 1 }} . {{ value }}
            <b-form-radio-group v-model="selected[index]" :options="optionsyn">
            </b-form-radio-group>
          </b-form-group>
          </span>

          <b-button type="submit" variant="primary">Save</b-button>
          </b-form>
        </vuestic-widget>
      </div>
    </div>
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
        user: {},
        userinfo: {},
        selected: [],
        points: null,
        journal: null,
        questions:
        [
          'Did you consume more than one glass of water?',
          'Did you pre-plan some of your meals?',
          'Did you make time to stretch, walk or move a little today?',
          'Did you get enough sleep last night?',
          'Did you spend time with a loved one, family or friend today?'
        ],
        optionsyn: [
          { text: 'Yes', value: 1 },
          { text: 'No', value: 0 }
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
    },
    computed: {
      state () {
        return null
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        var hold = 0
        for (var i = 0; i < this.selected.length; i++) {
          hold += this.selected[i]
        }
        let id = this.user.uid
        if (this.selected.includes()) {
          alert('Fill all parts')
        } else {
          let datenow = new Date()
          let daylimit = datenow.getDate()
          let yearlimit = datenow.getYear()
          let monthlimit = datenow.getMonth()
          let datelimite = yearlimit + '_' + monthlimit + '_' + daylimit
          let userplanRef = db.collection('users').doc(id).collection('userlogs')
          let query = userplanRef.where('datelimit', '==', datelimite)
          let info = {
            Name: this.userinfo.firstName + ' ' + this.userinfo.lastName,
            provider: null,
            date: datenow,
            time: moment().unix(),
            datelimit: datelimite,
            q_1: this.selected[0],
            q_2: this.selected[1],
            q_3: this.selected[2],
            q_4: this.selected[3],
            q_5: this.selected[4],
            q_6: this.selected[5],
            q_7: this.selected[6],
            q_8: this.selected[7],
            q_9: this.selected[8],
            q_10: this.selected[9],
            journal: this.journal,
            points: hold
          }
          query.get().then(
          function (doc) {
            if (doc.empty) {
              db.collection('users').doc(id).collection('userlogs').add(info)
                .then(function (docs) {
                  location.assign('/dashboard')
                })
            } else {
              let vid = doc.docs[0].id
              db.collection('users').doc(id).collection('userlogs').doc(vid).set(info)
                .then(function (docs) {
                  location.assign('/dashboard')
                })
            }
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
    .fullwidth {
      width: 100%
    }
  </style>
