import React, { useEffect, useState } from 'react'

const DecreaseTimer = () => {
    const [time,setTime]=useState(10)
    useEffect(()=>{
        if(time>0){
          setTimeout(() => {
            setTime((prev) => prev - 1);
          }, 1000);
        }
    },[time])
   
    return (
    <div className='timer flex justify-center items-center flex-col h-screen'>
      <h1 className='text-3xl'>Timer</h1>
      <h1 className='text-3xl'>{time}</h1>
    </div>
  )
}

export default DecreaseTimer
