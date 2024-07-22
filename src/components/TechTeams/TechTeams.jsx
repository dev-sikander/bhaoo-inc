import Image from 'next/image'
import React from 'react'
// Images
import TechOne from "media/images/tech-1.png"
import TechTwo from "media/images/tech-2.png"
import TechThree from "media/images/tech-3.png"
import TechFour from "media/images/tech-4.png"
import TechFive from "media/images/tech-5.png"
import TechSix from "media/images/tech-6.png"
import TechSeven from "media/images/tech-7.png"
import TechEight from "media/images/tech-8.png"
import TechNine from "media/images/tech-9.png"

const TechTeams = () => {
    return (
        <section className='py-[50px] lg:py-[80px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="txt text-center">
                            <p className='font-sans text-white text-[14px] md:text-[20px] mt-3'>Teams we’ve built for our startups & projects</p>
                            <h2 className='text-[35px] md:text-[50px] lg:text-[60px] font-[600] text-white font-sans text-center mb-[20px] md:mb-[50px]'>Tech Teams</h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 flex flex-wrap lg:flex-nowrap items-center justify-center gap-5">
                        <div className="w-full md:w-[30%] lg:w-[200px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex flex-row md:flex-col items-center justify-around md:justify-start">
                                <Image src={TechOne} alt='Bhaoo Inc' className='w-[20%] md:w-[35px] xl:w-[47px] block md:mx-auto' />
                                <p className='text-[16px] md:text-[12px] xl:text-[16px] font-[600] font-sans text-white mt-[12px] text-center'>
                                    Google Services
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-[30%] lg:w-[320px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex items-center px-3 gap-x-6 justify-around md:justify-start">
                                <Image src={TechTwo} alt='Bhaoo Inc' className='w-[20%] md:w-[30%]' />
                                <p className='text-[15px] xl:text-[20px] font-[600] font-sans text-white my-[12px] text-center'>App Design & <br /> Development</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[30%] lg:w-[190px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex items-center justify-around md:justify-start px-3 gap-x-6">
                                <Image src={TechThree} alt='Bhaoo Inc' className='w-[20%] md:w-[35%] lg:w-[50%]' />
                                <p className='text-[22px] xl:text-[28px] font-[600] font-sans text-white text-center'>
                                    <span className="md:block leading-[25px]">S</span>
                                    <span className="md:block leading-[25px]">M</span>
                                    <span className="md:block leading-[25px]">M</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-[30%] lg:w-[130px]">
                            <div className="bg-[#262626] py-[15px] border-2 border-[#707070] rounded-[20px] h-full flex flex-row md:flex-col items-center justify-around md:justify-start">
                                <Image src={TechFour} alt='Bhaoo Inc' className='w-[20%] md:w-[30px] xl:w-[47px] block md:mx-auto' />
                                <p className='text-[16px] md:text-[12px] xl:text-[16px] font-[600] font-sans text-white mt-[12px] text-center'>
                                    Article <br className='lg:block hidden' /> Writing
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-[30%] lg:w-[230px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex flex-row md:flex-col items-center justify-around md:justify-start">
                                <Image src={TechFive} alt='Bhaoo Inc' className='w-[20%] md:w-[27px] lg:w-[47px] block md:mx-auto' />
                                <p className='text-[16px] md:text-[12px] xl:text-[16px] font-[600] font-sans text-white mt-[12px] text-center'>
                                    software <br className='md:hidden block' /> development
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 flex flex-wrap lg:flex-nowrap items-center justify-center gap-5 md:pt-4">
                        <div className="w-full md:w-[45%] lg:w-[340px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex items-center justify-around md:justify-start px-5 gap-x-6 lg:gap-x-10">
                                <Image src={TechSix} alt='Bhaoo Inc' className='w-[20%] md:w-[22%] lg:w-[28%]' />
                                <p className='text-[15px] xl:text-[20px] font-[600] font-sans text-white my-[12px] text-center'>Amazon Book  <br /> Publishing</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[45%] lg:w-[205px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex flex-row md:flex-col items-center justify-around md:justify-start">
                                <Image src={TechSeven} alt='Bhaoo Inc' className='w-[20%] md:w-[40px] xl:w-[47px] block md:mx-auto' />
                                <p className='text-[13px] md:text-[8px] xl:text-[13px] font-[600] font-sans text-white mt-[12px] text-center'>
                                    Web Design & <br /> Development
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-[45%] lg:w-[340px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex items-center justify-around md:justify-start px-6 gap-x-6 lg:gap-x-10">
                                <Image src={TechEight} alt='Bhaoo Inc' className='w-[32%]' />
                                <p className='text-[15px] xl:text-[20px] font-[600] font-sans text-white my-[12px] text-center'>
                                    <span className='text-[33px] xl:text-[45px] leading-[20px] xl:leading-[40px]'>Book</span> <br /> Publishing</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[45%] lg:w-[205px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex items-center justify-around md:justify-start px-6 gap-x-6">
                                <Image src={TechNine} alt='Bhaoo Inc' className='w-[20%] md:w-[32%] lg:w-[60%]  block md:mx-auto' />
                                <p className='text-[22px] xl:text-[28px] font-[600] font-sans text-white text-center'>
                                    <span className="md:block leading-[25px] xl:leading-[31px]">S</span>
                                    <span className="md:block leading-[25px] xl:leading-[31px]">E</span>
                                    <span className="md:block leading-[25px] xl:leading-[31px]">O</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechTeams
