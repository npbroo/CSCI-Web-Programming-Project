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
        <br></br>
        <br></br>
        <h2 className='featured'>Our Featured Products</h2>
<div className="allFeatured">
  <div className='featuredprodOne'>
  <br></br>
  <br></br>
  <br></br>
  <a href='shop'>
  <img className="tee" src="https://cdn.shopify.com/s/files/1/0112/9739/0655/products/UGAGeorgiaBulldogsChampionT-shirt-Black_480x.jpg?v=1584828835" alt="UGA Black Tee"/>
  <h1>UGA Cotton Tee</h1>
  <p className="price">$14.99</p>
  <button className='addCart'>View Product</button>
</a>
 </div>

 <div className='featuredprodTwo'>


  <img className="tee" src="https://s.yimg.com/aah/yhst-59135275316139/uga-champion-packable-jacket-white-1.gif" alt="UGA Rain Jacket ="/>

  <a href='shop'>

  <h1>UGA Rain Jacket</h1>
  <p className="price">$54.99</p>
  <button className='addCart'>View Product</button>
</a>
 </div>

 <div className='featuredprodThree'>
 <a href='shop'>
  <img className="tee" src="https://cdn.shopify.com/s/files/1/0112/9739/0655/products/apc03488385_c82105_9901_ftq_mq_1_3216520_1024x1024.jpg?v=1618962934" alt="UGA Shorts ="/>
  <h1>UGA Champion Mesh Shorts</h1>
  <p className="price">$29.99</p>
  <button className='addCart'>View Product</button>
</a>
 </div>

 <div className='featuredprodFour'>
 <a href='shop'>

  <img className="tee" src="https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3483000/altimages/ff_3483073-cb395b47a211140d586ealt1_full.jpg&w=900" alt="UGA Hat ="/>
  <h1>UGA Hat</h1>
  <p className="price">$25.99</p>
  <button className='addCart'>View Product</button>
</a>
 </div>
 <a href='shop'>
        <img className="shop "border="0" alt="Shop Now!" src="https://shop.georgiadogs.com/content/ws/all/4fcd3a59-94bf-494f-a5bb-32270cde4118__1600X384.jpg"/>
        </a>

</div>
        </span>


        
   </div>

      <Footer />
    </>
  )
}
