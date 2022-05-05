import React, { useState, useEffect } from 'react';
import { getOrders } from './utils/OrdersHandler';

export const Orders = () => {

    const [orders, setOrders] = useState(null)
    const [orders2, setOrders2] = useState(null)

    useEffect(async() => {
        let all = await getOrders()
        setOrders(all)

        all = all[0]
        let orders_arr = []
        let index = 0
        for (let o in all) {
          console.log(all[o])
          if(!orders_arr[index]) {
            orders_arr[index] = []
            orders_arr[index].push(all[o])
            console.log("push")
          } else if(orders_arr[index][0]["time"] == all[o]["time"]) {
            orders_arr[index].push(all[o])
            console.log("push2")
          } else {
            index++
            orders_arr[index] = []
            orders_arr[index].push(all[o])
            console.log("push3")
          }
        }
        setOrders2(orders_arr)

        console.log(orders_arr)
      }, []);

    function convertDate(dateString) {
      return new Date(dateString).toLocaleString('en-US')
    }

    function getTotal(order) {
      let total = 0
      for(let o in order) {
        total += order[o].price
      }
      return total
    }

    return (
      <div className="odyssey-bg p-5 rounded-lg mb-10">
           {/*Make sure the products are loaded from the database before trying to display them*/}
          {orders2 &&  orders2.length != 0
          ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {orders2.map((order, index) => {
              //If uid == session id 
              //If there is no filter applied, then display all of the products
                return (
                  <div className="bg-white p-5 rounded-lg">
                    <p>
                      <u>Order {index+1}</u><br/>
                      {convertDate(order[0].time)}
                    </p>
                  
                  {order.map((o, i) => {
                    return (
                      <div>
                        - ({o.quantity}x) {o.title}
                      </div>
                    )
                    
                  })}
                  <br/>
                  <hr/>
                  <p className='mt-2'>
                  Total: ${getTotal(order)}.00
                  </p>
                  
                  </div>
                )
          })}
          </div>
          :
          <p>You have no previous orders.</p>
          }
      </div>
  );

    return (
        <div className="odyssey-bg p-5 rounded-lg mb-10">
             {/*Make sure the products are loaded from the database before trying to display them*/}
            {orders && orders[0] && orders[0].length != 0
            ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {orders[0].map((order, index) => {
                //If uid == session id 
                //If there is no filter applied, then display all of the products
                return (
                  <div key={index} className="card m-auto w-72 p-5 bg-white">
                      <p className="">({convertDate(order.time)})</p>
                     <p className="">({order.quantity}x) {order.title}</p>
                     <p className="odyssey-bg drop-shadow-lg rounded-lg py-2">Total = ${order.price * order.quantity}.00</p>
                  </div>
                )
            })}
            </div>
            :
            <p>You have no previous orders.</p>
            }
        </div>
    );
}