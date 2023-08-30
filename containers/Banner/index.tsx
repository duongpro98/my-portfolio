'use client'

import React from 'react';
import {motion} from "framer-motion";

const Banner: React.FC = ({ }) => {

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-cover pt-[75px] px-[50px]">
            <div className="w-10/12 flex items-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }} // Initial position and opacity
                    animate={{ x: 0, opacity: 1 }}    // Final position and opacity
                    transition={{ duration: 0.5 }}   // Animation duration
                    className="flex flex-col items-start w-1/2"
                >
                    <div className="font-['Poppins-ExtraBold'] text-3xl">Hey! I am</div>
                    <div className="font-['Poppins-ExtraBold'] text-3xl text-orange-400">Software Engineer</div>
                    <div>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</div>
                </motion.div>
                <div className="flex w-1/2">
                    <img src={'/picture-banner.png'} className="w-[500px] h-[500px] min-w-[500px] min-h-[500px] object-contain"/>
                </div>
            </div>
        </div>
    );
}

export default Banner;