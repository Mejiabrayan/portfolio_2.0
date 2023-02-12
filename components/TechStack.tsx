import React from 'react';
import { FaNodeJs, FaReact, FaAngular, FaVuejs, FaHtml5, FaCss3, FaFigma } from 'react-icons/fa';
import { SiAdobexd, SiAdobe, SiAdobecreativecloud, SiMysql, SiMongodb, SiTypescript} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';



const TechStack: React.FC = () => {
    return (
        <div className="px-0 py-4 rounded-lg">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
            Tech Stack 🛠
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-8">
                I have worked with a range of technologies in the web development world. From Back-end to Design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Back-end
                    </h2>
                    <ul className="list-inside">
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg">
                            <FaNodeJs size="1em" />
                        </li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg">
                           <SiMysql size="1em" />
                            </li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg">
                             <SiMongodb size="1em" />
                             </li>

                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg ">
                            <GrMysql size="1em" />
                            </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Front-end
                    </h2>
                    <ul className="list-inside">
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg ">
                            <SiTypescript size="1em" />
                        </li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg ">
                            <FaReact size="1em" />
                        </li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg ">
                            <FaAngular size="1em" />
                        </li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg ">
                            <FaVuejs size="1em" />
                        </li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg ">
                            <FaHtml5 size="1em" />
                        </li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg ">
                            <FaCss3 size="1em" />
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Design
                    </h2>
                    <ul className="list-inside">
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg ">
                            <FaFigma size="1em" />
                        </li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg ">
                            <SiAdobexd size="1em" />
                        </li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg ">
                            <SiAdobe size="1em" />
                        </li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg ">
                            <SiAdobecreativecloud size="1em" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TechStack;