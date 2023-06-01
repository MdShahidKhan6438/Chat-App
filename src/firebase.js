import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvIjo57_fqUHz56NCKWp9f1JSaq8mRXWw",
  authDomain: "chat-app-ed022.firebaseapp.com",
  projectId: "chat-app-ed022",
  storageBucket: "chat-app-ed022.appspot.com",
  messagingSenderId: "990058494824",
  appId: "1:990058494824:web:e3b6709831341e088ef4dd"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
