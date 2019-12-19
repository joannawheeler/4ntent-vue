<template>
  <div class="dashboard-info-widgets open-font">
    <div class="grid">
      <div class="one">
        <div class="inner-grid">
          <div class="inner-one">
            <div class="dash-info-widg-title">
              My Points
            </div>
          </div>
          <div class="inner-two">
            <div class="well-img-container">
              <div class="text-center sub-title">Daily Points</div>
              <div class="statbutton text-center">{{dailypoints}}</div>
            </div>
          </div>
          <div class="inner-three">
            <div class="well-img-container">
              <div class="text-center sub-title">Total Points</div>
              <div class="statbutton text-center">{{totalpoints || "0"}}</div>
            </div>
          </div>
          <div class="inner-four">
            <div class="well-img-container">
              <div class="text-center sub-title">Some Text</div>
              <div class="statbutton text-center">{{somevariable || "0"}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'points',
  props: {
    userinfo: {},
    dailypoints: {},
    totalpoints: {}, //TODO: input this field into database
    somevariable: {} //TODO: find out what to put here, //TODO: input this field into database
  }
}

</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "one";
  // grid-column-gap: 10px;
  // grid-row-gap: 15px;
  min-width: 100%;
  min-height: 100%;
  padding: 50px;
  padding-left: 0px;
  padding-top: 20px;

  @include media-breakpoint-down(md) {
    padding: 50px;
    padding-top: 0px;
    padding-bottom: 50px;
  }

  @include media-breakpoint-down(sm) {
    padding: 10%;
    padding-top: 0px;
    padding-bottom: 50px;
  }

  @include media-breakpoint-down(xs) {
    padding: 5%;
    padding-top: 0px;
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
  grid-template-rows: .5fr 1fr 1fr 1fr;
  grid-template-areas:
    "inner-one"
    "inner-two"
    "inner-three"
    "inner-four";
  // grid-column-gap: 10px;
  // grid-row-gap: 30px;
  justify-items: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;

  @include media-breakpoint-down(md) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: .25fr .5fr .25fr;
    grid-template-areas:
      "inner-one inner-one inner-one"
      "inner-two inner-three inner-four"
      "empty empty empty";
  }

  @include media-breakpoint-down(sm) {
    grid-template-columns: 1fr;
    grid-template-rows: .5fr 1fr 1fr 1fr;
    grid-template-areas:
      "inner-one"
      "inner-two"
      "inner-three"
      "inner-four";
  }
}

.one {
  grid-area: one;
}

.inner-one {
  grid-area: inner-one;
}

.inner-two {
  grid-area: inner-two;
  padding: 30px;

  @include media-breakpoint-down(sm) {
    padding: 10px;
  }
}

.inner-three {
  grid-area: inner-three;
  padding: 30px;

  @include media-breakpoint-down(sm) {
    padding: 10px;
  }
}

.inner-four {
  grid-area: inner-four;
  padding: 30px;

  @include media-breakpoint-down(sm) {
    padding: 10px;
  }

  @include media-breakpoint-down(xs) {
    padding: 10px;
    padding-bottom: 40px;
  }
}

.all-dash-info-widg {
  height: 100%;
  width: 100%;
}

.widget-padding {
  padding: $widget-padding;
}

.well-img-container {
  color: $ntent-mid-blue !important;
}

.dashboard-info-widgets {
  display: flex;
  flex: 1;
}

.dash-info-widg-title {
  text-align: center;
  font-family: Open Sans, sans-serif;
  color: $ntent-dark-blue;
  padding: 40px;
  font-size: 25px;

  @include media-breakpoint-down(md) {
    font-size: 20rem;
  }

  @include media-breakpoint-down(sm) {
    font-size: 15rem
  }
}

.sub-title {
  font-size: 20px;
  padding: 10px;

  @include media-breakpoint-down(md) {
    font-size: 15px;
  }

  @include media-breakpoint-down(sm) {
    font-size: 10px;
  }
}

.statbutton {
  font-size: 20px;

  @include media-breakpoint-down(sm) {
    font-size: 15px;
  }
}

</style>
