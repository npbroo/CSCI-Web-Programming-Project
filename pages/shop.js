import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer'

export default function Shop() {

    return (
        <div>
            <Menu />
            <div className="h-96 flex">
                <span className="m-auto">
                    Shop Page
                </span>
            </div>
            <Footer />
        </div>
    )
}