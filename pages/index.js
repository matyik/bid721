import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bid721 - NFT Auctioning</title>
      </Head>
      <nav>
        <h2>
          Bid
          <Image alt='721' src='/icon-192px.png' width='75' height='75' />
        </h2>
        <div className='nav-links'>
          <span>
            <Link href='/about'>About</Link>
          </span>
          <span>
            <Link href='/drops'>Drops</Link>
          </span>
          <span>
            <Link href='/login'>Log In</Link>
          </span>
        </div>
      </nav>
      <main>
        <div className='main-left'>
          <h1>Bid721</h1>
          <p>A decentralized art auction platform.</p>
        </div>
        <div className='main-right'>
          <h3>Next Drop:</h3>
        </div>
      </main>
    </>
  )
}
