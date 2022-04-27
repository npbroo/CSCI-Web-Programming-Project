// This class contains functions for interacting with the database

// sends a post request to the api and returns information for a single product from the database (based on the pid #)
// NOTE: API route logic is saved under 'pages/api/*'
export const getProduct = async function getProduct(pid) {
    // build post request object
    const res = await fetch('/api/get_product', {
      method: 'POST',
      body: JSON.stringify({ pid: pid }),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    // parse request and clean the data object
    const data = await res.json()
    let products_arr = []
    for(let p in data) {
      products_arr.push(data[p])
    }
    return products_arr[0][0]
}

// sends a post request to the api which returns all of the products in the database
// returns all the product information in the 'products_arr' variable within a dictionary object
// NOTE: API route logic is saved under 'pages/api/*'
export const getProducts = async function getProducts() {
    // build post request object
    const res = await fetch('/api/get_products', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    // parse request and clean the data object
    let products_arr = []
    for(let p in data) {
      products_arr.push(data[p])
    }

    return products_arr
}