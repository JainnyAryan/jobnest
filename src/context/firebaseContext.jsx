import { createContext, useState, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

import firebaseConfig from "../creds/firebaseConfig";

const FirebaseContext = createContext();

export const FirebaseProvider = (props) => {
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [firebaseImageUrl, setFirebaseImageUrl] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
      setFirebaseImageUrl(null);
    }
  };

  function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
  }

  const handleUpload = () => {
    if (image) {
      const storageRef = ref(storage, `images/${getFormattedDate()}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progress);
        },
        (error) => {
          alert(error.message);
          console.error(error.message);
        },
        async () => {
          const urlFromFirebase = await getDownloadURL(uploadTask.snapshot.ref);
          setFirebaseImageUrl(urlFromFirebase);
          // alert(urlFromFirebase);
        }
      );
    }
  };



  return (
    <FirebaseContext.Provider value={{ image, progress, imageUrl, firebaseImageUrl, handleChange, handleUpload }}>
      {props.children}
    </FirebaseContext.Provider>
  );
}


export const useFirebase = () => {
  return useContext(FirebaseContext);
};