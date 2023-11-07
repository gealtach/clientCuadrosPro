import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import { Providers } from './Providers';
import { FileProvider } from './FileContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CuadrosPro',
  description: 'El arte de tus recuerdos',
  icons: {
    icon: './favicon-16x16.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FileProvider>
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </FileProvider>
      </body>
    </html>
  )
}
