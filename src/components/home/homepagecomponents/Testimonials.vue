<template>
  <div class="testimonials everythingContainerT" :style="{'background-image': 'url(' + require('../../../assets/images/mod5back.png') + ')' }">
    <div class="row no-gutters titleholder is-flex">
      <div class="col-12 header">
        <h1 class="mont our-offerings-header-text">Real Results
        </h1>
      </div>
    </div>
    <div class="row no-gutters vertical-align" v-match-heights="{
el: ['.test']}" style="flex-wrap: wrap">
      <div class="col-lg-6 col-xs-12 panel">
        <div class="test">
          <p>
            "4ntent is hugely instrumental in keeping me healthy and happy. I have health mentors who specialize in different areas but work together so I have a real
            wellness team! All sessions are done virtually so it's nothing else to add to my to-do list; just an online community of support to help me reach my wellness goals."</p>
        </div>
      </div>
      <div class="col-lg-6 col-xs-12 panel">
        <div class="test">
          <p>
            "I'm really lucky to know two people like you who care so much about helping both individuals and the community to up-level and be better. Hearing other peoples intentions
            and the sense of community."</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'testimonialts',
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
p {
  margin: 0;
  padding: 0;
  vertical-align: middle;
  font-size: 1.8vw;
  padding: 8%;
  height: 100%;
  color: #272838;


  @include media-breakpoint-down(lg) {
    font-size: 1.7vw;
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

.panel {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 5%;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {
    padding: 5% 13%;
  }

  @include media-breakpoint-down(sm) {
    padding: 5% 13%;
  }

  @include media-breakpoint-down(xs) {
    padding: 5% 4%;
  }
}

.testimonials {
  padding: 5% 4% 3% 4%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 35%;
  background-repeat: no-repeat;
  color: #001b65;

  @include media-breakpoint-down(lg) {
    background-position: 40%;
  }

  @include media-breakpoint-down(md) {
    padding: 5% 6% 3% 6%;
    background-position: 10%;

  }

  @include media-breakpoint-down(sm) {
    padding: 8% 3% 8% 3%;
    background-position: 30%;
  }

  @include media-breakpoint-down(xs) {
    padding: 10% 3% 10% 3%;
    background-position: 14%;
  }
}

.test {
  height: 100%;
  width: 100%;
  border: solid 1px white;
  border-radius: 0;
  background-color: white;
  opacity: .8;
  color: black;
  border-radius: 10px;
  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {}

}

.our-offerings-header-text {

  text-align: center;
  color: white;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    padding-bottom: 3%;
  }

  @include media-breakpoint-down(xs) {}
}


</style>
