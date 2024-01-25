import React from 'react'
import GPT from './GPT-3.png';
import header from './Header Illustration.png'
import head from './Header.png'
import shopify from './shopify.png'
import slack from './slack.png'
import dropbox from './dropbox.png'
import google from './google.png'
import atlassian from './atlassian.png'
import group from './Group 81.png'
export const Hero = () => {
    const display = () => {
        const menuElements = document.getElementsByClassName('menuNew');

  // Loop through each element with the 'menuNew' class and toggle its display style
  for (let i = 0; i < menuElements.length; i++) {
    if (menuElements[i].style.display === "block") {
      menuElements[i].style.display = "none";
    } else {
      menuElements[i].style.display = "block";
    }
  }
    }
    return (
        <>
            <div className="bg-[#041123]">
                {/* Fluid Container */}
                <div className='mx-auto max-w-[1100px] mxLarge'>
                    {/* Navbar */}
                    <nav className='flex justify-between pt-9'>
                        {/* Left side */}
                        <div className='font-Manrope flex space-x-[40px] pt-[8px]'>
                            <div className='pt-[5px]'><img src={GPT}></img></div>
                            <div className='element hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white cursor-pointer'>Home</div>
                            <div className='element hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white cursor-pointer'>What is GPT?</div>
                            <div className='element hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white cursor-pointer'>Open AI</div>
                            <div className='element hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white cursor-pointer'>Case Studies</div>
                            <div className='element hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white cursor-pointer'>Library</div>
                        </div>
                        {/* Right side */}
                        
                        {/* -------------------- */}
                        <div className='font-Manrope flex space-x-5 items-center'>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white cursor-pointer text-center s_in'>Sign in</div>
                            <button className='hover:bg-[#ffff] hover:text-[#041123] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] font-medium text-white bg-[#FF4820] px-[30px] py-[8px] s_up
            rounded'>Sign up</button>
            {/* Hamburger */}
            <div id="menuToggle" onClick={display}>
                                {/* <!--
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
      --> */}
                                <input type="checkbox" />

                                {/* <!--
      Some spans to act as a hamburger.
      
      They are acting like a real hamburger,
      not that McDonalds stuff.
      --> */}
                                <span></span>
                                <span></span>
                                <span></span>

                                {/* <!--
      Too bad the menu has to be inside of the button
      but hey, it's pure CSS magic.
      --> */}
                                <ul id="menu">
                                    <a href="#"><li>Home</li></a>
                                    <a href="#"><li>About</li></a>
                                    <a href="#"><li>Info</li></a>
                                    <a href="#"><li>Contact</li></a>
                                    <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                                </ul>
                            </div>
                            <div className='menuNew bg-[#041123] custom-shadow space-y-5 p-6 rounded absolute top-16 right-11 hidden'>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Home</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>What is GPT?</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Open AI</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Case Studies</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Library</div>
                            </div>
                        </div>
                        </nav>
                        
                    {/* Hero section */}
                    <section>
                        {/* Grid */}
                        <div className='grid grid-cols-3 mt-32 text_img'>
                            {/* Left */}
                            <div className='col-span-2'>
                                {/* Inner Parent */}
                                <div className='space-y-[30px]'>
                                    {/* Header */}
                                    <div className='let font-Manrope text-[62px] font-[800]
                                        custom-text-gradient leading-[75px] text'>
                                        Let’s Build Something
                                        amazing with GPT-3
                                        OpenAI
                                    </div>
                                    {/* Paragraph */}
                                    <div className='yet text-[20px] text-offWhite font-normal leading-[27.32px] font-Manrope'>
                                        Yet bed any for travelling assistance
                                        indulgence unpleasing.
                                        Not thoughts all
                                        exercise blessing. Indulgence way everything
                                        joy alteration boisterous the attachment. Party we years
                                        to order allow asked of.
                                    </div>
                                    {/* Input Bar+ btn */}
                                    <div className='flex inp'>
                                        {/* Input */}
                                        <div>
                                            <input className='focus:outline-none  text-[20px] font-[400] w-[498px] pl-[25px] py-[19px] rounded-tl-[5px] rounded-bl-[5px] bg-[#052d56] text-[#577491]' type='email' placeholder='Your Email Address' ></input>
                                        </div>
                                        {/* Button */}
                                        <div>
                                            <button className='hover:bg-[#c1bebe] hover:text-[#041123] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[18px] rounded-tr-[5px] rounded-br-[5px] font-medium text-white bg-[#FF4820] px-[44.5px] py-[20.4px]'>Get Started</button>
                                        </div>
                                    </div>
                                    {/* Peoples+text */}
                        <div className='people_text flex text-center items-center space-x-[15px] mt-[30px]'>
                            {/* People */}
                            <div className='people'>
                                <img src={group}></img>
                            </div>
                            {/* text */}
                            <div className='font-Manrope text-[12px] font-[500] text-[#FFFFFF]'>
                                1,600 people requested access a visit in last 24 hours
                            </div>
                        </div>
                                </div>
                            </div>
                            {/* Right */}
                            <div className='img_Illusion'>
                                <img src={header}></img>
                            </div>
                        </div> 
                        <div className='flex justify-center mt-16'>
                            <div className='social flex '>
                                <div className='google mr-9'><img src={google}></img></div>
                                <div className='slack mr-9'><img src={slack}></img></div>
                                <div className='atlass mr-9'><img src={atlassian}></img></div>
                                <div className='dropbox mr-9'><img src={dropbox}></img></div>
                                <div className='shopify mr-9'><img src={shopify}></img></div>
                                
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
