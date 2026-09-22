import type { Technology } from "../types/Tech";

interface TechnologyProps {
  technology: Technology;
  addStack: (technology:Technology) =>void;
  stack: Technology[];

}

const TechnologyCard = ({ technology,addStack, stack }: TechnologyProps) => {
  const isAdded =stack.some((item) => item.id === technology.id);

    return (

    <div className="border rounded-xl p-5 shadow">

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
    <button className="bg-green-400 px-4 py-2 rounded mt-3">
        Added to Stack
    </button>
):(


      <button  onClick={() => addStack(technology)}  className="bg-black text-white px-4 py-2 rounded mt-3">
        Add to Stack
      </button>

)}
</div>

  );
};

export default TechnologyCard;