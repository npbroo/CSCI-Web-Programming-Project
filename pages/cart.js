import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer'

export default function Cart() {

    return (
        <>
            <Menu />
            <div className="h-96 flex">
                <span className="m-auto">
                    My Cart
                </span>
                <div class="col-25">
                <div class="container">
                    <h2><b>Cart</b>
                        <span class="price">
                            <i class="fa fa-shopping-cart"></i>
                            <b></b>
                        </span>
                    </h2>
                    <p><a href="#">Product1</a> <span class="price">$0.00</span></p>
                    <p><a href="#">Product2</a> <span class="price">$0.00</span></p>
                    <p><a href="#">Product3</a> <span class="price">$0.00</span></p>

                    <h2>Total <span class="price"><b>$0.00</b></span></h2>
                    <a href="/shop" class="continue">Continue Shopping</a>
                    <a href="/checkout" class="co">Proceed to Checkout</a>

                </div>
                </div>
            </div>
            <Footer />
        </>
    )
}