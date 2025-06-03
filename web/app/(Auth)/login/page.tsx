// web/app/(auth)/login/page.tsx

'use client'
import { supabase } from '@/lib/supabase'

export default function Login() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' })
  }

  return (
    <>
        <button onClick={handleLogin}>
        Sign in with Google
        </button>
    </>
  )
}