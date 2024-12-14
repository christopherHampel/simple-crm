import { Injectable, inject } from '@angular/core';
import { collectionData, Firestore, collection, doc, addDoc, onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})

export class FirebaseServiceService {

  firestore = inject(Firestore);
  items$ = collectionData(this.getUserRef());
  items: {} = '';
  unsub: {} = '';

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

  getUser() {
    const unsub = onSnapshot(this.getUserRef(), (users) => {
      users.forEach(user => {
        console.log(user.data())
      });
    });
  }
}