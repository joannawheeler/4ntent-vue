<template>
  <div class="availability-container">
<!-- <p style="font-size: 20px">
  {{ this.userinfo }}
</p>
 -->
    <calendar v-bind:userinfo="userinfo" />
    <!-- <div class="row no-gutters">
      <div class="col-xs-12 centered">
        <v-select class="my-2" v-model="range" :items="ranges" target="#dropdown-example" return-object v-on:change="getDatesWithinARange"></v-select>
        <v-select class="my-2" :disabled="day.disabled" v-model="day" :items="days" target="#dropdown-example" return-object v-on:change="getIntervals"></v-select>
        <div class="currentIntervals" v-for="interval in intervals" v-if="">
          {{ moment(interval['from']).format("h:mm a") + " - " + moment(interval['to']).format("h:mm a") }}
        </div>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-xs-12 centered">
        <div class="outerTimePickerContainer">
          <div class="innerTimePickerContainer">
            <span class="fromToText">From</span>
            <span class="timePickerBox">
              <a-time-picker use12Hours size="large" v-model="fromInput" format="h:mm a" :minuteStep="15" :defaultOpenValue="moment('0:00', 'h:mm a')" @change="saveFrom" /></span>
          </div>
          <div class="innerTimePickerContainer">
            <span class="fromToText">To</span>
            <span class="timePickerBox">
              <a-time-picker use12Hours size="large" v-model="toInput" format="h:mm a" :minuteStep="15" :defaultOpenValue="moment('0:00', 'h:mm a')" @change="saveTo" /></span>
          </div>
          <v-btn rounded color="primary" v-on:click="addNewInterval" dark>Add</v-btn>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'
import Calendar from './Calendar'

