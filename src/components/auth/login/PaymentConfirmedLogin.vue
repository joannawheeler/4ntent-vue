<template>
  <div class="login">
    <h2 class="thanks-please-login">Congratulations! You are ready to start living with NTENTION! Please login here to begin your journey:
    </h2>
    <div>
      <div class="input-container">
        <div class="form-group">
          <div class="input-group">
            <input v-model="email" type="text" id="email" required="required" />
            <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <input v-model="password" type="password" id="password" required="required" />
            <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
          </div>
        </div>
      </div>
      <div class="login-button-container">
        <button class="btn btn-primary" @click.stop="signIn()">
          {{'auth.login' | translate}}
        </button>
      </div>
      <div class="go-to-signup-container">
        <router-link class='link' :to="{name: 'signup'}">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase';
//eslint-disable-next-line
import init from '../../../firebaseInit';

export default {
  name: 'paymentConfirmedLogin',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  created() {},
  methods: {
    signIn: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          // need to figureo ut how to dispatch to store later , for now gonna use localstorage




          this.$store.dispatch('login', user)
          this.$store.dispatch('setuser', user)
          localStorage.setItem('userid', user.user.uid)
          this.$router.replace('dashboard')
        })
    }
  }
}

</script>
<style scoped lang="scss">
.navbar {
  width: 100%;
}


a {
  color: #4ae387;
}


h2 {
  text-align: center;
}


.login-button-container {
  text-align: center;

  button {
    font-size: 15px;
  }
}

.go-to-signup-container {
  text-align: center;
  margin-top: 1em;
}

.input-container {
  font-size: 2em !important;
}

input {
  font-size: 1em !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  height: 100%;
}

</style>
