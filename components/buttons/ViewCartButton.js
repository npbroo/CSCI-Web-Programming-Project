import Link from 'next/link';

export const ViewCartButton = () => {

    return (
        <Link href="/cart"><button className="flex odyssey-bg w-20">
            <div className="m-auto">View Cart</div></button>
        </Link>
    );

}