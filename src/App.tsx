// import { useEffect, useState} from 'react';
import { use, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import { Technology } from "./types/Tech.ts";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stack from "./components/Stack";

import type {Technology} from "./types/Tech";
import TechnologyCard from './components/Card';
import Footer from './components/Footer';

// import Card from "./components/Card"
// import Stack from "./components/Stack"
// import Footer from "./components/Footer"

const technologyFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/data.json");
  return await res.json();
};

const technologyPromise = technologyFetch();





function App() {

const technologies = use(technologyPromise);


const [stack,setStack]= useState<Technology[]>([]);

const handleStack = (technology: Technology) => {
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning("Already Added");
    return;
  }

  setStack((oldStack) => [...oldStack, technology]);

  toast.success(`${technology.name} added to your stack!`);
};
const handleRemoveStack = (id: string) => {
  const removedTechnology = stack.find(
    (technology) => technology.id === id
  );

  setStack((oldStack) =>
    oldStack.filter((technology) => technology.id !== id)
  );

  if (removedTechnology) {
    toast.success(
      `${removedTechnology.name} removed from your stack!`
    );
  }
};


const handleRemoveAll =() =>{
  setStack([]);
  toast.success("All technologies removed from your stack!");
}

  return (
    <>
<Nav />

 <Hero />
 

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6" >
  {technologies.slice(0,3).map((technology) => (
    <TechnologyCard key={technology.id}
technology={technology}
addStack={handleStack}
stack={stack}

/>
  ))}

<Stack stack={stack}
 removeStack={handleRemoveStack}
 removeAll={handleRemoveAll}
/>

</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
 <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
  {technologies.slice(3).map((technology) => (
    <TechnologyCard key={technology.id}
technology={technology}
addStack={handleStack}
stack={stack}
/>
  ))}


</div>
</div>

<Footer></Footer>
<ToastContainer/>
 
    </>
  )
}

export default App
