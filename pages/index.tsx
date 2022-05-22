import type { NextPage } from 'next'
import {useEffect, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {


  return (
    <div className="overflow-hidden h-screen bg-black">
      <Head>
        <title>Spotify App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
    </div>
  )
}

export default Home
