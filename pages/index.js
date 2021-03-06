import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bid721 - NFT Auctioning</title>
        <meta
          name='description'
          content='A decentralized art auction platform.'
        />
        <meta name='author' content='Matyi Kari' />
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
          <Image
            alt='Next Drop'
            src='/photoshop-sphere.jpg'
            width='500'
            height='500'
          />
          <div className='dropinfo'>
            <h4>Minimum Bid: 5 ETH</h4>
            <h4>Artist: Matyi Kari</h4>
          </div>
        </div>
      </main>
      <div className='drop-list'>
        <h3>Upcoming Drops:</h3>
        <div className='drop-card'>
          <h4>Test Art</h4>
          <div className='info-container'>
            <Image
              alt='Test Art'
              src='/photoshop-sphere.jpg'
              width='150'
              height='150'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              eius exercitationem totam pariatur nemo esse tenetur non quasi
              magni excepturi!
            </p>
          </div>
        </div>
        <div className='drop-card'>
          <h4>Test Art</h4>
          <div className='info-container'>
            <Image
              alt='Test Art'
              src='/photoshop-sphere.jpg'
              width='150'
              height='150'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              eius exercitationem totam pariatur nemo esse tenetur non quasi
              magni excepturi!
            </p>
          </div>
        </div>
        <div className='drop-card'>
          <h4>Test Art</h4>
          <div className='info-container'>
            <Image
              alt='Test Art'
              src='/photoshop-sphere.jpg'
              width='150'
              height='150'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              eius exercitationem totam pariatur nemo esse tenetur non quasi
              magni excepturi!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
