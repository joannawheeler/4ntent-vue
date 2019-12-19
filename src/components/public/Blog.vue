<template>
  <div class="about">
    <div id='testback'>
      <div>
        <div class="row">
          <div class="mod5title"> Blog </div>
        </div>
      </div>
        <div class="row">
          <div class="col-md-2" />
          <div class="col-md-8 testimonial lato">
            <h5>Lorem ipsum dolor sit amet</h5><br>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
          </div>
          <div class="col-md-2" />
        </div>
        
        <div class="row">
          <div class="col-md-2" />
          <!-- <div class="col-md-2 testimonial lato"> 
            Hello
          </div> -->
          <div class="col-md-8 testimonial lato">
            <h5>Lorem ipsum dolor sit amet</h5><br>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
          </div>
          <div class="col-md-2" />
        </div>

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
  .mod5title {
    font-size: 1.5rem;
    padding: 50px;
    border-style: solid;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 165px; 
  }
  #testback {
    background: url('../../assets/images/Dadmeditating4NTENT.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-rows: 350px 700px;
  }
  .center{
    text-align: center;
    height: 400px;
  }
  .testimonial {
    font-size: 1.0rem;
    padding: 50px;
    background-color: white;
    margin: 15px;
    padding-bottom: 100px;
    margin-bottom: 100px;
  }
</style>
