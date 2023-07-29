import React from 'react'
import Image from 'next/image';
function Skillicon({ img }) {
    return (
     
            <div className='w-[150px]'>
                <Image
                className='bg-white m-[20px] rounded shadow p-2'
                    src={img}
                    alt='Skills Image'
                />
            </div>
       
    )
}

export default Skillicon;