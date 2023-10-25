import Navbar from '../components/Navbar'
import './globals.css'
// import Link from 'next/link'
import { orbitron } from './fonts';
import { exo } from './fonts';

export const metadata = {
    title: {
      default: 'Indie Game', // a default is required when creating a template
      template: '%s | Indie Game',
    },
  }
export default function RootLayout({children}){
return(
    <html lang="en" className={`${exo.variable} ${orbitron.variable}`}>
    <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
    <header>
        <Navbar/>
    </header>
    <main className='grow py-3'>{children}</main>
    <footer className='border-t py-3 text-center text-slate-500'>
    Game data and images of <a target='_blank' href ="https://rawg.io/" className='underline text-orange-500'>RAWG</a>
    </footer>
    </body>
    </html>
)
}