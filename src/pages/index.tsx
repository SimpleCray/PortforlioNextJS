/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hai's Portfolio</title>
      </Head>
      <h1 className='p-10 text-red-500'>Let's build an awesome portfolio</h1>
    </>
  )
}
