import React, { useState } from 'react'

const List = () => {
    const [input,setInput]=useState("")
    const [items,setItems]=useState([])
    function handleClick(){
        setItems([...items,input])
        setInput("")
    }
    return (
    <div>
      <input type="text" placeholder='enter name' value={input} onChange={e=>setInput(e.target.value)}  />
      <button onClick={handleClick}>Add</button>

      {items.map(ele=><li>{ele}</li>)}
    </div>
  )
}

export default List
