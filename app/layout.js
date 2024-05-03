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
      {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=G-YYJYHRV8EM"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      <GoogleAnalytics gaId="G-YYJYHRV8EM" /> */}
    </html>
  );
}
