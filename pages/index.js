import Head from 'next/head'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export default function Home() {

  return (
    <>
      <Head>
        <title>CSCI 4300 Final Project</title>
        <meta name="The final project for CSCI 4300" content="created with next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <div className="h-96 flex">
        <span className="m-auto">
          <a href='shop'>
        <img className="mainPage "border="0" alt="Shop Now!" src="https://shop.georgiadogs.com/content/ws/all/725738e9-f168-4afb-be53-1ae1c4810a32.jpg"/>
        </a>
        <h3 className='featured'>Featured Products</h3>
        </span>
      </div>

      <Footer />
    </>
  )
}
