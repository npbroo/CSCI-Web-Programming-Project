import { RestrictAccess } from '../components/RestrictAccess'
import { Menu } from '../components/Menu';
import { Dashboard } from '../components/Dashboard'
import { Footer } from '../components/Footer'

export default function User() {

    return (
        <>
            <Menu/>
            <div className="max-w-screen-lg mx-auto px-10">
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