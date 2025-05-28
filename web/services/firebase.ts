// web/services/firebase.ts (for server-side Admin SDK)

// Import initializeApp, getApps, cert from 'firebase-admin/app'
import { initializeApp, getApps, cert, getApp } from 'firebase-admin/app'; // Added getApp here

// Import the Auth and Firestore service functions from their respective sub-packages
// These are typically imported as default exports or as the specific functions
import { getAuth as adminGetAuth } from 'firebase-admin/auth';         // Correct way to get Auth service
import { getFirestore as adminGetFirestore } from 'firebase-admin/firestore'; // Correct way to get Firestore service


// Ensure the service account JSON is loaded from environment variable
const serviceAccountJson = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON;

if (!serviceAccountJson) {
  console.error('FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON environment variable is not set.');
  // Handle this error appropriately in a production environment
  throw new Error('Firebase Admin service account JSON is missing.');
}

let serviceAccount: any;
try {
    // Parse the JSON string into an object
    serviceAccount = JSON.parse(serviceAccountJson);
} catch (error) {
    console.error('Failed to parse FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON:', error);
    throw new Error('Invalid Firebase Admin service account JSON format.');
}

// Initialize Firebase Admin only once
// Store the initialized app instance
const adminApp = !getApps().length
  ? initializeApp({ credential: cert(serviceAccount) })
  : getApp(); // Use getApp() to retrieve the already initialized app instance


// Get the instances of the Auth and Firestore services
// Call the imported functions with the initialized adminApp instance
const adminDb = adminGetFirestore(adminApp);
const adminAuth = adminGetAuth(adminApp);

export { adminDb, adminAuth };