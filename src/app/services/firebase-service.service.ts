import { Injectable, inject } from '@angular/core';
import { collectionData, Firestore, collection, doc, addDoc } from '@angular/fire/firestore';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  firestore = inject(Firestore);

  constructor() { }

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

}
