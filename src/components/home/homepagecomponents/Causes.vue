<template>
  <div class="causes">
    <div class="row no-gutters titleholder vertical-align center">
      <div class="col-12">
        <h1 class="our-offerings-header-text mont ">Friends of&nbsp;<span>
            <b-img class="ntentlogo" :src='require("../../../assets/images/logo.png")' /></span></h1>
      </div>
    </div>
    <div class="row no-gutters justify-content-center vertical-align">
      <!-- <div class="outer-eqi-container"> -->
      <!-- <div class="eqi-container"> -->
      <!-- <div class="rescue"><a href src="https://rescupets.com/"><img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/45741485_1625118654260112_5803593035669307392_n.jpg?_nc_cat=106&_nc_oc=AQmNAij0gEepLYWcGcySPwRgRmKZ92krnwwRbD0DxUX6C-T1aoynOjrbvwm-YKGgKEDN4x4iEkN7_j_0ayKuTYGX&_nc_ht=scontent-sjc3-1.xx&oh=f7d1d655722d983d0ebe11a382ae9532&oe=5D7FC717
" /></a>
</div>
 -->
      <div class="col-sm-4 col-xs-2 cause">
        <div class="abby"><a href="https://abbeyshope.org/"><img class="abby" src="https://abbeyshopedev.wpengine.com/wp-content/uploads/2018/07/DragonflyAnimation2.gif')" /></a></div>
      </div>
      <div class="col-sm-4 col-xs-2 cause">
        <div class="gsg"><a href="https://www.goldenstateguiding.com/"><img class="abby gsg" :src="require('../../../assets/images/GSG-Logo-Final.png')" /></a></div>
      </div>
      <div class="col-sm-4 col-xs-2 cause">
        <div class="solana"><a href="https://www.solanacenter.org/"><img class="abby solana" src="https://www.solanacenter.org/sites/default/files/logo.jpg" /></a></div>
      </div>
      <div class="col-sm-4 col-xs-2 cause">
        <div class="tillage"><a href="https://www.tillageclothing.com/"><img class="tillage" :src="require('../../../assets/images/tillage.png')" /></a></div>
      </div>
      <div class="col-sm-4 col-xs-2 cause">
        <div class="one-percent"><a href="https://www.tillageclothing.com/"><img class="one-percent" :src="require('../../../assets/images/one-percent.jpg')" /></a></div>

      </div>
      <!-- <div class="coast"><a href src="https://www.sdcoastkeeper.org/"><img src="https://mk0sandiegocoasfy3ss.kinstacdn.com/wp-content/themes/coastkeeper/dist/images/logo_64c4a1b5.svg" /></a>
</div>
<div class="change"><a href src="https://www.changingtidesfoundation.org"><img src="https://static1.squarespace.com/static/58e5c879cd0f6881c965c461/58e5cc5586e6c007e4331ca8/5937f004d2b8573fe3a395b9/1497165203827/Donation.jpg?format=1000w" /></a>
</div>
 -->
      <!-- <div class="pure"><a href src="https://www.purebrewing.org/"><img src="https://www.purebrewing.org/wp-content/uploads/2015/08/Pure_logo3.png" /></a>
</div>
<div class="hike"><a href src="http://hikeforbeer.com/"><img src="          http://hikeforbeer.com/wp-content/uploads/2018/01/HikeForBeer_Logo_Primary_Pos-768x559.png" /></a>
</div>
 -->
      <!-- </div> -->
    </div>
  </div>
  <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: 'causes',
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
.ntentlogo {

  margin-bottom: .15em;
  margin-left: .1em;
  width: auto;
  vertical-align: middle;
  height: 5vw;

  @include media-breakpoint-down(lg) {
    height: 5.25vw;
  }

  @include media-breakpoint-down(md) {
    height: 5.75vw;
  }

  @include media-breakpoint-down(sm) {
    height: 7.5vw;
  }

  @include media-breakpoint-down(xs) {
    height: 9.25vw;
  }
}

.causes {
  background-color: white;
  padding: 5% 4% 4% 4%;

  @include media-breakpoint-down(sm) {
    padding: 8% 5%;
  }
}

// light blue-#05ebd8 darkblue-#001b65 midblue-#1f82e5

.our-offerings-header-text {
  color: #001b65;
  text-align: center;

  margin: 0;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    line-height: 10vw;
  }

  @include media-breakpoint-down(xs) {}
}

// .outer-eqi-container {
//   @include media-breakpoint-down(lg) {
//     padding: 0 20%;
//   }

//   @include media-breakpoint-down(md) {
//     padding: 0 8%;
//   }

//   @include media-breakpoint-down(sm) {
//     padding: 0 8%;
//   }

