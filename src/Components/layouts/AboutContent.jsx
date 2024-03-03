import React from 'react'
import Container from '../Container'
import PageHead from '../PageHead'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import Image from '../Image'
import Subheading from '../Subheading'
import OurBrand from '../../assets/OurBrand.png'
import OurStore from '../../assets/OurStore.png'
import Para from '../Para'

const AboutContent = () => {
  return (
    <Container>
      <PageHead PageHead={'About'} className='text-5xl mb-32 mt-32' />

      <Flex className={'justify-between mb-32'}>
        <Link>
          <Image src={OurBrand} />
        </Link>
        <Link>
          <Image src={OurStore} />
        </Link>
      </Flex >
      <Subheading pText={'Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.'} className={'pb-28 text-[39px] leading-52px	 font-dmFonts '} />

      <Flex className={'justify-between pb-32'}>
        <div className="w-paraWidth">
          <Subheading pText={'Our Vision'} className={'pb-5 text-2xl font-dmFonts font-bold'} />
          <Para pText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
        </div>
        <div className="w-paraWidth">
          <Subheading pText={'Our Story'} className={'pb-5 text-2xl font-dmFonts font-bold'} />
          <Para pText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."/>
        </div>
        <div className="w-paraWidth">
          <Subheading pText={'Our Brands'} className={'pb-5 text-2xl font-dmFonts font-bold'} />
          <Para pText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
        </div>
       
      </Flex>

    </Container>
  )
}

export default AboutContent