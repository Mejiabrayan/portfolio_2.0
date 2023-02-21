import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';
import TechStack from 'components/TechStack';
import styles from '../styles/emoji.module.css'

export default function Home(): JSX.Element {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 ">
          <div className='flex flex-col-reverse sm:flex-row items-start'>
            <div className='flex flex-col pr-8'>
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Brayan Mejia Cuenca <div className={`${styles.wave} animate-motion inline-block`}>👋</div>
              </h1>
              <h2 className='text-gray-700 dark:text-gray-200 mb-4'>
                Full-Stack Software Engineer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Based in the Bay Area, California. Currently focused on starting a project that helps musicians take their content creations to the new heights.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                className="rounded-full filter grayscale"
                alt="Brayan Mejia Cuenca"
                height={150}
                width={150}
                src="/avatar.jpg"
                sizes="30vw"
                priority
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Recent Work 📝
          </h3>
          <div className='flex gap-6 flex-col md:flex-row'>
            <ProjectCard
              title="MeetUp App 📍"
              description="Find Events Near You & Connect With Like-Minded Developers With MeetUp App."
              href="https://github.com/Mejiabrayan/MeetUp-App"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <ProjectCard
              title="MyMovies API 🎬"
              description="This is a client-side of a movie database App called myMovies which fetches data from its server-side (MyMovies-API)."
              href="https://github.com/Mejiabrayan/myMovies"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <ProjectCard
              title="Chatty App 📱"
              description="This is a chat app for mobile devices built with React-Native."
              href="https://github.com/Mejiabrayan/Chatty-app"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />

          </div>
          <Link
            href="/project"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'See all projects'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-10">
          <TechStack />
        </div>
      </Container>

    </Suspense>

  );
}
