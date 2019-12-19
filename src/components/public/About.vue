<template>
  <div class="about">
    <div class="row no-gutters">
      <div class="col-12">
        <img class="group-pic" :src='require("../../assets/images/group-pic-tall.jpg")' />
      </div>
    </div>
    <!-- <div class="content-container"> -->
    <div class="row no-gutters intros-container">
      <div class="col-12 col-space headers top-header">
        <h1>
          What is Ntentional Living?
        </h1>
      </div>
    </div>
    <div class="row no-gutters intros-container">
      <div class="col-12 col-space what-is-col">
        <div class="what-is-container what-is-top-container">
          <p>Join the 4NTENT movement in Encinitas, California and be a part of something that’s bigger than yourself... Activate social change by being an NTENTION SETTER. It’s more than working on yourself... it’s a conscious plan to give back to the greater good.</p>
          <p>
            It means surrounding yourself with a community of individuals that can support and hold you accountable for
            your daily intentions. We know consciously taking on a purpose is easier said than done. Our team of
            knowledgeable 4NTENT professionals are here to put the action and engagement into that purpose.
          </p>
        </div>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-12 col-space">
        <hr class="horz-rule" />
      </div>
    </div>
    <div class="row no-gutters intros-container">
      <div class="col-12 col-space headers secondheader">
        <h1>
          Meet the
          Team!
        </h1>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-12 team-space">
        <!-- <img class="pic-xs" :src='require("../../assets/images/Angie.png")' />
 -->
        <div class="floated">
          <img class="pic" :src='require("../../assets/images/Angie.png")' />
        </div>
        <h3>Angie Rosenberg<span class="bottom">LMFT, MT-BC, Co-Founder</span></h3>
        <p>
          I believe in delivering collaborative health care through ntentional lifestyle coaching. I'm passionate about eating nutritional foods, daily exercise, living life outdoors, and sharing the healing power of music. I strive to empower clients to move beyond life's challenges to a life full of passion, purpose, and empowerment. I've worked in hospital and treatment settings my entire career and saw the demand for preventative and educational services. We'd be honored to support you in living out your goals, providing you with the right tools to be the best version of yourself.</p>
        <!-- </div> -->
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-12 team-space">
        <!-- <div class="outer-container"> -->
        <img class="pic-xs" :src='require("../../assets/images/Marc.jpeg")' />
        <div class="floated">
          <img class="pic" :src='require("../../assets/images/Marc.jpeg")' />
        </div>
        <h3>Marc Rosenberg<span class="bottom">LMFT, BCBA, Co-Founder</span></h3>
        <p>
          My passion for optimal health, active fitness, and whole body wellness has played a prominent role for my maturation process as wellness enthusiast. I believe in integrative treatment including holistic care to best align clients with their growth process. Throughout my journey, I have had the fortune of working with creative and passionate minds in the sports and wellness communities. I have experienced the missing pieces to personalized care are affordability, efficiency, and deliverable objectives. I look forward to empowering your journey.</p>
        <!-- </div> -->
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-12 team-space">
        <!-- <div class="outer-container"> -->
        <img class="pic-xs" :src='require("../../assets/images/Kate.jpg")' />
        <div class="floated">
          <img class="pic" :src='require("../../assets/images/Kate.jpg")' />
        </div>
        <h3>Kate Mallinson<span class="bottom">MS, NTP</span></h3>
        <p>Kate Mallinson is a Functional Nutritionist and Certified Personal Trainer. She holds a Master’s degree in Human Nutrition and Functional Medicine. Kate takes an individualized approach to meet the needs of each client. She utilizes a series of evaluative techniques to get to the root cause of dysfunction and help restore balance in the body. Kate has been in clinical practice since 2014 and has provided nutrition education in both the community and higher-education settings. Most recently, she spent 2 years at the Institute for Functional Medicine where she developed curriculum for educating medical professionals about nutrition and functional medicine.</p>
        <!-- </div> -->
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-12 team-space">
        <!-- <div class="outer-container"> -->
        <img class="pic-xs" :src='require("../../assets/images/David.jpg")' />
        <div class="floated">
          <img class="pic" :src='require("../../assets/images/David.jpg")' />
        </div>
        <h3>David Koch<span class="bottom">MSW, BCBA, Advanced Personal Training Certification (NPTI)</span></h3>
        <p>As a professional interested in helping individuals achieve their potential, I believe in positive feedback, skill development, and offering a program design that includes action steps through a system of progression to achieve results for better physical performance. Through current trends in strength training, functional movements, identifying asymmetries, range of motion, and strength issues, I’ll create a balanced program through a whole body workout to achieve optimal fitness.</p>
        <!-- </div> -->
      </div>
    </div>
    <about />
  </div>
