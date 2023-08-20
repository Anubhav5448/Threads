import TopBar from '@/components/shared/TopBar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftSideBar from '@/components/shared/LeftSideBar'
import RightSideBar from '@/components/shared/RightSideBar'
import BottomBar from '@/components/shared/BottomBar'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <main>
          <LeftSideBar/>
          <section className='main-container'>
            <div className='w-full max-w-4xl'></div>
            {children}

          </section>
          <RightSideBar/>
        </main>
        <BottomBar/>
        </body>
    </html>
    </ClerkProvider>
  )
}
