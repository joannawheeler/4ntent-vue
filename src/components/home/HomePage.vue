<template>
  <div class="entire-HomePage">
    <div class="section-1-background-image" v-bind:style="[$mq === 'sm' ? {
      'backgroundImage': 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.0) 60%), url(' + require('../../assets/images/homebackk.png') + ')'
    } : {'backgroundImage': 'linear-gradient(to right top, #1f82e5, transparent, transparent, white), url(' + require('../../assets/images/homebackk.png') + ')' }]">
      <div class="row no-gutters section-1-background-image-row">
        <div class="col-sm-5 hide">
        </div>
        <div class="col-sm-7 col-xs-12">
          <div class="headerContainer">
            <div>
              <h1 class="Section-1-Header-Text raleway" style="padding-bottom: 0; margin: 0
">Reinvent <span class="you">You</span></h1>
            </div>
            <div class="HomePage-Section-1-Icon-Text-Nutrition HomePage-Section-1-Icon-Text-All">
              Nutrition &nbsp;&nbsp;&nbsp; Fitness &nbsp;&nbsp;&nbsp; Lifestyle &nbsp;&nbsp;&nbsp; Giving Back
            </div>
            <div class="Section-1-GetStarted-Button-Container">
              <router-link :to="{path: '/assessment'}">
                <button type="button" class="Section-1-GetStarted-Button fade-in gradient-light-to-mid-diag-down-right">GET STARTED
                </button> </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters section-2-row vertical-align">
        <div class="col-12 why-col">
          <div class="why-4ntent-container-top">
            <ul class="get-insp-mov-giv-see-home why-font-size">
              <li class="first-li-title mont">Why 4NTENT?</li>
              <li>We are living in a world of mindless living and over consumption.</li>
              <li>The wellness space is flooded with information but it is not behaviorally directed.</li>
              <li>There continues to be incongruence and lack of collaboration between wellness professionals.</li>
              <li>Our community continues to experience barriers in accessing healthy support.</li>
              <li>Mental health continues to have a stigma attached to it.</li>
              <li>Our community wants alternatives to treat behavioral and emotional difficulties.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <well />
    <fit-nut-lif-giv />
    <offerings />
    <testimonials />
    <causes />
    <about />
  </div>
</template>
<script>
import Well from './homepagecomponents/Well'
import FitNutLifGiv from './homepagecomponents/FitNutLifGiv'
import NutritionalLiving from './homepagecomponents/NutritionalLiving'
import Offerings from './homepagecomponents/Offerings'
import Causes from './homepagecomponents/Causes'
import Testimonials from './homepagecomponents/Testimonials'
// import Testimonials from './homepagecomponents/TeensWithPurpose'
import About from './homepagecomponents/About'
export default {
  name: 'homepage',
  components: {
    FitNutLifGiv,
    NutritionalLiving,
    Offerings,
    Well,
    Causes,
    Testimonials,
    About
  },
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
<style lang="scss">
//colors: light blue-#05ebd8 darkblue-#001b65 midblue-#1f82e5

.hide {
  @include media-breakpoint-down(xs) {
    visibility: hidden;
  }
}

.vertical-align {
  display: flex;
  align-items: center;
}

.section-1-background-image-row {
  height: 59%;
  margin-top: 80px;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {
    height: 55%;
  }
}

.section-2-row {
  height: 41%;
  color: white;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {
    height: 45%;
  }
}

.section-1-background-image {
  padding: 0;
  background-size: cover;
  background-position: 35%;
  background-repeat: no-repeat;
  height: 100em;

  @include media-breakpoint-down(lg) {
    height: 65em;
    background-position: 35%;
  }

  @include media-breakpoint-down(md) {
    height: 50em;
    background-position: 35%
  }

  @include media-breakpoint-down(sm) {
    height: 40em;
    background-position: 33%
  }

  @include media-breakpoint-down(xs) {
    height: auto;
    background-position: 25%;
  }
}

.headerContainer {
  padding: 16em 3% 0 8%;

  @include media-breakpoint-down(lg) {
    padding: 12em 3% 0 10%;
  }

  @include media-breakpoint-down(md) {

    padding: 9em 3% 0 10%;
  }

  @include media-breakpoint-down(sm) {
    padding: 5em 3% 0 10%;
  }

  @include media-breakpoint-down(xs) {
    padding: 18em 3% 28px 3%;
  }
}

.Section-1-Header-Text {
  font-size: 5vw;
  color: #001b65;
  // color: black;
  letter-spacing: .5rem;
  text-align: center;
  font-weight: 600;

  @include media-breakpoint-down(lg) {
    font-size: 5vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 4.8vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 5.2vw;
    line-height: 6vw;
  }

  @include media-breakpoint-down(xs) {
    font-size: 9vw;
  }
}

.you {
  @include media-breakpoint-down(sm) {
    display: block;
  }

  @include media-breakpoint-down(xs) {
    display: inline;
  }
}

.HomePage-Section-1-Icon-Text-All {
  font-size: 2rem;
  font-weight: 500;
  padding: 8% 2% 8% 0;
  text-align: center;
  color: rgba(#001b65, .6);

  text-transform: uppercase;
  letter-spacing: .05rem;
  font-style: italic;

  @include media-breakpoint-down(lg) {
    font-size: 1.7vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 1.6vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 1.7vw;
    padding: 5.5% 2% 5.5% 0;
  }

  @include media-breakpoint-down(xs) {
    font-size: 3vw;
    padding: 8% 1%;
  }
}

.Section-1-GetStarted-Button-Container {
  text-align: center;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}

// light blue-#05ebd8
// darkblue-#001b65 midblue-#1f82e5
.Section-1-GetStarted-Button {
  border: none;
  text-align: center;
  font-weight: bold;
  letter-spacing: .1rem;
  border-radius: 3rem;
  padding: .7em 1em;
  font-size: 2.2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05, 1.05);
    transition: transfrom 0.3s ease-in-out;
  }

  @include media-breakpoint-down(lg) {
    font-size: 2.0vw;
  }

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    font-size: 2.4vw;
    padding: 1.6vw 3.3vw;
  }

  @include media-breakpoint-down(xs) {
    font-size: 1.5rem;
    padding: 3vw 3vw;
  }
}

