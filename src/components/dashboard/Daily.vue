<template>
  <modal class="daily" name="daily" height='auto' :scrollable='true' :clickToClose='false'>
    <div class="inner-container">
      <h4>Daily Check In</h4>
      <ul>
        <li v-for="(curQuestion, index) in curQuestions" :key="'0' + index">
          <input :id="curQuestion" :value="curQuestion" name="curQuestion" type="checkbox" v-model="checkedQuestions" />
          <label :for="curQuestion">
            {{curQuestion}}
          </label>
        </li>
      </ul>
      <div class="done-button-container"><button v-on:click="postDaily">Submit</button></div>
      <!-- <li v-for="(product, index) in products">
    <input :id="product.slug" :value="product" name="product" type="checkbox" v-model="checkedProducts" />
    <label :for="product.slug"><span></span></label>
</li> -->
    </div>
  </modal>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'
import axios from 'axios'
export default {
  name: 'daily',
  props: {},
  // components: {
  // },
  data() {
    return {
      userinfo: {},
      curQuestions: [],
      checkedQuestions: [],
      responses: [],
      today: '',
      id: ''
    }
  },
  created() {
    let use = this.$store.getters.getUser
    let id = use.user.uid
    this.id = id;
    this.hide('daily')
    // this.id = id;
    this.today = moment().format('LL')
    db.collection('dailyCheckIns').doc('currentQuestions').get()
      .then(doc => {
        var data = doc.data();
        this.curQuestions = data.allQuestions;
        return this.curQuestions;
      }).then(responses => {
        db.collection('users').doc(id).get()
          .then(doc => {
            this.userinfo = doc.data();
            if (!this.userinfo.dailyCheckIns[this.today] && !this.userinfo.provider) {
              return this.show('daily');
            }
            return doc.data()
          }).catch(err => {
            alert('there was an error: ' + err)
          })
      }).catch(err => {
        alert("There was the following error when trying to retrieve the current questions: " + err);
      })
  },
  methods: {
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
.daily {
  width: 100% !important;
  font-size: 15px;
  color: black !important;
  .inner-container {
    padding: 20px;
    h4 {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      padding: 0px 10px 10px 0;
      margin: 0px;
    }

    ul {
      list-style: none;
      padding: 0px;
      margin: 0px;
      text-align: left;
      li {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 15px 0;
        input {
          width: 20px;
          height: 20px;
          margin: 0;
          padding: 0;
          position: absolute;
        }
        label {
          display: block;
          line-height: 100%;
          padding: 0 0 0 25px;
        }
      }
    }

    .done-button-container {
      text-align: center;
      padding: 10px 10px 0 10px;
      margin: 0px;

      button {
        text-align: center;
        padding: 8px;
        margin: 0px;
        border: 1px solid black;
        border-radius: 5px;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .v--modal-box {
      max-width: 600px;
    }
  }

  @include media-breakpoint-down(sm) {
    .v--modal-box {
      left: 50%!important;
      transform: translateX(-50%);
      max-height: 80vh;
      max-width: 80vw;
      overflow: hidden auto;
      .inner-container {
        ul {
          li {
            margin: 5px 0;
          }
        }
      }
    }
  }
}
</style>
