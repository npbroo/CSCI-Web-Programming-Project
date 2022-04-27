import React, { useState, useEffect } from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer'
import { getProduct } from '../components/utils/ProductHandler';
import { removeFromCart } from '../components/utils/CartHandler';

export default function Cart() {

    const [cart, setCart] = useState([])
    const [user, setUser] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(async () => {
        let local_cart = JSON.parse(localStorage.getItem("cart"))
        console.log(local_cart)
        let user = localStorage.getItem("username")
        console.log(user)
        setUser(user)
        if (local_cart && local_cart[user]) {
            let total_price = 0
            let cart_obj = []
            for (let i in local_cart[user]) {
                let product_info = await getProduct(i)
                cart_obj.push({ "pid": i, "qty": local_cart[user][i], "title": product_info["title"], "price": product_info["price"] })
                total_price += (product_info["price"] * local_cart[user][i])
            }
            setCart(cart_obj)
            setTotalPrice(total_price)
            console.log(cart_obj)
        }
    }, []);

    function removeItemFromCart(pid, qty) {
        // remove from cart in the local storage
        removeFromCart(pid, qty)
        console.log(cart)
        // update the cart variable to reflect changes live
            // create shallow clone of array to edit
            let newCart = [...cart]
            for( let i in newCart) {
                if (newCart[i] && newCart[i].pid == pid) {
                    newCart[i].qty -= qty
                    if(newCart[i].qty <= 0) {
                        newCart.splice(i,1)
                        break
                    }
                }
            }
            
            let newTotal = 0
            for( let i in newCart) {
                if(newCart[i]) newTotal += newCart[i].price * newCart[i].qty
            }

        setCart(newCart)
        setTotalPrice(newTotal)

    }

    return (
        <>
            <Menu />
            <div className="flex my-10">
                <div className="col-25">
                    <div className="container">
                        <h2><b>Cart</b>
                            <span className="price">
                                <i className="fa fa-shopping-cart"></i>
                                <b></b>
                            </span>
                        </h2>
                        {user && user != ""
                            ?
                            <>
                                {/*Make sure the products are loaded from the database before trying to display them*/}
                                {cart && cart.length != 0
                                    ?
                                    <>
                                        {/*Run a foreach loop through all the products stored in the 'cart' dictionary object*/}
                                        {cart.map((product) => (
                                            <p><a href="#">{product.title}</a>&emsp;<button onClick={() => removeItemFromCart(product.pid, 1)} className="text-red-500"><u>delete</u></button><span className="price">{product.qty} x ${product.price.toFixed(2)}</span></p>
                                        ))}

                                        <h2>Total <span className="price"><b>${totalPrice.toFixed(2)}</b></span></h2>
                                        <a href="/shop" className="continue">Continue Shopping</a>
                                        <a href="/checkout" className="co">Proceed to Checkout</a>
                                    </>
                                    :
                                    <>
                                        <p>Cart is empty</p>
                                        <a href="/shop" className="continue">Continue Shopping</a>
                                    </> 
                                    

                                }
                            </>
                            : <p>Please <a href="user/login">login</a> first</p>
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}