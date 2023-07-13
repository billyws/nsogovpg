import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'


import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'National Statistical Office',
  description: 'Government Statistical Agency of Papua New Guinea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       </body>
       <div className='bg-blue-200'>
        <Header />
        
        <main>{children}</main>
        <Footer/>
        </div>
            
    </html>
  )
}
