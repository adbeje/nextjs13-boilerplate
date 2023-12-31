import { Providers } from "@/redux/provider";
import "./globals.css";
import React from "react";
import AuthContextProvider from "@/contexts/authContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      <body className="container mx-auto h-full p-6">
        <AuthContextProvider>
          <Providers>{children}</Providers>
        </AuthContextProvider>
      </body>
    </html>
  );
}
