import {readdir,readFile} from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getReview(dynamic){
    const text = await readFile(`./app/content/reviews/${dynamic}.md`,'utf-8');
    const {content,data:{title,date,image}} = matter(text)
    const body = marked(content)

    return({dynamic,title,date,image,body})
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
    const file = await readdir('app/content/reviews')
    return file.filter((file) => file.endsWith('.md'))
    .map((file) =>file.slice(0,-'.md'.length))
}

export async function getFeaturedReview(){
    const reviews = await getReviewList()
    return reviews[0]
}