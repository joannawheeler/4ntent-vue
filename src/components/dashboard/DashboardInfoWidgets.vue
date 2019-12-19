<template>
  <div class="dashboard-info-widgets open-font">
    <div class="grid">
      <!-- if provider -->
      <div class="one grow" v-if="userinfo.provider">
        <router-link :to="{path: '/user/my-intention-setters'}">
          <div class="inner-grid">
            <div class="inner-one">
              <div class="dash-info-widg-title">
                <span>My NTENTION Setters</span>
              </div>
            </div>
            <div class="inner-two">
              <div class="well-img-container">
                <img class="" :src='require("../../assets/icons/iconfinder.png")' />
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <!-- if user is not a provider and is a tier that includes a wellness profile ('purpose' or 'empower') -->
      <div class="one grow" v-if="!userinfo.provider && userinfo.tier !== 'passion'">
        <router-link :to="{path: '/user/my-wellness-profile'}">
          <div class="inner-grid">
            <div class="inner-one">
              <div class="dash-info-widg-title">
                <span>My Daily Check In</span>
              </div>
            </div>
            <div class="inner-two">
              <div class="well-img-container">
                <img class="" :src='require("../../assets/icons/iconfinder.png")' />
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <!-- if user is not a provider and is a tier that does NOT include a wellness profile ('passion'), make tile opaque and include link over the tile for them to upgrade to access this feature -->
      <div class="one no-shadow" v-if="!userinfo.provider && userinfo.tier === 'passion'">
        <router-link :to="{path: '/pricing'}">
          <div id="overlay">
            <span style="text-align: center;   font-family: 'Lato', sans-serif;
  font-weight: 900;">Upgrade for Access!</span>
          </div>
          <div class="inner-grid opaque-tile">
            <div class="inner-one">
              <div class="dash-info-widg-title">
                <span>My Wellness Profile</span>
              </div>
            </div>
            <div class="inner-two">
              <div class="well-img-container">
                <img class="" :src='require("../../assets/icons/iconfinder.png")' />
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="two grow" v-if="userinfo.provider">
        <!-- path: '/user/scheduling' -->
        <router-link :to="{ name: 'mentor-availability-setter' }">
          <div class="inner-grid">
            <div class="inner-one">
              <div class="dash-info-widg-title">
                My Schedule
              </div>
            </div>
            <div class="inner-two">
              <ul class="list-img-outer-container">
                <li>
                  <div class="list-img-container inline-block">
                    Some text here
                  </div>
                </li>
                <li>
                  <div class="list-img-container inline-block">Some text here</div>
                </li>
                <li>
                  <div class="list-img-container inline-block">Some text here</div>
                </li>
              </ul>
            </div>
          </div>
        </router-link>
      </div>
      <div class="two grow" v-if="!userinfo.provider">
        <!-- path: '/user/scheduling' -->
        <router-link :to="{ name: 'mentor-availability-setter' }">
          <div class="inner-grid">
            <div class="inner-one">
              <div class="dash-info-widg-title">
                My Schedule
              </div>
            </div>
            <div class="inner-two">
              <ul class="list-img-outer-container">
                <li>
                  <div class="list-img-container inline-block">
                    Some text here
                  </div>
                </li>
                <li>
                  <div class="list-img-container inline-block">Some text here</div>
                </li>
                <li>
                  <div class="list-img-container inline-block">Some text here</div>
                </li>
              </ul>
            </div>
          </div>
        </router-link>
      </div>
      <!-- if user is not a provider and is under a tier that does not have access to my trackers (the 'passion' tier) -->
      <div class="three no-shadow" v-if="!userinfo.provider && userinfo.tier === 'passion'">
        <router-link :to="{path: '/pricing'}">
          <div id="overlay">
            <span style="text-align: center;   font-family: 'Lato', sans-serif;
  font-weight: 900;">Upgrade for Access!</span>
          </div>
          <div class="inner-grid opaque-tile">
            <div class="inner-one">
              <div class="dash-info-widg-title">
                My Trackers
              </div>
            </div>
            <div class="inner-two">
              <div class="tracker-grid">
                <div class="track-one"><img src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" /></div>
                <div class="track-two"><img src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" /></div>
                <div class="track-three"><img src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" /></div>
                <div class="track-four"><img src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" /></div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <!-- if user is either a provider or is under a tier that has access to my trackers ('purpose' and 'empower') -->
      <div class="three grow" v-if="userinfo.provider || userinfo.tier !== 'passion'">
        <router-link :to="{path: '/user/my-trackers'}">
          <div class="inner-grid">
            <div class="inner-one">
              <div class="dash-info-widg-title">
                My Trackers
              </div>
            </div>
            <div class="inner-two">
              <div class="tracker-grid">
                <div class="track-one"><img src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" /></div>
                <div class="track-two"><img src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" /></div>
                <div class="track-three"><img src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" /></div>
                <div class="track-four"><img src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" /></div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="four grow" v-if="userinfo.provider">
        <router-link :to="{path: '/user/my-classes'}">
          <div class="inner-grid">
            <div class="inner-one">
              <div class="dash-info-widg-title">
                My Classes
              </div>
            </div>
            <div class="inner-two">
              <div class="plan-img-container">
                <img class="" :src='require("../../assets/icons/exercise.png")' />
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <!-- if user is not a provider and is a tier that includes a wellness plan ('purpose' and 'empower') -->
      <div class="four grow" v-if="!userinfo.provider">
        <router-link :to="{path: '/user/wellness-plan'}">
          <div class="inner-grid">
            <div class="inner-one">
              <div class="dash-info-widg-title">
                My Wellness Plan
              </div>
            </div>
            <div class="inner-two">
              <div class="plan-img-container">
                <img class="" :src='require("../../assets/icons/exercise.png")' />
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <!-- if user is not a provider and is a tier that does NOT include a wellness plan ('passion'), make tile opaque and include link over the tile for them to upgrade to access this feature -->
      <div class="four no-shadow" v-if="!userinfo.provider && userinfo.tier === 'passion'">
        <router-link :to="{path: '/pricing'}">
          <div id="overlay">
            <span style="text-align: center;   font-family: 'Lato', sans-serif;
  font-weight: 900;">Upgrade for Access!</span>
          </div>
          <div class="inner-grid opaque-tile">
            <div class="inner-one">
              <div class="dash-info-widg-title">
                My Wellness Plan
              </div>
            </div>
            <div class="inner-two">
              <div class="plan-img-container">
                <img class="" :src='require("../../assets/icons/exercise.png")' />
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="five grow">
        <router-link :to="{path: '/user/my-giving-back'}">
          <div class="inner-grid">
            <div class="inner-one">
              <div class="dash-info-widg-title">
                My Giving Back
              </div>
            </div>
            <div class="inner-two">
              <div class="plan-img-container">
                <img class="" :src='require("../../assets/icons/exercise.png")' />
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="six grow">
        <router-link :to="{path: userinfo.provider ? '/user/ntention-setter-access' : '/user/health-mentor-access'}">
          <div class="inner-grid">
            <div class="inner-one">
              <div class="dash-info-widg-title ntention-title">
                {{ setAccessName()
                }}
              </div>
            </div>
            <div class="inner-two">
              <div class="plan-img-container">
                <img class="" :src='require("../../assets/icons/exercise.png")' />
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dashboard-info-widgets',
  props: {
    userinfo: {}
  },
  methods: {
    setAccessName() {
      if (!this.userinfo.provider) {
        return "NTENTION Setter Access";
      } else {
        return "Health Mentor Access";
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.grow {
  transition: all .2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "one two three"
    "four five six";
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  min-width: 100%;
  min-height: 100%;
  padding: 50px;
  padding-top: 20px;

  @include media-breakpoint-down(md) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "one two""three four""five six";
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @include media-breakpoint-down(sm) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
      "one""two"
      "three""four"
      "five""six";

    padding: 10%;
    padding-top: 20px;
    padding-bottom: 50px;
  }

  @include media-breakpoint-down(xs) {
    padding: 5%;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}

.grid>div {
  background-color: white;
  box-shadow: 0 4px 9.6px 0.4px rgba(100, 100, 100, 0.5);
}

.inner-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: .25fr .75fr .25fr;
  grid-template-areas:
    "inner-one"
    "inner-two"
    "empty";
  // grid-column-gap: 10px;
  // grid-row-gap: 15px;
  min-width: 100%;
  min-height: 100%;
  justify-items: center; //right left
  align-items: center; //up down
}

.inner-grid>div {
  // height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inner-one {
  grid-area: inner-one;
}

.inner-two {
  grid-area: inner-two;
}

.empty {
  grid-area: empty;
}

.one {
  grid-area: one;
}

.two {
  grid-area: two;
}

.three {
  grid-area: three;
}

.four {
  grid-area: four;
}

.five {
  grid-area: five;
}

.six {
  grid-area: six;
}

.open-font {
  font-family: Open Sans, sans-serif;
}

.dash-info-widg-title {
  font-family: Open Sans, sans-serif;
  color: $ntent-dark-blue;
  text-align: center !important;
  padding: 40px;
  font-size: 2em;
  font-weight: 600;
}

.inline-block {
  display: inline-block;
}

.well-img-container {
  text-align: center;

  img {
    width: 150px;
    height: auto;
    padding: 10px;

    @include media-breakpoint-down(lg) {
      width: 130px;
      height: auto;
      padding: 10px;
    }

    @include media-breakpoint-down(md) {
      width: 150px;
      height: auto;
      padding: 10px;
    }

    @include media-breakpoint-down(sm) {
      width: 200px;
      height: auto;
      padding: 10px;
    }
  }
}

.list-img-outer-container {
  list-style-type: none;
  padding: 10px;

  li {
    padding: 10px;
    text-align: center;
    font-size: 20px;
    height: auto;
  }
}

.tracker-imgs-container {
  text-align: center;
  width: 100%;
  height: auto;
  padding: 10px;


  @include media-breakpoint-down(lg) {
    width: 130px;
    height: auto;
  }

  @include media-breakpoint-down(md) {
    width: 125px;
    height: auto;
  }

  img {
    display: inline-block;
    padding: 10px;
    height: auto;
    width: 100%;
  }
}

.tracker-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "track-one track-two"
    "track-three track-four";
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-items: center; //right left
  align-items: center; //up down

  @include media-breakpoint-down(sm) {
    grid-column-gap: 120px;
    grid-row-gap: 50px;
  }

  @include media-breakpoint-down(xs) {
    grid-column-gap: 80px;
    grid-row-gap: 60px;
  }
}

.tracker-grid>div {
  display: flex;
  align-items: center;
  justify-content: center;

  >img {
    height: auto;
    width: 70px;

    @include media-breakpoint-down(md) {
      height: auto;
      width: 70px;
    }

    @include media-breakpoint-down(sm) {
      height: auto;
      width: 80px;
    }
  }
}


.plan-img-container {
  text-align: center;

  img {
    width: 150px;
    height: auto;
    padding: 10px;

    @include media-breakpoint-down(lg) {
      width: 130px;
      height: auto;
      padding: 10px;
    }

    @include media-breakpoint-down(md) {
      width: 150px;
      height: auto;
      padding: 10px;
    }

    @include media-breakpoint-down(sm) {
      width: 170px;
      height: auto;
      padding: 5px;
    }
  }
}

.dashboard-info-widgets {
  display: flex;
  flex: 1;
}

.opaque-tile {
  background-color: lightgray !important;
  opacity: .3;
  height: 100%;
  width: 100%;
  position: absolute;
  // box-shadow: none !important;

}

//vertically align an inner div by adding display: flex; align-items: center, and justify-content: center;
#overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-shadow {
  box-shadow: none !important;
  position: relative !important;
}

</style>
