'use client'

import React from 'react';
import {motion} from "framer-motion";
import Typewriter from "@/components/Typewriter";
import {titles} from "@/constant";

const About: React.FC = ({ }) => {

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-slate-950">
            <div className="w-full flex flex-col sm:w-10/12 sm:flex-row items-center">
                <div className="flex w-1/2 justify-end mr-9">
                    <img
                        src={'/avatar.png'}
                        className="w-[450px] h-[600px] min-w-[450px] min-h-[600px] object-cover rounded-full shadow-lg shadow-orange-500 border border-orange-500 p-2"
                    />
                </div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }} // Initial position and opacity
                    animate={{ x: 0, opacity: 1 }}    // Final position and opacity
                    transition={{ duration: 0.5 }}   // Animation duration
                    className="w-full mt-[320px] flex flex-col items-start sm:w-1/2 sm:mt-0 ml-9"
                >
                    <div className="font-['Poppins-ExtraBold'] text-6xl mb-2">Hey! I'm a</div>
                    <div className="font-['Poppins-ExtraBold'] text-5xl text-orange-400 mb-2 min-h-[48px]"><Typewriter texts={titles}/></div>
                    <div className="text-slate-300 text-lg">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;