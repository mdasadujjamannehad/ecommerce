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

function ProductPart() {
  return (
    <>
      <Container>
        <Subheading pText='New Arrivals' className='font-dmFonts text-4xl font-bold text-black mb-12' />
        <Flex className='gap-10'>
          <Product ProductImg={clock} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
          <Product ProductImg={watch} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
          <Product ProductImg={PatBag} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
          <Product ProductImg={Doll} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />

        </Flex>
        <Subheading pText='Our Bestsellers' className='font-dmFonts text-4xl font-bold text-black mb-12 mt-28' />
        <Flex className='gap-10'>
          <Product ProductImg={flask} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
          <Product ProductImg={shoulderbag} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
          <Product ProductImg={Grinder} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
          <Product ProductImg={shoulderbag2} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />

        </Flex>



      </Container>
    </>
  )
}

export default ProductPart