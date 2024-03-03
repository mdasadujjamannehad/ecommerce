import React from 'react'

const Button = ({className,btnText,onClick}) => {
  return (
    <button className={`${className} py-4 px-20 bg-black  font-bold text-base rounded  `} onClick={onClick}  >{btnText}</button>
  )
}

export default Button