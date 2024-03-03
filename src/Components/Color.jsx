import React from 'react'

const Color = ({className}) => {
  return (
<div className={`h-7 w-7 hover:h-9 hover:w-9 transition-all rounded-full ${className}`}></div>
  )
}

export default Color