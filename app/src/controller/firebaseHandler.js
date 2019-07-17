import * as firebase from 'firebase'
import Vue from 'vue'

var firebaseHandler = new Vue({
  name: 'firebaseHandler',
  data() {
    return {
      env: process.env.NODE_ENV,
      user: null,
      db: null,
      firebaseApp: null,
    }
  },
  methods: {
    initApp() {
      var config = { // development
        apiKey: "api-key",
        authDomain: "project-id-stage.firebaseapp.com",
        databaseURL: "https://project-id-stage.firebaseio.com",
        projectId: "project-id-sstage",
        storageBucket: "project-id.appspot.com",
        messagingSenderId: "sender-id",
        appID: "app-id",
      };
      this.firebaseApp = firebase.initializeApp(config)
      this.db = this.firebaseApp.firestore()
    },
    getUser() {
      return this.user
    },
    getDB() {
      return this.db
    },
    getStorage() {
      return this.firebaseApp.storage()
    },
    getFirebaseInstance() {
      return this.firebaseApp
    },
  },
  created() {
    this.initApp()
  }
})

export { firebaseHandler }
