
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'

import { Inter_Tight } from 'next/font/google'
import { AOSInit } from './aoshook/aoshook';
import ImportBs from './importBs';

const inter = Inter_Tight({ subsets: ['latin'] })
export const metadata = {
  title: 'CRESCO- Your Trust is our priority!',
  description: 'Real Estate Website',
  icons: {
    // icon: ['/favicon.ico?v=4'],
    // apple: ['/apple-touch-icon.png?v4'],
    // shortcut: ['/apple-touch-icon.png']
  }
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <AOSInit/>
      <body className={inter.className}>  
      <ImportBs/>
        <div>{children}</div>
      </body>
    </html>
  )
}
