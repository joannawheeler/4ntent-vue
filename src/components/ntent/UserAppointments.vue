<template>
  <div>
    <vuestic-modal :show.sync="show" okText="Back" cancelText="Cancel Appointment" ref="modal" :onOk="onOk" v-bind:large="true">
      <div slot="title">
        {{ this.modalOpen ? this.setModalTitle() : "" }}
      </div>
      <div class="row modalInnerTextContainer justify-content-center">
        <div class="col-4">
          <div class="modalInnerText">
            <p>From: {{this.modalOpen ? moment(this.curItem.from).format('h:mm a') : ""}}</p>
            <p>To: {{this.modalOpen ? moment(this.curItem.to).format('h:mm a') : ""}}</p>
            <p>With:{{this.modalOpen ? this.curItem.user.firstName + ' ' + this.curItem.user.lastName : ""}}</p>
            <p>Purpose: {{this.modalOpen ? this.curItem.purpose : ""}}</p>
          </div>
        </div>
      </div>
    </vuestic-modal>
    <a-calendar @change="onChange" :value="value" @select="onSelect" :validRange="[moment(), moment().add(3, 'month')]">
      <!--  -->
      <ul class="events" slot="dateCellRender" slot-scope="value">
        <li style="color: black !important" v-for="item in getListData(value)" :key="item.purpose">
          <a-badge v-on:click="getItemInfo(item)" style="color: black !important" status="success" :text="moment(item.to).format('h:mm a') + ' - ' + moment(item.from).format('h:mm a')" />
        </li>
      </ul>
    </a-calendar>
  </div>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'

export default {
  name: 'user-appointments',
  components: {},
  props: {},
  data: () => ({
    id: null,
    userinfo: {},
    user: {},
    // numRangesInList: 4,
    // ranges: [],
    // range: "",
    // day: "",
    // days: [],
    // curFrom: {},
    // curTo: {},
    // intervals: [],
    // curDayFormatted: "",
    apptsByDate: {},
    show: true,
    curItem: null,
    curDate: moment(),
    modalOpen: false,
    // defaultValue: moment(),
    value: moment()
  }),
  created() {
    //authenticate user first
    this.user = firebase.auth().currentUser
    let use = this.$store.getters.getUser
    let user = use.user
    let id = user.uid;
    this.id = id;
    this.getUserInfo();
  },
  computed: {
    //
  },
  methods: {

    moment,
    onChange(value) {
      value = moment(value).set('date', 1);
      this.value = value;
    },
    setDefaultValue() {
      if (this.curItem === null) {
        return moment();
      } else {

        return this.curDate;
      }
    },

    setModalTitle() {
      return moment(this.curDate).format('MMMM D, YYYY')
    },
    cancelAppt() {

    },
    showModal() {
      this.modalOpen = true;
      this.$refs.modal.open()
    },
    closeModal() {
      //check if all inputs have been completed
      //if yes, send answers to user's daily check in table
      //and set completedDailyCheckIn: true
      this.curItem = null;
      this.curDate = null;
      this.modalOpen = false;
      this.$refs.modal.close();
    },
    onOk() {
      this.closeModal();
    },
    onSelect(date, item) {
      this.curDate = date;
      this.value = date;
    },
    getItemInfo(item) {
      this.curItem = item;

      this.showModal();

    },
    getUserInfo() {
      db.collection('users').doc(this.id).get()
        .then(doc => {
          this.userinfo = doc.data();
          this.apptsByDate = this.userinfo.apptsByDate;
        })
    },
    getListData(value) {
      //convert value to the format of the dates saved in db
      var formattedDate = moment(value).format('MM DD YYYY').toString();
      if (this.apptsByDate[formattedDate]) {
        return this.apptsByDate[formattedDate];
      }
    }
  }
}

</script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}

.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}


.modalInnerText {
  text-align: left;
  font-size: 20px;
}

</style>
