import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "xxxxxxxx",
//   authDomain: "xxxxxxxx.firebaseapp.com",
//   databaseURL:
//     "https://bellarosa-adfff-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "vue-config-app",
//   storageBucket: "vue-config-app.appspot.com",
//   messagingSenderId: "xxxxxxx",
//   appId: "xxxxxxx"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAnkGDT4FZpj7gTtbjNMoUXCKjToxM6-4k",
  authDomain: "bellarosa-adfff.firebaseapp.com",
  databaseURL: "https://bellarosa-adfff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bellarosa-adfff",
  storageBucket: "bellarosa-adfff.firebasestorage.app",
  messagingSenderId: "639536168183",
  appId: "1:639536168183:web:a99cbf8158aca2d4baa7f2",
  measurementId: "G-8MMBMJ3229"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);