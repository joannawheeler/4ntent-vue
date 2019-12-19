<template>
  <div class="about">
    <div class="row no-gutters">
      <div class="col-12-xs centered">
        <div>
          <a href="https://www.4ntent.com">
            <img class="ntent-icon" src="../../../assets/images/4ntent_Portal.png" /></a>
        </div>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-12-xs centered">
        <a href="https://www.instagram.com/4NTENT">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="37" height="37" viewBox="0 0 26 26" style=" fill:#05ebd8; margin: 1px 10px 0 0;">
            <g id="surface1">
              <path style=" " d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z "></path>
            </g>
          </svg></a>
        <a href="https://Twitter.com/4NTENT">
          <img class="social-icon twitter-icon" src="../../../assets/icons/icontwitter.svg" /></a>
        <a href="http://www.facebook.com/4NTENT/">
          <img class="social-icon fb-icon" src="../../../assets/icons/iconfacebook.svg" /></a>
        <a href="https://www.youtube.com/channel/UCKl0_GIpW2sQX7sd8sT-DpA">
          <img class="social-icon youtube-icon" src="../../../assets/icons/iconyoutube.svg" /></a>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-12-xs centered">
        <div class="address-phone">
          <span><a href="mailto:empower@4ntent.com">empower@4ntent.com</a></span><br>
          <span><a class="" href="tel:1-323-682-0451">(323) 682-0451</a></span><br>
          <span class="">531 Encinitas Blvd Suite 200 <br> Encinitas, CA 92024</span>
        </div>
      </div>
    </div>
    <div id="footer" class="center"> 4ntent ©2019</div>
  </div>
</template>
<script>
export default {
  name: 'about',
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
.about {
  padding: 20px 20px 0px 20px;
  background-color: #001b65;
  color: #05ebd8;
  text-align: center;
}

a {
  text-decoration: none;
  color: #05ebd8;
}

.centered {
  display: block;
  margin: 0 auto;
}

.ntent-icon {
  width: 50%;
  height: 50%;
  margin: 10px;

}

.social-icon {
  height: 40px;
  width: auto;
  margin: 10px;
  fill: yellow;
}

.youtube-icon {
  height: 40px;
  width: auto;
}


.phone-number {
  margin: 10px;
}

.address-phone {
  margin: 10px 0 0 0;
}

</style>