</template>
<script>
import About from '../home/homepagecomponents/About';
export default {
  name: 'about-us',
  components: {
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
<style lang="scss" scoped>
// #container {}

.floated {
  float: left;
  margin-top: .8em;
  margin-right: 1.0em;
  margin-bottom: .25em;
  margin-left: 0;

  @include media-breakpoint-down(xs) {
    display: none;
  }
}

.pic {
  height: auto;
  width: 11.25rem;

  @include media-breakpoint-down(lg) {
    width: 10.75rem;
  }

  @include media-breakpoint-down(md) {
    width: 11.60rem;
  }

  @include media-breakpoint-down(sm) {
    width: 10.25rem;
  }

  @include media-breakpoint-down(xs) {
    width: 10.25rem;
  }
}

.pic-xs {
  display: none;

  @include media-breakpoint-down(xs) {
    display: block;
    height: auto;
    width: 11.25rem;
    margin: 0 auto;
  }
}

.col-space {
  background-color: white;
  padding: 0 13%;

  @include media-breakpoint-down(md) {
    padding: 0 10%;
  }

  @include media-breakpoint-down(sm) {
    padding: 0 10%;
  }

  @include media-breakpoint-down(xs) {
    padding: 0 10%;
  }
}


.team-space {

  background-color: white;
  padding: 2% 13% 4% 13%;

  @include media-breakpoint-down(md) {

    padding: 2% 10% 4% 10%;
  }

  @include media-breakpoint-down(sm) {

    padding: 2% 10% 4% 10%;
  }

  @include media-breakpoint-down(xs) {

    padding: 2% 10% 4% 10%;
  }
}

.secondheader {
  padding-bottom: 2%;
}


.what-is-container {
  margin: 4%;
  margin-top: 1%;
  padding-bottom: .25%;
  margin-bottom: 2.5%;
}

.what-is-top-container {
  border: none;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  text-align: left;
}

.what-is-col {
  padding-left: 8%;
  padding-right: 8%;
  padding-bottom: 1%;
}

.headers {
  padding: 2% 10% 1% 10%;
}

.group-pic {
  width: 100%;
  height: auto;
  margin-top: -20%;
  z-index: -1;
  margin-bottom: -50%;

  @include media-breakpoint-down(md) {
    margin-top: -18%;
  }

  @include media-breakpoint-down(sm) {
    margin-top: -15%;
  }

  @include media-breakpoint-down(xs) {
    margin-top: -10%;
  }
}


.content-container {
  width: 100%;
}

.intros-container {
  width: 100%;
  background-color: white;
}

.last-container {
  padding-bottom: 3%;
}


h3 {
  margin-top: 0;
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: rgba(#1f82e5, .8);
  font-size: 1.5rem;
  line-height: 3rem;
  margin-bottom: .5em;

  @include media-breakpoint-down(lg) {
    font-size: 1.4rem;
    line-height: 3rem;
  }

  @include media-breakpoint-down(md) {
    font-size: 1.4rem;
    line-height: 3rem;
  }

  @include media-breakpoint-down(sm) {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  @include media-breakpoint-down(xs) {
    font-size: 1.3rem;
    line-height: 2rem;
    text-align: center;
    margin-top: 1em;
  }
}

span {
  display: block;
  color: #90979d;
  font-size: 1rem;
  line-height: 1rem;


  @include media-breakpoint-down(lg) {
    font-size: .9rem;
    line-height: 1rem;
  }

  @include media-breakpoint-down(md) {
    font-size: .9rem;
    line-height: 1rem;
  }

  @include media-breakpoint-down(sm) {
    font-size: .8rem;
    line-height: 1rem;
  }

  @include media-breakpoint-down(xs) {
    font-size: .8rem;
    line-height: 1rem;
    text-align: center;
  }

}


p {
  font-size: 1.3rem;
  line-height: 1.5rem;

  @include media-breakpoint-down(lg) {
    font-size: .9rem;
    line-height: 1.4rem;
  }

  @include media-breakpoint-down(md) {
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  @include media-breakpoint-down(sm) {
    font-size: 1.1rem;
    line-height: 1.6rem;
  }

  @include media-breakpoint-down(xs) {
    font-size: 1rem;
    line-height: 1.4rem;
    text-align: center;
  }

}

.container p {
  margin-bottom: 3em;
}

h1 {

  text-align: center;
  color: #1f82e5;
  font-family: 'Lato', sans-serif;
  margin: 1% 0 2% 0;
  font-size: 4.5vw;

  @include media-breakpoint-down(lg) {
    font-size: 5.75vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 6.2vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 7.25vw;
  }

  @include media-breakpoint-down(xs) {
    font-size: 9.2vw;
    margin: 5% 0 7% 0;
  }
}

</style>
