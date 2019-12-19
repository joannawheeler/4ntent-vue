<template>
  <div class="row no-gutters" style="display: flex; flex: 1">
    <div class="col-12" style="display: flex; flex: 1">
      <div class="dashboard" style="display: flex; flex: 1; flex-direction: column">
        <daily name="daily"></daily>
        <assess-modal name="assess"></assess-modal>
        <div class="row no-gutters" style="display: flex; flex: 1">
          <div class="col widgets">
            <dashboard-info-widgets :userinfo="userinfo"></dashboard-info-widgets>
          </div>
          <!-- <div class="col-lg-2 col-md-12 col-xs-12 points">
  <points :userinfo="userinfo">
  </points>
</div>
 -->
        </div>
        <div class="row d-flex bottom-buttons">
          <button class="btn btn-primary focus gradient-light-to-mid-diag-down-right">
            Earn Your Daily 4NTENT Points
          </button>
          <button class="btn btn-primary focus gradient-light-to-mid-diag-down-right">
            MY WELLNESS JOURNAL
          </button>
        </div>
        <!-- <div class="row no-gutters all-buttons-container" style="">
          <div class="col-sm-6 col-xs-12 align-self-center" style="text-align: center">
            <div class="button-container">
              <button class="btn btn-primary focus gradient-light-to-mid-diag-down-right">
                Earn Your Daily 4NTENT Points
              </button>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12 align-self-center" style="text-align: center">
            <router-link :to="{path: '/user/wellness-journal'}">
              <div class="button-container">
                <button class="btn btn-primary focus gradient-light-to-mid-diag-down-right">
                  MY WELLNESS JOURNAL
                </button>
              </div>
            </router-link>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import DashboardInfoWidgets from './DashboardInfoWidgets'
// import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
// import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
// import FeaturesTab from './features-tab/FeaturesTab.vue'
// import DataVisualisationTab
// from './data-visualisation-tab/DataVisualisation.vue'
// import DashboardBottomWidgets from './DashboardBottomWidgets.vue'
import Points from './Points.vue';
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'
import Daily from './Daily'
import AssessModal from './AssessModal'



export default {
  name: 'dashboard',
  components: {
    Daily,
    AssessModal,
    // DataVisualisationTab,
    DashboardInfoWidgets,
    // UsersMembersTab,
    // SetupProfileTab,
    // FeaturesTab,
    // DashboardBottomWidgets,
    Points
  },
  data() {
    return {
      user: {},
      userinfo: {},
      id: '',
      today: '',
      curQuestions: [],
      checkbox: false,
      responses: [],
    }
  },
  created() {
    this.$modal.hide('assess');
    this.$modal.hide('daily');
    let use = this.$store.getters.getUser
    let id = use.user.uid
    this.id = id;

    this.today = moment().format('LL')
    db.collection('users').doc(this.id).get()
      .then(doc => {
        this.userinfo = doc.data()

        return doc.data()
      }).then(userdata => {
        // this.setPermissionsByTier();
        if (!userdata.provider) {
          if (!userdata.assessfilled) {
            return this.show('assess')
          } else if (!userdata.dailyCheckIns[this.today]) {
            return this.show('daily')
          }
        }
        return userdata
      }).catch(err => {
        console.log('error when retrieving userinfo');
        alert('error when retrieving userinfo: ' + err)
      })
  },
  // mounted() {

  // },
  methods: {
    show(name) {
      this.$modal.show(name);
    },
    hide(name) {
      this.$modal.hide(name);
    }
  },
  firestore() {
    return {
      // userinfo: db.collection('users').doc(localStorage.getItem('userid'))

    }
  }
}

</script>
<style lang="scss" scoped>
.widgets {
  display: flex;
  flex: 1;

  @include media-breakpoint-down(md) {
    flex: none;
  }
}

.points {
  display: flex;
  flex: 1;

  @include media-breakpoint-down(md) {
    flex: none;
  }
}

.modal-text {
  padding-bottom: 2em;
}

.daily-check-in-modal {
  .submit-button {
    padding-bottom: .5em;

    span {
      font-size: 1.75rem;

    }
  }

  .i-do-not-submit-button {
    span {
      font-size: .75rem;
      color: lightgray;
    }
  }
}

.all-buttons-container {
  margin-bottom: 20px;

  .button-container {
    padding: 10px 20px;

    button {
      font-size: 1.3rem;
      border-radius: 10px;
      padding: 10px;
    }

    @include media-breakpoint-down(xs) {
      button {
        font-size: 1.1rem;
        padding: 10px;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    padding-left: 5%;
    padding-right: 5%
  }

  @include media-breakpoint-down(xs) {
    padding-left: 0;
    padding-right: 0;
  }
}

.bottom-buttons {
  justify-content: space-around;
  padding: 10px 20px;
  margin-bottom: 20px;

  button {
    flex-basis: 30%;
    max-width: 30%;
    border-radius: 0;
    padding: 10px 20px;
    font-size: 1.3rem;
    box-shadow: 0px 4px 10px 0.4px rgba(255, 255, 255, 0.5) !important;
    background-color: $ntent-dark-blue !important;

  }

  @include media-breakpoint-down(md) {
    button {
      font-size: 1rem;
    }
  }

  @include media-breakpoint-down(sm) {
    align-items: center;
    flex-direction: column;
    padding: 10px 15%;

    button {
      width: 100%;
      max-width: 100%;
      flex-basis: 100%;
      margin: 10px 0;
    }
  }
}

.square {
  padding: $dash-widget-pad;
}

</style>
