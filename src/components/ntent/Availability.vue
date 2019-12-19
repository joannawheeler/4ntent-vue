<!-- this is where MENTORS set or delete their availability (intervals of time they are available) -->
<template>
  <!--
issues to address:
won't clear text at certain times. not a huge deal but need to address later
-->
  <div class="availability-container">
    <div class="row no-gutters">
      <div class="col-xs-12 centered">
        <div class="view-title"><span>View, edit, and add slots of availability here so NTENTION Setters can book appointments with you</span></div>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-xs-12 centered">
        <!-- <v-container class="" id="dropdown-example"> -->
        <v-select class="my-2" v-model="range" :items="ranges" target="#dropdown-example" return-object v-on:change="getDatesWithinARange"></v-select>
        <!-- </v-container> -->
        <!-- <v-container class="" id="dropdown-example"> -->
        <v-select class="my-2" :disabled="day.disabled" v-model="day" :items="days" target="#dropdown-example" return-object v-on:change="getIntervals"></v-select>
        <!-- </v-container> -->
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-xs-12 centered">
        <div class="slots"><span>Your available slots:</span></div>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-xs-12 centered">
        <div v-if="intervals.length === 0">No slots to display</div>
        <!-- convert 24hr time back to 12hr time-->
        <div class="currentIntervals" v-for="interval in intervals">
          <div v-if="interval['weeklyGroup']">{{ 'Weekly Group: ' + interval['weeklyType'] }}</div>
          {{ moment(interval['from'], 'HH:mm').format('hh:mm a').toString() + " - " + moment(interval['to'], 'HH:mm').format('hh:mm a').toString() }} <v-btn rounded color="primary" v-on:click="deleteInterval(interval)" dark>Delete</v-btn>
          <!-- <v-btn rounded color="primary" v-on:click="editInterval(interval)" dark>Edit</v-btn> -->
        </div>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-xs-12 centered">
        <div class="outerTimePickerContainer">
          <div class="innerTimePickerContainer">
            <span class="fromToText">From</span>
            <span class="timePickerBox">
              <a-time-picker use12Hours size="large" format="h:mm a" :minuteStep="15" @change="saveFrom" /></span>
          </div>
          <div class="innerTimePickerContainer">
            <span class="fromToText">To</span>
            <span class="timePickerBox">
              <a-time-picker use12Hours size="large" format="h:mm a" :minuteStep="15" @change="saveTo" /></span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-xs-12 centered">
            <span style="text-align: left">
              <vuestic-checkbox v-on:click="toggle()" v-model="weekly" label="This will be a Weekly 1 Hour NTENTIONAL Wellness Group"></vuestic-checkbox>
            </span>
          </div>
        </div>
        <div v-if="this.weekly" class="row no-gutters">
          <div class="col-xs-12 centered">
            <div class="demo-container">
              <div class="demo-container__item" v-for="(dropdown, index) in dropdowns" :key="index">
                <button type="button" class="btn btn-primary dropdown-toggle theme-toggle" slot="actuator">
                  {{ dropdown.text }}
                  <i class="ion-ios-arrow-down arrow-down"></i>
                  <vuestic-dropdown v-model="dropdown.value" :position="dropdown.position">
                    <div class="q-popover__container">
                      <div class="dropdown-item" v-on:click="setWeeklyType(type, dropdown.value)" v-for="(type, index) in types" :key="index">{{ type }}</div>
                      <div class="flex lg6"></div>
                    </div>
                  </vuestic-dropdown>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-xs-12 centered">
            <div>
              <v-btn rounded color="primary" v-on:click="addNewInterval" dark>Add</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'
import VuesticCheckbox from '../../vuestic-theme/vuestic-components/vuestic-checkbox/VuesticCheckbox'
import VuesticDropdown from '../../vuestic-theme/vuestic-components/vuestic-dropdown/VuesticDropdown'

