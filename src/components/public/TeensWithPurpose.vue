<template>
  <div class="teenswithpurpose">
    <div id='testback'>
      <div>
        <div class="row">
      <img class="mod5title" :src="require('../../assets/images/teenswithpurpose.png')"/>
        </div>
      </div>
    </div>
      <div class="row spacer">
        <div class="col-md-3" />
        <div class="col-md-6 testimonial lato">
          <h2>FREE EDUCATION and 3 Day Intensives Available </h2><br>
          <h4>Learn How To: </h4><br>
          Build a Healthy Ntentional Lifestyle. <br>

          Improve Your Relationships!<br>
          Feel Better!<br>
          Meet your goals (Nutrition, Fitness, Lifestyle).<br>

          Get What You Want From Life. <br>

          Make a Difference! <br>
          <br>
          Eventbrite Link: <a href="https://www.eventbrite.com/e/teens-with-purpose-tickets-56373104473"> <br> https://www.eventbrite.com/e/teens-with-purpose-tickets-56373104473 </a>
        </div>
        <div class="col-md-3" />
      </div>
  </div>
</template>

<script>

  export default {
    name: 'testimonialts',
    components: {},
    data () {
      return {}
    },
    methods: {
      gotoassess: function () {}
    },
    created () {},
    firestore () {
      return {}
    }
  }

</script>
<style lang="scss" scoped>
  a{
    color:#001b65;
  }
  h2{
    padding-bottom:-25px;
  }
  .spacer {
    padding-top: 120px;
  }
  .mod5title {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 145px; 
  }
  #testback {
    background: url('../../assets/images/Dadmeditating4NTENT.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-rows: 150px 400px;
  }
  .center{
    text-align: center;
    height: 400px;
  }
  .testimonial {
    top:-100px;
    font-size: 1.2rem;
    padding: 50px;
    background-color: white;
    margin: 15px;
    border-bottom: solid #001b65 15px;
    border-radius: 15px;
  }
</style>
