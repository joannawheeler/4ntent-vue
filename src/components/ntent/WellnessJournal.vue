<template>
  <div class="wellness-container">
    <h1 class="the-title mont">Wellness Journal</h1>
    <div class="goBackToDashboard">
      <router-link class='link' :to="{name: 'dashboard'}">
        <button>Go back to your Dashboard</button>
      </router-link>
    </div>
    <div class="journal">
      <div class="date" style="color: rgb(44, 130, 224);">
        {{ this.curEntryDate }}
      </div>
      <div class="editable medium-editor-element" @input="this.onInput" contenteditable="true" spellcheck="true" data-medium-editor-element="true" role="textbox" aria-multiline="true" data-medium-editor-editor-index="1" medium-editor-index="6849be04-5807-3894-7400-c2f2554ee89a" data-placeholder="Type your text"> {{this.previouslySavedInput}}
        <p v-if="!this.previouslySavedInput" class="inner-text" data-placeholder="Insert text here..." contenteditable>
        </p>
      </div>
    </div>
    <!-- <div>
  <p class="animated" id="messageOnSave">Saved! </p>
  <p class="animated" id="messageOnSaveError">Uh oh! An error occurred and your entry may not have been saved. Please try again or contact us to resolve this issue.</p>
</div>
 -->
    <div class="button-container">
      <div class="prev-next-buttons-container" v-if="this.prevEntryDate !== null">
        <button type="button" class="btn btn-default" v-on:click="this.showPreviousEntry">Prev</button>
      </div>
      <div class="save-button-container">
        <button class="btn btn-default btn-normal save-button" v-on:click="this.save">
          SAVE
        </button>
      </div>
      <div class="prev-next-buttons-container" v-if="this.curEntryDate !== this.todaysDate">
        <button type="button" class="btn btn-default" v-on:click="this.showNextEntry">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'
import MediumEditor from '../forms/medium-editor/MediumEditor'
import Buttons from '../ui/buttons/Buttons'

//https://yabwe.github.io/medium-editor/

