
const Nav = () => {

return(

<nav className=" sticky flex items-center justify-between px-20 py-3 border-b border-gray-300 ">

<img src="/public/logo-text.png" alt="logo"/>

<div className="flex gap-6">
<a href="home" className="text-pink-600">Home</a>
<a href="home">Technologies</a>
<a href="home">Projects</a>
<a href="home">About</a>
<a href="home">Contact</a>
</div>

<div className="flex gap-2.5">
<button className="px-4 py-2 border border-gray-300 rounded-lg">Sign in</button>
<button className="px-4 py-2 border bg-pink-500 text-white rounded-lg">Sign Up</button>

</div>

</nav>

)

}

export  default Nav;