//   @include media-breakpoint-down(xs) {
//     padding: 0 8%;
//   }

// }
.eqi-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  @include media-breakpoint-down(lg) {}

}


// .eqi-container img {
// margin: 3vw;
// height: auto;
// width: 11vw;
// @include media-breakpoint-down(lg) {}
// @include media-breakpoint-down(md) {}
// @include media-breakpoint-down(sm) {}
// @include media-breakpoint-down(xs) {}
// }


.cause div {
  padding: 15%;

  @include media-breakpoint-down(lg) {}

  @include media-breakpoint-down(md) {}

  @include media-breakpoint-down(sm) {
    // width: 16vw;
  }

  @include media-breakpoint-down(xs) {
    // width: 22vw;
    padding: 10% 15%;
  }
}



.abby {
  // width: 18vw;
  width: 100%;

  @include media-breakpoint-down(lg) {
    // width: 21vw;
  }

  @include media-breakpoint-down(md) {
    // width: 22vw;
  }

  @include media-breakpoint-down(sm) {
    // width: 37vw;
  }

  @include media-breakpoint-down(xs) {
    // width: 38vw;
    padding-bottom: 0 !important;
  }
}

.gsg {
  // width: 9vw;
  width: 100%;
  padding: 15%;

  @include media-breakpoint-down(lg) {
    // width: 9vw;
  }

  @include media-breakpoint-down(md) {
    // width: 12vw;
  }

  @include media-breakpoint-down(sm) {
    // width: 17vw;
  }

  @include media-breakpoint-down(xs) {
    // width: 17vw;
    padding: 0% 20%;
  }
}


.solana {
  width: 100%;

  @include media-breakpoint-down(lg) {
    // width: 100%;
  }

  @include media-breakpoint-down(md) {
    // width: 25vw;
  }

  @include media-breakpoint-down(sm) {
    // width: 50vw;
  }

  @include media-breakpoint-down(xs) {
    // width: 63vw;
  }
}

.tillage {
  // width: 11vw;
  width: 100%;

  @include media-breakpoint-down(lg) {
    // width: 14vw;
  }

  @include media-breakpoint-down(md) {
    // width: 14vw;
  }

  @include media-breakpoint-down(sm) {
    // width: 22vw;
  }

  @include media-breakpoint-down(xs) {
    // width: 26vw;
  }
}

.one-percent {
  // width: 11vw;
  width: 100%;

  @include media-breakpoint-down(lg) {
    // width: 14vw;
  }

  @include media-breakpoint-down(md) {
    // width: 14vw;
  }

  @include media-breakpoint-down(sm) {
    // width: 22vw;
  }

  @include media-breakpoint-down(xs) {
    // width: 26vw;
  }
}

.rescue {
  // width: 7vw;
  width: 100%;

  @include media-breakpoint-down(lg) {
    // width: 10vw;
  }

  @include media-breakpoint-down(md) {
    // width: 13vw;
  }

  @include media-breakpoint-down(sm) {
    // width: 16vw;
  }

  @include media-breakpoint-down(xs) {
    // width: 22vw;
    padding: 0% 15%;
  }
}


.coast img {
  // width: 12vw;
  width: 100%;

  @include media-breakpoint-down(lg) {
    // width: 15vw;
  }

  @include media-breakpoint-down(md) {
    // width: 18vw;
  }

  @include media-breakpoint-down(sm) {
    // width: 21vw;
  }

  @include media-breakpoint-down(xs) {
    // width: 27vw;
  }
}


.change img {
  // width: 9vw;
  width: 100%;

  @include media-breakpoint-down(lg) {
    // width: 12vw;
  }

  @include media-breakpoint-down(md) {
    // width: 15vw;
  }

  @include media-breakpoint-down(sm) {
    // width: 18vw;
  }

  @include media-breakpoint-down(xs) {
    // width: 24vw;
  }
}




.pure img {
  // width: 12vw;
  width: 100%;

  @include media-breakpoint-down(lg) {
    // width: 15vw;
  }

  @include media-breakpoint-down(md) {
    // width: 18vw;
  }

  @include media-breakpoint-down(sm) {
    // width: 21vw;
  }

  @include media-breakpoint-down(xs) {
    // width: 27vw;
  }
}

.hike img {
  // width: 9vw;
  width: 100%;

  @include media-breakpoint-down(lg) {
    // width: 12vw;
  }

  @include media-breakpoint-down(md) {
    // width: 15vw;
  }

  @include media-breakpoint-down(sm) {
    // width: 18vw;
  }

  @include media-breakpoint-down(xs) {
    // width: 24vw;
  }
}

</style>
