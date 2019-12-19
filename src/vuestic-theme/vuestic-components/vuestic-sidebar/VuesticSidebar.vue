<template>
  <aside class="vuestic-sidebar">
    <vuestic-scrollbar>
      <ul class="sidebar-menu">
        <slot name="menu"></slot>
      </ul>
    </vuestic-scrollbar>
  </aside>
</template>
<script>
export default {
  name: 'vuestic-sidebar',
  props: {
    hidden: {
      type: Boolean,
      required: true,
    },
  },
}

</script>
<style lang="scss">
$sidebar-mobile-width: 25%;

.vuestic-sidebar {
  background: white;
  height: 100%;
  margin-top: -80px;
  box-shadow: $sidebar-box-shadow;


  @include media-breakpoint-down(md) {
    // top: $sidebar-mobile-top;
    left: 0;
    width: $sidebar-mobile-width;
    z-index: $sidebar-mobile-z-index;
  }

  @include media-breakpoint-down(sm) {
    width: $sidebar-mobile-width;
  }

  // height: $sidebar-viewport-height;
  // height: 100%;
  position: fixed;
  width: $sidebar-width;
  // top: $sidebar-top;
  // left: $sidebar-left;
  left: 0;
  transition: all 0.2s ease;
  opacity: 1;

  .vuestic-scrollbar {
    height: 100%;
    padding: 10% 0%;

    .sidebar-menu {
      max-height: 100%;
      margin-bottom: 0;
      list-style: none;
      padding-left: 0;

      li {
        display: block;
        // text-align: right;

        a {
          padding-left: 7%;
          padding-right: 7%;
        }
      }
    }

    .scrollbar-wrapper {
      box-shadow: none;
    }

    .scrollbar-content {
      // background: $sidebar-bg;
      color: $sidebar-text-color;
    }

  }

  &.sidebar-hidden {
    @include media-breakpoint-down(md) {
      top: $sidebar-hidden-top-mobile;
      opacity: 0;
      z-index: $sidebar-mobile-z-index;
      height: $sidebar-hidden-height-mobile;
    }

    top: $sidebar-hidden-top;
    opacity: 0;
    z-index: $min-z-index;
  }

  &.sidebar-hidden+.content-wrap {
    @include media-breakpoint-down(md) {
      margin-left: 0;
    }

    margin-left: $sidebar-left;
  }
}

</style>
