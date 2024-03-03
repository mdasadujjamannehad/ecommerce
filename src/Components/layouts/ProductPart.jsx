import React from 'react'
import Product from '../Product'
import Container from '../Container'
import Subheading from '../Subheading'
import Flex from '../Flex'
import clock from '../../assets/clock.png'
import Doll from '../../assets/Doll.png'
import watch from '../../assets/watch.png'
import PatBag from '../../assets/PatBag.png'
import flask from '../../assets/flask.png'
import shoulderbag from '../../assets/shoulderbag.png'
import Grinder from '../../assets/Grinder.png'
import shoulderbag2 from '../../assets/shoulderbag2.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from '../icons/NextArrow'
import PrevArrow from '../icons/PrevArrow'

function ProductPart() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
  return (
    <>
      <Container>
        <Subheading pText='New Arrivals' className='font-dmFonts text-4xl font-bold text-black mb-12' />
        <Slider {...settings}>

            <Product ProductImg={clock} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
            <Product ProductImg={watch} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
            <Product ProductImg={PatBag} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
            <Product ProductImg={Doll} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />

          
          </Slider>
          <Subheading pText='Our Bestsellers' className='font-dmFonts text-4xl font-bold text-black mb-12 mt-28' />
          <Slider {...settings}>
            <Product ProductImg={flask} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
            <Product ProductImg={shoulderbag} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
            <Product ProductImg={Grinder} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
            <Product ProductImg={shoulderbag2} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />

            </Slider>
        


      </Container>
    </>
  )
}

export default ProductPart