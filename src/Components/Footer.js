import React from 'react'
import gpt from './GPT-3.svg'

export const Footer = () => {
    return (
        <>
            {/* Background */}
            <div className='bg-[#031B34]'>
                {/*Fluid Container */}
                <div className='mx-auto max-w-[1100px] mxLarge pt-[0.5px] pb-5'>
                    {/* Parent */}
                    <div className='font-Manrope mt-[100px]'>
                        {/* do + request */}
                        <div className='text-center'>
                            {/* do */}
                            <div className='do custom-text-gradient font-[800] text-[62px] leading-[75px]'>Do you want to step in to the<br></br> future before others</div>
                            {/* request */}
                            <div><button className='request_btn hover:bg-white hover:text-black hover:transition hover:duration-[0.6s] transition duration-[0.6s] pt-4 pb-4 pl-6 pr-6 mt-14 font-Gilroy border-solid border-[1px] border-white text-[18px] text-white'>Request Early Access</button></div>
                        </div>
                    </div>
                    {/* Parent of flex */}
                    <div className='flex justify-between mt-64 last_flex'>
                        {/* left */}
                        <div className=' text-center'>
                            {/* image */}
                            <div className='gpt_last cursor-pointer'><img src={gpt}></img></div>
                            {/* text */}
                            <div className='mt-5 font-Gilory text-[12px] text-white'>Crechterwoord K12 182 DK<br></br> Alknjkcb, All Rights Reserved</div>
                        </div>
                        {/* mid */}
                        <div className='font-Gilroy text-white'>
                            {/* boxes */}
                            <div className='font-bold text-[14px] cursor-pointer'>Links</div>
                            <div className='text-[12px] mt-5 cursor-pointer'>Overons</div>
                            <div className='text-[12px] mt-5 cursor-pointer'>Social Media</div>
                            <div className='text-[12px] mt-5 cursor-pointer'>Counters</div>
                            <div className='text-[12px] mt-5 cursor-pointer'>Contact</div>
                        </div>
                        {/* mid-second */}
                        <div className=' font-Gilroy text-white'>
                            {/* boxes */}
                            <div className='company font-bold text-[14px] cursor-pointer'>Company</div>
                            <div className='text-[12px] mt-5 cursor-pointer'>Terms & Conditions</div>
                            <div className='text-[12px] mt-5 cursor-pointer'>Privacy Policy</div>
                            <div className='text-[12px] mt-5 cursor-pointer'>Contact</div>
                        </div>
                        {/* right */}
                        <div className='font-Gilory text-white'>
                            {/* get */}
                            <div className='get text-[12px] font-bold cursor-pointer'>Get in touch</div>
                            {/* Crec */}
                            <div className='text-[12px] mt-5 cursor-pointer'>Crechterwoord K12<br></br> 182 DK Alknjkcb</div>
                            {/* number */}
                            <div className='text-[12px] mt-5 cursor-pointer'>085-132567</div>
                            {/* email */}
                            <div className='text-[12px] mt-5 cursor-pointer'>info@payme.net</div>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className='flex justify-center mt-20'>
                        {/* content */}
                        <div className='font-Gilroy text-white text-[12px]'>© 2021 GPT-3. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
