import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { getProduct } from '../components/utils/ProductHandler';

export default function Home() {

  // variables to store the fetured product images
  const [product1, setProduct1] = useState(null)
  const [product2, setProduct2] = useState(null)
  const [product3, setProduct3] = useState(null)
  const [product4, setProduct4] = useState(null)

  // set the featured product images
  useEffect(async () => {
    // set the product information for each of the featured products
    // I am selecting products with PID #s 3, 2, 17, and 8
    setProduct1(await getProduct(3))
    setProduct2(await getProduct(2))
    setProduct3(await getProduct(17))
    setProduct4(await getProduct(8))
  }, []); 

  return (
    <>
      <Head>
        <title>CSCI 4300 Final Project</title>
        <meta name="The final project for CSCI 4300" content="created with next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Render the menu component */}
      <Menu />

      <div className="mx-10 m-auto">
        <img className="mx-auto mt-10" alt="Shop Now!" src="https://dawnofthedawg.com/files/2014/06/6014_georgia_bulldogs-wordmark-2002.png" />

        <div className="mx-auto max-w-screen-2xl text-center">
  
          <h2 className='mx-10 mx-auto text-3xl my-10 pt-10'>Our Featured Products</h2>

          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg: lg:grid-cols-4 gap-10 justify-items-center my-5 stegman-bg rounded-lg px-10">
            
            {/*Displays the first featured product if it is loaded from the database*/}
            {product1 != null 
              ?
              <div className="card m-auto bg-white rounded-lg">
                  <h2 className="my-2 p-5 ">{product1.title}</h2>
                  <img src={product1.image} />
                  <p className="price">${product1.price.toFixed(2)}</p>
                  <p className="p-5 text-left odyssey-bg mb-0">{product1.description}</p>
              </div>
              :null
            }

            {/*Displays the second featured product if it is loaded from the database*/}
            {product2 != null 
              ?
              <div className="card m-auto bg-white rounded-lg">
                  <h2 className="my-2 p-5 ">{product2.title}</h2>
                  <img src={product2.image} />
                  <p className="price">${product2.price.toFixed(2)}</p>
                  <p className="p-5 text-left odyssey-bg mb-0">{product2.description}</p>
              </div>
              :null
            }

            {/*Displays the third featured product if it is loaded from the database*/}
            {product3 != null 
              ?
              <div className="card m-auto bg-white rounded-lg">
                  <h2 className="my-2 p-5 ">{product3.title}</h2>
                  <img src={product3.image}/>
                  <p className="price">${product3.price.toFixed(2)}</p>
                  <p className="p-5 text-left odyssey-bg mb-0">{product3.description}</p>
              </div>
              :null
            }

            {/*Displays the fourth featured product if it is loaded from the database*/}
            {product4 != null 
              ?
              <div className="card m-auto bg-white rounded-lg">
                  <h2 className="my-2 p-5 ">{product4.title}</h2>
                  <img src={product4.image}/>
                  <p className="price">${product4.price.toFixed(2)}</p>
                  <p className="p-5 text-left odyssey-bg mb-0">{product4.description}</p>
              </div>
              :null
            }

          </div>

          {/*Button that reroutes you to the shop page*/}
          <a href='shop' className='btn-hover'><button className="m-auto text-center pt-3 pb-2 px-5 bg-black rounded-lg mt-2 mb-10 md:mb-0"><h2 className="text-white">Shop Now</h2></button></a>
        </div>

        {/*Banner image that reroutes you to the shop page*/}
        <a href='shop'><img className="mx-auto hidden md:block" alt="Shop Now!" src="https://shop.georgiadogs.com/content/ws/all/4fcd3a59-94bf-494f-a5bb-32270cde4118__1600X384.jpg" /></a>
      </div>

      {/* Render the footer component */}
      <Footer />
    </>
  )
}