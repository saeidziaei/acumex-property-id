
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import Amplify from 'aws-amplify'
// // import * as AmplifyModules  from 'aws-amplify'
// // import { AmplifyPlugin } from 'aws-amplify-vue'
// import awsconfig from './aws-exports'


// Amplify.configure(awsconfig)

// const app = createApp(App)
// app.use(router)

// // app.use(AmplifyPlugin, AmplifyModules)
// app.mount('#app')
//  ************************
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { 
  applyPolyfills,
  defineCustomElements
} from '@aws-amplify/ui-components/loader';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

const app = createApp(App);
app.use(router);
app.config.isCustomElement = tag => tag.startsWith('amplify-');
app.mount('#app');