// web/app/(auth)/layout.tsx
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  // You might add common auth-related components here later,
  // like a shared header or footer for login/signup pages.
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  );
}