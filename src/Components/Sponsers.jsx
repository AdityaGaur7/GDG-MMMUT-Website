import React from 'react';
import sponserbg from './../assets/sponserbg.svg';
import adobe from './../assets/adobe.svg';
import amazon from './../assets/amazon.svg';
import bombora from './../assets/bombora.svg';
import deloitte from './../assets/deloitte.svg';
import flexport from './../assets/flexport.svg';
import google from './../assets/google.svg';

export default function Sponser() {
    return (
        <div>
            <h1> </h1>
            <h1 className="text-5xl font-bold p-10 justify-self-center">
                <span className="text-[#0F9D58]">Our</span>{' '}
                <span className="text-[#F4B400]">Previous</span>{' '}
                <span className="text-[#4285F4]">Sponsers</span>
            </h1>
            <div
                className="bg-cover bg-center h-64 w-full"
                style={{
                    backgroundImage: `url(${sponserbg})`,
                }}
            >
                <ul className='flex gap-8 relative'>
                <li className='absolute top-[8rem] left-[18rem]  md:top-[8rem] md:left-[18rem] lg:top-[5rem] lg:left-[50%]'><img src={google} alt="" className='w-[11rem] h-[8rem] rounded-full'/></li>
                <li className='absolute top-[2.5rem] left-[8rem] md:top-[2.5rem] md:left-[8rem] lg:top-[0rem] lg:left-[30%]'><img src={adobe} alt="" className='w-[8rem] h-[8rem] rounded-r-full'/></li>
                <li className='absolute top-[7.3rem] left-[1rem] md:top-[7.3rem] md:left-[1rem] lg:top-[7.3rem] lg:left-[10%]'><img src={amazon} alt="" className='w-[5rem] h-[4rem] rounded-xl rounded-r-full'/></li>
                <li className='absolute top-[14rem] right-[1rem] md:top-[14rem] md:right-[1rem] lg:top-[12rem] lg:right-[2%]'><img src={bombora} alt="" className='w-[5rem] h-[4rem]'/></li>
                <li className='absolute top-[6rem] right-[10rem] md:top-[6rem] md:right-[10rem] lg:top-[7rem] lg:right-[20%]'><img src={deloitte} alt="" className='w-[8rem] h-[4rem] rounded-r-full'/></li>
                <li className='absolute top-[1rem] right-[1rem] md:top-[1rem] md:right-[1rem] lg:top-[1rem] lg:right-[1%]'><img src={flexport} alt="" className='w-[5rem] h-[4rem] rounded-xl rounded-l-full'/></li>
                </ul>
            </div>
        </div>
    );
}