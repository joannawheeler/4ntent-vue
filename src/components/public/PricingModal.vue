<!-- not currently in use -->

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
        </v-card-title>
        <v-card-text>
          <signup-reg :displayModal="this.displayModal" :display="this.display" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <div class="flex-grow-1"></div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import SignupReg from './SignupReg'
export default {
  name: 'pricing-modal',
  components: {
    SignupReg
  },
  props: {
    displayModal: ''
  },
  data() {
    return {
      dialog: true,
      display: 'signup'
    }
  },
  methods: {}
}

</script>
