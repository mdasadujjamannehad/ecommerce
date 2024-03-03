import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Subheading from '../Subheading'
import List from '../List'
import Image from '../Image'
import FooterLogo from '../../assets/footerLogo.png'
import { FaLinkedinIn, FaFacebookF, } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='bg-footerBg py-14'>
      <Container>
        <Flex>
          <div className="w-[14%]">
            <Subheading className='uppercase font-bold text-base font-dmFonts pb-4' pText='menu' />
            <ul>
              <Link>
                <List className='py-1' text='Home' />
              </Link>
              <Link>
                <List className='py-1' text='Shop' />
              </Link>
              <Link>
                <List className='py-1' text='About' />
              </Link>
              <Link>
                <List className='py-1' text='Contact' />
              </Link>
              <Link>
                <List className='py-1' text='Journal' />
              </Link>
            </ul>
          </div>
          <div className="w-[14%]">
            <Subheading className='uppercase font-bold text-base font-dmFonts pb-4' pText='shop' />
            <ul>
              <Link>
                <List className='py-1' text='Category 1' />
              </Link>
              <Link>
                <List className='py-1' text='Category 2' />
              </Link>
              <Link>
                <List className='py-1' text='Category 3' />
              </Link>
              <Link>
                <List className='py-1' text='Category 4' />
              </Link>
              <Link>
                <List className='py-1' text='Category 5' />
              </Link>
            </ul>
          </div>
          <div className="w-[14%]">
            <Subheading className='uppercase font-bold text-base font-dmFonts pb-4' pText='help' />
            <ul>
              <Link>
                <List className='py-1' text='Privacy Policy' />
              </Link>
              <Link>
                <List className='py-1' text='Terms & Conditions' />
              </Link>
              <Link>
                <List className='py-1' text='Special E-shop' />
              </Link>
              <Link>
                <List className='py-1' text='Shipping' />
              </Link>
              <Link>
                <List className='py-1' text='Secure Payments' />
              </Link>
            </ul>
          </div>
          <div className="w-[30%]">
            <Subheading className='uppercase font-bold text-base font-dmFonts pb-1' pText='(052) 611-5711' />
            <Subheading className=' font-bold text-base font-dmFonts pb-4' pText='company@domain.com' />
            <Subheading className=' text-sm text-textColor font-dmFonts' pText='575 Crescent Ave. Quakertown, PA 18951' />
          </div>
          <div className="w-[28%]">
            <Link>
              <Image src={FooterLogo} />
            </Link>
          </div>
        </Flex>
        <Flex className='justify-between pt-16'>
          <div className="w-[72%]">
            <div className="flex items-center text-2xl">
              <Link to='/'> <FaFacebookF className='text-2xl hover:text-4xl transition-all ' /></Link>
              <Link to='/'> <FaLinkedinIn className='text-2xl hover:text-4xl ml-5 transition-all' /></Link>
              <Link to='/'>  <FaInstagram className='text-2xl hover:text-4xl ml-5 transition-all' /></Link>
            </div>
          </div>
          <div className="w-[28%]">
          <Subheading className=' text-sm text-textColor font-dmFonts' pText=' 2020 Orebi Minimal eCommerce Figma Template by Adveits' />
           
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Footer