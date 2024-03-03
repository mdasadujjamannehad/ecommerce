import React from 'react'
import Container from '../Container'
import PageHead from '../PageHead'
import Para from '../Para'
import Input from '../Input'
import { FaSearch } from "react-icons/fa";
import Button from '../Button'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <Container>
            <div className="w-1/2">
                <PageHead PageHead={'404'} className='text-[200px] mt-20' />
                <Para pText={"The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"} className={'text-base font-dmFonts mb-12'} />
                <div className="relative mb-16">
                    <Input className={'border w-full p-3 rounded '} placeholder={'Type to search'} />
                    <FaSearch className='absolute top-1/2 right-5 -translate-y-1/2 ' />
                </div>
                <Link to={'/'}>
                <Button btnText={'Back to Home'} className={'mb-32'}/>
                </Link>
            </div>
        </Container>
    )
}

export default Error