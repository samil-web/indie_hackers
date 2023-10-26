import {readdir,readFile} from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getReview(slug){
    const text = await readFile(`./content/reviews/${slug}.md`,'utf8');
    const {content,data:{title,date,image}} = matter(text)
    const body = marked(content)

    return({slug,title,date,image,body})
}

export async function getReviewList(){
    const mdfile = await getStatic()  
    const reviews = []
    for(const md of mdfile){
        const review = await getReview(md)
        reviews.push(review)
    }
    reviews.sort((a,b)=>b.date.localeCompare(a.date))
    return reviews
}

export async function getStatic(){
    const file = await readdir('content/reviews')
    return file.filter((file) => file.endsWith('.md'))
    .map((file) =>file.slice(0,-'.md'.length))
}

export async function getFeaturedReview(){
    const reviews = await getReviewList()
    return reviews[0]
}