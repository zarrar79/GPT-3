import React from 'react'
import feature from './Feature Image.png'

export const GPT_3 = () => {
    return (
        <>
            {/* Background */}
            <div className='bg-[#041123]'>
                {/* Fluid container */}
                <div className='mx-auto max-w-[1100px] mxLarge pt-[0.5px]'>
                    {/* Card Parent */}
                    <div className='card_bg p-16 pt-0 pb-12 mt-16'> {/*pb-9*/}
                        {/* What is gpt-3 */}
                        <div className='what grid grid-cols-4 pt-14 gap-10'>
                            {/* bar+head */}
                            <div>
                                {/* bar */}
                                <div className='max-w-[38px] h-[3px] element_2'></div>
                                {/* head */}
                                <div className='font-Manrope text-[24px] font-[800] text-[#FFFFFF] mt-4'>What is GPT-3</div>
                            </div>
                            {/* text */}
                            <div className='font-Manrope text-[#81AFDD] text-[16px] col-span-3 text-[500] mt-[1.35rem]'>
                                We so opinion friends me message as delight. Whole front do of plate
                                heard oh ought.
                                His defective nor convinced residence own. Connection has put impossible
                                own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance
                                to on by.
                            </div>
                        </div>
                        {/* Possiblity+libray */}
                        <div className='poss_lib flex justify-between mt-[5.5rem]'>
                            {/* Possibility */}
                            <div className='poss font-Manrope text-[34px] font-[800] custom-text-gradient'>The possibilities are beyond<br></br> your imagination</div>
                            {/* library */}
                            <div className='library text-center pt-2 font-Manrope text-[500] text-[16px] text-[#FF8A71] cursor-pointer'>Explore The Library</div>
                        </div>
                        {/* Parent of boxes */}
                        <div className='parent_boxes grid grid-cols-3 gap-10 mt-[5.5rem]'>
                            {/* chatbot */}
                            <div>
                                {/* bar+chat */}
                                <div>
                                    {/* bar */}
                                    <div className='bar max-w-[38px] h-[3px] element_2'></div>
                                    {/* chat */}
                                    <div className='chat font-Manrope text-[24px] font-[800] text-[#FFFFFF] mt-4'>Chatbots</div>
                                </div>
                                {/* text */}
                                <div className='text font-Manrope text-[#81AFDD] text-[16px] text-[500] mt-[1.35rem]'>
                                    We so opinion friends me message as delight. Whole front do of plate heard oh ought.
                                </div>
                            </div>
                            {/* knowledge */}
                            <div>
                                {/* bar+knowledge */}
                                <div>
                                    {/* bar */}
                                    <div className='max-w-[38px] h-[3px] element_2'></div>
                                    {/* knowledge */}
                                    <div className='chat font-Manrope text-[24px] font-[800] text-[#FFFFFF] mt-4'>Knowledgebase</div>
                                </div>
                                {/* text */}
                                <div className='text font-Manrope text-[#81AFDD] text-[16px] text-[500] mt-[1.35rem]'>
                                    At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
                                </div>
                            </div>
                            {/* Education */}
                            <div>
                                {/* bar+chat */}
                                <div>
                                    {/* bar */}
                                    <div className='max-w-[38px] h-[3px] element_2'></div>
                                    {/* education */}
                                    <div className='chat font-Manrope text-[24px] font-[800] text-[#FFFFFF] mt-4'>Education</div>
                                </div>
                                {/* text */}
                                <div className='text font-Manrope text-[#81AFDD] text-[16px] text-[500] mt-[1.35rem]'>
                                    At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*parent box */}
                    <div className='pt-16'>
                        {/* girl + paragraph */}
                        <div className='girl_para grid grid-cols-2 pl-10'>
                            {/* girl */}
                            <div className='girl'><img src={feature}></img></div>
                            {/* paragrap */}
                            <div className='para flex flex-col justify-center pl-16 pt-[150px]'>
                                {/* small */}
                                <div className='font-Manrope font-[500] text-[16px] text-[#71E5FF] pb-3'>Request Early Access to Get Started</div>
                                {/* Large Para */}
                                <div className='custom-text-gradient font-Manrope font-[800] text-[34px] leading-[45px] pb-3'>The possibilities are beyond your imagination</div>
                                {/* mid */}
                                <div className='font-Manrope text-[16px] font-[400] text-[#81AFDD] pb-3'>Yet bed any for travelling assistance 
                                    indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy 
                                    alteration boisterous the attachment. Party we years to order allow asked of.</div>
                                {/* small */}
                                <div className='font-Manrope font-[500] text-[16px] text-[#FF8A71]' >Request Early Access to Get Started</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
