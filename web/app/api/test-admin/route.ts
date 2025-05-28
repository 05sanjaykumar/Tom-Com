// web/app/api/test-admin/route.ts (or web/pages/api/test-admin.ts)

import { adminDb, adminAuth } from '../../../services/firebase'; // Adjust path if necessary

export async function GET(request: Request) {
  try {
    // Test Firestore: Try to read a non-existent document or a simple public document
    // This just checks if the Firestore instance is accessible.
    const testDocRef = adminDb.collection('__admin_test').doc('status');
    await testDocRef.get(); // Attempt to read (no error means it's initialized)

    // Test Auth: Try to list a user or get a user by UID (if you have one)
    // This is a privileged operation, so it confirms Admin Auth works.
    // Replace with a known user UID if you have one, or comment out if you don't.
    // For a quick test, you can try to list 1 user:
    const { users } = await adminAuth.listUsers(1);
    console.log('Admin SDK Test: Successfully listed 1 user:', users.length > 0 ? users[0].uid : 'No users found');


    return new Response(JSON.stringify({
      status: 'success',
      message: 'Firebase Admin SDK initialized and working correctly!',
      firestoreChecked: true,
      authChecked: true,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error: any) {
    console.error('Firebase Admin SDK Test Error:', error);
    return new Response(JSON.stringify({
      status: 'error',
      message: 'Firebase Admin SDK failed to initialize or perform operation.',
      error: error.message,
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}