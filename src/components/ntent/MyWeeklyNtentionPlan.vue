<template>
  <div>
    <!-- <button class="btn" v-on:click="downloadFile(saveData, require('../../assets/docs/weekly-ntention-plan.pdf'))"><span>DOWNLOAD</span></button> -->
    <!-- <pdf :src="require('../../assets/docs/weekly-ntention-plan.pdf')"></pdf> -->
    <!-- <div class="wellness-plan-container">
  <div class="center container-fluid" style="height: 100%; width: 100%">
    <div class="row no-gutters my-wellness-plan-row">
      <div class="col text-center">
        <div class="widg-container my-wellness-plan-widg-container">
          <vuestic-widget class="my-wellness-plan-widg all-widg">
            <h2>My Wellness Plan</h2>
            <p>some text here</p>
            <p>some text here</p>
            <p>some text here</p>
            <p>some text here</p>
            <p>some text here</p>
            <p>some text here</p>
            <p>some text here</p>
            <p>some text here</p>
            <p>some text here</p>
            <button class="btn" v-on:click="downloadFile(saveData, 'https://raw.githubusercontent.com/johnculviner/jquery.fileDownload/master/src/Common/FileDownloadAttribute.cs')"><span>DOWNLOAD</span></button>
          </vuestic-widget>
        </div>
      </div>
    </div>
  </div>
</div>
 -->
  </div>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'
// import pdf from 'vue-pdf'

export default {
  name: 'my-weekly-ntention-plan',
  components: {
    // pdf
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
  }
  // computed: {

  // },
  // data() {
  //   return {
  //     active: null,
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     userinfo: {},
  //     user: {},
  //     dobhold: '',
  //     selectedFile: null
  //   }
  // },
  // methods: {
  //   saveData(blob, fileName) // does the same as FileSaver.js
  //   {
  //     var a = document.createElement("a");
  //     document.body.appendChild(a);
  //     a.style = "display: none";

  //     var url = window.URL.createObjectURL(blob);
  //     a.href = url;
  //     a.download = fileName;
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //   },

  //   downloadFile(saveData, requestURL) {
  //     var xhr = new XMLHttpRequest();
  //     xhr.open("GET", requestURL);
  //     xhr.responseType = "blob";

  //     xhr.onload = function() {
  //       saveData(this.response, 'filename');
  //     };
  //     xhr.send();
  //   }
  // },
  // created() {
  //   //authenticate user first
  //   this.user = firebase.auth().currentUser
  //   let use = this.$store.getters.getUser
  //   let user = use.user
  //   let id = user.uid
  //   db.collection('users').doc(id).get()
  //     .then(doc => {
  //       this.userinfo = doc.data()
  //       this.dobhold = moment.unix(doc.data().DOB).format('MM-DD-YYYY')
  //     })
  //   this.$nextTick(() => {
  //     this.$validator.validateAll()
  //   })
  // },
}

</script>
<style lang="scss">
.wellness-plan-container {
  color: black;
  font-family: Open Sans, sans-serif;
}


.my-wellness-plan-widg {
  h2 {
    padding-bottom: 1em;
    margin: 0;
  }

  p {
    text-align: left;
  }
}

</style>
