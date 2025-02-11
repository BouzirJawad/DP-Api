import Card from "./Card"
import moneyCounter from '../assets/moneyCounter.png'
import blog from '../assets/blog.png'
import startUp from '../assets/startUp.png'
import weather from '../assets/weather.png'

import React,{useState} from "react";

function Projects() {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <section id="myProjectsSection" className="w-[80%] sm:w-[70%] md:w-[55%] lg:w-[65%] mx-auto mt-2 md:mt-10">
            <p className="text-center text-2xl sm:text-4xl font-bold sm:py-6 py-3">Projects</p>
            <div className="grid lg:grid-cols-2 lg:gap-10">
                <Card img={moneyCounter} 
                    alt="Money counter picture" 
                    title="Money counter website" 
                    desc="a website application that counts total money of late people in my class."
                    link="https://github.com/BouzirJawad/money-counter"/>
                <Card img={blog} 
                    alt="blog picture" 
                    title="Blog website" 
                    desc="static blog that has different subjects like travel, sports and gaming."
                    link="https://github.com/BouzirJawad/blog"/>

                <div className={`transition-all duration-700 ease-out overflow-hidden rounded-xl sm:hover:scale-105  ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <Card img={startUp} 
                        alt="startUp picture" 
                        title="StartUp website" 
                        desc="a website application that showcase my group members skills/services."
                        link="https://github.com/BouzirJawad/Start-Up"/>
                </div>

                <div className={`h-max transition-all duration-700 sm:hover:scale-105 rounded-xl ease-out overflow-hidden ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <Card img={weather} 
                        alt="Weather app picture" 
                        title="Weather app website" 
                        desc="a website application that displays the current weather of cities."
                        link="https://github.com/BouzirJawad/Weather-App"/>
                </div>
            </div>
            <div className="w-[60%] md:w-full flex flex-col md:flex-row md:justify-center mx-auto md:gap-5 md:py-3">
                <button onClick={()=> setIsOpen(!isOpen)} className="primary-btn">{isOpen ? "View less" : "View more"}</button>
                <a href="https://github.com/BouzirJawad?tab=repositories" target="_blank">
                    <button className="border-2">View more in Github</button>
                </a>
            </div>
        </section>
    );
}

export default Projects