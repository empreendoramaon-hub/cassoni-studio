const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean);

let firebaseServices;

export async function saveLead(payload) {
  if (!hasFirebaseConfig) {
    return false;
  }

  if (!firebaseServices) {
    const [{ initializeApp }, { addDoc, collection, getFirestore, serverTimestamp }] = await Promise.all([
      import("firebase/app"),
      import("firebase/firestore"),
    ]);

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    firebaseServices = { addDoc, collection, db, serverTimestamp };
  }

  await firebaseServices.addDoc(firebaseServices.collection(firebaseServices.db, "leads"), {
    ...payload,
    createdAt: firebaseServices.serverTimestamp(),
  });

  return true;
}
