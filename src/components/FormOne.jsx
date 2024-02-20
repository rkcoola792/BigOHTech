import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import FormTwo from "./FormTwo";
import { PreviousContext } from "../App";
const FormOne = () => {
  const { previousValue, previousFunction } = useContext(PreviousContext);
  const [formData, setFormData] = useState();
  const form = useForm();
  const { register, control, handleSubmit, formState, getValues } = form;
  const { errors, isDirty, isValid } = formState;
  const [flag, setFlag] = useState(false);
  function onSubmit(data) {
    // console.log("submitted", data);
    setFormData(data);
    setFlag(false);
  }

  return (
    <>
      {" "}
      <div className="flex flex-col gap-6 justify-center items-center h-screen bg-slate-200">
        {flag ? (
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col gap-4 bg-white p-8 px-16  rounded-md"
          >
            <div className="flex  gap-2 justify-between">
              <label htmlFor="firstName">First name :</label>
              <div className="input flex flex-col ">
                <input
                  type="text"
                  className="border border-black rounded-md px-2 py-1"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                <p className="error text-sm text-red-500 m-1">
                  {errors?.firstName?.message}
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <label htmlFor="lastName">Last name :</label>
              <div className="input flex flex-col">
                <input
                  type="text"
                  className="border border-black rounded-md px-2 py-1"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                <p className="error text-sm text-red-500 m-1">
                  {errors?.lastName?.message}
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <label htmlFor="parentName">Parent name :</label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border border-black rounded-md px-2 py-1"
                  {...register("parentName", {
                    required: "Parent name is required",
                  })}
                />
                <p className="error text-sm text-red-500 m-1">
                  {errors?.parentName?.message}
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <label htmlFor="phoneNumber">Phone number :</label>
              <div className="input flex flex-col ">
                <input
                  type="text"
                  className="border border-black rounded-md px-2 py-1"
                  {...register("phoneNumber", {
                    required: "Phone number required",
                    pattern: {
                      value:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                <p className="error text-sm text-red-500 m-1">
                  {errors?.phoneNumber?.message}
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <label htmlFor="Email">Email :</label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border border-black rounded-md px-2 py-1"
                  {...register("Email", {
                    required: "Email required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                      message: "Invalid email",
                    },
                  })}
                />
                <p className="error text-sm text-red-500 m-1">
                  {errors?.Email?.message}
                </p>
              </div>
            </div>
            <div className="flex  gap-2 justify-between">
              <label htmlFor="Address">Address :</label>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border border-black rounded-md px-2 py-1"
                  {...register("Address", {
                    required: "Address is required",
                  })}
                />
                <p className="error text-sm text-red-500 m-1">
                  {errors?.Address?.message}
                </p>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-green-300 p-2 rounded-md w-[450px] hover:opacity-80"
            >
              Next
            </button>
          </form>
        ) : (
          <>
            <FormTwo formData={formData}></FormTwo>
            {!previousValue && (
              <button
                className="bg-teal-200 p-2 px-4 rounded-md"
                onClick={() => setFlag(true)}
              >
                Previous
              </button>
            )}
          </>
        )}

        {/* <DevTool control={control}></DevTool> */}
      </div>
    </>
  );
};

export default FormOne;
