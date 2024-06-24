import React from 'react'

function OurCoffee() {
  return (
    <div className="bg-white min-h-[100vh]">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mx-auto max-w-2xl py-10 lg:max-w-none">
          <div className="space-y-12">
            <div className="group relative">
              <h1 className="text-2xl lg:text-5xl font-black font-opensans text-gray-900 mb-8">Hablemos de café</h1>
              <div className="relative overflow-hidden rounded-lg bg-white lg:aspect-h-1 lg:aspect-w-2">
                <img
                  src='https://cafesmoreno.com/wp-content/uploads/2022/07/descafeinado_web.jpg'
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="text-base lg:text-lg font-medium font-opensans text-gray-900 mt-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint distinctio placeat, dignissimos necessitatibus neque debitis facilis iste quo magni commodi ipsa excepturi assumenda laborum dolorum. Magni ipsam minus repellat quos.
              </p>           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurCoffee