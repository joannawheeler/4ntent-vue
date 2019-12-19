<template>
  <div class="all-dash-info-widg">
    <div class="dash-info-widg-title title-text">
      My Trackers
    </div>
    <div class="points-container">
      <div class="well-img-container well-imgs">
        <div class="well-imgs__item" v-for="tracker in trackers" :key="tracker.name">
          <div class="img-container">
            <img class="item-img" v-bind:src="tracker.icon">
          </div>
          <div class="item-title">{{ tracker.name }}</div>
        </div>
      </div>
      <div class="add-tracker-button-container">
        <button class="add-tracker-button"><span v-on:click="addTracker()">Add Another Tracker</span></button>
      </div>
    </div>
  </div>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'

export default {
  name: 'my-trackers',
  computed: {

  },
  data() {
    return {
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      userinfo: {},
      user: {},
      dobhold: '',
      selectedFile: null,
      trackers: [{ name: "Strava", icon: "https://www.nationalmtb.org/blog/wp-content/uploads/strava-icon.png" }, { name: "Fitbit", icon: "https://zatznotfunny.com/wp-content/uploads/2016/04/fitbit-logo.png" }, { name: "MyFitnessPal", icon: "https://pbs.twimg.com/profile_images/949309068136521728/sWVfMJ6F.jpg" }]
    }
  },
  methods: {
    next() {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    },
    addTracker() {
      //do http req to add tracker info to user's record
    }
  },
  created() {
    //authenticate user first
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
.all-dash-info-widg {
  padding: 20px 50px;
  width: 100%;
  .dash-info-widg-title {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    padding: 20px 0;
  }
  .points-container {
    .well-imgs {
      display: flex;
      justify-content: center;
      &__item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px 20px;
        background-color: transparent;
        border-radius: 4px;
        .img-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
          width: 80%;
          img.item-img {
            width: 100%;
            transition: $transition-secondary;
          }
        }
        .item-title {
          flex: 1;
          font-size: 2rem;
          font-weight: 600;
        }
        &:hover {
          .img-container {
            img {
              transition: $transition-secondary;
              transform: scale(1.1);
            }
          }
        }
      }
    }
    .add-tracker-button-container {
      text-align: center;
      margin: 5em 0 0 0;
      button {
        padding: 0.7em;
        border-radius: 10px;
        font-size: 2em;
        line-height: 100%;
        background-color: $dark-blue;
        box-shadow: 1px 1px 14px -4px #0000007a;
        transition: $transition-secondary;
        &:hover {
          transform: scale(1.1);
          transition: $transition-secondary;
        }
      }
    }
  }
}

@include media-breakpoint-down(sm) {
  .all-dash-info-widg {
    .dash-info-widg-title {
      font-size: 2rem;
      padding: 15px 0;
    }
    .points-container {
      .well-imgs {
        flex-direction: column;
      }
      .add-tracker-button-container {
        margin: 2em 0 0 0;
        button {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
