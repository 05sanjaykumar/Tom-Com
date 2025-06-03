// web/app/(auth)/login/page.tsx

'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // shadcn/ui card
import { auth, db } from '@/lib/firebase/client'
import { doc, setDoc, getDoc } from 'firebase/firestore'; // For Firestore operations
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button'; 
import { useAuth } from '@/hooks/useAuth';


export default function LoginPage(){

    const router = useRouter();
    const { user, loading } = useAuth(); 
    const [signInError, setSignInError] = useState<string | null>(null);
    const [isSigningIn, setIsSigningIn] = useState(false); // State for button loading

    useEffect(() => {
      if (!loading && user && !isSigningIn) {
            router.push('/profile'); // Redirect to profile or dashboard after successful login
        }
    }, [user, loading, router, isSigningIn])
    

    const handleGoogleSignIn = async ()=>{
        setIsSigningIn(true);
        setSignInError(null);

        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const firebaseUser = result.user;

            // --- Important: Create/Update user profile in Firestore ---
            const userRef = doc(db, 'users', firebaseUser.uid);
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                // New user: Create a basic profile document
                await setDoc(userRef, {
                email: firebaseUser.email,
                displayName: firebaseUser.displayName,
                photoURL: firebaseUser.photoURL,
                createdAt: new Date(), // Using client-side date for now, serverTimestamp is better for Admin SDK
                genrePreferences: {}, // Initialize empty genre preferences
                watchedMovies: [],
                upvotedMovies: [],
                downvotedMovies: [],
                tasteProfileEmbedding: [],
                notificationsEnabled: true,
                preferredLanguage: "en-US",
                }, { merge: true }); // Use merge: true to avoid overwriting if document exists partially
                console.log("New user profile created in Firestore:", firebaseUser.uid);
            } else {
                // Existing user: You might want to update lastLogin or other fields
                await setDoc(userRef, { lastLogin: new Date() }, { merge: true });
                console.log("Existing user logged in:", firebaseUser.uid);
            }


        } catch (error:any) {
            console.error("Error during Google sign-in:", error);
            setSignInError(error.message || "An unexpected error occurred during sign-in.");
            setIsSigningIn(false);
        }
    };

    if(loading ||  (user && !isSigningIn)){
         return <LoadingSpinner />;
    }

    return (
        <Card className="w-full max-w-sm mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Welcome to Tom-Com!</CardTitle>
                <CardDescription>Sign in to get personalized movie recommendations.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {signInError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Error:</strong>
                        <span className="block sm:inline"> {signInError}</span>
                    </div>
                )}
                <Button
                onClick={handleGoogleSignIn}
                disabled={isSigningIn}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center space-x-2"
                >
                    {isSigningIn ? (
                        <>
                        <LoadingSpinner className="w-4 h-4" /> {/* Small spinner for button */}
                        <span>Signing In...</span>
                        </>
                    ) : (
                        <>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            {/* Google Icon SVG */}
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h6.29c-.29 1.45-1.12 2.68-2.31 3.56v3.27h3.35c1.95-1.8 3.08-4.35 3.08-7.34z" />
                            <path d="M12 23c3.08 0 5.66-1.01 7.54-2.75l-3.35-3.27c-.91.6-2.09.96-3.7.96-2.86 0-5.29-1.92-6.16-4.52H2.88v3.35C4.74 20.35 8.01 23 12 23z" />
                            <path d="M5.84 14.09c-.2-.6-.31-1.23-.31-1.91s.11-1.31.31-1.91V8.46H2.88c-.68 1.39-.99 2.94-.99 4.54s.3 3.15.99 4.54L5.84 14.09z" />
                            <path d="M12 4.75c1.67 0 3.12.68 4.22 1.77L19.53 3.02c-1.8-1.74-4.25-2.77-7.53-2.77C8.01.25 4.74 2.9 2.88 5.65l2.96 2.22C6.71 6.67 9.14 4.75 12 4.75z" />
                        </svg>
                        <span>Sign in with Google</span>
                        </>
                    )}
                </Button>
                {/* Potentially add email/password login form here later */}
            </CardContent>
        </Card>
    )
}