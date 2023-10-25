import Link from "next/link"

export default function Navbar(){
    return(
        <nav>
        <ul className="flex gap-2">
        <li className="no-underline hover:underline">
        <Link className="no-underline hover:underline text-orange-800" href="/">Indie Gamer</Link>
        </li>
        <li className="no-underline hover:underline text-orange-800 ml-auto">
        <Link href="/reviews">Reviews</Link>
        </li>
        <li className="no-underline hover:underline text-orange-800">
        <Link href="/about">About</Link>
        </li>
        </ul>
        </nav>
        
    )

}