// This class contains functions for editing the cart 

// Sends a post request to the API to return an array of all orders for the user in the database
export const getOrders = async function getOrders() {
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
  return orders_arr
}