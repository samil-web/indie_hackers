
import Heading from "@/components/Heading"
import ShareLinkButton from "@/components/ShareLinkButton"
import { getReview, getStatic } from "@/lib/reviews"
import { notFound } from 'next/navigation';

export async function generateStaticParams(){
    
    const statics = await getStatic()
    return statics.map((slug) => ({slug}))
}

export async function generateMetadata({ params:{slug} }){
    const review = await getReview(slug)
    return{
        title: review.title
    }
}
export default async function ReviewPage({params:{slug}}){
    const review = await getReview(slug)
    return(
        <>
        <Heading>{review.title}</Heading>
        <div className="flex gap-3 items-baseline">
        <p className="italic mb-2">{review.date}</p>
        <ShareLinkButton/>
        </div>
        <img src={review.image} alt="" width={640} height={360}
        className="mb-2 rounded"></img>
        <article dangerouslySetInnerHTML={{__html: review.body}}
         className="prose prose-slate max-w-screen-sm"
        >
        </article>
        </>
    )
}
