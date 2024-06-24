import React from 'react'

function OurCompany() {
  return (
    <div className="bg-white min-h-[100vh]">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mx-auto max-w-2xl py-10 lg:max-w-none">
          <div className="space-y-12">
            <div className="group relative">
              <h1 className="text-2xl lg:text-5xl font-black font-opensans text-gray-900 mb-8">Nuestra compañía</h1>
              <div className="relative overflow-hidden rounded-lg bg-white lg:aspect-h-1 lg:aspect-w-2">
                <img
                  src='https://cdn.panampost.com/wp-content/uploads/2023/05/Cafeteria.jpg'
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h2 className="text-xl lg:text-4xl font-black font-opensans text-gray-900 mt-8 mb-5">
                Nuestro legado
              </h2>
              <p className="text-base lg:text-lg font-medium font-opensans text-gray-900">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint distinctio placeat, dignissimos necessitatibus neque debitis facilis iste quo magni commodi ipsa excepturi assumenda laborum dolorum. Magni ipsam minus repellat quos.
              </p>
              <br />
              <p className="text-base lg:text-lg font-medium font-opensans text-gray-900">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum suscipit dicta iste, expedita explicabo porro, ipsa laboriosam illum odit distinctio cumque error perferendis culpa. Quidem accusamus numquam iste ex voluptatibus!
              </p>
              <br />
              <p className="text-base lg:text-lg font-medium font-opensans text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa soluta asperiores assumenda aspernatur. Iusto fugiat, a reiciendis praesentium animi quia tempore perspiciatis sit excepturi ullam esse tenetur ipsa veritatis.
              </p>
              <div className="relative overflow-hidden rounded-lg bg-white lg:aspect-h-1 lg:aspect-w-2 mt-8">
                <img
                  src='https://mundodelcafe.es/wp-content/uploads/2023/06/barista-que-es-formacion-y-tecnicas-preparar-cafe-.jpg'
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default OurCompany