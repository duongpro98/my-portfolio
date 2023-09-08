import React from "react";
import SvgReact from "@/assets/icons/React";
import SvgJavascript from "@/assets/icons/Javascript";
import SvgTypescript from "@/assets/icons/Typescript";
import SvgNodeJS from "@/assets/icons/NodeJS";
import SvgBootstrap from "@/assets/icons/Bootstrap";
import SvgCSS from "@/assets/icons/CSS";
import SvgGit from "@/assets/icons/Git";
import SvgHTML from "@/assets/icons/HTML";
import SvgMongoDB from "@/assets/icons/MongoDB";
import SvgMUI from "@/assets/icons/MUI";
import SvgNextJS from "@/assets/icons/NextJS";
import SvgPostgresQL from "@/assets/icons/PostgresQL";
import SvgRedux from "@/assets/icons/Redux";
import SvgStorybook from "@/assets/icons/Storybook";
import SvgTailwindCSS from "@/assets/icons/TailwindCSS";

interface techIconProps {
    icon: string,
    text: string
}

const renderIcon = {
    react: <SvgReact/>,
    javascript: <SvgJavascript/>,
    typescript: <SvgTypescript/>,
    'node-js': <SvgNodeJS/>,
    bootstrap: <SvgBootstrap/>,
    css: <SvgCSS/>,
    git: <SvgGit/>,
    html: <SvgHTML/>,
    mongoDB: <SvgMongoDB/>,
    mui: <SvgMUI/>,
    'next-js': <SvgNextJS/>,
    postgresQL: <SvgPostgresQL/>,
    redux: <SvgRedux/>,
    storybook: <SvgStorybook/>,
    'tailwind-css': <SvgTailwindCSS/>
}

const TechIcon:React.FC<techIconProps> = ({ icon, text }) => {
    return (
        <div className="flex items-center w-[250px] justify-start m-3 py-3 px-5 bg-slate-900 rounded-lg shadow shadow-gray-800 hover:shadow-gray-700 transition duration-500">
            <div className="mr-3">
                {renderIcon[icon]}
            </div>
            <div className="font-['Poppins-Medium'] text-lg">{text}</div>
        </div>
    )
}

export default TechIcon;