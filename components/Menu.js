import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useGlobalState, setGlobalState } from "../state/global_states";
import { Squash as Hamburger } from 'hamburger-react'
import { SlideDown } from 'react-slidedown'

export const Menu = () => {

    const [logged_in] = useGlobalState("logged_in");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log(localStorage.getItem("logged_in"))
        if (localStorage.getItem("logged_in") == "true") {
            setGlobalState("logged_in", true)
        }
    }, []);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div className='p-2 px-5 flex flex-inline bulldog-red-bg items-center border-y-4 border-black drop-shadow-lg'>
                <Link href="/"><button className="flex items-center">
                    <Image src="/UGA_logo.png" alt='UGA LOGO' width={70} height={70} />
                    <div className="oswald text-3xl ml-5">
                        Bulldog Apparel Store
                    </div>
                </button>
                </Link>

                <div className="ml-auto">
                    <Hamburger toggled={visible} toggle={handleClick} />
                </div>
            </div>


            <SlideDown className={'slidedown'}>
                {visible
                    ?
                    <div className="glory-glory-bg">
                        <div className=" py-2 px-5 text-xl stegman-bg oswald-light">
                            <Link href="/"><button className="flex items-center">
                                <Image src="/icons/home.svg" alt='shop' width={20} height={20} />
                                <div className="ml-2">Home</div></button>
                            </Link>
                            {!logged_in
                                ?
                                <Link href="/user/login"><button className="flex items-center">
                                    <Image src="/icons/log_in.svg" alt='login' width={20} height={20} />
                                    <div className="ml-2">Log In / Register</div></button>
                                </Link>
                                :
                                <>
                                    <Link href="/user"><button className="flex items-center">
                                        <Image src="/icons/profile.svg" alt='login' width={20} height={20} />
                                        <div className="ml-2">Profile</div></button>
                                    </Link>
                                    <Link href="/cart"><button className="flex items-center">
                                        <Image src="/icons/cart.svg" alt='login' width={20} height={20} />
                                        <div className="ml-2">Cart</div></button>
                                    </Link>
                                </>
                            }
                            <Link href="/shop"><button className="flex items-center">
                                <Image src="/icons/shop.svg" alt='shop' width={20} height={20} />
                                <div className="ml-2">Shop</div></button>
                            </Link>
                        </div>
                    </div>
                    :
                    null
                }
            </ SlideDown>
        </>
    );

}