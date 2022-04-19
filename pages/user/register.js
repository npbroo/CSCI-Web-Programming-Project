import Link from 'next/link';
import { Menu } from '../../components/Menu';
import { RegisterForm } from '../../components/forms/RegisterForm';
import { Footer } from '../../components/Footer'

export default function Register() {
    return (
        <>
            <Menu/>
            <div className="mt-5 mx-5">
                <div className="oswald text-xl mb-1">Register New Account</div>
                <div>Please register using the form below:</div><br/>
                <RegisterForm/>
                <br/>
                Already have an account?&nbsp;
                <a><Link href="/user/login">Login Here</Link></a>  
            </div>
            <Footer />
        </>
    )
}