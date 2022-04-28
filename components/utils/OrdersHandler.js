// This class contains functions for editing the cart 

// Sends a post request to the API to return an array of all orders for the user in the database
export const getOrders = async function getOrders() {
  // build post request object
  let user = localStorage.getItem("username")
  const res = await fetch('/api/get-orders', {
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
  return orders_arr
}

export const checkout = async function checkout() {
  let user = localStorage.getItem("username")
  let cart = JSON.parse(localStorage.getItem("cart"))

  let user_cart = cart[user]
  // create a timestamp based on the mysql formatting
  var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  var timestamp = (new Date(Date.now() - tzoffset)).toISOString().replace('T', ' ').slice(0, -1);
  console.log(timestamp)
  for(let item in user_cart) {
    let pid = item
    let qty = user_cart[item]
    const res = await fetch('/api/set-order', {
      method: 'POST',
      body: JSON.stringify({ timestamp,timestamp, username:user, pid:pid, qty:qty }),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    await res.json()
  }
  return true
}