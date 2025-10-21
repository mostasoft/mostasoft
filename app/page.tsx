"use client"; // if you're in the app router
import React, { useState, useEffect } from "react";
import Hero from "./../components/Home/Hero";
import UspSection from "./../components/Home/UspSection";
import About from "./../components/Home/about";
import ServiceSection from "./../components/Home/services";
import IndWeHelp from "../components/Home/indWeHelp";
import Process from "../components/Home/process";
import Trust from "./../components/Home/trust";
import Project from "./../components/Home/Project";
import WhoWeWorkWith from "./../components/Home/WorkWith";
import GetQuoteForm from "./../components/Home/CTA";
import Team from "./../components/Home/Team";
import TechBehindUs from "./../components/Home/TechBehindUs";
import FAQAdvanced from './../components/Home/Faqs';

const Page = () => {
  

  return (
    <div>
      <Hero />
      <UspSection />
      <About />
      <ServiceSection />
      <IndWeHelp />
      <Process />
      <Team />
      <Trust />
      <Project />
      <TechBehindUs />
      <WhoWeWorkWith />
      <FAQAdvanced/>
      <GetQuoteForm />
    </div>
  );
};

export default Page;
