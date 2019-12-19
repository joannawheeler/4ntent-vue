<template>
  <div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('User list')">
          <Userlist></Userlist>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import Userlist from './UserListAdv.vue'

export default {
  name: 'UserlistBasic',
  components: {
    Userlist
  }
}
</script>

