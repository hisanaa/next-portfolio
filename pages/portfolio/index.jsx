import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

function index() {

    const [active, setActive] = useState([])
    const [notActive, setNotActive] = useState([])

    // function get data
    const getPortfolio = () => {
        axios.get('https://backend-ezzaportfolio.herokuapp.com/api/portfolio')
        .then(res => {
            console.log(res)
            setActive(res.data.dataActive)
            setNotActive(res.data.dataNotActive)
        })
    }

    useEffect(() => {
        getPortfolio()
    }, [])

    return (
        <div className='bg-custom-gray'>
            <div className="container mx-auto">
            <div className="py-5">
                <p className="text-center text-purple-500">
                <Link href="/">Back Home</Link>
                </p>
                <h1 className="text-center text-3xl font-bold">All Data Portfolio</h1>
            </div>
            <div>
                <h1>Active Portfolio</h1>
            </div>
            <table className="table-auto w-full text-center">
                <thead>
                <tr className="flex">
                    <th className="w-24 border text-sm border-r-0 border-gray-500 px-4 py-2 text-gray-600">#</th>
                    <th className="w-full border border-r-0 border-gray-500 px-4 py-2 text-gray-600">Project On</th>
                    <th className="w-full border border-r-0 border-gray-500 px-4 py-2 text-gray-600">Tools</th>
                    <th className="w-full border  border-gray-500 px-4 py-2 text-gray-600">Url</th>
                </tr>
                </thead>
                <tbody>
                    {active.map((portfolio, index) => (
                        <tr className="flex">
                        <td className="w-24 border-t-0 border border-r-0 border-gray-500 px-4 py-2 text-gray-600"> {index+1} </td>
                        <td className="w-full border-t-0 border border-r-0 border-gray-500 px-4 py-2 text-gray-600"> {portfolio.project_on} </td>
                        <td className="w-full border-t-0 border border-r-0 border-gray-500 px-4 py-2 text-gray-600"> {portfolio.tools} </td>
                        <td className="w-full border-t-0 border  border-gray-500 px-4 py-2 text-purple-600">
                            <a target="_blank" href={portfolio.url}>  
                            {portfolio.url.substring(8)}
                            </a>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <div className="pt-2">
                <h1>Not Active Portfolio</h1>
            </div>

            <table className="table-auto w-full text-center mb-5">
                <thead>
                <tr className="flex">
                    <th className="w-24 border text-sm border-r-0 border-gray-500 px-4 py-2 text-gray-600">#</th>
                    <th className="w-full border border-r-0 border-gray-500 px-4 py-2 text-gray-600">Project On</th>
                    <th className="w-full border border-r-0 border-gray-500 px-4 py-2 text-gray-600">Tools</th>
                    <th className="w-full border  border-gray-500 px-4 py-2 text-gray-600">Url</th>
                </tr>
                </thead>
                <tbody>
                    {notActive.map((portfolio, index) => (
                        <tr className="flex">
                        <td className="w-24 border-t-0 border border-r-0 border-gray-500 px-4 py-2 text-gray-600"> {index+1} </td>
                        <td className="w-full border-t-0 border border-r-0 border-gray-500 px-4 py-2 text-gray-600"> {portfolio.project_on} </td>
                        <td className="w-full border-t-0 border border-r-0 border-gray-500 px-4 py-2 text-gray-600"> {portfolio.tools} </td>
                        <td className="w-full border-t-0 border  border-gray-500 px-4 py-2 text-purple-600">
                            <a target="_blank" href={portfolio.url}>  
                            {portfolio.url.substring(8)}
                            </a>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>

        </div>
    )
}

export default index
