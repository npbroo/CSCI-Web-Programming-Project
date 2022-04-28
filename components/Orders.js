import React, { useState, useEffect } from 'react';

export const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(async() => {
        await getOrders()
      }, []);

    async function getOrders() {
    // build post request object
    let user = localStorage.getItem("username")
    const res = await fetch('/api/getOrders', {
      method: 'POST',
      body: JSON.stringify({ username: user }),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
    // parse request and clean the data object
    let orders_arr = []
    for(let p in data) {
      orders_arr.push(data[p])
    }

    // store the returned information in the products variable
    console.log(orders_arr)
    setOrders(orders_arr)
  }

    return (
        <div className="odyssey-bg p-5 rounded-lg">
             {/*Make sure the products are loaded from the database before trying to display them*/}
            {orders && orders.length != 0
            ?
            <>{orders[0].map((order, index) => {
                //If uid == session id 
                //If there is no filter applied, then display all of the products
                return (
                  <div key={index} className="card m-auto">
                     <p className="p-5 text-left odyssey-bg mb-0">{order.quantity} {order.title}   ${order.price}.00 {order.time}</p>
                  </div>
                )
              
            })}</>
            :
            null
            }
        </div>
    );
}