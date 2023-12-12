 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyB5hABSe6BMGqpSu4zJi9z21Bt7dF_qrsI",
   authDomain: "merrychristmas-87e5b.firebaseapp.com",
   databaseURL: "https://merrychristmas-87e5b-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "merrychristmas-87e5b",
   storageBucket: "merrychristmas-87e5b.appspot.com",
   messagingSenderId: "906262194915",
   appId: "1:906262194915:web:8716333f6c0bfb057873d6",
   measurementId: "G-N45WX5YXV4"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 // Lấy liên kết Facebook của người dùng từ tham số URL
var facebookLink = window.location.search.substring(1);

// Kiểm tra xem liên kết có giá trị không
if (facebookLink) {
  // Push liên kết vào Firebase Realtime Database
  var newLinkRef = database.ref('facebook_links').push();
  newLinkRef.set({
    link: facebookLink,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  });
}
