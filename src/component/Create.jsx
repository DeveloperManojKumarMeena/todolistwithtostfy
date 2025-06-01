import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";


const Create = (props) => {
  const data = props.data;
  const setdata = props.setdata;
const [title, settitle] = useState("")
  
const [task, settask] = useState("")




const tiltlehandler =(e)=>{
    settitle(e.target.value);
};



let  submithandler = (e)=>{
  e.preventDefault();
  
  const newtodo={
    id: nanoid(),
    title,
    isComplete:false
  }
let copytask=[...data];
copytask.push(newtodo);
setdata(copytask);
toast.success("Task Added Success!")
settitle("")
  
}
console.log(data);



  return (
    <div className=" w-screen  w-[50%]   p-8">
      <h1 className="text-4xl ">
        
        Set <span className="text-pink-400">Reminders</span> For <br></br>Tasks
      </h1>
      <form onSubmit={submithandler}>
        <input
          className="mt-10 border-b "
          type="text"
          placeholder="Create Task..."
          onChange={(e) => tiltlehandler(e)}
          value={title}
        />
        <button className="ml-5 rounded-lg bg-white p-2 shadow-md outline outline-black/5 dark:bg-gray-800 mt-2 ml-0">
          Add To List
        </button>
      </form>
    </div>
  );
};

export default Create;
