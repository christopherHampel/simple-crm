import { FirebaseOptions } from '@angular/fire/app';

export interface Environment {
  production: boolean;
  firebaseConfig: FirebaseOptions;
}

export const environment: Environment  = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBvDOHAbPPtUzp5KNu_dLVjd7UBDwD4v74",
    authDomain: "simple-crm-e21db.firebaseapp.com",
    projectId: "simple-crm-e21db",
    storageBucket: "simple-crm-e21db.firebasestorage.app",
    messagingSenderId: "1067243849661",
    appId: "1:1067243849661:web:f9d26d9a612fac0800b4d4"
  } as FirebaseOptions
};