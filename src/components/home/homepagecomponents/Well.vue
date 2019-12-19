<template>
  <div class="everything-container-W">
    <div class="row no-gutters top-section vertical-align center">
      <div class="col-12">
        <div class="assesscontent">
          <h3 class="our-offerings-header-text-W">
            <span class="topHeader">Get Started With Your Wellness Profile </span><span class="bottomHeader">and Change Your Life Today!</span>
          </h3>
        </div>
      </div>
    </div>
    <div class="row no-gutters button-section vertical-align center">
      <div class="col-12">
        <router-link :to="{path: '/assessment'}">
          <button class="ntentbutton gradient-mid-to-light-diag-down-right">
            JOIN 4NTENT!
          </button>
        </router-link>
      </div>
    </div>
    <div class="row no-gutters assessmentbanner vertical-align">
      <div class="col-md-6 col-sm-12 col-xs-12 leftSection">
        <div class="video-container">
          <div class="embed-responsive embed-responsive-16by9
"><iframe class="videoplayer embed-responsive-item" src="https://www.youtube.com/embed/1ZQU7gnrqg4" allowfullscreen>
            </iframe></div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12 rightSection">
        <div class="list-container">
          <ul class="get-insp-mov-giv-see">
            <li>
              <span class="top">Get the support:</span>
              <span class="bottom">4 experts for the price of 1</span>
            </li>
            <li>
              <span class="top">Change the way you live by working</span>
              <span class="bottom"> with our virtual health mentors</span>
            </li>
            <li>
              <span class="top">Get focused nutrition:</span>
              <span class="bottom">Know how and what to eat</span>
            </li>
            <li>
              <span class="top">Get mindful fitness tips:</span>
              <span class="bottom">Understand what is best for your body</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'well',
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
.leftSection {
  padding-right: 20px;

  @include media-breakpoint-down(sm) {
    padding-right: 0px;
  }
}

.rightSection {
  font-size: 14px;
  padding-left: 20px;

  @include media-breakpoint-down(sm) {
    padding-left: 0px;
  }
}

.everything-container-W {
  padding: 5% 4% 8% 4%;
  background-color: #EAEBED;
  color: #001b65;
  // color: black;

  @include media-breakpoint-down(xs) {
    padding: 7% 4% 9% 4%;
  }
}

.topHeader {
  display: block;
}

.bottomHeader {
  display: block;
}

.our-offerings-header-text-W {
  font-size: 4.5rem;
  padding: 0;
  margin: 0;
  line-height: 5vw;
  font-weight: 400;

  @include media-breakpoint-down(lg) {
    font-size: 4.25vw;
    line-height: 5.25vw;
  }

  @include media-breakpoint-down(md) {
    font-size: 4.5vw;
  }

  @include media-breakpoint-down(sm) {
    font-size: 4.75vw;
    line-height: 6.75vw
  }

  @include media-breakpoint-down(xs) {
    font-size: 5vw;
    line-height: 6.75vw;
  }
}

.ntentbutton {
  text-align: center;
  font-weight: bold;
  margin: 0 auto;
  border: none;
  letter-spacing: .1rem;
  border-radius: 3rem;
  padding: 1.3vw 2.7vw;
  font-size: 2.5vw;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transition: transform 0.3s ease-in-out;
    transform: scale(1.1);
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
    font-size: 2.8vw;
    padding: 1.9vw 4vw;
  }
}

.top-section {
  padding: 0;
  margin: 0;
}

.button-section {
  padding: 4% 0 9% 0;
  margin: 0;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}

.top {
  @include media-breakpoint-down(xs) {
    display: inline;
  }
}

.bottom {
  @include media-breakpoint-down(xs) {
    display: inline;
  }
}


.assessmentbanner {
  text-align: center;
  height: 100%;
  font-size: 3vw;
  line-height: 6vw;


  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}

.list-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
}

.get-insp-mov-giv-see {
  list-style: none;
  vertical-align: middle;
  margin: 0;
  text-align: left;
  font-size: 1.7vw;
  line-height: 2vw;
  margin-left: 80px;

  @include media-breakpoint-down(lg) {
    font-size: 2.1vw;
    line-height: 2.4vw;
    margin-left: 70px;
  }

  @include media-breakpoint-down(md) {
    font-size: 2vw;
    line-height: 2.5vw;
    margin-left: 50px;
  }

  @include media-breakpoint-down(sm) {
    font-size: 2.5vw;
    line-height: 4vw;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  @include media-breakpoint-down(xs) {
    font-size: 4vw;

  }
}

.get-insp-mov-giv-see li {
  padding: .75em 0;

  @include media-breakpoint-down(lg) {
    padding: .4em 0;
  }

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    text-align: center;
    padding: 1% 0;
    margin: 0;
    width: 100%;
  }

  @include media-breakpoint-down(xs) {
    padding: 1% 3% 2% 8%;
    text-align: left;
    line-height: 6vw;
  }
}

.get-insp-mov-giv-see li:before {
  content: '❯❯';

  margin-right: 1.5vw;

  margin-left: -3vw;


  @include media-breakpoint-down(lg) {
    margin-right: 1.0vw;

    margin-left: -3vw;
  }

  @include media-breakpoint-down(md) {
    margin-right: 1.0vw;

    margin-left: -3vw;
  }

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {
    margin-right: 1.7vw;

    margin-left: -6vw;
  }
}

.get-insp-mov-giv-see li:after {


  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    content: '❮❮';
    margin-left: 1.0vw;

    margin-right: -3vw;
  }

  @include media-breakpoint-down(xs) {
    content: '';
  }
}


.video-container {
  // padding: 20px;

  @include media-breakpoint-down(lg) {
    // margin-right: 20px;
  }

  @include media-breakpoint-down(md) {
    // margin-right: 20px;
  }

  @include media-breakpoint-down(sm) {
    // margin-right: 3%;
    // margin-left: 3%;
    // margin-bottom: 7%;

  }

}

.videoplayer {

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

  @include media-breakpoint-down(xs) {}
}

</style>
