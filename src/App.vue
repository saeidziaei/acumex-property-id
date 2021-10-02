
<template>
  <div>
    <amplify-authenticator>
      <div v-if="authState === 'signedin' && user">
        <amplify-sign-out></amplify-sign-out>
        <h1>Hi, {{ user.username }}</h1>
      </div>

      <div v-for="propid of propids" :key="propid.id">
        {{ propid.name }} -- {{ propid.landId }}
      </div>
      <router-view />
    </amplify-authenticator>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "App",
  components: {},
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
      propids: [],
      currentRoute: window.location.pathname,
    };
  },
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  beforeUnmount() {
    this.unsubscribeAuth();
  },
  methods: {
    currentUser() {
      Auth.currentAuthenticatedUser().then((user) => {
        this.user = user;
        console.log(user);
      });
    },
  },
};

// export default {
//   name: "app",
//   data() {
//     return {
//       user: {},
//     };
//   },
//   methods: {
//     currentUser() {
//       Auth.currentAuthenticatedUser().then((user) => {
//         this.user = user;
//         console.log(user);
//       });
//     },
//   },
// };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
