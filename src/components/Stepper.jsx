import React, { useState } from 'react'

const Stepper = () => {
    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count-1);
    }

    return (
        <div className='relative bottom-5 text-[#1ba672] bg-white border border-[#ccc] rounded-md'>
            {(!count)?(<button  className=' w-30 h-11 0  px-5 font-bold  py-1  cursor-pointer hover:bg-[#c7c7c7]'  onClick={()=>{increment()}}>ADD</button>):    
            (<div className='flex  items-center   w-30  h-11 font-bold text-2xl text-center '>
                <button className='w-1/3 h-full cursor-pointer hover:bg-[#c7c7c7]' onClick={()=>{decrement()}}>-</button>
                <div className="display w-1/3 h-full flex justify-center items-center cursor-default">
                    <p>{count}</p>
                </div>
                <button className='w-1/3 h-full cursor-pointer hover:bg-[#c7c7c7]' onClick={()=>{increment()}} >+</button>
            </div>)}
        </div>

  )
}

export default Stepper