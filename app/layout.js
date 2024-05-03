import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Midha Guru",
  description: "Your Exam Is Our Exam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YYJYHRV8EM"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YYJYHRV8EM');
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
