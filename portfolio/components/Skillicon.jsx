import React from 'react'
import Image from 'next/image';
function Skillicon({ img }) {
    return (

        <div className='shadow p-2 m-auto'>
            <div className='sm:h-[156px] sm:w-[154px] center-logo' >
                <Image
                    className='w-[100px]'
                    src={img}
                    alt='Skills Image'
                />
            </div>
        </div>
    )
}

export default Skillicon;