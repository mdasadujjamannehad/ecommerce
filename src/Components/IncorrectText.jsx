import React from 'react'

const IncorrectText = ({className,crossText}) => {
  return (
   <h3 className={`${className}`} ><s>{crossText}</s></h3>
  )
}

export default IncorrectText