
import React from 'react'

export default function Coupon({content}: {content: string}) {
  return (
    <div>
      <h1 className='font-serif text-3xl'>Gutschein</h1>
      <p className='font-serif text-md'>{content}</p>
    </div>
  )
}