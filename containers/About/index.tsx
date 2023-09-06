'use client'

import React from 'react';
import {motion} from "framer-motion";
import {about} from "@/constant";
import Typewriter from "@/components/Typewriter";
import {titles} from "@/constant";

const About: React.FC = ({ }) => {

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-slate-950">
            <div className="w-10/12 flex flex-col sm:flex-row items-center">
                <div className="flex w-1/2 justify-center">
                    <img
                        src={'/avatar.png'}
                        className="w-[450px] h-[600px] min-w-[450px] min-h-[600px] object-cover rounded-full shadow-lg shadow-orange-500 border border-orange-500 p-2"
                    />
                </div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }} // Initial position and opacity
                    animate={{ x: 0, opacity: 1 }}    // Final position and opacity
                    transition={{ duration: 0.5 }}   // Animation duration
                    className="w-full mt-[320px] flex flex-col items-start sm:w-[600px] sm:mt-0"
                >
                    <div className="font-['Poppins-Bold'] text-3xl mb-5">{about.title}</div>
                    <div className="text-slate-300 text-base mb-5">{about.description1}</div>
                    <div className="text-slate-300 text-base mb-5">{about.description2}</div>
                    <a className="transition-colors duration-500 cursor-pointer bg-amber-500/10 hover:bg-amber-500 border border-amber-500/10 text-amber-500 hover:text-white rounded-md me-2 mt-2 py-3 px-5">{about.buttonText}</a>
                </motion.div>
            </div>
        </div>
    );
}

export default About;