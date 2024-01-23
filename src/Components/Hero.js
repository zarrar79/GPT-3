import React from 'react'
import GPT from './GPT-3.png';
import header from './Header Illustration.png'
import head from './Header.png'
import group from './Group 81.png'
export const Hero = () => {
    return (
        <>
            <div className="bg-[#041123]">
                {/* Fluid Container */}
                <div className='mx-auto max-w-[1100px]'>
                    {/* Navbar */}
                    <nav className='flex space-x-44 pt-9'>
                        {/* Left side */}
                        <div className=' font-Manrope flex space-x-[40px] pt-[8px]'>
                            <div className='pt-[5px]'><img src={GPT}></img></div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white cursor-pointer'>Home</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white cursor-pointer'>What is GPT?</div>
                            <div className=' hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white cursor-pointer'>Open AI</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white cursor-pointer'>Case Studies</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white cursor-pointer'>Library</div>
                        </div>
                        {/* Right side */}
                        
                        <div className='font-Manrope flex space-x-5'>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white pt-[8px] cursor-pointer text-center'>Sign in</div>
                            <button className='hover:bg-[#ffff] hover:text-[#041123] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white bg-[#FF4820] px-[30px] py-[8px]
            rounded'>Sign up</button>
                        </div>
                    </nav>
                    {/* Hero section */}
                    <section>
                        {/* Grid */}
                        <div className='grid grid-cols-3'>
                            {/* Left */}
                            <div className='col-span-2'>
                                {/* Inner Parent */}
                                <div className='space-y-[30px] pt-[57px]'>
                                    {/* Header */}
                                    <div className='font-Manrope text-[62px] font-[800]
                                        custom-text-gradient leading-[75px]'>
                                        Let’s Build Something
                                        amazing with GPT-3
                                        OpenAI
                                    </div>
                                    {/* Paragraph */}
                                    <div className='text-[20px] text-offWhite font-normal leading-[27.32px] font-Manrope'>
                                        Yet bed any for travelling assistance
                                        indulgence unpleasing.<br></br>
                                        Not thoughts all
                                        exercise blessing. Indulgence way<br></br> everything
                                        joy alteration boisterous the attachment. Party<br></br> we years
                                        to order allow asked of.
                                    </div>
                                    {/* Input Bar+ btn */}
                                    <div className='flex'>
                                        {/* Input */}
                                        <div>
                                            <input className='focus:outline-none  text-[20px] font-[400] w-[498px] pl-[25px] py-[19px] rounded-tl-[5px] rounded-bl-[5px] bg-[#052d56] text-[#577491]' type='email' placeholder='Your Email Address' ></input>
                                        </div>
                                        {/* Button */}
                                        <div>
                                            <button className='hover:bg-[#c1bebe] hover:text-[#041123] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] rounded-tr-[5px] rounded-br-[5px] font-medium text-white bg-[#FF4820] px-[44.5px] py-[20.4px]'>Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right */}
                            <div>
                                <img src={header}></img>
                            </div>
                        </div>
                        {/* Peoples+text */}
                        <div className='flex text-center items-center space-x-[15px] mt-[30px]'>
                            {/* People */}
                            <div className=''>
                               <img src={group} className=''></img>     
                            </div>
                            {/* text */}
                            <div className='font-Manrope text-[12px] font-[500] text-[#FFFFFF]'>
                            1,600 people requested access a visit in last 24 hours
                            </div>
                        </div>

                    </section>
                </div>
                </div>
        </>
    )
}
