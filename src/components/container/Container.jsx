import React from 'react'

export default function Container({ className='transparent', align='center', children}) {
  return (
    <div className={`Container Container--${className} Container--align-${align}`}>
        { children }
    </div>
  )
}
