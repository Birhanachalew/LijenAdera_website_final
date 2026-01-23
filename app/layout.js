import { Inter } from 'next/font/google'
import './globals.css'
import MainHeader from './components/MainHeader'
import Footer from './components/Footer'
import NavbarWithCTAButton from './components/MainHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lijen adera',
  description: 'lijenadera',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <title>lijenadera</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>

      {/* preload all images in . folder */}
      <link rel="preload" href="about.svg" />
      <link rel="preload" href="angular-icon.svg" />
      <link rel="preload" href="/logo.ico" />
      <link rel="preload" href="daniel.svg" />
      <link rel="preload" href="developing.svg" />
      <link rel="preload" href="ecommerce.svg" />
      <link rel="preload" href="image1.svg" />
      <link rel="preload" href="image2.svg" />
      <link rel="preload" href="image3.svg" />
      <link rel="preload" href="image4.svg" />
      <link rel="preload" href="kalkidan.svg" />
      
      <link rel="preload" href="/images/hero.jpg" />
      <body className={inter.className}>
        <NavbarWithCTAButton />
        {children}
        <Footer />
        </body>
    </html>
  )
}
