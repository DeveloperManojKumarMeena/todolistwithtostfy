import { toast } from "react-toastify";

const Read = (props) => {
  const data = props.data;
  const setdata = props.setdata;

  const renderdata = data.map((task) => {
    return (
      <li
        className="flex justify-between bg-flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800 w-100% mb-3"
        key={task.id}
      >
        {task.title}{" "}
        <div className="flex gap-2">
          <button className="text-gray-700">
            <i className="ri-pencil-fill">edit</i>
          </button>
          <button
            onClick={() => DeleteHandler(task.id)}
            
          >
            <i className="ri-delete-bin-6-line">Delete</i>
          </button>
        </div>
      </li>
    );
  });
  const DeleteHandler = (id) => {
    const FilterData = data.filter((task) => task.id != id);
  
    setdata(FilterData);
  toast.error("Task Has been Deleted!")  
  };

  return (
    <div className="w-[100%]    p-8 md:w-[50%] mt-0 ">
      <h1 className="text-4xl pt-5">
        {" "}
        <span className="text-pink-400">Panding</span> To-Do...
      </h1>
      <div className="overflow-y-auto h-[80%]">
    <ul className="mt-5 ">
        {renderdata}
        {/* <li className="flex justify-between bg-flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800 w-170">Add list now!  <div className="flex gap-2"><i class="ri-pencil-fill">edit</i><i class="ri-delete-bin-6-line">Delete</i></div></li>  */}
      </ul>
      </div>
      
    </div>
  );
};

export default Read;
