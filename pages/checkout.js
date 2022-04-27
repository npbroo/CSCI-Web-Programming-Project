import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer'

export default function Checkout() {

    return (
        <>
            <Menu />
            <div className="my-10">
                <div class="col-75">
                        <div class="container">

                            <div class="row">
                                <div class="col-50">
                                    <h3><b>Billing Address</b></h3>
                                    <label for="fname"> First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="" />
                                    <label for="lname"> Last Name</label>
                                    <input type="text" id="lname" name="lastname" placeholder="" />
                                    <label for="adr"> Address</label>
                                    <input type="text" id="adr" name="address" placeholder="" />
                                    <label for="city"> City</label>
                                    <input type="text" id="city" name="city" placeholder="" />

                                    <div class="row">
                                        <div class="col-50">
                                            <label for="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="" />
                                        </div>
                                        <div class="col-50">
                                            <label for="zip">ZIP Code</label>
                                            <input type="text" id="zip" name="zip" placeholder="" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-50">
                                    <h3><b>Payment</b></h3>
                                    <label for="ccnum">Credit or Debit Card Number</label>
                                    <input type="text" id="ccnum" name="cardnumber" placeholder="" />
                                    <div class="row">
                                        <div class="col-50">
                                            <label for="expmonth">Expiration Month</label>
                                            <select name="month" id="month">
                                                <option selected value='1'>Jan</option>
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
                                        <div class="col-50">
                                            <label for="expyear">Expiration Year</label>
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
                                        <div class="col-50">
                                            <label for="cvv">Security Code</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="btn">Place Your Order</a>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer />
        </>
    )
}