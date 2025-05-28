import { useState } from "react"
import { Link } from "react-router-dom"

export const Home = () => {
    const [name, setName] = useState("")

    return (

        <div className="min-h-screen flex items-center justify-center ">
            <div className="p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-semibold text-center mb-6">Join a Stream</h1>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-md font-medium text-gray-700 mb-1">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                        />
                    </div>

                    <Link to={`/video/${name}`}>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                            Join
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}
