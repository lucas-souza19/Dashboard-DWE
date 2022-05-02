// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_m6SGLxQ3nKVhW1wRVYHH6ZF1uC3vye0",
  authDomain: "dashboard-dwe.firebaseapp.com",
  projectId: "dashboard-dwe",
  databaseURL: "https://dashboard-dwe.firebaseio.com",
  storageBucket: "dashboard-dwe.appspot.com",
  messagingSenderId: "216025900452",
  appId: "1:216025900452:web:5faf473c79c2092f99cd31"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);