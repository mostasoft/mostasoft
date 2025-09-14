import React from "react";
import { BiRevision, BiSupport } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdHighQuality } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const ServiceSection = () => {
  return (
    <div className="p-6 bg-gray-100 space-y-3">
      <div className="flex lg:p-4 font-bold text-xl lg:text-4xl justify-center items-center">
        Reliable Services We Offer
      </div>
      <div className="grid grid-cols-1 space-y-2  space-x-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <div className=" p-4 btn-glass">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RiTeamFill className="" />
              <div className="text-xl font-bold">Web Design</div>
            </div>

            <div>
              We’re more than developers—we’re your partners. Our skilled team
              works exclusively on your project, ensuring focus and efficiency.
            </div>
          <div>
            
             <button className="btn-glass flex justify-center items-center gap-2 hover:translate-x-2 text-red-500">  Let's Talk <IoLogoWhatsapp /> </button>
           </div>
          </div>
        </div>
        <div className=" p-4 btn-glass">
          <div className="space-y-2">
           <div className="flex items-center space-x-2">
             <MdHighQuality />
            <div className="text-xl font-bold">WordPress</div>
           </div>
            <div>
              Excellence is our standard. Every line of code, every design
              element, and every detail is crafted with precision to deliver
              world-class quality for your business.
            </div>
          <div>
            
             <button className="btn-glass flex justify-center items-center gap-2 hover:translate-x-2 text-red-500">  Let's Talk <IoLogoWhatsapp /> </button>
           </div>
          </div>
        </div>
        <div className=" p-4 btn-glass">
          <div className="space-y-2">
           <div className="flex items-center space-x-2">
             <BiSupport />
            <div className="text-xl font-bold">Front End</div>
           </div>
            <div>
              We’ve got your back—always. From day one to launch (and beyond),
              our support team is here 24/7 to solve problems and keep your
              project running smoothly.
            </div>
           <div>
            
             <button className="btn-glass flex justify-center items-center gap-2 hover:translate-x-2 text-red-500">  Let's Talk <IoLogoWhatsapp /> </button>
           </div>
          </div>
        </div>
        <div className=" p-4 btn-glass ">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
             <BiRevision />
            <div className="text-xl font-bold">Back End</div>
           </div>
            <div>
              Your satisfaction comes first. We don’t stop until you’re 100%
              happy—because your vision deserves to be perfected without
              compromise.
            </div>
          <div>
            
             <button className="btn-glass flex justify-center items-center gap-2 hover:translate-x-2 text-red-500">  Let's Talk <IoLogoWhatsapp /> </button>
           </div>
          </div>
        </div>
      </div>
       <div className="flex lg:p-4 font-bold text-xl lg:text-4xl justify-center items-center">
        By Category
      </div>
      <div className="grid grid-cols-1 space-y-2  space-x-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <div className=" p-4 btn-glass">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RiTeamFill className="" />
              <div className="text-xl font-bold">E-Commerce</div>
            </div>

            <div>
              We’re more than developers—we’re your partners. Our skilled team
              works exclusively on your project, ensuring focus and efficiency.
            </div>
            <div>
            
             <button className="btn-glass flex justify-center items-center gap-2 hover:translate-x-2 text-red-500">  Let's Talk <IoLogoWhatsapp /> </button>
           </div>
          </div>
        </div>
        <div className=" p-4 btn-glass">
          <div className="space-y-2">
           <div className="flex items-center space-x-2">
             <MdHighQuality />
            <div className="text-xl font-bold">Woo-Commererce</div>
           </div>
            <div>
              Excellence is our standard. Every line of code, every design
              element, and every detail is crafted with precision to deliver
              world-class quality for your business.
            </div>
           <div>
            
             <button className="btn-glass flex justify-center items-center gap-2 hover:translate-x-2 text-red-500">  Let's Talk <IoLogoWhatsapp /> </button>
           </div>
          </div>
        </div>
        <div className=" p-4 btn-glass">
          <div className="space-y-2">
           <div className="flex items-center space-x-2">
             <BiSupport />
            <div className="text-xl font-bold">Health Care</div>
           </div>
            <div>
              We’ve got your back—always. From day one to launch (and beyond),
              our support team is here 24/7 to solve problems and keep your
              project running smoothly.
            </div>
            <div>
            
             <button className="btn-glass flex justify-center items-center gap-2 hover:translate-x-2 text-red-500">  Let's Talk <IoLogoWhatsapp /> </button>
           </div>
          </div>
        </div>
        <div className=" p-4 btn-glass ">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
             <BiRevision />
            <div className="text-xl font-bold">Food Business</div>
           </div>
            <div>
              Your satisfaction comes first. We don’t stop until you’re 100%
              happy—because your vision deserves to be perfected without
              compromise.
            </div>
           <div>
            
             <button className="btn-glass flex justify-center items-center gap-2 hover:translate-x-2 text-red-500">  Let's Talk <IoLogoWhatsapp /> </button>
           </div>
          </div>
        </div>
        
      </div>
      <div className="flex font-bold  cursor-pointer justify-center items-center">
        <h1 className="btn-glass bg-red-500 text-white hover:translate-x-4">Load More</h1>
      </div>
    </div>
  );
};

export default ServiceSection;
