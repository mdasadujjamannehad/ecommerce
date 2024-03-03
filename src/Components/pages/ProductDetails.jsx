import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Button from '../Button'
import PageHead from '../PageHead'
import Subheading from '../Subheading'
import IncorrectText from '../IncorrectText'
import Image from '../Image'
import Bucket from '../../assets/bucket.png'
import { FaStar } from "react-icons/fa";
import Color from '../Color'

const ProductDetails = () => {
  return (
    <>
      <section className='border-y my-10'>
        <Container>
          <Flex className={'justify-between my-5'}>
            <div className="w-1/3 flex items-center">
              <PageHead PageHead={'Product'} className={'font-bold text-3xl mr-12'} />
              <IncorrectText crossText={'$88.00'} className={'text-base text-textColor'} />
              <Subheading pText={'$44.00'} className={'text-xl font-bold ml-3'} />
            </div>
            <Button btnText={'Add to Cart'} className={'text-white'}/>
          </Flex>
        </Container>
      </section>
      <section>
        <Container>
          <Flex className={'justify-between gap-10 flex-wrap my-10'}>
            <Image src={Bucket} />
            <Image src={Bucket} />
            <Image src={Bucket} />
            <Image src={Bucket} />
          </Flex>
          <div className="w-1/2 border-b mb-10">
            <PageHead PageHead={'Product'} className={'font-bold text-4xl my-5'} />
            <Flex className={'items-center my-5'}>
              <Flex>
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />

              </Flex>
              <Subheading pText={'1 Review'} className={'text-base text-textColor ml-5'} />
            </Flex>
            <Flex className={'items-center my-5'}>
              <IncorrectText crossText={'$88.00'} className={'text-base text-textColor'} />
              <Subheading pText={'$44.00'} className={'text-xl font-bold ml-5'} />
            </Flex>
          </div>
          <div className="w-1/2 border-b mb-10 pb-5">
            <Flex className={'items-center'}>
              <Subheading pText={'COLOR:'} className={'text-xl font-bold mr-5'} />
              <Flex className={'gap-2 '}>
                <Color className={'bg-red-500'} />
                <Color className={'bg-orange-500'} />
                <Color className={'bg-amber-300'} />
                <Color className={'bg-white border'} />
                <Color className={'bg-black'} />
              </Flex>
            </Flex>
          </div>
          <div className="w-1/2 border-b mb-10 pb-5">
            <Flex className={'items-center'}>
              <Subheading pText={'SIZE:'} className={'text-xl font-bold mr-5'} />
              <select className='w-44 py-2 pl-[75px] border border-black rounded ml-[58px]' >
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </Flex>
            <Flex className={'items-center mt-5'}>
              <Subheading pText={'QUANTITY:'} className={'text-xl font-bold mr-5'} />
              <div className="w-44 py-1 px-7 border border-black rounded">
                <Flex className={'justify-between'}>
                  <Subheading pText={'-'} className={'text-xl'} />
                  <Subheading pText={'1'} className={'text-xl'} />
                  <Subheading pText={'+'} className={'text-xl'} />
                </Flex>
              </div>

            </Flex>
          </div>
          <div className="w-1/2 border-b mb-10 pb-5">
            <Flex className={'items-center gap-5'}>
              <Button btnText={'Add to Wishlist'} className={'bg-white text-textbg border  hover:bg-black hover:text-white transition-all'} />
              <Button btnText={'Add to Cart'} className={'bg-white text-textbg border hover:bg-black hover:text-white transition-all'} />
            </Flex>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProductDetails