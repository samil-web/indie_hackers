
import Heading from "@/components/Heading"
import ShareLinkButton from "@/components/ShareLinkButton"
import { getReview, getStatic } from "@/lib/reviews"
import dynamic from "next/dynamic"

export async function generateStaticParams(){
    
    const statics = await getStatic()
    return statics.map((staticroute) => ({staticroute}))
}

export async function generateMetadata({ params:{dynamic} }){
    const {title} = await getReview(dynamic)
    return({title})
}
export default async function ReviewPage({params:{dynamic}}){
    console.log(dynamic)
    const {title,date,image,body} = await getReview(dynamic)
    return(
        <>
        <Heading>{title}</Heading>
        <div className="flex gap-3 items-baseline">
        <p className="italic mb-2">{date}</p>
        <ShareLinkButton/>
        </div>
        <img src={image} alt="" width={640} height={360}
        className="mb-2 rounded"></img>
        <article dangerouslySetInnerHTML={{__html: body}}
         className="prose prose-slate max-w-screen-sm"
        >
        </article>
        </>
    )
}
