const Hero =() => {
return(

<div className="bg-gray-100">
 <div className="px-20 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

 <div className="flex-1">
<h1 className="text-4xl md:text-6xl font-bold leading-tight"> Build Your<span className="text-linear-to-r from-orange-500 via-pink-500 "> Perfect Dev Stack</span></h1>

<p className="mt-7 text-gray-600 text-lg ">Explore moderm technologies and build your perfect development stack. Choose the tools you need and create your ideal workflow.</p>

 <div className="mt-7 flex gap-4">
  <button className="px-6 py-3 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold">Explore Technologies </button>

 <button className="px-6 py-3 rounded-lg border border-gray-300 font-bold">Learn More</button>
</div>
 </div>


  <div className="flex-1">
 <img src="/public/banner-stack.png" alt="" />
</div>

 </div>
    </div>
  )
}

export default Hero;