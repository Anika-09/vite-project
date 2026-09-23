import type { Technology } from "../types/Tech";

interface TechnologyProps {
  technology: Technology;
  addStack: (technology:Technology) =>void;
  stack: Technology[];

}

const TechnologyCard = ({ technology,addStack, stack }: TechnologyProps) => {
  const isAdded =stack.some((item) => item.id === technology.id);

    return (

    <div className={isAdded? "border-2 border-pink-600 rounded-xl p-5 ":"border-2 border-gray-300 rounded-xl p-5 shadow transition duration-300 hover:-translate-y-2 hover:shadow-lg"}>

      <img
        src={technology.icon}
        alt={technology.name}
        className="w-12 h-12"
      />

      <h2 className="text-xl font-bold mt-3">
        {technology.name}
      </h2>

      <p className="text-gray-600">
        {technology.description}
      </p>

      <p>Category: {technology.category}</p>

      <p>Difficulty: {technology.difficulty}</p>

      <p> {technology.rating}</p>


{isAdded ? (
    <button className="bg-pink-500 w-full py-2 rounded mt-3">
        Added to Stack
    </button>
):(


      <button  onClick={() => addStack(technology)}  className="bg-black text-white w-full py-2 rounded mt-3">
        Add to Stack
      </button>

)}
</div>

  );
};

export default TechnologyCard;