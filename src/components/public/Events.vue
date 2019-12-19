<template>
  <div class="events">
    <div class="row no-gutters">
      <div class="col-12">
        <div class="hero-img-container">
          <b-img class="hero-img" :src='require("../../assets/images/NTENTIONheropic.png")' />
        </div>
        <!--         <div class="centered ">
          <div class="mont our-offerings-header-text
">Events</div> -->
        <!-- <div>
  <p class="subHead">
    4NTENT believes in the importance of giving back. We partner with likeminded organizations to provide education, support, and resources to our community. Our hope is that through these educations, we’ll empower individuals and families to activate an intentional lifestyle that motivates people to be involved with causes they care about. After all, we are much more motivated to work on ourselves when we feel we are making a difference for others. </p>
</div>
 -->
        <!-- </div> -->
      </div>
    </div>
    <div class="row no-gutters content-row center">
      <div class="col-lg-4 col-xs-12 outerCol">
        <!-- <div class="allContainers teenwp"> -->
        <!--           <h4>Teens With Purpose</h4>
          <router-link :to="{path: '/teenswithpurpose'}">
            <div class="buttonContainer"><button class="white">Check it out!
              </button></div>
          </router-link> -->
        <!-- </div> -->
        <div>
          <img class="img" :src='require("../../assets/images/ComingSoonEvent.png")' />
        </div>
      </div>
      <div class="col-lg-4 col-xs-12 outerCol">
        <!-- <div class="allContainers familywp"> -->
        <!-- <h4>Families With Purpose</h4>
<router-link :to="{path: '/home'}">
  <div class="buttonContainer"><button class="white">Check it out!
    </button></div>
</router-link>
 -->
        <div>
          <img class="img" :src='require("../../assets/images/SolanaCenterevent2019.png")' />
        </div>
        <!-- </div> -->
      </div>
      <div class="col-lg-4 col-xs-12 outerCol">
        <!-- <div class="allContainers adultwp"> -->
        <!-- <h4>Young Adults With Purpose</h4>
<router-link :to="{path: '/home'}">
  <div class="buttonContainer"><button class="white">Check it out!
    </button></div>
</router-link>
 -->
        <!-- </div> -->
        <div>
          <img class="img" :src='require("../../assets/images/consulting.png")' />
        </div>
      </div>
    </div>
    <about />
  </div>
</template>
<script>
import About from '../home/homepagecomponents/About';
export default {
  name: 'events',
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
.events {
  margin-top: 50px;
}

.subHead {
  font-size: 1.75vw;
  line-height: 2.5vw;
  color: white;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}



.our-offerings-header-text {
  color: white;
}

h4 {
  font-size: 2.5vw;
  vertical-align: middle;
  margin: 0;

  line-height: 3vw;
  font-weight: 500;
  height: 50%;

  @include media-breakpoint-down(lg) {
    font-size: 2.75vw;
    line-height: 3.5vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 3vw;
    line-height: 3.8vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 4.8vw;
    line-height: 5.5vw
  }

  @include media-breakpoint-down(xs) {
    font-size: 6vw;
    line-height: 6.75vw;
    vertical-align: middle;
    margin: 0;

  }

}

.container {
  position: relative;
  text-align: center;
  background-color: transparent;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.purpose {
  display: block;
}

.hero-img-container {
  height: 600px;

  @media only screen and (max-width: 1680px) {
    height: 500px;
  }

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {
    height: 400px;
  }

  @include media-breakpoint-down(sm) {
    height: 300px;
  }

  @include media-breakpoint-down(xs) {
    height: 200px;
  }

  @media only screen and (max-width: 320px) {
    height: 150px;
  }
}

.hero-img {
  width: 100%;
  height: 100%;
  z-index: -1;


  @media only screen and (max-width: 1440px) {
    // width: 150%;
    // margin-left: -25%;

  }

  @include media-breakpoint-down(lg) {
    width: 150%;
    margin-left: -25%;
  }

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}


h3 {
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: rgba(#1f82e5, .8);
  font-size: 3vw;
  line-height: 5vw;

  @include media-breakpoint-down(lg) {
    font-size: 3.2vw;
    line-height: 5.25vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 3.5vw;
    line-height: 5.75vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 4.5vw;
    line-height: 5.75vw
  }

  @include media-breakpoint-down(xs) {
    font-size: 5.5vw;
    line-height: 6.75vw;
    margin-bottom: 3%;
  }
}


p {
  font-size: 1.8vw;
  line-height: 2.5vw;

  @include media-breakpoint-down(lg) {
    font-size: 2.1vw;
    line-height: 2.8vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 2.5vw;
    line-height: 3.2vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 3.1vw;
    line-height: 4vw;
  }

  @include media-breakpoint-down(xs) {
    font-size: 4.3vw;
    line-height: 5.7vw;
  }

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





////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

a {
  color: #001b65;
}

.buttonContainer {
  padding-top: 9%;

  @include media-breakpoint-down(sm) {
    padding: 0 15%;
    margin-bottom: 10%;
  }

  @include media-breakpoint-down(xs) {}
}

.white {
  border: white 2px solid;
  border-radius: 2rem;
  margin: 0 auto;
  width: 12vw;
  height: 3vw;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  color: white;
  justify-content: center;
  align-content: center;


  font-size: 1.4vw;

  @include media-breakpoint-down(lg) {
    width: 15.5vw;
    height: 4.5vw;
    font-size: 2vw;
  }

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    width: 27.5vw;
    height: 7.5vw;
    font-size: 3.75vw;
  }

  @include media-breakpoint-down(xs) {
    width: 30vw;
    height: 10vw;
    font-size: 4vw;
  }
}


// .teenwp {
// background: url('../../assets/images/ComingSoonEvent.png');
// height: 250px;
// width: 300px;
// }
// .familywp {
// background: url('../../assets/images/SolanaCenterevent2019.png');
// height: 250px;
// width: 300px;
// }
// .adultwp {
// background: url('../../assets/images/consulting.png');
// height: 250px;
// width: 300px;
// }


.content-row {
  // margin-top: 50px;
  // border: solid 1px black;
  padding: 4vw;

  @include media-breakpoint-down(sm) {
    // padding: 1% 4%;
  }

  @include media-breakpoint-down(xs) {
    // padding: 1% 4%;
  }
}


// .outerCol {
//   padding: 3%;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @include media-breakpoint-down(sm) {
//     padding: 2% 0%;
//   }

//   @include media-breakpoint-down(xs) {}
// }


.img {
  max-width: 100%;
  height: auto;
  padding: 4vw;
}

// .allContainers {
// background-repeat: no-repeat !important;
// padding: 3vw;
// text-align: center;
// }

</style>
