import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Midha Guru",
  description: "Your Exam Is Our Exam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
      <GoogleAnalytics gaId="G-YYJYHRV8EM" />
    </html>
  );
}
