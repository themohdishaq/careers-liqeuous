import React from 'react'
import Image from 'next/image'
import joinus from '../../public/joinus.jpg'

export default function footer() {
  return (
    <main>
      <div>
        <section className="section h-40 bg-cover" style={{ backgroundImage: `url(${joinus})` }}>
          <div className="container mx-auto">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white">Join Us</h1>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
