<template>
  <div class="wellness-plan-container">
    <div class="my-wellness-plan-widg all-widg">
      <div class="page-title">
        <h2>My Wellness Plan</h2>
      </div>
      <div class="plans">
        <div class="plans__item">My Plan Deatil</div>
        <div class="plans__item">My Plan Deatil</div>
        <div class="plans__item">My Plan Deatil</div>
        <div class="plans__item">My Plan Deatil</div>
        <div class="plans__item">My Plan Deatil</div>
        <div class="plans__item">My Plan Deatil</div>
        <div class="plans__item">My Plan Deatil</div>
        <div class="plans__item">My Plan Deatil</div>
        <div class="plans__item">My Plan Deatil</div>
        <div class="plans__item">My Plan Deatil</div>
      </div>
      <div class="page-action">
        <button class="btn btn-primary" v-on:click="downloadFile(saveData, 'https://raw.githubusercontent.com/johnculviner/jquery.fileDownload/master/src/Common/FileDownloadAttribute.cs')"><span>DOWNLOAD</span></button>
      </div>
    </div>
  </div>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'

export default {
  name: 'my-wellness-plan',
  components: {

  },
  data() {
    return {
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      userinfo: {},
      user: {},
      // dobhold: '',
      selectedFile: null
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
        // this.dobhold = moment.unix(doc.data().DOB).format('MM-DD-YYYY')
      })
    // this.$nextTick(() => {
    //   this.$validator.validateAll()
    // })


    // if (this.userinfo.subscriptions.curSubscription.tier === 'passion') {
    //   //1 weekly group * number of weeks purchased


    //   //need to input code here that adds any add-ons purchased


    // } else if (this.userinfo.tier === 'purpose') {
    //   //1 weekly group * number of weeks purchased
    //   //1 individual appointment every 4 weeks

    //   //need to input code here that adds any add-ons purchased

    // } else if (this.tier === 'empower') {
    //   //1 weekly group * number of weeks purchased
    //   //1 individual appointment every 4 weeks

    //   //need to input code here that adds any add-ons purchased
    // }

  },
  computed: {

  },
  methods: {
    saveData(blob, fileName) // does the same as FileSaver.js
    {
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";

      var url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    },

    downloadFile(saveData, requestURL) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", requestURL);
      xhr.responseType = "blob";

      xhr.onload = function() {
        saveData(this.response, 'filename');
      };
      xhr.send();
    }
  },
}

</script>
<style lang="scss">
.wellness-plan-container {
  color: black;
  font-family: Open Sans, sans-serif;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 0 20px 0;
  .page-title {
    h2 {
      color: white;
    }
  }

  .plans {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__item {
      margin: 10px 0;
      font-size: 1.3rem;
      line-height: 110%;
      text-align: center;
    }
  }
  .page-action {
    display: flex;
    justify-content: center;
    button {
      font-size: 1rem;
      padding: 10px 20px;
    }
  }
}
</style>
