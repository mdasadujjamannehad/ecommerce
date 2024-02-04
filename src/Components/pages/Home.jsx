import React from 'react'
import Banner from '../layouts/Banner'
import PromotionPart from '../layouts/PromotionPart'
import ProductPart from '../layouts/ProductPart'
import Bannerimg from '../../assets/BannerImg.png'
import OfferPart from '../layouts/OfferPart'
import Footer from '../layouts/Footer'

function Home() {
  return (
   <>
   <Banner BannerImg={Bannerimg} className='w-full'/>
   <PromotionPart/>
   <ProductPart/>
   <OfferPart/>
   
   </>
  )
}

export default Home