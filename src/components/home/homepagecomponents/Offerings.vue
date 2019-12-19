<template>
  <div class="entire-section">
    <div class="row no-gutters titleholder">
      <div class="col-12">
        <h1 class="our-offerings-header-text mont"><span class="mont">What We Offer</span>
        </h1>
        <p class="what-we-offer-subheader">4NTENT has created a virtual collaboration of health mentors with expertise in nutrition, personal training, behavior modification, and lifestyle change.</p>
      </div>
    </div>
    <div class="offerings">
      <div class="row all-offering-containers">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="offering-container">
            <img class="containerpho icon" :src='require("../../../assets/images/mod4community.png")' />
            <h4 class="offeringtitles com-title">Community</h4>
            <p class="offeringp">
              Our fitness, nutrition, and lifestyle mentors will collaborate together on your customized wellness plan.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="offering-container">
            <img class="containerpho icon" :src='require("../../../assets/images/mod4interactiveplatform.png")' />
            <h4 class="offeringtitles">Interactive Platform</h4>
            <p class="offeringp">
              Engage, journal, track to stay on top of your wellness goals and impact on social causes. Direct connection to your community of peers and health mentors. </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="offering-container">
            <img class="containerpho icon" :src='require("../../../assets/images/mod4virtualaccess.png")' />
            <h4 class="offeringtitles">Convenient Virtual Access</h4>
            <p class="offeringp">
              Connect from the comfort of your own home or office direct to our virtual group and 1:1 meetings.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="offering-container">
            <img class="containerpho social-icon icon" :src='require("../../../assets/images/mod4socialchange.png")' />
            <h4 class="offeringtitles socialTitle">Activate Social Change</h4>
            <p class="offeringp">
              Discover and align with causes that matter to you and begin living a life of NTENTION.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'offerings',
  components: {},
  data() {
    return {}
  },
  methods: {
    gotoassess: function() {}
  },
  created() {},
  firestore() {
    return {}
  }
}

</script>
<style lang="scss" scoped>
// light blue-#05ebd8
// darkblue-#001b65 midblue-#1f82e5
.entire-section {

  color: #1f82e5; // color: black;
  padding: 6% 4% 3% 4%;
  background: white;



  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {
    padding: 10% 4% 8% 4%;
  }
}


.our-offerings-header-text {
  padding: 0em 0em .2em 0em;
  text-align: center;
  // color: #001b65;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}

.our-offerings-header-text span {}


.what-we-offer-subheader {
  // color: #001b65;
  padding: 1% 17% 5% 17%;
  text-align: center;
  opacity: .9;
  font-size: 1.5vw;
  line-height: 2.2vw;
  color: #696773;

  @include media-breakpoint-down(lg) {
    padding: 3% 7%;
    font-size: 2vw;
    line-height: 2.75vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 2.25vw;
    line-height: 3.25vw;
    padding: 3% 8%;
  }

  @include media-breakpoint-down(sm) {
    font-size: 3.25vw;
    line-height: 4.5vw;
    padding: 3% 7%;
  }

  @include media-breakpoint-down(xs) {
    font-size: 4vw;
    line-height: 5vw;
    padding: 3% 4%;
  }
}

.offerings {
  padding: 2% 0%;

  @include media-breakpoint-down(lg) {
    padding: 2% 0%;
  }

  @include media-breakpoint-down(md) {
    padding: 2% 0%;
  }

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}

//outer container for entire row (that stacks into multiple rows) of all icon + title + paras inner containers
.all-offering-containers {
  padding-top: 0px;
  padding-bottom: 0;
  padding-left: 8%;
  padding-right: 8%;

  @include media-breakpoint-down(lg) {
    padding-left: 8%;
    padding-right: 8%;
  }

  @include media-breakpoint-down(md) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @include media-breakpoint-down(sm) {
    padding-left: 3%;
    padding-right: 3%;
  }

  @include media-breakpoint-down(xs) {
    padding-left: 1%;
    padding-right: 1%;

  }
}

//inner containers for each indiv offering icon + title + para
.offering-container {
  padding: 7%;

  @include media-breakpoint-down(lg) {
    padding: 5%;
  }

  @include media-breakpoint-down(md) {
    padding: 5%;
  }

  @include media-breakpoint-down(sm) {
    padding: 5%;
  }

  @include media-breakpoint-down(xs) {
    padding: 5%;
  }
}


.offeringtitles {
  text-align: center;
  padding: .2em .5em .2em .5em;
  font-size: 2.5vw;
  // color: #001b65;
  font-family: 'Open Sans', sans serif;
  font-weight: 600;


  @include media-breakpoint-down(lg) {
    font-size: 2.75vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 3.5vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 5.25vw;
  }

  @include media-breakpoint-down(xs) {
    font-size: 6vw;
  }
}

//offering paragraphs
.offeringp {
  text-align: center;
  font-size: 1.8vw;
  color: #696773;
  // opacity: .7;

  @include media-breakpoint-down(lg) {
    font-size: 2.1vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 2.5vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 3.4vw;
  }

  @include media-breakpoint-down(xs) {
    font-size: 4.5vw;
  }
}


//cartoon images
.containerpho {
  width: 30%;
  height: 30%;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4%;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}

//indiv cartoon images
.icon {
  height: 145px;
  width: auto;

  @include media-breakpoint-down(lg) {
    height: 135px;
  }

  @include media-breakpoint-down(md) {
    height: 125px;
  }

  @include media-breakpoint-down(sm) {
    height: 125px;
  }

  @include media-breakpoint-down(xs) {
    height: 125px;
  }
}

.social-icon {
  // padding: 5%;
  // margin-bottom: -.4em;
  // margin-top: 1.3em;

  @include media-breakpoint-down(md) {
    margin-bottom: -.3em;
    margin-top: 1em;
  }

  @include media-breakpoint-down(sm) {
    margin-top: -1.25em;
  }
}

.socialTitle {
  margin-bottom: 1.2em;

  @include media-breakpoint-down(md) {
    margin-bottom: .6em;
  }

  @include media-breakpoint-down(sm) {
    margin-bottom: 1rem;
  }
}

.com-title {
  @include media-breakpoint-down(md) {
    margin-bottom: 1.6em;
  }

  @include media-breakpoint-down(sm) {
    margin-bottom: 1rem;
  }
}

.center {
  text-align: center;
  height: 400px;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}

p {
  margin-bottom: 0;
}

</style>
