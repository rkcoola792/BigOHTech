import React, { useContext } from 'react'
import {PreviousContext} from "../App"

const ResultPage = (props) => {
  const { previousValue,previousFunction } = useContext(PreviousContext);
  console.log("previous value",previousValue)
  previousFunction(true)
  console.log("Result page",props)
    return (
      <div>
        <h1 className="text-3xl mb-1 ">Succesfully added all the details !</h1>
        <div className="flex flex-col gap-2">
          <p>First name : {props?.formOneData?.formData?.firstName}</p>
          <p>Last name : {props?.formOneData?.formData?.lastName}</p>
          <p>Parent name : {props?.formOneData?.formData?.parentName}</p>
          <p>Phone number : {props?.formOneData?.formData?.phoneNumber}</p>
          <p>Email : {props?.formOneData?.formData?.Email}</p>
          <p>Address : {props?.formOneData?.formData?.Address}</p>
        </div>
        <hr />
        <h1 className="text-2xl mt-6 mb-1 ">Family members</h1>
        <div className="flex flex-col gap-2">
          {props?.formTwoData?.map((ele) => (
            <div className="flex gap-4">
              <p>{ele?.userName} :</p>
              <p>{ele?.userRelation}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default ResultPage
