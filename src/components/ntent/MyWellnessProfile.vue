<template>
  <div class="dashboard-page wellness-profile-page">
    <div class="page-title">
      My Wellenss Plan
    </div>
    <div class="page-content">
      <div class="row page-content__section my-ntension">
        <div class="sub-title my-ntension__title">
          My Ntension:
        </div>
        <div class="sub-content">
          <div class="download-group">
            <div class="download-title">My Wellenss Plan</div>
            <button class="btn btn-primary">Download</button>
          </div>
          <div class="download-group">
            <div class="download-title">My Plans</div>
            <button class="btn btn-primary">Download</button>
          </div>
        </div>
      </div>
      <div class="row page-content__section daily-strategies">
        <div class="col-12 col-md-6 section-col daily">
          <div class="sub-title">
            My Daily Info
          </div>
          <div class="sub-content">
            <ul class="section-list">
              <li><input type="checkbox" id="daily1"><label for="daily1">Some Daily Input Here</label></li>
              <li><input type="checkbox" id="daily2"><label for="daily2">Some Other Daily Input Here</label></li>
              <li><input type="checkbox" id="daily3"><label for="daily3">Another Daily Inpute Here</label></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 section-col strategies">
          <div class="sub-title">
            My Strategies
          </div>
          <div class="sub-content">
            <ul class="section-list">
              <li><input type="checkbox" id="strategic1"><label for="strategic1">Some Strategies Input Here</label></li>
              <li><input type="checkbox" id="strategic2"><label for="strategic2">Some Other Strategies Input Here</label></li>
              <li><input type="checkbox" id="strategic3"><label for="strategic3">Another Strategies Inpute Here</label></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row page-content__section health-mentors">
        <div class="sub-title">
          My Health Mentors
        </div>
        <div class="sub-content">
          <v-card v-for="mentor in mentors" :key="mentor.firstName" class="d-inline-block mx-auto health-mentors__item">
            <v-container>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-img
                    height="200"
                    width="200"
                    :src="mentor.img"
                  ></v-img>
                  <p class="display-1 text--primary">
                    {{ mentor.firstName }}
                  </p>
                </v-col>

                <v-col
                  cols="auto"
                  class="text-center pl-0"
                >
                  <v-row
                    class="flex-column ma-0 fill-height"
                    justify="center"
                  >
                    <v-col class="px-0">
                      <v-btn icon>
                        <div class="vuestic-icon"><span aria-hidden="true" class="vuestic-icon vuestic-icon-files"></span></div>
                      </v-btn>
                    </v-col>
                    <v-col class="px-0">
                      <v-btn icon>
                        <div class="vuestic-icon"><span aria-hidden="true" class="entypo entypo-mail"></span></div>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
      </div>
    </div>
    <vuestic-modal :show.sync="show" v-bind:large="true" ref="largeModal" :noButtons="true">
      <div slot="title">{{'modal.largeTitle' | translate}}</div>
      <div><span class="modal-text">
          There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra
          and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus
          Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more
          horse-like. All three belong to the genus Equus, along with other living equids.</span>
        <button class="wellness-form-download" v-on:click="downloadFile(saveData, 'https://raw.githubusercontent.com/johnculviner/jquery.fileDownload/master/src/Common/FileDownloadAttribute.cs')"><span class="modal-download-plan-button">DOWNLOAD</span></button><button v-on:click="closeModal()"><span class="modal-go-back-button">Go Back</span></button>
      </div>
    </vuestic-modal>
  </div>
</template>
<script>
import db from '../../firebaseInit'
import firebase from 'firebase'
import moment from 'moment'

export default {
  name: 'my-wellness-profile',
  computed: {

  },
  data() {
    return {
      show: true,
      isOpen: false,
      userinfo: {},
      user: {},
      dobhold: '',
      selectedFile: null,
      checkedStrategies: [],
      checkedNames: [],
      checkedDailies: [],
      mentors: [{ firstName: 'Angie', img: "https://www.huntersdream.com.au/wp-content/uploads/2018/10/person-dummy.jpg" }, { firstName: 'Marc', img: "https://www.huntersdream.com.au/wp-content/uploads/2018/10/person-dummy.jpg" }],
      strategies: [{ id: 1, text: "some strategy input here" }, { id: 2, text: "some other strategy input here" }, { id: 3, text: "another strategy for user to check off goes here" }],
      dailies: [{ id: 1, text: "some daily input here" }, { id: 2, text: "some other daily here" }, { id: 3, text: "another daily for user to check off goes here" }],

    }
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
    },
    showLargeModal() {
      this.$refs.largeModal.open()
    },
    closeModal() {
      this.$refs.largeModal.close();
    },
    showDailyModal() {
      this.$refs.dailyModal.open()
    },
    closeDailyModal() {
      this.$refs.dailyModal.close();
    },
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
  mounted() {
    this.showDailyModal()
  }
}

</script>
<style lang="scss">
/* Global Styles */
.modal-container {
  color: black;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dashboard-page {
  .row {
    margin: 0;
    .col-12, .col-md-6 {
      padding: 0;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: black;
  .page-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
  }
  .page-content {
    display: flex;
  }
  &.wellness-profile-page {
    .page-content {
      flex-direction: column;
      &__section {
        display: flex;
        flex-direction: column;
        .sub-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 10px 0;
        }
        .sub-content {
          padding: 0 0 0 20px;
        }

        &.my-ntension{
          display: flex;
          .sub-content {
            display: flex;
            .download-group {
              display: flex;
              align-items: center;
              .download-title {
                font-size: 1.3em;

              }
              button {
                padding: 1em 1em;
                font-size: 0.8rem;
                margin: 0 20px;
              }
            }
          }
        }
        &.daily-strategies {
          flex-direction: row;
          ul {
            li {
              margin: 10px 0;
              display: flex;
              align-items: center;
              input[type="checkbox"] {
                margin-right: 5px;

              }
              label {
                margin: 0;
                font-size: 1.2rem;
                line-height: 100%;
              }
            }
          }
        }
        &.health-mentors {
          .sub-content {
            display: flex;
            .health-mentors__item {
              max-width: 400px;
            }
          }
        }

      }
    }
  }

  @include media-breakpoint-down(sm) {
    padding: 10px;
    max-width: 100vw;
    overflow: hidden;
    .page-title {
      font-size: 2rem;
    }
    &.wellness-profile-page {
      .page-content {
        flex-direction: column;
        &__section {
          display: flex;
          flex-direction: column;
          .sub-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 10px 0;
          }
          .sub-content {
            padding: 0 0 0 20px;
          }

          &.my-ntension{
            display: flex;
            .sub-content {
              flex-direction: column;
              .download-group {
                justify-content: space-between;
                margin: 10px 0;
                .download-title {
                  font-size: 1.1em;

                }
                button {
                  padding: 1em 1em;
                  font-size: 0.8rem;
                  margin: 0 20px;
                }
              }
            }
          }
          &.daily-strategies {
            flex-direction: row;
            ul {
              li {
                margin: 10px 0;
                display: flex;
                align-items: center;
                input[type="checkbox"] {
                  margin-right: 5px;

                }
                label {
                  margin: 0;
                  font-size: 1.2rem;
                  line-height: 100%;
                }
              }
            }
          }
          &.health-mentors {
            .sub-content {
              display: flex;
              flex-direction: column;
              .health-mentors__item {
                max-width: 400px;
                margin: 10px;
              }
            }
          }

        }
      }
    }
  }
}

</style>
