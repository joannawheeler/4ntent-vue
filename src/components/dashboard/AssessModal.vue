<template>
  <modal height='auto' :scrollable='true' name="assess" :clickToClose='false'>
    <h1 style="color: black">Let's get started by completing a short assessment to get you on the right track!</h1>
    <button v-on:click="goToAssessment()">Fill Out My Assessment</button>
  </modal>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'
import axios from 'axios'
export default {
  name: 'assess-modal',
  props: {},
  data() {
    return {
      userinfo: {},
      id: ''
    }
  },
  created() {
    let use = this.$store.getters.getUser
    let id = use.user.uid
    this.id = id;

    db.collection('users').doc(id).get()
      .then(doc => {
        this.userinfo = doc.data();
        return this.userinfo;
      }).then(userdata => {
        if (!this.userinfo.assessfilled && !this.userinfo.provider) {
          return this.show('assess');
        }
        return userdata
      }).catch(err => {
        alert('there was an error retrieving userinfo and trying to display the assessment modal: ' + err)
      })
  },
  methods: {
    goToAssessment() {
      this.$router.replace('/assessment')
    },
    postDaily() {
      var questions = this.curQuestions;
      var checked = this.checkedQuestions;
      const result = questions.filter(question => !checked.includes(question));

      console.log(result);
      db.collection('users').doc(this.id).update({
        ['dailyCheckIns.' + this.today]: {
          'checkedQuestions': this.checkedQuestions,
          'uncheckedQuestions': result
        }

      }).then(x => {
        console.log("Document successfully updated with this array of responses: " + this.responses);
        alert('Thanks for completing your daily check in!')
      }).then(x => {
        this.hide('daily')
      }).catch(err => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", err);
        alert("Error updating document: ", err)
      })
    },
    show(modalName) {
      this.$modal.show(modalName);
    },
    hide(modalName) {
      this.$modal.hide(modalName);
    }
  }
}

</script>
<style lang="scss">
.dashboard {
  .v--modal-box {
    text-align: center;
    width: 200px;
    padding: 20px 20px;

    h1 {
      font-size: 1.5rem;
      line-height: 150%
    }

    button {
      padding: 5px 20px;
      border-radius: 10px;
      color: #333333;
      font-size: 1.2rem;
      background-color: aquamarine;
      font-weight: 600;
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      &:hover {
        transform: scale(1.1);
        transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }

    @include media-breakpoint-down(md) {
      max-width: 400px;
      height: auto !important;
      left: 50% !important;
      transform: translateX(-50%);
    }

    @include media-breakpoint-down(sm) {
      max-width: 250px;

      h1 {
        font-size: 1.1rem;
      }

      button {
        font-size: 1.1rem;
      }
    }
  }
}

</style>
