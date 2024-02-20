import React, { useState,useRef, useContext } from 'react'
import ResultPage from './ResultPage'
import { useForm } from "react-hook-form";
import { PreviousContext } from '../App';

const FormTwo = (props) => {
  const {formTwoData,setFormTwoData}=useContext(PreviousContext)
    const [familyMembers,setFamilyMembers]=useState([])
    const name=useRef()
    const relation=useRef()
    const phone=useRef()
    const email=useRef()
    var id=0;
    const form = useForm();
    const { register} = form;
    const [flag,setFlag]=useState(true)

    console.log("data 1" ,props)
    console.log("data 2",familyMembers)
    function handleDelete(recivedId){
        console.log("recived id",recivedId)

        let newList=formTwoData.filter(ele=>ele.id!=recivedId)
        setFormTwoData(newList)
        console.log(newList)
        
    }
    function handleSubmit(){
        setFlag(false)
    }

    function handleClick(){
         
        let obj={userName:name.current?.value,
        userRelation:relation.current?.value,
        userPhone:phone.current?.value,
        userEmail:email.current?.value,
           id:id++         
    }

        setFamilyMembers(prev=>prev.concat(obj))
        setFormTwoData(prev=>prev.concat(obj))
    }

    console.log("asdsadas",familyMembers)
    console.log("From two data",formTwoData)

  return (
    <>
      {flag ? (
        <div className="form-two bg-white p-8 rounded-md px-12 ">
          <h1 className="text-3xl">Add family members</h1>
          <div className="input flex  mt-6 gap-4 justify-between items-center">
            <div className="name flex flex-col gap-1">
              <label htmlFor="name">Name :</label>
              <input
                ref={name}
                type="text"
                name=""
                id=""
                className=" ml-1 p-1 px-2 rounded-md border border-black"
              />
            </div>
            <div className="relation  flex flex-col gap-1">
              <label htmlFor="relation">Relation :</label>
              <input
                type="text"
                ref={relation}
                name=""
                id=""
                className=" ml-1 p-1 px-2 rounded-md border border-black"
              />
            </div>
            <div className="phone  flex flex-col gap-1">
              <label htmlFor="phone">Phone :</label>
              <input
                type="text"
                ref={phone}
                name=""
                id=""
                className=" ml-1 p-1 px-2 rounded-md border border-black"
              />
            </div>
            <div className="email  flex flex-col gap-1">
              <label htmlFor="relation">Email :</label>
              <input
                type="text"
                ref={email}
                name=""
                id=""
                className=" ml-1 p-1 px-2 rounded-md border border-black"
              />
            </div>
            <button
              onClick={handleClick}
              className="bg-green-300 p-2 rounded-md w-[100px] hover:opacity-80 mt-6 ml-2"
            >
              Add
            </button>
          </div>
          {formTwoData.map((ele, index) => (
            <div key={id++} className="">
              <div className="flex justify-between my-4">
                <p className="">
                  {ele?.id}. {ele?.userName}
                </p>
                <p className=""> {ele?.userRelation}</p>
                <p className=""> {ele?.userPhone}</p>
                <p className=""> {ele?.userEmail}</p>
                <p
                  className="cursor-pointer"
                  onClick={() => handleDelete(ele?.id)}
                >
                  {" "}
                  ❌
                </p>
              </div>
              <hr className="bg-gray-800 " />
            </div>
          ))}

          {formTwoData.length != 0 && (
            <button
              className=" bg-green-300 p-2 rounded-md w-full  hover:opacity-80 mt-6"
              onClick={handleSubmit}
            >
              Submit{" "}
            </button>
          )}
        </div>
      ) : (
        <ResultPage
          formOneData={props}
          formTwoData={familyMembers}
        ></ResultPage>
      )}
    </>
  );
}

export default FormTwo
