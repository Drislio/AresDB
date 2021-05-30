
import requests from "../utils/requests.js"
import {  useRouter } from "next/router"

function NavBar(){
    const router = useRouter();
    return (
        <nav>
            <div className="flex px-10 sm:px-20 text-2xl space-x-10 whitespace-nowrap sm:space-x-10 overflow-x-auto scrollbar-hide p-1">
                {Object.entries(requests).map(([ key, {title, url} ]) =>(
                    <h2 
                    key={key}
                    onClick={()=> router.push(`/?genre=${key}`)}
                     className="last:pr-24 cursor-pointer 
                    transition duration-100 transform hover:scale-125 hover:text-blue
                    active:text-red-500">{title}</h2>
                ) 
                )}
            </div>
        </nav>
    )
}

export default NavBar