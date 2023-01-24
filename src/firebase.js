import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.React_APP_ApiKey,
  authDomain: process.env.React_APP_AuthDomain,
  projectId: process.env.React_APP_ProjectId,
  storageBucket: process.env.React_APP_StorageBucket,
  messagingSenderId: process.env.React_APP_MessaginSenderId,
  appId: process.env.React_APP_AppId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
