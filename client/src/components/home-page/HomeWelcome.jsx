import React from 'react'
import HomeGetStartedButton from './HomeGetStartedButton'
export default function HomeWelcome() {
  return (
    <div className="lg:justify-left w-full bg-white">
        <div className="lg:max-w-7xl lg:text-left border border-solid border-transparent border-[2rem]">
            <div className="text-center mt-72">
            <p className="lg:text-3xl leading-8 text-gray-600">
                Welcome To The
            </p>
            <h1 className="mt-4 lg:text-8xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Traitlet 
            </h1>
            <h1 className="mt-4 lg:text-8xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Builder 
            </h1>
            <p className="mt-4 lg:text-3xl leading-8 text-gray-600">
                Create unique & customized pieces
            </p>
            <HomeGetStartedButton/>
            </div>
        </div>
    </div>

  )
}