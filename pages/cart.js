import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer'

export default function Cart() {

    return (
        <div>
            <Menu />
            <div className="h-96 flex">
                <span className="m-auto">
                    My Cart
                </span>
            </div>
            <Footer />
        </div>
    )
}