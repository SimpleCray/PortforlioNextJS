/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      <Head>
        <title>Hai's Portfolio</title>
      </Head>

      <Header/>
      
      <Hero />

      {/* About */}

      {/* Experience */}
      
      {/* Skills */}
      
      {/* Projects */}
      
      {/* Contact Me */}
    </div>
  )
}
