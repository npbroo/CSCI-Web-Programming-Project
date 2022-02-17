import Head from 'next/head'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export default function Home() {

  return (
    <div>
      <Head>
        <title>CSCI 4300 Final Project</title>
        <meta name="The final project for CSCI 4300" content="created with next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <div className="h-96 flex">
        <span className="m-auto">
          Home Page
        </span>
      </div>

      <Footer />
    </div>
  )
}
