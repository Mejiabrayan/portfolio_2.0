import React from 'react';
import { FaNodeJs, FaReact, FaAngular, FaVuejs, FaHtml5, FaCss3, FaFigma } from 'react-icons/fa';
import { SiAdobexd, SiAdobe, SiAdobecreativecloud, SiMysql, SiMongodb, SiTypescript } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
// import the next icon from public folder
import '../public/nextjs.svg';

const TechStack: React.FC = () => {
    return (
        <div className="px-0  rounded-lg">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
                Tech Stack 🛠
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-8">
                I have worked with a range of technologies in the web development world. From Back-end to Design.
            </p>
            <div className="mb-6 flex flex-wrap">
                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Back-end
                </h2>
                <div className="flex">
                    <FaNodeJs size="1.5em" className="mx-4" />
                    <SiMysql size="1.5em" className="mx-4" />
                    <SiMongodb size="1.5em" className="mx-4" />
                </div>
            </div>
            <div className="flex flex-wrap">
                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Front-end
                </h2>
                <div className="flex">
                    <FaHtml5 size="1.5em" className="mx-4" />
                    <SiTypescript size="1.5em" className="mx-4" />
                    <FaReact size="1.5em" className="mx-4" />
                    <FaAngular size="1.5em" className="mx-4" />
                    <FaVuejs size="1.5em" className="mx-4" />
                </div>
            </div>
        </div>
    );
};

export default TechStack;
