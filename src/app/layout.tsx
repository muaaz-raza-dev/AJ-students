import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css';
import dynamic from "next/dynamic";
import NavigationBar from "@/components/global/navigation-bar";
import Header from "@/components/global/header";
import { ReactNode } from "react";
import LoginedStyleWrapper from "@/components/Auth/LoginedStyleWrapper";
import AuthenticatedRoutes from "@/components/APIHandler";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AJ student panel', // Title of the webpage
  description: 'Student panel to track student acedmic progress.', // Meta description for SEO
  icons: {
    icon: '/logo/logo.png', // Favicon for your app
  },
  metadataBase: new URL('https://ajfoundation.site'), // Replace with your domain
  keywords: ['your', 'app', 'keywords', 'nextjs', 'seo'], // Keywords relevant to your content
  openGraph: {
    title: 'AJ student panel', // Title of the webpage
    description: 'Student panel to track student acedmic progress.', // Meta description for SEO
    url: 'https://ajfonudation.site', // Your website URL
    siteName: 'AJ Foundation Acedemy',
    images: [
      {
        url: '/logo/logo.png', // Path to the image used in link previews
        width: 1200,
        height: 630,
        alt: 'Student panel to track student acedmic progress.', // Meta description for SEO
      },
    ],
    locale: 'en_US', // Locale for Open Graph
    type: 'website', // Type of content (e.g., website, article)
  },
};

const DependencyWrapper = dynamic(()=> import("@/components/DependencyWrapper"),{ssr:false})

export default function RootLayout(props: Readonly<{children: ReactNode;transactions: ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <title>AJ Student Panel</title>
<link rel="shortcut icon" href="/logo/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png"/>
<link rel="mask-icon" href="/logo/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#000000"/>
      </head>
     <body className={inter.className}>
      <DependencyWrapper>
      <NavigationBar/>
      <Header/>
      <main className="">
        <LoginedStyleWrapper>
          <AuthenticatedRoutes>
          {props.children}
          </AuthenticatedRoutes>
        </LoginedStyleWrapper>
      </main>
      </DependencyWrapper>
      </body>
    </html>
  );
}
