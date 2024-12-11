import React from 'react'
import gdgLogo from './../assets/GdgLogo.svg';

function Header() {
    return (
        <div>
            <ul className='flex flex-row items-center justify-between px-5shad'>
                <div>
                    <li>
                        <img src={gdgLogo} alt="" className='w-[8rem] h-[5rem]' loading='lazy' />
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
                        <button
                            className="mt-1 w-full rounded bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
                        >
                            Sign Up
                        </button>
                    </li>
                </div>
            </ul>



        </div>
    )
}

export default Header