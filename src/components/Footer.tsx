

const Footer = () => {
    return (

        <div className="bg-gray-50">
        <div className="flex items-center justify-between px-10 py-20">
            
<div>
    <img src="/public/logo-text.png" alt="" />
<p className="mt-7">Curated tools,technologies, and resources for developers building modern software.</p>
<div className="flex gap-3 py-7">
<p className="font-bold">Github</p>
<p className="font-bold">Twitter</p>
<p className="font-bold">linkedIn</p>
</div>

</div>

<div>
    <h3 className="font-bold">PRODUCT</h3>
<p>Home</p>
<p>Technologies</p>
<p>Projects</p>

</div>
<div>
    <h3 className="font-bold">COMPANY</h3>
<p>About</p>
<p>Contact</p>
<p>Careers</p>

</div>
<div>
    <h3 className="font-bold">LEGAL</h3>
<p>Privacy Policy</p>
<p>Terms os Service</p>


</div>

</div>


<div >

    
      <hr className="my-6 border-gray-300" />
<div className=" text-gray-400 p-8 flex justify-between">
      {/* Bottom section */}
      <p className=" text-gray-400">
        © 2026 Dev Stack. All rights reserved.
      </p>
<div className="flex gap-2">
<p >Privacy</p>
<p> Terms</p>
</div>
    </div>
</div>

        </div>
    );
};

export default Footer;