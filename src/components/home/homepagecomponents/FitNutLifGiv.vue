<template>
  <div class="everything-containerF" v-bind:style="[$mq === 'sm' || $mq === 'md' ? { 'background-image': 'url(' + require('../../../assets/images/blogbackhorz.jpg') + ')' } : { 'background-image': 'url(' + require('../../../assets/images/blogback.jpg') + ')' }]">
    <div class="row no-gutters row-container">
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 fit-nut-lif-giv-cols">
        <div class="all-inner-containers nutrition">
          <div class="title-container">
            <h1 class="all-titles fitness-title"><span class="titleText">Nutrition</span></h1>
          </div>
          <p class="all-paras fitness-para">Learn how food makes you feel, if you are hungry, how to eat, how to be mindful with food, and how to choose diverse, sustainable options.</p>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 fit-nut-lif-giv-cols">
        <div class="all-inner-containers fitness">
          <div class="title-container">
            <h1 class="all-titles fitness-title"><span class="titleText">Fitness</span></h1>
          </div>
          <p class="all-paras  fitness-para">Learn how to find the motivation to move, put your exercise goals into action, find your strength, be mindful with your body, stay accountable, and rest.</p>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 fit-nut-lif-giv-cols">
        <div class="all-inner-containers lifestyle">
          <div class="title-container">
            <h1 class="all-titles lifestyle-title"><span class="titleText">Lifestyle</span></h1>
          </div>
          <p class="all-paras lifestyle-para">Learn how to live with NTENTION, understand why you do what you do, strengthen your relationships, create connection, lead with creativity, and replenish your energy.</p>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 fit-nut-lif-giv-cols">
        <div class="all-inner-containers giving-back">
          <div class="title-container">
            <h1 class="all-titles giving-back-title"><span class="titleText">Giving Back</span></h1>
          </div>
          <p class="all-paras giving-back-para">Discover and align with causes that matter to you. Take action by giving back. Start owning the outcome to create a greater sense of connectedness and balance.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fit-nut-lif-giv',
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
.everything-containerF {
  height: auto;
  padding: 4%;
  margin: 0;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {
    // background-image: url('../../../assets/images/blogbackhorz.jpg') !important;
    padding: 8% 20%;
  }

  @include media-breakpoint-down(sm) {
    padding: 8% 6%;
  }

  @include media-breakpoint-down(xs) {
    padding: 8% 8%;
  }
}

.ntenticon-row {
  padding: 0;
  margin: 0;
  background-size: auto;

  @include media-breakpoint-down(xs) {
    display: none;
  }
}

.fit-nut-lif-giv-cols {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 3%;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {
    padding: 8%;
  }

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}

.all-inner-containers {
  height: 100%;
  width: 100%;
  // border: solid 1px white;
  border-radius: 0;
  background-color: white;
  opacity: .8;
  color: #272838;
  ;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

}


.title-container {
  background-color: #1f82e5;
  border-radius: 0rem 0rem 0 0;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {
    padding: 0 1.25em;
    border-radius: 0rem 0rem 0 0;
  }
}




.titleText {}

.nutrition {

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    margin: 0;
  }

  @include media-breakpoint-down(xs) {
    margin: 0;
  }
}

.fitness {

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    margin: 0;
  }

  @include media-breakpoint-down(xs) {
    margin: 0;
  }
}

.lifestyle {

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    margin: 0;
  }

  @include media-breakpoint-down(xs) {
    margin: 0;
  }
}

.giving-back {

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    margin: 0;
  }

  @include media-breakpoint-down(xs) {
    margin: 0;
  }
}

.all-titles {
  text-align: left;
  font-size: 2.5vw;
  vertical-align: middle;
  margin: 0;
  color: white;
  line-height: 5vw;
  padding-left: 2vw;
  font-weight: 500;

  @include media-breakpoint-down(lg) {
    font-size: 2.75vw;
    line-height: 5.25vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 3.5vw;
    line-height: 5.75vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 5.25vw;
    line-height: 7.75vw
  }

  @include media-breakpoint-down(xs) {
    text-align: left;
    font-size: 6vw;
    line-height: 6.75vw;
    vertical-align: middle;
    margin: 0;
    padding: .3em 0;
    color: white;
  }
}


.all-paras {
  font-size: 1.8vw;
  text-align: left;
  padding: .7em;

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
    text-align: left;
    padding: .7em 1.2em;
  }

}

</style>
