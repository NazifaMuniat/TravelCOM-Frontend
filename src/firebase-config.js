import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu3LM1L-WzT88Qoe_H8UhEKy-6bjl3qKE",
  authDomain: "travelcom-759d9.firebaseapp.com",
  projectId: "travelcom-759d9",
  storageBucket: "travelcom-759d9.appspot.com",
  messagingSenderId: "678247929416",
  appId: "1:678247929416:web:8f4fefc7a379aa692caa7d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
