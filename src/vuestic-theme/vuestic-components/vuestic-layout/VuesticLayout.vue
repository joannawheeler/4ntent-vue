<template>
  <div class="vuestic-layout" v-resize :class="classObject">
    <slot></slot>
    <div class="content-wrap" id="content-wrap" style="">
      <slot name="content"></slot>
    </div>
    <div class="made-by-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
import Resize from '../../../directives/ResizeHandler'
export default {
  name: 'vuestic-layout',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    resize: Resize,
  },
  computed: {
    classObject: function() {
      return {
        'layout-fixed': this.fixed,
      }
    },
  },
}

</script>
<style lang="scss">
.vuestic-layout {

  display: flex;
  flex-direction: column;

  min-height: 100%;


  // color: black !important;
  font-family: Open Sans, sans-serif;
  color: white !important;

  .content-wrap {
    // height: 100% !important;
    // background-color:  !important;
    // margin-left: $content-wrap-ml;
    flex: 1;
    display: flex;


    margin-top: 0;
    transition: margin-left 0.3s ease;
    padding: 0 $layout-padding-right $content-wrap-pb 0;

    .pre-loader {
      position: absolute;
      left: $vuestic-preloader-left;
      top: $vuestic-preloader-top;
    }

    @include media-breakpoint-down(md) {
      padding: $content-mobile-wrap;
      margin-left: 0;

      .sidebar-hidden & {
        margin-left: 0;
        padding-top: $content-mobile-wrap-sb-top;
      }
    }
  }

  &-fixed {
    .content-wrap {
      padding-right: $layout-padding-right;
      padding-top: $sidebar-top;

      @include media-breakpoint-down(md) {
        padding: $content-mobile-wrap-fixed-layout;
        margin-left: 0;
      }
    }
  }

  .made-by-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    padding-bottom: $made-by-footer-pb;
    position: absolute;
    bottom: 0;
    height: calc(#{$layout-padding} + #{$widget-mb});
    width: 100%;
  }
}

// .vuestic-layout>* {
// flex: 1 100%;
// }

</style>
