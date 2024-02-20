import React, { useState,useRef, useContext } from 'react'
import ResultPage from './ResultPage'
import { useForm } from "react-hook-form";
import { PreviousContext } from '../App';
import { DevTool } from '@hookform/devtools';

const FormTwo = (props) => {
  const {formTwoData,setFormTwoData}=useContext(PreviousContext)
    
    const name=useRef()
    const relation=useRef()
    const phone=useRef()
    const email=useRef()
    var id=0;
    const form = useForm();
    const { register,control,handleSubmit,formState,getValues} = form;
    const{errors,isDirty,isValid}=formState
    const [flag,setFlag]=useState(true)
    function handleDelete(recivedId){

        let newList=formTwoData.filter(ele=>ele.id!=recivedId)
        setFormTwoData(newList)
        
    }
    function handleSubmit2(){
        setFlag(false)
    }


   

    function onSubmit(data){
    }

    function handleGetValues(){
      let formData=getValues();
          let obj = {
            userName: formData?.name,
            userRelation: formData?.relation,
            userPhone: formData?.phone,
            userEmail: formData?.email,
            id: id++,
          };
          if(isValid)
          setFormTwoData((prev) => prev.concat(obj));
    }
  return (
    <>
      {flag ? (
        <div className="form-two bg-white p-8 rounded-md px-12 ">
          <h1 className="text-3xl">Add family members</h1>
          <div className="input ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="flex  mt-6 gap-6 justify-between items-center"
              noValidate
            >
              <div className="name flex flex-col gap-1">
                <label htmlFor="name">Name :</label>
                <input
                  ref={name}
                  type="text"
                  name=""
                  id=""
                  className="  p-1 px-2 rounded-md border border-black"
                  {...register("name", {
                    required: "Member field is required",
                  })}
                />
                <p className="error text-sm text-red-500 m-1">
                  {errors?.name?.message}
                </p>
              </div>
              <div className="relation  flex flex-col gap-1">
                <label htmlFor="relation">Relation :</label>
                <input
                  type="text"
                  ref={relation}
                  name=""
                  id=""
                  className=" p-1 px-2 rounded-md border border-black"
                  {...register("relation", {
                    required: "Relation field required",
                  })}
                />
                <p className="error text-sm text-red-500 m-1">
                  {" "}
                  {errors?.relation?.message}
                </p>
              </div>
              <div className="phone  flex flex-col gap-1">
                <label htmlFor="phone">Phone :</label>
                <input
                  type="text"
                  ref={phone}
                  name=""
                  id=""
                  className="  p-1 px-2 rounded-md border border-black"
                  {...register("phone", {
                    required: "Phone number required",
                    pattern: {
                      value:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                <p className="error text-sm text-red-500 m-1">
                  {errors?.phone?.message}
                </p>
              </div>
              <div className="email  flex flex-col gap-1">
                <label htmlFor="email">Email :</label>
                <input
                  type="text"
                  ref={email}
                  name=""
                  id=""
                  className="  p-1 px-2 rounded-md border border-black"
                  {...register("email", {
                    required: "Email required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                      message: "Invalid email",
                    },
                  })}
                />
                <p className="error text-sm text-red-500 m-1">
                   {errors?.email?.message}
                </p>
              </div>
              <button className="bg-green-300 p-2 rounded-md w-[100px] hover:opacity-80 mt-4 ml-2"
              // type='button'
              onClick={handleGetValues}
              >
                Add
              </button>
            </form>
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
              onClick={handleSubmit2}
            >
              Submit{" "}
            </button>
          )}
          {/* <DevTool control={control}></DevTool> */}
        </div>
      ) : (
        <ResultPage
          formOneData={props}
          formTwoData={formTwoData}
        ></ResultPage>
      )}
    </>
  );
}

export default FormTwo
