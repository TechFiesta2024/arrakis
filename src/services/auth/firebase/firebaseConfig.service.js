import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRWfMXD14fieTxWITZHoIYvQRRPSSrMUo",
  authDomain: "testtechfiesta.firebaseapp.com",
  projectId: "testtechfiesta",
  storageBucket: "testtechfiesta.appspot.com",
  messagingSenderId: "209892061269",
  appId: "1:209892061269:web:78c893eee44798d65764dc",
  measurementId: "G-GTSSQ3WBK6"
};

export const app = initializeApp(firebaseConfig);