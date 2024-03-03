import React from 'react'
import NextIcon from '../icons/NextIcon'

const NextArrow = (props) => {
    const { className, onClick } = props;
  return (
    <div
    className={`absolute right-3 top-1/2 -translate-y-1/2 ${className}`}
    onClick={onClick}
  >
    <NextIcon/>
  </div>
  )
}

export default NextArrow