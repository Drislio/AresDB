import Image from "next/image";
function Header(){
    return (
        <header className="">
            <h1>Header</h1>
            <Image 
                className="object-contain"
                src="/AresDB.svg"
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header