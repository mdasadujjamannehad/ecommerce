import React from 'react'

const Input = ({inputType,placeholder,className}) => {
  return (
   <input type={inputType} placeholder={placeholder} className={`border-b border-categoryborder  ${className}`}/>
  )
}

export default Input