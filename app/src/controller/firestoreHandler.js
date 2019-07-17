import Vue from 'vue'
import { firebaseHandler } from './firebaseHandler'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore, {
  key: 'id', // the name of the property. Default is '.key'.
  enumerable: true
})

var firestoreHandler = new Vue({
  name: 'firestoreHandler',
  firestore() {
    return {
      user: this.db.collection('user'),
    }
  },
  data() {
    return {
      users: [],
      db: firebaseHandler.getDB(),
      storage: firebaseHandler.getStorage()
    }
  },
  methods: {
    getUsers() {
      return this.users;
    },
    getStorage() {
      return this.storage;
    }
  }
})

export { firestoreHandler }
