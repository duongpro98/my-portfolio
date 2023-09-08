'use client'

import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import Typewriter from "@/components/Typewriter";
import {banner, titles} from "@/constant";

const Banner: React.FC = ({ }) => {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-transparent pt-[75px] px-[50px] sticky top-0 left-0 z-[-1]">
            <div className="w-full flex flex-col sm:w-10/12 sm:flex-row items-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }} // Initial position and opacity
                    animate={{ x: 0, opacity: 1 }}    // Final position and opacity
                    transition={{ duration: 0.5 }}   // Animation duration
                    className="w-full mt-[320px] flex flex-col items-start sm:w-1/2 sm:mt-0"
                >
                    <div className="font-['Poppins-ExtraBold'] text-6xl mb-2">{banner.hey}</div>
                    <div className="font-['Poppins-ExtraBold'] text-5xl text-orange-400 mb-2 min-h-[48px]"><Typewriter texts={titles}/></div>
                    <div className="text-slate-300 text-lg">{banner.description}</div>
                </motion.div>
                <div className="w-full justify-center flex sm:w-1/2">
                    <img src={'/background_anime.png'} className="w-[700px] h-[700px] min-w-[500px] min-h-[500px] object-contain"/>
                </div>
            </div>
        </div>
    );
}

export default Banner;