import type { Technology } from "../types/Tech"; 
import { IoClose } from "react-icons/io5";

interface StackProps{
    stack:Technology[];
    removeStack:(id: string) => void;
    removeAll: () => void;
}

const Stack = ({stack, removeStack , removeAll} : StackProps) => {
  return (
    <div className="border rounded-xl p-5 shadow-sm lg:col-start-4 lg:row-start-1">
      
      {stack.length >0 &&( 
      
      <div>
        <h2 className="text-xl font-bold">
          Your Stack
        </h2>

        <p className="text-gray-400">
          {stack.length} Technology Selected
        </p>
      </div>
      )}
<div>
{stack.length===0 ? (

<div className="text-center py-10">
        <p className="text-gray-500">
          Your stack is empty
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Add technologies to build your stack.
        </p>
    
      </div>

):(

    <div >
        {
            stack.map((technology)=>(
                <div className="border border-gray-300 mt-4">
                <div key={technology.id} className="flex items-center">
                   
                 <img src={technology.icon} alt="" className="w-10 h-10"/>
                
                <div>
            <h3 className="font-semibold">
              {technology.name}
            </h3>

            <p className="text-sm text-gray-500">
              {technology.category}
            </p>
                </div>

<button
  onClick={() => removeStack(technology.id)}
  className="ml-auto text-gray-500"
>
  <IoClose size={22} />
</button>
                </div>
</div>
                
            ))}
    </div>

    
)
}
{stack.length>0 &&(
<button onClick={removeAll}
      className=" ml-auto text-red-500 font-bold border border-red-500 w-full rounded-2xl py-2"
    >
      Remove All
    </button>
)}


</div>




      
    </div>
  );
};

export default Stack;