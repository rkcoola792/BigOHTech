import React, { useState } from 'react'

const JiraBoar = () => {
   
    const [task, setTask] = useState([
        {
        name:"task1",
        status:"toDo"
    },
        {
        name:"task2",
        status:"toDo"
    },
        {
        name:"task3",
        status:"toDo"
    },
        {
        name:"task4",
        status:"toDo"
    },
        {
        name:"task5",
        status:"toDo"
    },
]);

const [inProgress,setInProgress]=useState([])
const [completed,setCompleted]=useState([])

function handleFirstClick(e){
    console.log("clicked name",e)
    let newTask=task.filter(ele=>ele.name!=e)
    setInProgress(prev=>[...prev,e])
    console.log("newtask",newTask)
    setTask(newTask)
    // setInProgress(e)
    console.log("inprogress",inProgress)
}
function handleSecondClick(e){
    console.log("Second click",e)
    let newTask=inProgress.filter(ele=>ele!=e)
    setInProgress(newTask)
    setCompleted(prev=>[...prev,e])
}

  return (
    <div className="jira flex m-20 gap-20">
      <div className="toDo flex flex-col gap-2">
        <h1>ToDo</h1>
        <div className="list">
          {task?.map((ele,index) => (
            <div className="flex flex-col " key={index} name={ele.name} onClick={()=>handleFirstClick(ele.name)}>{ele.name}</div>
          ))}
        </div>
      </div>
      <div className="inProgress flex flex-col">
      <div>Inprogress</div>
        {" "}
        {inProgress?.map((ele) => (
          <div className="flex flex-col" name={ele} onClick={()=>handleSecondClick(ele)}>{ele}</div>
        ))}
      </div>
      <div className="Completed flex flex-col">
      <div>Completed</div>
        {" "}
        {completed?.map((ele) => (
          <div className="flex flex-col">{ele}</div>
        ))}
      </div>
    </div>
  );
}

export default JiraBoar
