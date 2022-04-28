import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer'
import { checkout } from '../components/utils/OrdersHandler';
import { clearCart, getCart } from '../components/utils/CartHandler';
import { openNotif } from '../components/utils/Notifications';
import { RestrictAccess } from '../components/RestrictAccess';

export default function Checkout() {

    const [cartEmpty, setCartEmpty] = useState(false)
    const [showForm, setShowForm] = useState(true)

    useEffect(async () => {
        let cart = await getCart()
        if (cart) {
            if (Object.keys(cart).length === 0) {
                setCartEmpty(true)
            }
        } else {
            setCartEmpty(true)
        }

    }, []);



    async function placeOrder() {
        let success = await checkout()
        if (success) {
            clearCart()
            console.log("order successfully placed")
            setShowForm(false)
            openNotif("success", "Congratulations", "Your order was placed successfully.")
        }
    }



    return (
        <>
            <Menu />
            < RestrictAccess>
            <div className="my-10">
                <div className="col-75 text-center">
                    {cartEmpty
                        ?
                        <div className="h-96">
                            <h2 className="my-10">Your cart is empty.</h2>
                            <Link href="/">Return to homepage</Link>
                        </div>
                        :
                        <>
                            {showForm
                                ?
                                <>
                                    <h2 className="my-10 text-4xl">Checkout</h2>
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-50">
                                                <h3><b>Billing Address</b></h3>
                                                <label htmlFor="fname"> First Name</label>
                                                <input type="text" id="fname" name="firstname" placeholder="" />
                                                <label htmlFor="lname"> Last Name</label>
                                                <input type="text" id="lname" name="lastname" placeholder="" />
                                                <label htmlFor="adr"> Address</label>
                                                <input type="text" id="adr" name="address" placeholder="" />
                                                <label htmlFor="city"> City</label>
                                                <input type="text" id="city" name="city" placeholder="" />

                                                <div className="row">
                                                    <div className="col-50">
                                                        <label htmlFor="state">State</label>
                                                        <input type="text" id="state" name="state" placeholder="" />
                                                    </div>
                                                    <div className="col-50">
                                                        <label htmlFor="zip">ZIP Code</label>
                                                        <input type="text" id="zip" name="zip" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-50">
                                                <h3><b>Payment</b></h3>
                                                <label htmlFor="ccnum">Credit or Debit Card Number</label>
                                                <input type="text" id="ccnum" name="cardnumber" placeholder="" />
                                                <div className="row">
                                                    <div className="col-50">
                                                        <label htmlFor="expmonth">Expiration Month</label>
                                                        <select defaultValue={'1'} name="month" id="month">
                                                            <option value='1'>Jan</option>
                                                            <option value='2'>Feb</option>
                                                            <option value='3'>Mar</option>
                                                            <option value='4'>Apr</option>
                                                            <option value='5'>May</option>
                                                            <option value='6'>Jun</option>
                                                            <option value='7'>Jul</option>
                                                            <option value='8'>Aug</option>
                                                            <option value='9'>Sep</option>
                                                            <option value='10'>Oct</option>
                                                            <option value='11'>Nov</option>
                                                            <option value='12'>Dec</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-50">
                                                        <label htmlFor="expyear">Expiration Year</label>
                                                        <select name="year" id="year">
                                                            <option value='1'>2022</option>
                                                            <option value='2'>2023</option>
                                                            <option value='3'>2024</option>
                                                            <option value='4'>2025</option>
                                                            <option value='5'>2026</option>
                                                            <option value='6'>2027</option>
                                                            <option value='7'>2028</option>
                                                            <option value='8'>2029</option>
                                                            <option value='9'>2030</option>
                                                            <option value='10'>2031</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-50">
                                                        <label htmlFor="cvv">Security Code</label>
                                                        <input type="text" id="cvv" name="cvv" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={placeOrder} className="btn mx-4">Place Your Order</button>
                                        </div>
                                    </div>

                                </>
                                :
                                <div className="h-96">
                                    <h2 className="my-10">Congratulations, your order has been placed!</h2>
                                    <Link href="/">Return to homepage</Link>
                                </div>
                            }

                        </>
                    }

                </div>
            </div>
            </RestrictAccess>
            <Footer />
        </>
    )

}