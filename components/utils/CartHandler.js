// This class contains functions for editing the cart 

// Adds an item to the cart and saves the updated cart to local storage (session variable)
export const addToCart = function addToCart(pid, qty) {
    //localStorage.setItem("cart", null)
    let cart = JSON.parse(localStorage.getItem("cart"))
    let user = localStorage.getItem("username")
    console.log(cart)
    // check if a cart has been created for the current user in the session variable
    if(cart && cart[user]) {
      console.log("adding %d to cart", pid)
      if(pid in cart[user]) {
        cart[user][pid] += qty
      } else {
        cart[user][pid] = qty
      }
    } else {
      // create the cart object for the current user in a session variable
      console.log("creating new cart for %s", user)
      console.log("adding %d to cart", pid)
      cart = {}
      cart[user] = {}
      cart[user][pid] = qty
    }
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart))
    //example cart dictionary for reference = {"username":{"pid":"qty", "pid2":"qty"}}
}

// Removes an item from the cart and saves the updated cart to local storge (session variable)
export const removeFromCart = function removeFromCart(pid, qty) {
  //localStorage.setItem("cart", null)
  let cart = JSON.parse(localStorage.getItem("cart"))
  let user = localStorage.getItem("username")
  console.log(cart)
  // check if a cart has been created for the current user in the session variable
  if(cart && cart[user]) {
    console.log("removing %d to cart", pid)
    if(pid in cart[user]) {
      cart[user][pid] -= qty
    }
    if(cart[user][pid] <= 0 ) {
      delete cart[user][pid]
    }
  }
  console.log(cart)
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const clearCart = function clearCart() {
  let user = localStorage.getItem("username")
  let cart = {}
  cart[user] = {}
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const getCart = function getCart() {
  let cart = JSON.parse(localStorage.getItem("cart"))
  let user = localStorage.getItem("username")
  if(cart && cart[user]) {
    return cart[user]
  } else {
    return false
  } 
}