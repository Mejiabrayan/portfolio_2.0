export default function TechStack() {
    return (
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-16">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Tech Stack 🛠
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-8">
                I have worked with a range of technologies in the web development world. From Back-end To Design.
            </p>
            <div className="flex flex-wrap">
                <p className="text-gray-700 dark:text-gray-200 font-medium mb-2 mr-2">
                    Back-end
                </p>
                <ul className="list-inline flex-wrap text-gray-600 dark:text-gray-400 mb-2">
                    <li className="mr-2">NodeJS</li>
                    <li className="mr-2">Express</li>
                    <li className="mr-2">MongoDB</li>
                    <li className="mr-2">MySQL</li>
                    <li className="mr-2">GraphQL</li>
                    <li className="mr-2">REST</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-200 font-medium mb-2 mr-2">
                    Front-end
                </p>
                <ul className="list-inline flex-wrap text-gray-600 dark:text-gray-400 mb-2">
                    <li className="mr-2">React</li>
                    <li className="mr-2">NextJS</li>
                    <li className="mr-2">Angular</li>
                    <li className="mr-2">Vue</li>
                    <li className="mr-2">HTML</li>
                    <li className="mr-2">CSS</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-200 font-medium mb-2 mr-2">
                    Design
                </p>
                <ul className="list-inline flex-wrap text-gray-600 dark:text-gray-400 mb-2">
                    <li className="mr-2">Figma</li>
                    <li className="mr-2">Adobe XD</li>
                    <li className="mr-2">Adobe Photoshop</li>
                </ul>
            </div>
        </div>
    )
}