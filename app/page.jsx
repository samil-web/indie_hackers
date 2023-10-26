import Link from "next/link"

import Heading from "@/components/Heading"
import { getFeaturedReview } from "@/lib/reviews"
import ShareLinkButton from "@/components/ShareLinkButton"

export default async function HomePage(){
    const review = await getFeaturedReview()
    return(
        <>
        <Heading>Indie Gamer</Heading>
        <p>Only the best indie games,reviewed for you!</p>
        <div className="pt-3">
        <li className="text-orange-800  hover:underline border w-80 sm:w-full bg-white text-center mb-2 list-none rounded-l rounded-r-none">
        <Link  href={`/reviews/${review.slug}`} className="flex flex-col sm:flex-row ">
        <img src={`${review.image}`} alt="" width={320} height={180} className="rounded-t sm:pr-2">
        </img>
        <div className="py-1 flex flex-col sm:flex-row">{review.title}</div>
        </Link>
        </li>
        </div>
        </>
    )
}
