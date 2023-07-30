"use client"
import React from 'react';

import { useLottie } from 'lottie-react';
import animate from '../Lottie/animation_lkmsh64d';
function HeroSection() {
  const options = {
    animationData: animate,
    loop: true
  };
  const { View } = useLottie(options);
  return (
    <div style={{ background: "linear-gradient(3deg, black, rgb(40 192 209)) " }} className="pt-[100px] bg-cover bg-center bg-no-repeat " >
      <div className='container'>
        <div className='sm:block mai-portfpoilo flex justify-center items-center'>
          <div className='sm:w-full w-[40%] text-white'>
            <h1 className='text-[50px]'>Hello everyOne!</h1>
            <p><span className='text-[#f26423]'>My Name is Pankaj Kumar</span> I am Mern Stack Devloper</p>
            <div>
              <button className='border border-white rounded-[20px] p-2 m-3'>Check My CV</button>
              <button className='border border-white rounded-[20px] p-2 m-3'>LinkedIN</button>
            </div>
            <div className=' mt-[10px] ml-[25px] border-b border-solid border-t w-[50%] '>
              <div className=' flex gap-6 ml-[30px] p-3'>
              <i className="fa-brands fa-facebook text-[20px]"></i>
              <i className="fa-brands fa-instagram text-[20px] "></i>
              <i className="fa-brands fa-linkedin text-[20px]"></i>
              <i className="fa-solid fa-phone text-[20px]"></i>
              </div>
         
            </div>

          </div>
          <div className='sm:w-full w-[500px]'>
            {View}
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection;