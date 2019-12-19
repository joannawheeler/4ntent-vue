<template>
  <div>
    <vuestic-widget class="personal-details-widg all-widg">
      <div class="form-group">
        <div class="input-group">
          <input id="simple-input" required />
          <label class="control-label" for="simple-input">Text input</label><i class="bar"></i>
        </div>
      </div>
    </vuestic-widget>
  </div>
</template>
<script>
export default {
  name: 'account-settings',
  computed: {

  },
  data() {
    return {
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}

</script>
<style lang="scss">
.personal-details-widg {}

</style>
