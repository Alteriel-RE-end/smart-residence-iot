// Mengambil SDK Firebase langsung dari Google CDN (Versi 10.7.1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// Konfigurasi dari project Anda (Sudah saya masukkan data Anda)
const firebaseConfig = {
  apiKey: "AIzaSyDqDNjxb9SeDzB8WUj0GIzvZQPcj_CmjZM",
  authDomain: "smart-residence-iot.firebaseapp.com",
  databaseURL: "https://smart-residence-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-residence-iot",
  storageBucket: "smart-residence-iot.firebasestorage.app",
  messagingSenderId: "354143267738",
  appId: "1:354143267738:web:abb4f68406c6905b6f2823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Kita export 'app' dan 'firebaseConfig' agar bisa dipakai di file lain
export { app, firebaseConfig };