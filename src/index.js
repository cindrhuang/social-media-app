import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PostsContextProvider } from "./context/postContext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLU_JhNxU6rzOi6WUVeNgtq6kR8k08xhM",
  authDomain: "social-media-4012.firebaseapp.com",
  projectId: "social-media-4012",
  storageBucket: "social-media-4012.appspot.com",
  messagingSenderId: "746171383033",
  appId: "1:746171383033:web:30b6ccf500f25cc9f6b628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <PostsContextProvider>
    <App />
  </PostsContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
