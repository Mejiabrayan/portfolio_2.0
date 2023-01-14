import React from 'react';
import { Suspense } from 'react';
import Image from 'next/image';
import Container from 'components/Container';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className='flex flex-col-reverse sm:flex-row items-start'>
            <div className='flex flex-col pr-8'>
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:white">
                Brayan Mejia Cuenca
              </h1>
              <h2 className='text-grey-700 dark:text-grey-200 mb-4'>
                Full-Stack Software Engineer
              </h2>
              <p className="text-grey-600 dark:text-grey-400 mb-16">
                Based in the Bay Area, California. Currently building a project that helps musicians take their content creations to the new heights.
              </p>
            </div>
            <div className='w-[80px sm:w-[176px] relative mb-8 sm:mb-0 mr-auto'>
              <Image
                alt='Brayan Mejia Cuenca'
                height={176}
                width={176}
                src='/avatar.jpg'
                sizes='30vw'
                className='rounded-full filter grayscale'
              />
            </div>
          </div>
          <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white'>
            Recent Work
          </h3>
          <div className='flex gap-6 flex-col md:flex-row'>
            {/* Insert Project Component Here */}
          </div>
        </div>
      </Container>
    </Suspense>
  )
}