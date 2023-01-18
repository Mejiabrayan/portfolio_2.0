import React from 'react';

const TechStack: React.FC = () => {
    return (
        <div className=" px-6 py-4 rounded-lg">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Tech Stack 🛠
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-8">
                I have worked with a range of technologies in the web development world. From Back-end To Design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Back-end
                    </h2>
                    <ul className="list-inside">
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">NodeJS</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">Express</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">MongoDB</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">MySQL</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">GraphQL</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">REST</li>

                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Front-end
                    </h2>
                    <ul className="list-inside">
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">React</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">NextJS</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">Angular</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">Vue</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">HTML</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">CSS</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Design
                    </h2>
                    <ul className="list-inside">
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">Figma</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">Adobe XD</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">Adobe Photoshop</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">Adobe Illustrator</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">Adobe After Effects</li>
                        <li className="text-gray-600 dark:text-gray-400 sm:text-lg hover:bg-gray-100">Adobe Premiere Pro</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TechStack;