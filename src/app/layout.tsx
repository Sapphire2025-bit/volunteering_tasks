"use client";
import './globals.css';
import React, { ReactNode } from "react";
import Script from 'next/script';
import { HeaderHeightProvider } from './context/HeaderHeightContext'; // Import the provider

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderHeightProvider>
      <html lang="en">
        <body >
          <main className='h-screen'>
            {children}
          </main>
          <Script
            src="https://cdn.enable.co.il/licenses/enable-L34552majigz0bvr-1224-66349/init.js"
            strategy="afterInteractive"
          />
        </body>
      </html>
    </HeaderHeightProvider>
  );
}