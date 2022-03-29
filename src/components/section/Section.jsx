import React from 'react'

export default function Section({ className='primary', children }) {
  return (
    <section className={`Section Section--${className}`}>
        { children }
    </section>
  )
}
