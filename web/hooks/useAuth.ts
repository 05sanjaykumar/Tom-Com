// web/hooks/useAuth.ts

import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/client'; // Import your client-side auth instance

interface AuthState {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

export function useAuth(): AuthState{
    const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthState({
        user: user,
        loading: false,
        error: null,
      });
      // You could also fetch initial user profile data from Firestore here
      // and update the state if needed, but we'll do that on the profile page.
    }, (error) => { // Optional: handle errors during auth state changes
      setAuthState({
        user: null,
        loading: false,
        error: error,
      });
      console.error("Firebase auth state change error:", error);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return authState
}