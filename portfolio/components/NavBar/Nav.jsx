import React from "react";
import Link from "next/link";
const Nav = () => {
  
    return (
        
        <div className="Nav-main  fixed top-0 w-[100%] z-10">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="text-[20px] text-white "><span className="text-[#f26423] font-extrabold ">My</span>  PortFolio</div>
                <div className=" flex gap-6 sm:text-white text-white ">
                    <Link href='/' className="underline hover:text-white px-3 duration-300">
                        Home
                    </Link>
                    <Link href='/Blog' className="hover:underline hover:text-white px-3 duration-300">
                        Blog
                    </Link>
                   
                    <Link href='/Contact' className="hover:underline hover:text-white px-3">
                       Contact
                    </Link>
                    <Link href='/Contact' className="hover:underline hover:text-white px-3">
                      My Browser
                    </Link>

                </div>
                <div>
                    <a href="#" className="flex border border-white px-4 py-1 text-white
                    rounded-[5px] items-center gap-2 hover:bg-[#ff4D41] hover:text-white transition duration-300
                    ">Dowload CV</a>
                </div>
            </div>
        </div>
    )
}
export default Nav;