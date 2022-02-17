import { Menu } from '../components/Menu';
import { Dashboard } from '../components/Dashboard'
import { Footer } from '../components/Footer'

export default function User() {

    return (
        <div>
            <Menu/>

            <div className="h-96 flex">
                <span className="mt-5 ml-5">
                    <Dashboard/>
                </span>
            </div>
            <Footer/>
        </div>
    )
}