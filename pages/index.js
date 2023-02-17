import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My application</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Hello, this is my demo application for Azure Static Web. 
            All your update after are pushed to Github will be deployed by Azure Static Web.
            This is second update.
          </p>
        </div>
      </main>
    </>
  )
}
