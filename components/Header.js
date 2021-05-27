import {
    HomeIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"
import Image from "next/image";
import HeaderItem from "../components/HeaderItem.js"
function Header(){
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <Image 
                className="object-contain"
                src="/AresDB.svg"
                width={150}
                height={80}
            />
            <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="Search" Icon={SearchIcon}/>
            <HeaderItem title="Collection" Icon={CollectionIcon}/>
            <HeaderItem title="Profile" Icon={UserIcon}/>
            </div>
            
        </header>
    )
}

export default Header