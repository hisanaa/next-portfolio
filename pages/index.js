import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

function index() {
  const [portfolio, setPortfolio] = useState([])

  const getPortfolio = () => {
    axios.get('https://backend-ezzaportfolio.herokuapp.com/api/portfolio/featured')
    .then(res => {
      console.log(res.data.data)
        setPortfolio(res.data.data)
    })
  }

  useEffect(() => {
    getPortfolio()
  }, [])

  return (
    <>
      {/* mobile view */}
      <div className="h-screen w-screen xl:hidden flex items-center justify-center bg-purple-600">
        <h1 className="text-white text-2xl font-bold text-center content-center">Working on Desktop Only!</h1>
      </div>

      {/* desktop view */}
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
          {/* border top */}
          <div className="w-full h-2 bg-purple-600" />
          {/* border top */}

          {/* about me */}
          <div className="w-full justify-center items-center flex flex-col bg-custom-gray p-5">
            <div className="bg-red-400 w-32 h-32 border-4 border-purple-600 rounded-full overflow-hidden">
              <img className="object-contain" src='https://user-images.githubusercontent.com/93656221/140810387-1fd8e153-ff57-4a73-8c73-dbf47127dbb6.jpg' alt />
            </div>
            <h1 className="text-lg font-medium pt-2">ARIF SAIFUDIN</h1>
            <h1 className="text-4xl text-purple-500 font-bold pb-2">WEB DEVELOPER</h1>
            <p className="w-2/4 text-center text-gray-600">Saya adalah seseorang yang memiliki ketertarikan di dunia teknologi. Terutama pada teknologi software, hardware dan jaringan. menjadi seorang yang kompeten pada ketertarikan saya adalah impian saya. Untuk sekarang saya bekerja dan fokus pada software development. Fokus utama saya adalah untuk menjadi fullstack developer.</p>
            <div className="flex w-30 pt-3">
              <div className="w-10 h-10 bg-purple-600 hover:bg-purple-700 mx-2 rounded-full items-center justify-center flex">
                <a className="items-center flex" target="_blank" href="https://www.facebook.com/d4rmanlebay">
                  <i className="fab fa-facebook-f text-xl font-bold text-custom-gray" />
                </a>
              </div>
              <div className="w-10 h-10 bg-purple-600 hover:bg-purple-700 mx-2 rounded-full items-center justify-center flex">
                <a className="items-center flex" target="_blank" href="https://instagram.com/ezzanox">
                  <i className="fab fa-instagram text-xl font-bold text-custom-gray" />
                </a>
              </div>
              <div className="w-10 h-10 bg-purple-600 hover:bg-purple-700 mx-2 rounded-full items-center justify-center flex">
                <a className="items-center flex" target="_blank" href="https://twitter.com/ezzanox">
                  <i className="fab fa-twitter text-xl font-bold text-custom-gray" />
                </a>
              </div>
              <div className="w-10 h-10 bg-purple-600 hover:bg-purple-700 mx-2 rounded-full items-center justify-center flex">
                <a className="items-center flex" target="_blank" href="https://github.com/ezzanox">
                  <i className="fab fa-github text-xl font-bold text-custom-gray" />
                </a>
              </div>
            </div>
          </div>
          {/* about me */}
          {/* portfolio */}
          <div className="w-full pt-2 pb-4  bg-white">
            <div className="container mx-auto">
              {/* title */}
              <div className="py-5 flex justify-center items-center">
                <h4 className="text-3xl uppercase font-semibold text-gray-700">Portfolio</h4>
              </div>
              {/* content */}
              <div className="grid grid-cols-4 gap-5">
                {portfolio.map((item) => (
                <div className="bg-custom-gray shadow-lg rounded-md overflow-hidden py-0 border">
                  <div className="w-full">
                    <img className="object-contain h-full" src={item.thumbnail} alt={item.url} />
                  </div>
                  <div className=" p-5 ">
                    <div className="font-medium text-md flex">
                      <span className="text-gray-500">Project On :</span>
                      <span className="px-1 font-semibold">{item.project_on}</span>
                    </div>
                    <div className="font-medium text-md flex">
                      <span className="text-gray-500">Tools :</span>
                      <span className="px-1 font-semibold">[{item.tools}]</span>
                    </div>
                    <div className="font-medium text-md flex">
                      <span className="text-gray-500">Url :</span>
                      <span className="px-1 font-semibold hover:text-gray-700"><a target="_blank" href={item.url}> {item.url.substring(8)}</a></span>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              {/* action */}
              <div className="flex justify-center font-semibold uppercase pt-5 text-purple-600 hover:text-purple-700">
                <Link href='/portfolio'>
                  <a>More Data Portfolio</a>
                </Link>
              </div>
            </div>
          </div>
          {/* portfolio */}
          {/* my skill */}
          <div className="w-full bg-custom-gray p-5">
            <div className="container mx-auto">
              <div className="pb-5 flex justify-center items-center">
                <h4 className="text-3xl uppercase font-semibold text-gray-700">My Skills</h4>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-5 rounded shadow">
                  <div className="h-10 rounded-md w-1/3 mb-3 flex justify-center text-md items-center font-semibold bg-gray-100">
                    Frontend
                  </div>
                  <div className="relative">
                    <div className="flex mb-1 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-0 px-2 uppercase rounded-full text-purple-600">
                          React JS
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          75%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                      <div style={{width: '75%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex mb-1 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-0 px-2 uppercase rounded-full text-purple-600">
                          Next JS
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          75%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                      <div style={{width: '75%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex mb-1 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-0 px-2 uppercase rounded-full text-purple-600">
                          Tailwind CSS
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          85%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                      <div style={{width: '85%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex mb-1 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-0 px-2 uppercase rounded-full text-purple-600">
                          Bootstrap
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          85%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                      <div style={{width: '85%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex mb-1 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-0 px-2 uppercase rounded-full text-purple-600">
                          Wordpress
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          85%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                      <div style={{width: '85%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded shadow">
                  <div className="h-10 rounded-md w-1/3 mb-3 flex justify-center text-md items-center font-semibold bg-gray-100">
                    Backend
                  </div>
                  <div className="relative">
                    <div className="flex mb-1 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-0 px-2 uppercase rounded-full text-purple-600">
                          Laravel
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          80%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                      <div style={{width: '80%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex mb-1 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-0 px-2 uppercase rounded-full text-purple-600">
                          Codeigniter
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          75%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                      <div style={{width: '75%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded shadow">
                  <div className="h-10 rounded-md w-1/3 mb-3 flex justify-center text-md items-center font-semibold bg-gray-100">
                    Mobile
                  </div>
                  <div className="relative">
                    <div className="flex mb-1 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-0 px-2 uppercase rounded-full text-purple-600">
                          React Native
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          80%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                      <div style={{width: '80%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex mb-1 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-0 px-2 uppercase rounded-full text-purple-600">
                          Tailwind for React Native
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          80%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                      <div style={{width: '80%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* my skill */}

      </div>
    </>
  )
}

export default index
