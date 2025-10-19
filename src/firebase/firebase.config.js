// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1N7ga7_F03VkNqBdYLoADey_o49mgu8w",
  authDomain: "dragon-news-breaking-f033e.firebaseapp.com",
  projectId: "dragon-news-breaking-f033e",
  storageBucket: "dragon-news-breaking-f033e.firebasestorage.app",
  messagingSenderId: "942970621525",
  appId: "1:942970621525:web:c0d4b67bca0539285d8edc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);