export default {
  name: 'appointments',
  components: {
    Calendar
  },
  props: {
    userinfo: {}
  },
  data: () => ({
    user: {},
    numRangesInList: 4,
    ranges: [],
    range: "",
    day: "",
    days: [],
    curFrom: {},
    curTo: {},
    intervals: [],
    curDayFormatted: "",
    count: 0
    // tab: null,
    // text: [null, "hi", "hello", "Bye"],
    // grow: false,
    // tabs: 3,
    // tabLabels: [null, "Appointments", "Availability", "Clients"]
  }),
  computed: {},
  created() {
    //get userinfo and the existing intervals for the current day (default view to start, will change when user selects a different day)
    // db.collection('users').doc(this.id).get()
    //   .then(doc => {
    //     this.userinfo = doc.data();
    //     console.log(this.userinfo)
    //   })
    //   .then(doc => {
    // })

  },
  methods: {
    moment
    // getIntervals(day) {
    //     if (day) {
    //       this.day = day;
    //     }
    //     this.curDayFormatted = this.day.format('MM DD YYYY').toString();
    //     // this.userinfoCopy = this.userinfo;
    //     this.intervals = this.userinfo['datesWithIntervals'][this.curDayFormatted] || [];

    //     if (this.intervals) {
    //       this.intervals = this.intervals.sort(function(a, b) {
    //         return moment(a['from']) - moment(b['from'])
    //       })
    //     }
    //     // console.log(this.intervals)
    //     this.fromInput = "";
    //     this.toInput = "";
    //     this.curFrom = "";
    //     this.curTo = ""
    //   },
    //   refreshIntervals() {
    //     db.collection('users').doc(this.id).get()
    //       .then(doc => {
    //         this.userinfo = doc.data();
    //       })
    //       .then(doc => {
    //         this.getIntervals()
    //       })
    //   },
    //   //populate list of date ranges
    //   weeklyDateRange(date_from, numWeek = 0) {

    //     if (numWeek === this.numRangesInList) {
    //       this.getDatesWithinARange();
    //       return;
    //     } else {
    //       //if nothing is passed in as date_from, assume we are on the current week and use the first day of this week
    //       var curDate = date_from ? date_from : moment();
    //       //get the first day of the current week (the first day of this week if on first load)
    //       var from = curDate.clone().startOf('week').format('ddd MMM D YYYY');
    //       //set the first day of the week range
    //       var fromObj = { 'from': from };
    //       //get the last day of cur week
    //       var to = curDate.clone().endOf('week');
    //       //get the next range's from date
    //       var dayAfterEndOfWeek = to.clone().add(1, 'day');
    //       //save the last day of the cur week and format it to match "from"
    //       to = to.format('ddd MMM D YYYY');
    //       //set the last day of the week
    //       fromObj['to'] = to;
    //       //set the text to display as the cur week's range
    //       fromObj['text'] = moment(fromObj['from']).format('ddd MMM D') + ' - ' + moment(fromObj['to']).format('ddd MMM D');
    //       //set the default selection to the current week on first load
    //       if (numWeek === 0) {
    //         this.range = fromObj;
    //       }
    //       //add this range to the list of ranges
    //       this.ranges.push(fromObj);
    //       //repeat until have created # ranges desired in list specified in numRangesInList (1 month's worth of dates for the provider to schedule is default)
    //       return this.weeklyDateRange(dayAfterEndOfWeek, numWeek + 1);
    //     }
    //   },
    //   //populate list of indiv days that are in the current date range
    //   getDatesWithinARange() {
    //     var today = moment().format('ddd MMM D YYYY');
    //     var cur = this.range.from;
    //     cur = moment(cur).clone();
    //     var end = this.range.to;
    //     end = moment(end).clone();
    //     var days = [];
    //     var day = "";
    //     var count = 0;
    //     while (cur.isSameOrBefore(end)) {
    //       var newDay = cur.clone();
    //       newDay.text = moment(newDay).format('ddd MMM D');
    //       if (cur.isBefore(today)) {
    //         newDay.disabled = true;
    //         //after we disable all the days within the range that are BEFORE today, we will either reach the first day of the range, or today's actual date, and that will become the current displayed day
    //       } else {
    //         if (count === 0) {
    //           //set this.day as either the first day of the range, or today if we are on the current week, so it is the default day we are showing intervals of
    //           //makes the second drop down day displayed this date
    //           this.day = newDay;
    //           count++; //increase the count because we only need to set this.day to today on first load. when user picks a diff day from the dropdown, this.day will change to whatever day user selects
    //         }
    //       }
    //       //populate the second dropdown with each day within the weeks range
    //       days.push(newDay);
    //       cur = cur.add(1, 'days')
    //     }

    //     this.days = days;
    //     this.getIntervals();
    //     // this.curFrom = "";
    //     // this.curTo = "";
    //     // this.fromInput = "";
    //     // this.toInput = "";


    //   },
    //   addNewInterval() {
    //     // console.log(moment(this.curFrom))
    //     // console.log(moment(this.curTo))
    //     this.curFrom = moment(this.curFrom).format();
    //     this.curTo = moment(this.curTo).format();
    //     var fromDay = moment(this.curFrom).format('DD');
    //     // console.log(fromDay)
    //     var fromTimeFormatted = moment(this.curFrom).format('hh:mm')
    //     var toTimeFormatted = moment(this.curTo).format('hh:mm')
    //     //if the user has entered a from time and a to time
    //     if (this.curFrom && this.curTo) {
    //       //and if the from time is before the to time
    //       if (moment(this.curFrom).isBefore(moment(this.curTo))) {

    //         //check the user's existing intervals for errors
    //         db.collection('users').doc(this.id).get()
    //           .then(doc => {
    //             this.userinfo = doc.data();
    //             //if there are intervals for this date
    //             if (this.userinfo.datesWithIntervals[this.curDayFormatted]) {
    //               var arrayOfIntervals = this.userinfo.datesWithIntervals[this.curDayFormatted];
    //               //check if the cur interval
    //               for (var i = 0; i < arrayOfIntervals.length; i++) {
    //                 var fromTime = arrayOfIntervals[i]['from'];
    //                 var toTime = arrayOfIntervals[i]['to'];
    //                 // var test = this.curFrom;
    //                 //if the from time and to time interval already exists, throw error
    //                 if (moment(this.curFrom).isSame(fromTime) && moment(this.curTo).isSame(toTime)) {
    //                   alert("This interval already exists! Please enter a new interval");
    //                   return;
    //                   // if the from input is between the existing interval (not including the end value)
    //                   // OR if the to time input is between the existing interval not including the start value
    //                 } else if (moment(this.curFrom).isBetween(fromTime, toTime, 'minute', '[)') || moment(this.curTo).isBetween(fromTime, toTime, 'minute', '(]')) {
    //                   alert("This interval conflicts with a previously saved interval. Please change your interval's start and end time or delete the conflicting previously saved interval.")
    //                   return;
    //                 }
    //               }
    //             }
    //             //if neither interval prev exists nor does it conflict w an existing interval, add this interval to the cur day's array of intervals
    //             db.collection('users').doc(this.id).update({
    //                 ['datesWithIntervals.' + this.curDayFormatted]: firebase.firestore.FieldValue.arrayUnion({ 'from': this.curFrom, 'to': this.curTo })
    //               })
    //               .then(doc => {
    //                 //then refresh the intervals to include the new interval
    //                 this.refreshIntervals();
    //                 alert("your interval has been successfully added")
    //               })
    //           })
    //         //if from time is same as to time, throw error
    //       } else if (fromTimeFormatted === toTimeFormatted) {
    //         alert("Whoops! Intervals must have different start and end times. Please enter a valid time interval.")
    //         //if the from time is before the to time, throw error
    //       } else if (moment(this.curFrom).isAfter(moment(this.curTo))) {
    //         alert("Whoops! A time interval's start time must be before it's end time. Please enter a valid time interval.")
    //         //if the day we are creating an interval for is the current day, and the from time is before the current time, throw error
    //       } else if (moment(fromDay).isSame(moment().format('DD')) && moment(fromTimeFormatted).isBefore(moment().format("HH:MM"))) {
    //         alert("Whoops! It appears the time interval you have selected has already passed! Please enter a valid time interval.")
    //       } else {
    //         alert("Whoops! There is an issue with the time interval you entered. Please try again.")

    //       }
    //       //if they didnt enter anything for either the from time or to time
    //     } else if (!moment(this.curFrom) || !moment(this.curTo)) {
    //       alert("Whoops! Intervals must have a start time and an end time. Please enter a valid time interval.")
    //     } else {
    //       alert("Whoops! There is an issue with the time interval you entered. Please try again.")
    //     }
    //   },
    //   removeInterval() {
    //     db.collection('users').doc(this.id).update({

    //       ['datesWithIntervals.' + this.curDayFormatted]: firebase.firestore.FieldValue.arrayRemove({ 'from': moment(this.curFrom).format(), 'to': moment(this.curTo).format() })
    //     }).then(doc => {
    //       //then refresh the intervals to include the new interval
    //       this.refreshIntervals();
    //       alert("your interval has been successfully removed")
    //     })
    //   },
    //   saveFrom(time, timeString) {
    //     // console.log(time)
    //     // console.log(timeString)
    //     this.curFrom = time; // ex: 1568224800000
    //     // console.log(this.curFrom)
    //   },
    //   saveTo(time, timeString) {
    //     this.curTo = time; //ex: 1568224800000
    //   },
    //   checkIfValidInterval(from, to) {}
  }
}

</script>
<style lang="scss">
// .accent {
//   background-color: white !important;
//   border-color: white !important;
// }

// .v-tabs__div {
//   max-width: 400px;

//   a:not([href]):not([tabindex]) {
//     font-size: 30px;
//     color: $almost-black;

//   }
// }


// .v-tabs__bar {
//   background-color: transparent !important;
// }

// .scheduling-container {
//   color: $almost-black;
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 2%;
//   text-align: center;
// }


// .scheduling-title {
//   text-align: center;
//   font-size: $scheduling-title;
// }

// #users {
//   list-style: none;
// }


// .v-list__tile__title {
//   color: black !important;
// }

// .v-list--disabled>a>div>div {
//   color: lightgray !important;
// }


.centered {
  margin: 0 auto;
  text-align: center;
}

.outerTimePickerContainer {
  padding: 2em;
}

.innerTimePickerContainer {
  padding: 1em;
  display: inline;

  .timePickerBox {
    padding: 1em;
  }

  .fromToText {
    font-size: 20px;
  }
}

.currentIntervals {
  font-size: 20px;
  padding: 1em;
}

.my-2 {
  color: white !important;
}
</style>
