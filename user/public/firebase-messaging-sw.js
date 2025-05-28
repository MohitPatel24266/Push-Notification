
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPBPGalm20iFdQe0na1Lc4M229LZJlZHg",
  authDomain: "push-notification-6f24f.firebaseapp.com",
  projectId: "push-notification-6f24f",
  storageBucket: "push-notification-6f24f.firebasestorage.app",
  messagingSenderId: "1002342093073",
  appId: "1:1002342093073:web:7d7805a309c43f5bfabcb0",
  measurementId: "G-DL4MCMP1Q9"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage( (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
}); 