'use client'

import {LinkIcon} from "@heroicons/react/20/solid"
import { useState } from "react"

export default function ShareLinkButton(){
    const [clicked, setClicked]  = useState(false)
    const handleClick = ()=>{
        navigator.clipboard.writeText(window.location.href)
        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        }, 1000);
        
    }
    return(
        <>
    <button onClick={handleClick} className="flex gap-1 items-center border text-slate-500 py-1 px-1 hover:underline hover:text-slate-700 hover:bg-orange-100">
    <LinkIcon className="h-4 w-4"/>
    {clicked? "Copied!" : "Share Link"}</button>
    </>
    )
}