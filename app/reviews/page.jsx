import Link from "next/link";

import Heading from "../../components/Heading";
import { getReviewList } from "@/lib/reviews";

export const metada = {
    title: "Indie Game Reviews",
}

export default async function HomePage(){
    const reviews = await getReviewList()
    return(
        
        <>
        <Heading>Indie Gamer Reviews</Heading>
        <div className="flex flex-wrap w-screen justify-around">
        {reviews.map((review) => (
            <ul key={review.dynamic}>
            <li className="text-orange-800 hover:underline border w-80 bg-white text-center mb-2">
            <Link  href={`/reviews/${review.dynamic}`}>
            <img src={`${review.image}`} alt="" width={320} height={180} className=" rounded-t">
            </img>
            <div className="py-1">{review.title}</div>
            </Link>
            </li>
            </ul>        
        
        ))}
        </div>
        </>
    )
}
