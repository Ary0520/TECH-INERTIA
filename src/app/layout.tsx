import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Tech Inertia 2025 | 12-Hour Hackathon",
  description: "Join us for an exciting journey of coding, innovation, and creativity at Tech Inertia, a 12-hour hackathon in Delhi, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} cyber-grid min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
