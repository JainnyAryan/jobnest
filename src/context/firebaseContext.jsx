import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import firebaseConfig from "../creds/firebaseConfig";

const FirebaseContext = createContext();

const FirebaseProvider = (props) => {
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
}