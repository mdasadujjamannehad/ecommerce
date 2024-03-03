import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import PageHead from '../PageHead'
import Subheading from '../Subheading'
import { GoPlus } from "react-icons/go";
import Grid1 from '../icons/Grid1'
import Grid2 from '../icons/Grid2'
import { MdArrowDropDown } from "react-icons/md";
import { TiArrowSortedUp } from "react-icons/ti";
import ColorIcon from '../icons/ColorIcon'
import Product from '../Product'
import clock from '../../assets/clock.png'
import watch from '../../assets/watch.png'
import PatBag from '../../assets/PatBag.png'


const ShopContent = () => {
    return (
        <Container>
            <PageHead PageHead={'Products'} className={'my-5 text-5xl mb-32'} />

            <Flex>
                <div className="w-categorywidth">

                    <div className="mb-12">
                        <PageHead PageHead={'Shop by Category'} className={'text-xl font mb-10'} />
                        <div className="border-b border-categoryborder my-5 ">
                            <Flex className='justify-between items-center pb-5'>
                                <Subheading pText='Category 1' className='' />
                                <GoPlus />
                            </Flex>
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Flex className='justify-between items-center pb-5'>
                                <Subheading pText='Category 1' className='' />
                                <GoPlus />
                            </Flex>
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Flex className='justify-between items-center pb-5'>
                                <Subheading pText='Category 1' className='' />
                                <GoPlus />
                            </Flex>
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Flex className='justify-between items-center pb-5'>
                                <Subheading pText='Category 1' className='' />
                                <GoPlus />
                            </Flex>
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Flex className='justify-between items-center pb-5'>
                                <Subheading pText='Category 1' className='' />
                                <GoPlus />
                            </Flex>
                        </div>
                    </div>
                    <div className="mb-12">
                        <Flex className={'justify-between items-center mb-10'}>
                            <PageHead PageHead={'Shop by Color'} className={'text-xl font '} />
                            <TiArrowSortedUp />
                        </Flex>
                        <div className="border-b border-categoryborder my-5 ">
                            <Flex className=' items-center pb-5'>
                                <ColorIcon />
                                <Subheading pText='Color 1' className='ml-5' />

                            </Flex>
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Flex className=' items-center pb-5'>
                                <ColorIcon />
                                <Subheading pText='Color 2' className='ml-5' />

                            </Flex>
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Flex className=' items-center pb-5'>
                                <ColorIcon />
                                <Subheading pText='Color 3' className='ml-5' />

                            </Flex>
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Flex className=' items-center pb-5'>
                                <ColorIcon />
                                <Subheading pText='Color 4' className='ml-5' />

                            </Flex>
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Flex className=' items-center pb-5'>
                                <ColorIcon />
                                <Subheading pText='Color 5' className='ml-5' />

                            </Flex>
                        </div>
                    </div>
                    <div className="mb-12">
                        <Flex className={'justify-between items-center mb-10'}>
                            <PageHead PageHead={'Shop by Brand'} className={'text-xl font '} />
                            <TiArrowSortedUp />
                        </Flex>
                        <div className="border-b border-categoryborder my-5 ">
                            <Subheading pText='Brand 1' className=' pb-5' />
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Subheading pText='Brand 2' className=' pb-5' />
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Subheading pText='Brand 3' className=' pb-5' />
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Subheading pText='Brand 4' className=' pb-5' />
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Subheading pText='Brand 5' className=' pb-5' />
                        </div>

                    </div>
                    <div className="mb-12">
                        <Flex className={'justify-between items-center mb-10'}>
                            <PageHead PageHead={'Shop by Price'} className={'text-xl font '} />
                            <TiArrowSortedUp />
                        </Flex>
                        <div className="border-b border-categoryborder my-5 ">
                            <Subheading pText='$0.00 - $9.99' className=' pb-5' />
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Subheading pText='$10.00 - $19.99' className=' pb-5' />
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Subheading pText='$20.00 - $29.99' className=' pb-5' />
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Subheading pText='$30.00 - $39.99' className=' pb-5' />
                        </div>
                        <div className="border-b border-categoryborder my-5 ">
                            <Subheading pText='$40.00 - $69.99' className=' pb-5' />
                        </div>

                    </div>


                </div>
                <div className="w-shopProductWidth ml-10 ">
                    <Flex className='justify-between items-center'>
                        <div className="w-1/4">
                            <Flex className='gap-5'>
                                <Grid1 />
                                <Grid2 />
                            </Flex>
                        </div>
                        <div className="w-3/4">
                            <Flex className='justify-end'>
                                <Flex className='items-center mr-5'>
                                    <Subheading pText='Short By:' />
                                    <div className="relative">
                                        <input type="text" placeholder='Featured' className='border py-1 px-5 w-64 ml-5' />
                                        <MdArrowDropDown className='absolute top-1/2 right-3 -translate-y-1/2' />
                                    </div>
                                </Flex>
                                <Flex className='items-center justify-end'>
                                    <Subheading pText='Show:' />
                                    <select placeholder='Featured' className='border py-1 px-5 w-35 ml-5'>
                                        <option value="">30</option>
                                        <option value="">30</option>
                                        <option value="">30</option>
                                    </select>
                                </Flex>
                            </Flex>
                        </div>
                    </Flex>
                    <Flex className={'flex-wrap w-full justify-end mt-10'}>
                        <Product ProductImg={clock} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                        <Product ProductImg={watch} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                        <Product ProductImg={PatBag} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                       
                        <Product ProductImg={clock} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                        <Product ProductImg={watch} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                        <Product ProductImg={PatBag} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                        <Product ProductImg={clock} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                        <Product ProductImg={watch} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                        <Product ProductImg={PatBag} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                       
                        <Product ProductImg={clock} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                        <Product ProductImg={watch} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                        <Product ProductImg={PatBag} ProductName='Basic Crew Neck Tee' badgeText='NEW' ProductPrice='$44.00' ProductColor='Black' />
                       
                    </Flex>
                </div>
            </Flex>
        </Container>
    )
}

export default ShopContent