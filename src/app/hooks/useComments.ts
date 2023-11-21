// import { useState, useEffect } from 'react';
// import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
// import { db } from '../firebase-config';



// function useComments(blogId: string) {

//   const [comments, setComments] = useState<Comment[]>([]);
//   const [rating, setRating] = useState(0);

//   // Funktion zum Hinzufügen eines Kommentars
//   const addComment = async (comment: any) => {
//     try {
//       const commentsRef = collection(db, 'blogs', blogId, 'comments');
//       const docRef = await addDoc(commentsRef, comment);
//       console.log('Kommentar erfolgreich hinzugefügt mit ID: ', docRef.id);
//     } catch (error) {
//       console.error('Fehler beim Hinzufügen des Kommentars: ', error);
//     }
//   };

//   // Funktion zum Hinzufügen einer Bewertung
//   const addRating = async (newRating: any) => {
//     try {
//       const ratingsRef = collection(db, 'blogs', blogId, 'ratings');
//       const docRef = await addDoc(ratingsRef, {
//         rating: newRating,
//         timestamp: serverTimestamp()
//       });
//       console.log('Bewertung erfolgreich hinzugefügt mit ID: ', docRef.id);
//     } catch (error) {
//       console.error('Fehler beim Hinzufügen der Bewertung: ', error);
//     }
//   };

//   // Funktion zum Abrufen von Kommentaren
//   const getComments = async () => {
//     try {
//       const commentsRef = collection(db, 'blogs', blogId, 'comments');
//       const querySnapshot = await getDocs(commentsRef);
//       const commentList = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setComments(commentList);
//     } catch (error) {
//       console.error('Fehler beim Abrufen der Kommentare: ', error);
//     }
//   };

//   useEffect(() => {
//     // Hier kannst du die Initialisierung der Kommentare und Bewertungen durchführen
//     // Du kannst dies anpassen, um die Daten beim Laden der Detailseite zu initialisieren
//     // getComments();
//   }, []);

//   return {
//     comments,
//     rating,
//     addComment,
//     addRating,
//     getComments
//   };
// }

// export default useComments;