export default {
  name: 'wellness-journal',
  components: {
    MediumEditor,
    Buttons,
  },
  computed: {

  },
  data() {
    return {
      active: null,
      userinfo: {},
      user: {},
      previouslySavedInput: "",
      textInput: "",
      todaysDate: "",
      curEntryDate: "",
      prevEntryDate: null,
      nextEntryDate: null,
      id: "",
      showSavedMessage: 0,
      mostRecentlyCreatedEntryDate: null
    }
  },
  created() {
    //authenticate user first
    this.user = firebase.auth().currentUser
    let use = this.$store.getters.getUser
    let user = use.user
    let id = user.uid;
    this.id = id;
    this.todaysDate = moment().format('dddd') + ' ' + moment().format('LL');
    //set the current entry's date to today's date just when opening journal; curDate will change to whatever journal entry the user is on after that
    this.curEntryDate = this.todaysDate;
    //check if there is old text saved in journalEntries under the current date
    db.collection('users').doc(id).get()
      .then(doc => {
        //save the user's info into this.userinfo
        this.userinfo = doc.data();
        //if there is an existing entry for curDate, set the oldTextInput to the curDate's existing text so it shows to user and will be saved within next save
        if (this.userinfo.journalEntries[this.curEntryDate]) {
          //inserts old text into input area
          this.previouslySavedInput = this.userinfo.journalEntries[this.curEntryDate].textInput;
          //sets the prevDate
          this.prevEntryDate = this.userinfo.journalEntries[this.curEntryDate].prevEntryDate;
          //sets the nextDate (will be null)
          this.nextEntryDate = this.userinfo.journalEntries[this.curEntryDate].nextEntryDate;
          //sets the mostRecDate
          this.mostRecentlyCreatedEntryDate = this.userinfo.journalEntries.mostRecentlyCreatedEntryDate;
        } else {
          //if no existing entry for curDate
          //set the previous entry as the value saved in mostRecentlyCreatedEntryDate at component load
          //will change mostRecentlyCreatedEntryDate once this entry is saved for the first time for this curDate
          this.prevEntryDate = this.userinfo.journalEntries.mostRecentlyCreatedEntryDate;
          this.mostRecentlyCreatedEntryDate = this.userinfo.journalEntries.mostRecentlyCreatedEntryDate;
        }
      })
    //call db and set this.prevEntry to this.prevEntry and
    this.$nextTick(() => {
      this.$validator.validateAll()
    })
  },
  methods: {
    showPreviousEntry() {
      //get prevEntryDate data
      if (this.prevEntryDate !== null) {
        this.curEntryDate = this.prevEntryDate;

        db.collection('users').doc(this.id).get()
          .then(doc => {
            //save the user's info into this.userinfo
            this.userinfo = doc.data();
            this.textInput = "";
            this.previouslySavedInput = this.userinfo.journalEntries[this.curEntryDate].textInput;
            this.prevEntryDate = this.userinfo.journalEntries[this.curEntryDate].prevEntryDate;
            this.nextEntryDate = this.userinfo.journalEntries[this.curEntryDate].nextEntryDate;
          })
      }
    },
    showNextEntry() {

      if (this.nextEntryDate === null && this.curEntryDate !== this.todaysDate) {
        this.prevEntryDate = this.mostRecentlyCreatedEntryDate;
        this.curEntryDate = this.todaysDate;
        this.textInput = "";
        this.previouslySavedInput = "";
        console.log("erased")
      } else if (this.nextEntryDate !== null) {
        db.collection('users').doc(this.id).get()
          .then(doc => {
            this.userinfo = doc.data();
            this.curEntryDate = this.userinfo.journalEntries[this.curEntryDate].nextEntryDate;
            this.nextEntryDate = this.userinfo.journalEntries[this.curEntryDate].nextEntryDate;
            this.prevEntryDate = this.userinfo.journalEntries[this.curEntryDate].prevEntryDate;
            this.previouslySavedInput = this.userinfo.journalEntries[this.curEntryDate].textInput;
          })
      }
    },
    save() {
      db.collection('users').doc(this.id).update({
        //change mostRecentlyCreatedEntryDate's date to today's date if we are saving today's date otherwise leave as it was
        ['journalEntries.' + this.mostRecentlyCreatedEntryDate + '.nextEntryDate']: this.todaysDate === this.curEntryDate ? this.curEntryDate : ['journalEntries.' +
          this.mostRecentlyCreatedEntryDate + '.nextEntryDate'
        ],
        'journalEntries.mostRecentlyCreatedEntryDate': this.todaysDate === this.curEntryDate ? this.todaysDate : this.mostRecentlyCreatedEntryDate,
        //will overwrite and update or if doesnt exist will create one, the mostRecentlyCreatedEntryDate properties
        ['journalEntries.' + this.curEntryDate + '.textInput']: this.textInput,
        ['journalEntries.' + this.curEntryDate + '.prevEntryDate']: this.prevEntryDate,
        ['journalEntries.' + this.curEntryDate + '.nextEntryDate']: this.nextEntryDate,
        //will create the new entry with its prev and next props
      }).then((userinfo) => {
        console.log("Document successfully written!");
        alert("Your journal entry has been saved.")
      }).catch((err) => {
        console.error("Error writing document: ", error);
        alert("Uh oh! An error occurred. Your journal entry may not have been saved. Please try again or contact us to resolve the error.")
      })
    },
    onInput(e) {
      this.textInput = e.target.innerText;
    }
  }
}

</script>
<style lang="scss">
.goBackToDashboard {
  text-align: center !important;

  button {
    font-size: 19px !important;
    color: white !important;
    opacity: 5 !important;
  }

  padding-bottom: 30px !important;
  padding-top: .7em !important;
}

.save-button-container {
  display: inline;

  button {
    font-size: 30px;
    color: white !important;
    background-color: $ntent-dark-blue;
  }

  button:hover {}
}

.button-container {
  display: inline;

  @include media-breakpoint-down(md) {
    padding: 3%;
  }

  @include media-breakpoint-down(sm) {
    padding: 4%;
  }
}

.prev-next-buttons-container {
  text-align: center;
  display: inline;
  // vertical-align: middle;

  button {
    padding: 1%;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 25px;
    color: white;
    box-shadow: none !important;
    background-color: transparent !important;
  }
}

.inner-text:empty:not(:focus)::before {
  content: attr(data-placeholder);
  color: gray;
}

.wellness-container {
  color: $almost-black;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
}

.the-title {
  text-align: center;
  padding: 0 .25em 0em .25em;
  font-size: 4rem;
  color: #ECFEE8;
  letter-spacing: 2px;
  margin: 0;
  margin-top: 20px;
}

.date {
  padding: 2% 0;
  font-size: 2.1rem;
}

.journal {
  // border: solid 3px green;
  max-width: 1200px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto 2% auto;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 9.6px 0.4px rgba(100, 100, 100, 0.5);
  color: $almost-black;
  padding: 2% 4%;
  font-size: 2rem;

  @include media-breakpoint-down(lg) {
    width: 90%;

    // margin: 0% 5% 5% 5%;
  }
}

main {
  // border: solid 3px red;
  display: flex;
  flex-direction: column;
}

.medium-editor-element {
  color: $almost-black;
  flex-grow: 1;
}

.editable::placeholder {
  color: lightgray !important;
}

.editable:focus {
  outline: lightgray !important;
}

</style>
