
import React from 'react'

export default function Coupon({content}: {content: string}) {
  return (
    <div className='bg-amber-100 px-4 py-6 rounded-2xl'>
      <h1 className='font-serif font-bold mb-2 text-3xl'>Gutschein</h1>
      <p className='font-serif text-md'>{content}</p>
    </div>
  )
}