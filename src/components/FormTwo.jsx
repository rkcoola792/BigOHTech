import React, { useState,useRef } from 'react'

const FormTwo = () => {
    const [familyMembers,setFamilyMembers]=useState([])
    const name=useRef()
    const relation=useRef()
    var id=0;

    function handleDelete(recivedId){
        console.log("recived id",recivedId)

        let newList=familyMembers.filter(ele=>ele.id!=recivedId)
        setFamilyMembers(newList)
        console.log(newList)
        
    }

    function handleClick(){
         
        let obj={userName:name.current?.value,
        userRelation:relation.current?.value,
           id:id++         
    }

        setFamilyMembers(prev=>prev.concat(obj))
    }

    console.log("asdsadas",familyMembers)
  return (
    <div className="form-two bg-white p-8 rounded-md px-12">
      <h1 className="text-3xl">Add family members</h1>
      <div className="input flex mt-6 gap-4 justify-center items-center">
        <div className="name">
          <label htmlFor="name">Name :</label>
          <input
            ref={name}
            type="text"
            name=""
            id=""
            className=" ml-2 p-1 px-2 rounded-md border border-black"
          />
        </div>
        <div className="relation ">
          <label htmlFor="relation">Relation :</label>
          <input
            type="text"
            ref={relation}
            name=""
            id=""
            className=" ml-2 p-1 px-2 rounded-md border border-black"
          />
        </div>
        <button
          onClick={handleClick}
          className="bg-green-300 p-2 rounded-md w-[100px] hover:opacity-80 mt-1"
        >
          Add
        </button>
      </div>
      {familyMembers.map((ele, index) => (
        <div key={id++} className="">
          <div className="flex justify-between my-4">
            <p className="">
              {ele?.id}. {ele?.userName}
            </p>
            <p className=""> {ele?.userRelation}</p>
            <p className="cursor-pointer" onClick={() => handleDelete(ele?.id)}>
              {" "}
               ❌ 
            </p>
          </div>
          <hr className="bg-gray-800 " />
        </div>
      ))}

      {familyMembers.length!=0 && <button className=" bg-green-300 p-2 rounded-md w-full  hover:opacity-80 mt-6">Submit </button>}
    </div>
  );
}

export default FormTwo
