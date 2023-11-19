import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { browserSessionPersistence, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBHASag2E4YJdBdhxLxT7duGmbmU_QkrUw',
  authDomain: 'blog-app-a06fe.firebaseapp.com',
  projectId: 'blog-app-a06fe',
  storageBucket: 'blog-app-a06fe.appspot.com',
  messagingSenderId: '368501545423',
  appId: '1:368501545423:web:38e67d78c2211ae283daba'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.setPersistence(browserSessionPersistence);
const db = getFirestore(app);
const storage = getStorage(app);


// const addTagToFirestore = async (tagTitle: string) => {
//   try {
//     const tagsRef = collection(db, 'tags');
//     await addDoc(tagsRef, { title: tagTitle });
//     console.log('Tag erfolgreich hinzugefügt');
//   } catch (error) {
//     console.error('Fehler beim Hinzufügen des Tags: ', error);
//   }
// };


export { auth, db, storage }; 
