import Link from 'next/link';
import { Menu } from '../../components/Menu';
import { LoginForm } from '../../components/forms/LoginForm'
import { Footer } from '../../components/Footer'


export default function Login() {

    return (
        <>
            <Menu />
            <div className="my-10 mx-5">
                <div className="oswald text-xl mb-1">User Login</div>
                <div>Please login using the form below:</div><br/>
                <LoginForm />
                <br/>
                Don&apos;t have an account?&nbsp;
                <a><Link href="/user/register">Register Here</Link></a>
            </div>
            <Footer />
        </>
    ) 
}