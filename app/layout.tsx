import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RedditClean – Mobile Reddit Without the App Nag",
  description: "Browse Reddit on mobile without app-forcing overlays and dark patterns. Clean, fast, private."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4c06b2e1-7e47-4d16-a67f-6e5fdad04b77"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