export default {
  name: 'availability',
  components: {
    VuesticCheckbox,
    VuesticDropdown
  },
  props: {
    // userinfo: {}
  },
  data: () => ({
    //dropdown data
    weeklyType: '',
    types: [
      'Nutrition',
      'Fitness',
      'Lifestyle',
    ],
    dropdowns: [
      // {
      //   text: 'top',
      //   value: false,
      //   position: 'top',
      // },
      // {
      //   text: 'right',
      //   value: false,
      //   position: 'right',
      // },
      {
        text: 'What kind of Weekly Group is it?',
        value: false,
        position: 'bottom',
      },
      // {
      //   text: 'left',
      //   value: false,
      //   position: 'left',
      // },
    ],

    //other data
    userinfo: {},
    user: {},
    id: "",
    numRangesInList: 4,
    ranges: [],
    range: "",
    day: "",
    days: [],
    fromTime: "", //moment object
    curFrom: {},
    toTime: "", //moment object
    curTo: {},
    intervals: [],
    curDateHasIntervals: false,
    curDayFormatted: "",
    clear: true,
    weekly: false,
    weeklyMinutes: "00:60",
    weeklyMinutesNum: 60
  }),
  computed: {},
  created() {
    //authenticate user first
    this.user = firebase.auth().currentUser
    let use = this.$store.getters.getUser
    let user = use.user
    let id = user.uid;
    this.id = id;

    db.collection('users').doc(this.id).get()
      .then(doc => {
        this.userinfo = doc.data();
      }).then(doc => {
        this.weeklyDateRange();
      }).then(doc => {
        this.getIntervals();
      }).catch(err => {
        alert('there was the following error when requesting userinfo: ' + err)
      })
  },
  methods: {
    moment,
    setWeeklyType(type, dropdownValue) {
      this.weeklyType = type;
      this.dropdowns[0].value = false;
    },
    toggle() {
      this.weekly = !this.weekly;
    },
    clearText() {
      this.clear = 'true';
    },
    isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key))
          return false;
      }
      return true;
    },
    clearFromAndTo() {
      // this.curFrom = {};
      // this.curTo = {};

    },
    getIntervals(day) {
      if (day) {
        this.day = day;
      }
      this.curDayFormatted = this.day.format('MM DD YYYY').toString();
      if (!this.isEmpty(this.userinfo['datesWithIntervals'])) {
        if (this.userinfo['datesWithIntervals'][this.curDayFormatted]) {
          this.intervals = this.userinfo['datesWithIntervals'][this.curDayFormatted];
        } else {
          this.intervals = [];
        }
      }
      if (this.intervals.length !== 0) {
        this.intervals = this.intervals.sort(function(a, b) {
          return moment(a['from']) - moment(b['from'])
        })
      }
      this.weekly = false;
      this.weeklyType = false;
    },
    refreshIntervals() {
      db.collection('users').doc(this.id).get()
        .then(doc => {
          this.userinfo = doc.data();
        })
        .then(doc => {
          this.getIntervals()
        })
    },
    //populate list of date ranges
    weeklyDateRange(date_from, numWeek = 0) {
      if (numWeek === this.numRangesInList) {
        this.getDatesWithinARange();
        // return;
      } else {
        //if nothing is passed in as date_from, assume we are on the current week and use the first day of this week
        var curDate = date_from ? date_from : moment();
        //get the first day of the current week (the first day of this week if on first load)
        var from = curDate.clone().startOf('week').format('ddd MMM D YYYY');
        //set the first day of the week range
        var fromObj = { 'from': from };
        //get the last day of cur week
        var to = curDate.clone().endOf('week');
        //get the next range's from date
        var dayAfterEndOfWeek = to.clone().add(1, 'day');
        //save the last day of the cur week and format it to match "from"
        to = to.format('ddd MMM D YYYY');
        //set the last day of the week
        fromObj['to'] = to;
        //set the text to display as the cur week's range
        fromObj['text'] = moment(fromObj['from']).format('ddd MMM D') + ' - ' + moment(fromObj['to']).format('ddd MMM D');
        //set the default selection to the current week on first load
        if (numWeek === 0) {
          this.range = fromObj;
        }
        //add this range to the list of ranges
        this.ranges.push(fromObj);
        //repeat until have created # ranges desired in list specified in numRangesInList (1 month's worth of dates for the provider to schedule is default)
        return this.weeklyDateRange(dayAfterEndOfWeek, numWeek + 1);
      }
    },
    //populate list of indiv days that are in the current date range
    getDatesWithinARange() {
      var today = moment().format('ddd MMM D YYYY');
      var cur = this.range.from;
      cur = moment(cur).clone();
      var end = this.range.to;
      end = moment(end).clone();
      var days = [];
      var day = "";
      var count = 0;
      while (cur.isSameOrBefore(end)) {
        var newDay = cur.clone();
        newDay.text = moment(newDay).format('ddd MMM D');
        if (cur.isBefore(today)) {
          newDay.disabled = true;
          //after we disable all the days within the range that are BEFORE today, we will either reach the first day of the range, or today's actual date, and that will become the current displayed day
        } else {
          if (count === 0) {
            //set this.day as either the first day of the range, or today if we are on the current week, so it is the default day we are showing intervals of
            //makes the second drop down day displayed this date
            this.day = newDay;
            count++; //increase the count because we only need to set this.day to today on first load. when user picks a diff day from the dropdown, this.day will change to whatever day user selects
          }
        }
        //populate the second dropdown with each day within the weeks range
        days.push(newDay);
        cur = cur.add(1, 'days')
      }
      this.days = days;
      this.getIntervals();
      this.clearFromAndTo()
    },
    addNewInterval() {
      var fromString = this.curFrom.timeString;
      var toString = this.curTo.timeString;
      var curTime = new moment().format("HH:mm").toString();
      var fromDay = moment(this.day).date(); //ie. the NUMBER 26
      var todayDay = moment().date(); //ie. returns a number similar to how fromDay does
      var fromTimeSameAsToTime = fromString === toString;
      var conflictsWithExistingIntervals;

      //scenarios in which the interval is not valid:

      //user leaves one or both inputs empty
      if (!fromString || !toString) {
        alert("Please enter a From time and a To time") //works
        return;
      }

      //user selects a fromTime on today's date that is earlier than the current time
      if (fromDay === todayDay) {
        if (fromString < curTime) {
          alert("Please enter a time interval that occurs after the current time") //works
          return;
        }
      }

      //user selects a fromTime that is after the toTime
      if (fromString > toString) {
        alert("Please enter a From time that is before the To time") //works
        return;
      }

      //user selects an interval where the fromTime is the same as the toTime
      if (fromTimeSameAsToTime) {
        alert("Please enter a From time that is not the same as the To time") //works
        return;
      }

      //get user's userinfo to compare input to existing intervals on the current date, if there are none, can update the user's datesWithIntervals

      db.collection('users').doc(this.id).get()
        .then(doc => {
          this.userinfo = doc.data();
          //if intervals exist for this user on the current date, iterate through them and test further conditionals
          var arrayOfIntervals = this.userinfo.datesWithIntervals[this.curDayFormatted];
          if (arrayOfIntervals) {
            //check if the cur interval
            for (var i = 0; i < arrayOfIntervals.length; i++) {
              var fromTime = arrayOfIntervals[i]['from'];
              var toTime = arrayOfIntervals[i]['to'];
              //user selects an interval that already exists for that date
              if (fromString === fromTime && toString === toTime) {
                alert("This interval already exists. Please enter a new interval.");
                return true;
                // if the from input is between the existing interval (not including the end value)
                // OR if the to time input is between the existing interval not including the start value
              }
              ///user selects an interval where the fromTime is within an existing interval
              if (fromString >= fromTime && fromString < toTime) {
                alert("The From time is within an existing interval. Please add a valid interval.");
                return true;
              }
              ///user selects an interval where the toTime is within an existing interval
              if (toString <= toTime && toString >= fromTime) {
                alert("The From time is within an existing interval. Please add a valid interval.");
                return true;
              }
            }
          }
          return false;
        }).then(conflictsExist => {
          //if there are conflicts with existing intervals, do not update user's datesWithIntervals
          if (conflictsExist) {
            return;
          } else {
            //if there are no conflicts with existing intervals and the request was successful, check weekly group checkbox
            var weeklyString = this.weeklyMinutes;

            // moment(timeString, 'hh:mm a').format('HH:mm').toString()

            var fromTimePlusWeeklyString = moment(fromString, 'HH:mm');
            var newString = moment(fromTimePlusWeeklyString).add(this.weeklyMinutesNum, 'minutes');
            var newFormatted = newString.format('HH:mm')

            // user checks the checkbox and the duration of the interval matches the required length of time for weekly group sessions, update the user's datesWithInterval
            if (this.weekly && newFormatted === toString) {

              //if passes all above conditions, update the user's datesWithWeeklyGroups and datesWithIntervals
              db.collection('users').doc(this.id).update({
                  //create this as a weekly group slot
                  ['datesWithWeeklyGroups. ' + this.curDayFormatted]: firebase.firestore.FieldValue.arrayUnion({ 'from': fromString, 'to': toString, 'type': this.weeklyType }),
                  ['datesWithIntervals.' + this.curDayFormatted]: firebase.firestore.FieldValue.arrayUnion({ 'from': fromString, 'to': toString, 'weeklyGroup': true, 'weeklyType': this.weeklyType })
                })
                .then(doc => {
                  //then refresh the intervals to include the new interval
                  this.refreshIntervals();
                  alert("Your interval has been successfully added to both datesWithIntervals and datesWithWeeklyGroups")
                  this.clearFromAndTo()
                  return;
                }).catch(err => {
                  alert("There was the following error when trying to update the user's datesWithWeeklyGroups and datesWithIntervals")
                  return;
                })

            } else if (this.weekly && newFormatted !== toString) {
              alert('Weekly groups must be ' + this.weeklyMinutesNum + "minutes")
              return;
              //if user does not click the weekly group checkbox, update only their datesWithIntervals
            } else if (!this.weekly) {
              db.collection('users').doc(this.id).update({
                  ['datesWithIntervals.' + this.curDayFormatted]: firebase.firestore.FieldValue.arrayUnion({ 'from': fromString, 'to': toString, 'weeklyGroup': false })
                })
                .then(doc => {
                  //then refresh the intervals to include the new interval
                  this.refreshIntervals();
                  alert("Your interval has been successfully added to only datesWithIntervals")
                  this.clearFromAndTo()
                }).catch(err => {
                  alert("There was an error when trying to update datesWithIntervals")
                  return;
                })
            } else {
              alert("Whoops! There is an unknown issue with the time interval you entered. Please try again.")
            }
          }
        })
        .catch(err => {
          alert("There was the following error when trying to fetch the user's userinfo: " + err);
          return;
        })
    },
    deleteInterval(interval) {
      db.collection('users').doc(this.id).update({
        ['datesWithIntervals.' + this.curDayFormatted]: firebase.firestore.FieldValue.arrayRemove({ 'from': interval.from, 'to': interval.to, 'weeklyGroup': interval.weeklyGroup, 'weeklyType': interval.weeklyType })
      }).then(doc => {
        //then refresh the intervals to include the new interval
        alert("Your interval has been successfully removed")
        this.clearFromAndTo()
        this.refreshIntervals();
      })
    },
    saveFrom(time, timeString) {
      var timeStringToMilitary = moment(timeString, 'hh:mm a').format('HH:mm').toString();
      this.curFrom = {
        'time': time,
        'timeString': timeStringToMilitary
      }
    },
    saveTo(time, timeString) {
      var timeStringToMilitary = moment(timeString, 'hh:mm a').format('HH:mm').toString();
      this.curTo = {
        'time': time,
        'timeString': timeStringToMilitary
      }
    }
  }
}

</script>
<style lang="scss">
.v-list__tile__title {
  color: black!important;
}

.availability-container {
  width: 100vw;
  padding: 0 10px;
  .view-title {
    margin: 20px 0;
    span {
      color: black;
    }
    font-size: 1.3rem;
  }
  .currentIntervals {
    font-size: 20px;
    padding: 1em;
  }
  .outerTimePickerContainer {
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @include media-breakpoint-down(xs) {
    .currentIntervals {
      padding: 0;
      margin: 10px 0;
    }
    .outerTimePickerContainer {
      padding: 0;
      margin: 10px 0;
    }
  }
}
.slots {
  padding: 1em;
  font-size: small;

  span {
    color: black !important;
  }
}

.centered {
  margin: 0 auto;
  text-align: center;
}



.innerTimePickerContainer {
  display: inline;

  .timePickerBox {
    padding: 1em;
  }

  .fromToText {
    font-size: 20px;
  }
}
</style>
