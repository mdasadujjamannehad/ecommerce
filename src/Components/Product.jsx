import React from 'react'
import Image from './Image'

import Subheading from './Subheading'
import Badge from './Badge'
import Flex from './Flex'
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import CompareIcon from './icons/CompareIcon'


function Product({ ProductImg, badgeText, ProductName, ProductPrice, ProductColor,className }) {
    return (
        <>
            <div className={`ml-5 my-5 w-[370px] ${className}`}>
                <div className="relative group">
                    <Image src={ProductImg} className='relative ' />
                    <Badge className='absolute top-6 left-6' badgeText={badgeText} />
                    <div className=" invisible group-hover:visible absolute bottom-84px bg-white w-full transition-opacity right-0 py-5 ">
                        <Flex className='justify-end items-center group hover:text-2xl'>
                            <Subheading pText='Add to Wish List' className='text-base font-normal hover:font-bold font-dmFonts text-textColor hover:text-black transition-all' />
                            <FaHeart className='ml-4 transition-all ' />
                        </Flex>
                        <Flex className='justify-end items-center mt-2 '>
                            <Subheading pText='Compare' className='text-base font-normal hover:font-bold font-dmFonts text-textColor hover:text-black transition-all' />
                            <CompareIcon className='ml-4 transition-all' />

                        </Flex>
                        <Flex className='justify-end items-center mt-2 hover:text-2xl '>
                            <Subheading pText='Add to Cart' className='text-base font-normal hover:font-bold font-dmFonts text-textColor hover:text-black transition-all' />
                            <FaShoppingCart className='ml-4 transition-all ' />
                        </Flex>

                    </div>
                    <Flex className='justify-between mt-5'>
                        <Subheading pText={ProductName} className='font-dmFonts text-xl font-bold text-black' />
                        <Subheading pText={ProductPrice} className='text-textColor font-normal text-base mr-2' />
                    </Flex>
                    <Subheading pText={ProductColor} className='mt-3 text-textColor font-normal text-base' />
                </div>
            </div>

        </>
    )
}

export default Product