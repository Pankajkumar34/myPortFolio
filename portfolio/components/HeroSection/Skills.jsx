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
import bootstrap from '../assets/bootstrap.png'
import pankaj from '../assets/pankaj.jpg'
function Skills() {

    return (
        <div style={{ background: "linear-gradient(3deg, black, rgb(40 192 209))" }}>
            <div className='container'>
                <div className='text-center pt-[40px]'>
                    <h2 className='text-[40px]  text-[#f26439]' style={{ fontFamily: "fantasy" }}>Technical <span className='text-white'>Skills</span></h2>
                    <div className='sm:grid-cols-2 grid grid-cols-4 content-center relative'>
                
                                <Skillicon img={HTML} />
                         
                                <Skillicon img={JS} />
                            
                                <Skillicon img={Node} />
                           
                                <Skillicon img={react} />
                            
                        
                                <Skillicon img={css} />
                         
                            
                                <Skillicon img={next} />

                                <Skillicon img={mysql} />
                           
                           
                                <Skillicon img={Mongo} />
                         

                         
                                <Skillicon img={taiwind} />

                   

                                <Skillicon img={express} />
                           

                                <Skillicon img={less} />
                                <Skillicon img={bootstrap} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills