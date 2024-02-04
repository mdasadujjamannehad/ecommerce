
import React from 'react'
import Image from '../Image'

import { Link } from 'react-router-dom'

function Banner({BannerImg,className}) {
  return (
    <Link to='/' >
    <Image className={` ${className}`}src={BannerImg}/>
   </Link>
  )
}

export default Banner