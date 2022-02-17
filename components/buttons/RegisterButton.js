import Link from 'next/link';

export const RegisterButton = () => {

    return (
        <Link href="/user/register"><button className="flex odyssey-bg rounded w-20">
            <div className="m-auto">Register</div></button>
        </Link>
    );

}