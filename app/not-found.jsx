import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className="text-3xl">
            There was a problem
        </h2>
        <p>We could not find the page that your are looking for. </p>
        <p>Go back to <Link href='/'>Dashboard</Link></p>
    </main>
  )
}
