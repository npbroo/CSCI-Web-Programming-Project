import { RestrictAccess } from '../components/RestrictAccess'
import { Menu } from '../components/Menu';
import { Dashboard } from '../components/Dashboard'
import { Footer } from '../components/Footer'

export default function User() {

    return (
        <>
            <Menu/>
            <div className="flex">
                <span className="mt-5 ml-5">
                    <RestrictAccess>
                        <Dashboard/>
                    </RestrictAccess>
                </span>
            </div>
            <Footer/>
        </>
    )
}