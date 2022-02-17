import { Menu } from '../../components/Menu';
import { RegistrationForm } from '../../components/RegistrationForm';
import { Footer } from '../../components/Footer'

export default function Register() {
    return (
        <div>
            <Menu/>
            <div className="mt-5 mx-5">
              <RegistrationForm/>  
            </div>
            <Footer />
        </div>
    )
}