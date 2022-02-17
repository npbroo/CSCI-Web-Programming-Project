import { ViewCartButton } from '../components/buttons/ViewCartButton'
import { LogOutButton } from '../components/buttons/LogOutButton'

export const Dashboard = () => {

    return (
        <div>
            <span className="oswald text-xl">User Dashboard<br /></span>
            <span>
                This is the user dashboard, here you can see your previous orders and user information.
            </span>
            <div className="flex">
                <LogOutButton />
                <div className="w-5" />
                <ViewCartButton/>
            </div>

        </div>
    );

}