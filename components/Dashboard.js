import Link from 'next/link';
import { LogOutButton } from '../components/buttons/LogOutButton'
import { UpdatePassForm } from './forms/UpdatePassForm';
import { Orders } from './Orders';

export const Dashboard = () => {

    return (
        <>
            <div className="oswald text-xl mb-1">User Dashboard</div>
            <div>This is the user dashboard, here you can see your previous orders and user information.</div>
            <br/>
            <div className="oswald text-xl mb-1">Control Panel</div>
            <div className="odyssey-bg grid grid-cols-2 gap-5 p-5 rounded-md">
                <LogOutButton text="Log Out" button={true}/>
                <Link href="/cart"><button className="custom-btn">View Cart</button></Link>
            </div>
            <br/>
            <div className="oswald text-xl mb-1">Change Password</div>
            <UpdatePassForm/>
            <br/>
            <div className="oswald text-xl mb-1">Orders</div>
            <Orders/>
            
        </>
    );
}