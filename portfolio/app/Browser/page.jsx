"use client"

import React, { useState, useEffect } from 'react'

function Browser() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  const [URLValue, setURLValue] = useState("");
  const [URL, setaURL] = useState([...URLValue]);
  
  // Generate Iframe
  const Iframeurl = () => {
    let urlValidator = "^https://[^.]+(?!.com)[^s]*$";

    var res = URLValue.match(urlValidator);
    if (res) {
      setaURL(URLValue);
    } else{
      let url = `https://${URLValue}`;
      setaURL(url);
    }
  };

  
  const submitForm=(event)=>{
    if (event.key === 'Enter') {
      Iframeurl();
    }
  }
  
  // useEffect(() => {
  //   const get_Url = window.location.href;
  //   const searchUrl = get_Url?.split("?url=")?.[1];
  //   if (searchUrl) {
  //     Iframeurl(searchUrl);
  //   }
   
  // },[]);

  return (
    <div style={{ background: "linear-gradient(3deg, black, rgb(40 192 209)) ", height: screenSize.height }} className='pt-[100px] '>
      <div className="container">
        <div className='browserMain flex items-center justify-center  text-center '>
          <div className=' w-full '>
            <div className='text-center shadow-gray-50 shadow  w-[200px] m-auto'>
              <h1 className='text-[#f26423] font-extrabold text-[30px] '>My <span className='text-white font-extrabold '>Browser</span></h1>
            </div>
            <div className='pt-5 relative'>

            <input type="text" onChange={(e) => setURLValue(e.target.value)}
                    onKeyDown={submitForm} placeholder='Enter Url Here ' className='p-3 rounded w-[522px] outline-none ' />
            <i onClick={()=>Iframeurl(URLValue)} className=" fa-solid fa-magnifying-glass bg-slate-300 p-4 rounded absolute top-[20px] "></i>
            </div>

          </div>
        </div>
      </div>
      <div>
      {URL.length >0 && <div className="browser-box  ">
            <div className="iframe-box ">
              <iframe
                src={URL}
                height="400"
                width="100%"
                title="Iframe Example"
                className="h-[100vh]"
              ></iframe>
            </div>
          </div>
          }
      </div>
    </div>
  )
}

export default Browser