import React from 'react'

const Para = ({pText,className}) => {
  return (
    <p className={`${className}`}>{pText}</p>
  )
}

export default Para