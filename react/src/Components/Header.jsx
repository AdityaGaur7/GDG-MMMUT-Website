import React from 'react'
import gdgLogo from './../assets/GdgLogo.svg';

function Header() {
    return (
        <div>
            <header>
                <ul className='flex flex-row items-center justify-between px-5shad'>
                    <div>
                        <li>
                            <img src={gdgLogo} alt="" className='w-[8rem] h-[5rem]' />
                        </li>
                    </div>
                    <div className='flex gap-7 text-2xl'>
                        <li>
                            <h2>Home</h2>
                        </li>
                        <li>Team</li>
                        <li>Events</li>
                        <li>Contact</li>
                        <li>
                            <button className='bg-[#4285f4] px-2 py-1 text-center rounded-md  '>Sign-In</button>
                        </li>
                    </div>
                </ul>
            </header>
        </div>
    )
}

export default Header