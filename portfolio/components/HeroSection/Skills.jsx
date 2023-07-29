import React from 'react';
import Image from 'next/image';
import Skillicon from '../Skillicon';
import HTML from '../assets/HTML.png'
import react from '../assets/react.png'
import Node from '../assets/Node.png'
import JS from '../assets/JS.png'
import css from '../assets/css.png'
import next from '../assets/next.png'
import mysql from '../assets/mysql.png'
import Mongo from '../assets/mongo.png'
import taiwind from '../assets/tailwiond.png'
import less from '../assets/less.png'
import express from '../assets/express.png'
import pankaj from '../assets/pankaj.jpg'
function Skills() {

    return (
        <div style={{ background: "linear-gradient(3deg, black, rgb(40 192 209))" }}>
            <div className='container'>
                <div className='text-center pt-[40px]'>
                    <h2 className='text-[40px]  text-[#f26439]' style={{ fontFamily: "fantasy" }}>Technical <span className='text-white'>Skills</span></h2>
                    <div className='grid grid-cols-4 relative'>
                        <div className='mt-[100px]'>
                            <Skillicon img={HTML} />
                        </div>
                        <div className=''>
                            <Skillicon img={JS} />
                        </div>
                        <div>
                            <Skillicon img={Node} />
                        </div>
                        <div className='mt-[100px]'>
                            <Skillicon img={react} />
                        </div>
                        <div>
                            <Skillicon img={css} />
                        </div>
                        <div className=''>
                            <Skillicon img={next} />

                        </div>

                        <div className=''>
                            <Skillicon img={mysql} />
                        </div>
                        <div>
                            <Skillicon img={Mongo} />
                        </div>
                        <div className='flex ml-[150px]'>
                            <div className='ml-[150px]' >
                                <Skillicon img={taiwind} />

                            </div>

                            <div className='ml-[150px]' >

                                <Skillicon img={express} />
                            </div>

                        </div>

                        <div className='mt-[100px] ml-[160px]' >

                            <Skillicon img={less} />

                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills