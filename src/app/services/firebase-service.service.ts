import { Injectable, inject } from '@angular/core';
import { collectionData, Firestore, collection, doc, addDoc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})

export class FirebaseServiceService {

  firestore = inject(Firestore);
  items$ = collectionData(this.getUserRef(), { idField: 'id' });
  
  constructor() { 
   }

  getUserRef() {
    return collection(this.firestore, 'users');
  }

  getSingleDocRef(collectionID:string, documentID:string) {
    return doc(collection(this.firestore, collectionID), documentID)
  }

  async addUser(user: {}) {
    await addDoc(this.getUserRef(), user).catch(
      (err) => { console.error(err) }
    ).then(
      (documentID) => {console.log('Document written with ID: ', documentID)}
    )
  }

  async getUser(id:string) {
    const docRef = doc(this.getUserRef(), id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return
    }
  }
} 