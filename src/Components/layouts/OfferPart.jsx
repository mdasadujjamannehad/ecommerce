import Container from '../Container'
import React from 'react'
import Banner from './Banner'
import BannerImg2 from '../../assets/BannerImg2.png'
import Flex from '../Flex'
import Product from '../Product'
import hat from '../../assets/hat.png'
import chair from '../../assets/chair.png'
import headset from '../../assets/headset.png'
import sunglass from '../../assets/sunglass.png'
import Subheading from '../Subheading'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from '../icons/NextArrow'
import PrevArrow from '../icons/PrevArrow'


function OfferPart() {
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
        <section className='mb-28'>
            <Container>
                <Banner BannerImg={BannerImg2} className='py-32' />
                <Subheading pText='Special Offers' className='font-dmFonts text-4xl font-bold text-black mb-12 ' />
                <Slider {...settings}>
                    <Product ProductImg={hat} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                    <Product ProductImg={chair} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                    <Product ProductImg={headset} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                    <Product ProductImg={sunglass} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                    </Slider>
            </Container>
        </section>
    )
}

export default OfferPart