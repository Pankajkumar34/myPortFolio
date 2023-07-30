"use client"
import React from "react";
import { useLottie } from 'lottie-react';
import animate from '../Lottie/contact';
const ContactUs = () => {
    const options = {
        animationData: animate,
        loop: true
      };
      const { View } = useLottie(options);
    return (
        <div style={{ background: "linear-gradient(3deg, black, rgb(40 192 209)) " }}>
            <div className="container">
                <div className="sm:block contactmain flex pt-[20px]" >
                    <div className="sm:w-[100%] formbox w-[50%] text-center pt-5 ">


                        <form >
                            <div className="">
                                <h2 className="mb-3 text-[40px] font-extrabold text-white"><span className="text-[#f26439]">Contact</span>  Us</h2>
                                <div>

                                    <input type="text"  className="w-[60%] rounded-[15px] h-[40px] ml-3 p-3" name="name" placeholder="Enter Your Name"/>
                                </div>
                                <div className="my-5">

                                    <input type="text" className="w-[60%] rounded-[15px] h-[40px] ml-3 p-3" name="email" placeholder="Enter Your Email" />
                                </div>
                                <div>
                                    <textarea type="text" className="w-[60%]  rounded-[15px] h-[100px] p-3 " name="message" placeholder="Enter Your Message" />
                                </div>


                                <input type="button" className="bg-white rounded p-2 w-[60%]" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <div className=" sm:w-[100%] SvgVew w-[50%]">
                    { View }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;