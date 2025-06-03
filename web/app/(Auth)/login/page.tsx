// web/app/(auth)/login/page.tsx
'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // shadcn/ui card


export default function LoginPage(){
    return (
        <Card className="w-full max-w-sm mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Welcome to Tom-Com!</CardTitle>
                <CardDescription>Sign in to get personalized movie recommendations.</CardDescription>
            </CardHeader>
        </Card>
    )
}