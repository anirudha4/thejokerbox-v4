import { db } from "@config/firebase";
import { getDocs,getDoc, setDoc, doc, updateDoc ,collection} from "firebase/firestore";

export const insertOne = async (collectionName, payload, uid) => {
    try {
        console.log({ collectionName, payload });
        const docRef = await setDoc(doc(db, collectionName, uid), payload);
        return docRef;
    } catch (error) {
        console.log(error);
    }
  };
  export const updateOne = async (collectionName, payload, uid) => {
    try {
  
      const docRef = await updateDoc(
        doc(db, collectionName, uid),
        payload
      );
      return docRef;
    } catch (error) {}
  };