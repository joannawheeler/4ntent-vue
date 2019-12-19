<template>
  <div class="scheduling-container">
    <h1 class="scheduling-title">Scheduling</h1>
    <p style="font-size: 10px; display: none;">
      {{ this.userinfo }}
    </p>
    <v-tabs class="scheduling-content" v-model="tab" :grow="grow">
      <v-tab v-for="i in tabLabels.length" :key="i" :href="`#tab-${i}`">{{ tabLabels[i] }}
      </v-tab>
      <v-tab-item v-for="i in tabLabels.length" :key="i" :value="'tab-' + i">
        <div v-if="tabLabels[i] === 'My Schedule' && userinfo.provider">
          <appointments v-bind:userinfo="userinfo" />
        </div>
        <div v-if="tabLabels[i] === 'My Availability'">
          <availability v-bind:userinfo="userinfo" />
        </div>
        <div v-if="tabLabels[i] === 'My Schedule' && !userinfo.provider">
          <user-appointments v-bind:userinfo="userinfo" />
        </div>
        <div v-if="tabLabels[i] === 'Book a Session'">
          <user-booking v-bind:userinfo="userinfo" />
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'
import Availability from './Availability'
import Appointments from './Appointments'
import UserBooking from './UserBooking'
import UserAppointments from './UserAppointments'

export default {
  name: 'mentor-availability-setter',
  components: {
    Availability,
    Appointments,
    UserBooking,
    UserAppointments
  },
  props: {

  },
  data: () => ({
    userinfo: {},
    // user: {},
    // id: "",
    // numRangesInList: 4,
    // ranges: [],
    // range: "",
    // day: "",
    // days: [],
    // fromTime: "", //moment object
    // curFrom: {},
    // toTime: "", //moment object
    // curTo: {},
    // intervals: [],
    // fromInput: "", //the text visually displayed in the from and to boxes as the user types
    // toInput: "", //the text visually displayed in the from and to boxes as the user types
    // curDayFormatted: "",
    tab: null,
// text: [null, "appointments", "availability"],

    grow: false,
    tabs: 3,
    tabLabels: [],
    labelsLoaded: false
  }),
  computed: {},
  created() {
    //authenticate user first
    this.user = firebase.auth().currentUser
    let use = this.$store.getters.getUser
    let user = use.user
    let id = user.uid;
    this.id = id;

    // this.fromInput = moment('00:00', 'HH:mm');
    // this.toInput = moment('00:00', 'HH:mm');
    //get userinfo and the existing intervals for the current day (default view to start, will change when user selects a different day)
    db.collection('users').doc(this.id).get()
      .then(doc => {
        this.userinfo = doc.data();
        return this.userinfo;
      })

    // .then(userinfo => {
    // this.weeklyDateRange();
    //   return userinfo;
    // })
    // .then(userinfo => {
    // this.getUserSchedules();
    // })

  },
  beforeUpdate() {
    this.getTabLabels();
  },
  methods: {
    moment,
    getTabLabels() {
      this.userinfo.provider ? this.tabLabels = [null, "My Schedule", "My Availability"] : this.tabLabels = [null, "My Schedule", "Book a Session"];
    },

    //   getUserSchedules() {
    //     for (var i = 0; i < this.userinfo.users.length; i++) {
    //       db.collection('users').doc(this.userinfo.users[i].id).get()
    //         .then(doc => {
    //           return doc.data();
    //         })
    //         .then(clientUserInfo => {
    //           clientUserInfo.datesWithIntervals
    //         })
    //     }
    //   },
    //   getIntervals(day) {
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
.accent {
  background-color: white !important;
  border-color: white !important;
}

.v-tabs__bar {
  background-color: transparent !important;
  .v-tabs__div {
    max-width: 400px;
    color: white!important;
    a {
      text-decoration: none;
      &:hover {
        color: white;
        font-weight: 600;
      }
      &:not([href]):not([tabindex]) {
        font-size: 30px;
        color: white;
        font-weight: 600;
      }
    }
  }
}

.scheduling-container {
  color: $almost-black;
  flex-grow: 1;
  display: block;
  .scheduling-title {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    color: white;
    line-height: 100%;
  }
  .scheduling-content {
    flex: 1;
    width: 100%;
  }
  @include media-breakpoint-down(xs) {
    .scheduling-title {
      font-size: 2rem;
      font-weight: 400;
    }
    .scheduling-content {
    }
  }
}



#users {
  list-style: none;
}


.v-list--disabled>a>div>div {
  color: lightgray !important;
}

.centered {
  margin: 0 auto;
  text-align: center;
}
</style>
