import React from "react";
import PropTypes from "prop-types";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import AppThemeProvider from "./providers/AppThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Template",
  description: "A good website for user to buy any product",
  openGraph: {
    title: "E-Template",
    description: "A good website for user to buy any product",
    url: "https://e-template.vercel.app",
    type: "website",
    images: [
      {
        url: "https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png",
        width: 1200,
        height: 630,
        alt: "E-Commerce OG Image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppThemeProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Navbar />
          {children}
        </body>
      </AppThemeProvider>
    </html>
  );
}

// Prop validation for children
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
