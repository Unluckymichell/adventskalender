import Link from 'next/link'
import React from 'react'

function Digital({ subType, url }: { subType: "video" | "web", url: string }) {
    return (
        <div className='bg-amber-100 px-4 py-8 rounded-2xl'>
            <h1 className='font-serif font-bold mb-6 text-3xl'>Digitale Kreation</h1>

            {
                subType == "video" ? <video src={url}></video> :
                    subType == "web" ? <Link className='text-blue-600 underline' href={url}>Klicke Hier!</Link> :
                        subType
            }
        </div>
    )
}

export default Digital