import React from 'react';
import { experienceData } from 'data/experience';

const Experience = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                <h3 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                    Work Experience ⚡️
                </h3>
                {experienceData.map((experience, index) => (
                    <div key={index} className="mb-12">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                            {experience.company}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {experience.website}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            {experience.role}
                        </p>
                        <p className="text-gray-800 dark:text-gray-400 mt-4">
                            {experience.description}
                        </p>
                        <div className="mt-4">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {experience.startDate} - {experience.endDate}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
