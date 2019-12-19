<template>
  <div class="ntntlivinggridcontainer">
    <div class="row">
      <div class="col-md-1" />
      <div class="heading col-md-10">
        <div class="title">
          What is Ntentional Living?
        </div>
        <p>
          It means surrounding yourself with a community of individuals that can support and hold you accountable for
          your daily intentions. We know consciously taking on a purpose is easier said than done. Our team of
          knowledgeable 4NTENT professionals are here to put the action and engagement into that purpose.
        </p>
      </div>
      <div class="col-md-1" />
    </div>
    <div class='row'>
      <div class="col-md-1" />
      <div class="col-md-10">
        <div class="row containcontainers">
          <div class="livcontainer">
            <img :src='require("../../../assets/images/mod3cont1.png")' />
            <div class="innercontainer">
              <div class="containertext">
                <div class="containertitle">
                  Bring Ntention Into Your Life
                </div>
                <p class="containerp">
                  Create the most optimal wellness plan that's best suited for you as well as for your community.
                </p>
              </div>
              <router-link :to="{path: '/assessment'}">
                <div class="ntentbutton containerbutton">
                  Bring Ntention Today
                </div>
              </router-link>
            </div>
            <div class="bottomborder" />
          </div>
          <div class="livcontainer">
            <img style="float:right" :src='require("../../../assets/images/mod3cont2.png")' />
            <div class="innercontainer">
              <div class="containertext">
                <div class="containertitle">
                  Bring Together All Your Goals
                </div>
                <p class="containerp">
                  Unite your nutrition, fitness, and lifestyle + social causes create Ntentional Living.
                </p>
              </div>
              <router-link :to="{path: '/assessment'}">
                <div class="ntentbutton containerbutton">
                  Achieve Your Goals Now
                </div>
              </router-link>
            </div>
            <div class="bottomborder" />
          </div>
          <div class="livcontainer">
            <img :src='require("../../../assets/images/mod3cont3.png")' />
            <div class="innercontainer">
              <div class="containertext">
                <div class="containertitle">
                  Receive Guidance of 4 Professionals for the Price of 1.
                </div>
                <p class="containerp">
                  Easy efficient access to track your progrss with our portal tools and start giving back with each step you take!
                </p>
              </div>
              <router-link :to="{path: '/assessment'}">
                <div class="ntentbutton containerbutton">
                  Start Living Today
                </div>
              </router-link>
            </div>
            <div class="bottomborder" />
          </div>
        </div>
      </div>
      <div class="col-md-1" />
    </div>
    <p />
  </div>
</template>
<script>
export default {
  name: 'nutritionalliving',
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
html,
body {
  background-color: white;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
}

img {
  margin: auto;
  text-align: center;
  vertical-align: middle;
  position: relative;
  float: left;
  width: 385px;
  height: 285px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.ntntlivinggridcontainer {
  background-color: white;
  padding-top: 95px;
  padding-bottom: 35px;

  @include media-breakpoint-down(md) {
    padding: 25px;
  }
}

.containcontainers {
  padding: 20px 10px 20px 10px;
  font-size: 1.2rem;
  color: #001b65
}

.containertitle {
  font-size: 1.3em;
  height: 150px;
  font-weight: bold;
}

.containerp {
  padding-bottom: 100px;
}

.containerbutton {
  font-weight: bold;
  font-size: 1.1rem;
}

.innercontainer {
  padding-top: 80%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  width: 370px;
}

.containertext {
  height: 400px;
}

.bottomborder {
  background-color: #001b65;
  height: 20px;
  margin: 0px;
  padding: 0px;
}

.ntentbutton {
  color: white;
  padding: 15px;
}

.livcontainer {
  border: solid grey 3px;
  background-color: lightgray;
  padding: 0;
  width: 370px;
  overflow: hidden;
  margin: auto;

  @include media-breakpoint-down(md) {
    margin: 15px;
  }
}

</style>
