// app/layout.tsx
import './globals.css';

export const metadata = {
  title: "Tom-Com",
  description: "Your personalized movie recommender",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
