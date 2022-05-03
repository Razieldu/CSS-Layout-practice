const express = require("express");
const Parse = require('parse/node');
const router =express();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuAu1QThf37eR8e8LQY80v69imbBfD-f8",
  authDomain: "test-4a8b0.firebaseapp.com",
  projectId: "test-4a8b0",
  storageBucket: "test-4a8b0.appspot.com",
  messagingSenderId: "432176870165",
  appId: "1:432176870165:web:85c2185d123ac28bb9ef1c",
  measurementId: "G-PJ7NGRK5YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




router.use(express.static("public"));



router.get("/",function(req,res){
  res.send(__dirname+"public/index.html")
})

















router.listen(3000,function(){

  console.log("Server successfully run on port 3000")
})
