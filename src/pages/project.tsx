import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Container';




export default function Project() {
    return (
        <Container>

            <div className="flex flex-col justify-center items-center max-w-2xl mx-auto">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                    Projects 🧑‍💻
                </h1>
                <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                    Here are some of my projects I have worked on.
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-16 max-w-2xl mx-auto px-8 py-6">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                    <Link href="https://mejiabrayan.github.io/MeetUp-App/">
                        <Image className="block h-48 w-full bg-cover bg-center" src="/meetup.png" alt="meetup" width={600} height={600} />
                    </Link>
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                    <Link href="https://mejiabrayan.github.io/myMovies-Angular-Client/welcome">
                        <Image className="block h-48 w-full bg-cover bg-center" src="/myMovies.png" alt="myMovies" width={600} height={600} />
                    </Link>
                </div>
               
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                    <Link href="https://github.com/Mejiabrayan/Modern-Login-Form" className="block h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url('/modern_UX_Form.png')` }}>
                    </Link>
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden opacity-80">

                    <Link href="https://github.com/Mejiabrayan/Chatty-app" className="block h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url('/chatty.png')` }}>
                    </Link>
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden opacity-80">
                    <Link href="https://www.theproperbrandclub.com/" className="block h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url('/properbrand.png')` }}>
                    </Link>
                </div>
            </div>
        </Container>
    )
}