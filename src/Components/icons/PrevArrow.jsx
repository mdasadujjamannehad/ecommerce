import React from 'react'
import PreviousIcon from './PreviousIcon';

const PrevArrow = (props) => {
    const { className,  onClick } = props;
  return (
    <div
    className={`absolute left-5 top-1/2 z-10 -translate-y-1/2 ${className}`}
    onClick={onClick}
  >
    <PreviousIcon/>
  </div>
  )
}

export default PrevArrow