@keyframes fadeIn to {
  opacity: .9;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: .9;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: .9;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: .9;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: .9;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: .9;
  }
}

.fade-in {
  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 2s;
  -moz-animation: fadeIn ease 2s;
  -o-animation: fadeIn ease 2s;
  -ms-animation: fadeIn ease 2s;
}



.why-col {
  padding: 0 20% 0 7% !important;

  @include media-breakpoint-down(lg) {
    padding: 0 10% 0 7% !important;
  }

  @include media-breakpoint-down(md) {
    padding: 0 5% 0 6% !important;
  }

  @include media-breakpoint-down(sm) {
    padding: 0 5% 0 6% !important;
  }

  @include media-breakpoint-down(xs) {}
}

//delete?
.get-insp-mov-giv-see-home {
  list-style: none;
  vertical-align: middle;
  color: white;
  line-height: 2.6vw;
  margin: 0;
  font-size: 1.8vw;
  text-align: left;
  margin-left: 0%;


  @include media-breakpoint-down(lg) {
    font-size: 2.0vw;
    line-height: 2.5vw;
  }

  @include media-breakpoint-down(md) {
    font-size: .5vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 1.2rem;
    letter-spacing: 0px;
  }

  @include media-breakpoint-down(xs) {
    font-size: 3.1vw;
    line-height: 3.7vw;
  }
}


.get-insp-mov-giv-see-home li {
  padding-bottom: 1.5rem;

  @include media-breakpoint-down(lg) {
    padding-bottom: 1.3rem;
  }

  @include media-breakpoint-down(md) {
    padding-bottom: .7rem;
  }

  @include media-breakpoint-down(sm) {
    padding-bottom: .6rem;
  }

  @include media-breakpoint-down(xs) {
    padding-bottom: .5rem;
  }
}

.get-insp-mov-giv-see-home li:before {
  content: '❯❯';
  margin-left: -54px;
  margin-right: 20px;

  @include media-breakpoint-down(lg) {
    margin-left: -45px;
    margin-right: 24px;
  }

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    margin-left: -45px;
    margin-right: 26px;
  }

  @include media-breakpoint-down(xs) {
    margin-left: -25px;
    margin-right: 10.5px;
  }
}



.why-font-size {
  font-size: 2rem;

  @include media-breakpoint-down(lg) {
    font-size: 2.1vw;
    line-height: 2.8vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 2.1vw;
    line-height: 2.6vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 2.4vw;
  }

  @include media-breakpoint-down(xs) {
    font-size: 4vw;
    line-height: 4.5vw;
  }
}

.first-li-title::before {
  visibility: hidden;
}

.first-li-title {
  font-size: 2.5rem;
  padding-bottom: 1em;

  @include media-breakpoint-down(lg) {
    font-size: 2.75vw;
    padding-bottom: 2.5rem;
  }

  @include media-breakpoint-down(md) {
    padding-bottom: 1.3rem;
  }

  @include media-breakpoint-down(sm) {
    padding-bottom: 1.1rem;
  }

  @include media-breakpoint-down(xs) {
    font-size: 4.5vw;
    padding-bottom: 1rem;
  }
}

ul {
  margin-left: 0 !important;
}

//colors: light blue-#05ebd8 darkblue-#001b65 midblue-#1f82e5

</style>
