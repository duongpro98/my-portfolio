'use client'

import React from 'react';
import {technology} from "@/constant";
import TechIcon from "@/utils/components/TechIcon";

const Technology: React.FC = ({ }) => {

    return (
        <div className="flex justify-center items-start w-screen min-h-screen bg-slate-800">
            <div className="w-10/12 flex flex-col items-center pt-24">
                <div className="w-1/2 text-center font-['Poppins-Bold'] text-3xl mb-6">{technology.title}</div>
                <div className="w-1/2 text-center text-slate-400 text-base mb-16">{technology.description}</div>
                {/*<div className="w-10/12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">*/}
                <div className="w-11/12 flex flex-wrap justify-center">
                    {
                        technology.technologies.map((item: any, idx: number) => (
                            <TechIcon key={idx} icon={item.icon} text={item.text}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Technology;