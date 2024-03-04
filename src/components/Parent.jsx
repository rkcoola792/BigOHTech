import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [data,setData]=useState()
  return (
    <div>
      <Child data={data} setData={setData}></Child>
    </div>
  )
}

export default Parent
