
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'
import { Inter_Tight } from 'next/font/google'
import { AOSInit } from './aoshook/aoshook';
import ImportBs from './importBs';
import localfont from "next/font/local"

const inter = Inter_Tight({ subsets: ['latin'] })

const roboto= localfont({
  src:[
    {
      path:"../../public/fonts/Roboto-Black.ttf",
      weight:"700"
    },
  ],
  variable:"--font--roboto"
})

export const metadata = {
  title: 'CRESCO- Your Trust is our priority!',
  description: 'Real Estate Website',
  icons: {
    icon: ['/cresco.png?v=4'],
    apple: ['/cresco.png?v4'],
    shortcut: ['/cresco.png']
  }
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en" className={`${roboto.variable} font-sansmono`}>
      <AOSInit/>
      <body className={inter.className}>  
      <ImportBs/>
        <div>{children}</div>
      </body>
    </html>
  )
}
