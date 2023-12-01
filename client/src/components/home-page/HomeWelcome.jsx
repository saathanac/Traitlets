import React from 'react'
import HomeGetStartedButton from './HomeGetStartedButton'
export default function HomeWelcome() {
  return (
    <div className="bg-white justify-left">
        <div className="max-w-7xl py-80" style={{ marginLeft: '3rem' }}>
            <div className="text-center">
            <p className="mt-4 text-3xl leading-8 text-gray-600">
                Welcome To The
            </p>
            <h1 className="mt-4 text-9xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Traitlet Builder
            </h1>
            <p className="mt-4 text-3xl leading-8 text-gray-600">
                Create unique & customized pieces
            </p>
            <HomeGetStartedButton/>
            </div>
        </div>
    </div>

  )
}