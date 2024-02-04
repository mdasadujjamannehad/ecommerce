import React from 'react'

function Badge({badgeText,className}) {
  return (
   <div className={`bg-black text-white font-bold text-sm py-3 px-8 ${className}`}>{badgeText}</div>
  )
}

export default Badge