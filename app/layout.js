import Header from '@/components/Header'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Space_Grotesk({ subsets: ['latin'],weight:["400", "500", "600","700"] })

export const metadata = {
  title: 'HorizonTech',
  description: 'University Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
