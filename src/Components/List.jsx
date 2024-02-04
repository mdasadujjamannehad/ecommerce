import React from 'react'

const List = ({className,text}) => {
  return (
   <li className={`text-sm text-textColor font-dmFonts hover:text-black hover:font-bold ${className}`}>{text}</li>
  )
}

export default List