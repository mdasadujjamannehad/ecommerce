import React, { useEffect, useState } from 'react'
import Container from '../Container'
import PageHead from '../PageHead'
import Para from '../Para'
import Subheading from '../Subheading'
import Input from '../Input'
import Flex from '../Flex'
import axios from 'axios'


const SignupPart = () => {

    let [all, setAll] = useState([])

    useEffect(() => {
        async function all() {
            let data = await axios.get('https://restcountries.com/v3.1/all')
            setAll(data.data)
        }
        all()
    }, [])

    return (
        <section>
            <Container>
                <PageHead PageHead={'Sign Up'} className={'font-bold text-3xl my-20'} />
                <div className="w-full border-b border-categoryborder mb-20">
                    <Para pText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} className={'pb-10 text-base font-dmFonts leading-7	w-2/5'} />
                </div>
                <PageHead PageHead={'Your Personal Details'} className={'font-bold text-3xl my-20'} />
                <div className="w-full border-b border-categoryborder mb-20">
                    <Flex className={'gap-7 mb-20'}>
                        <div className="w-1/3">
                            <Subheading pText={'First Name'} className={'font-bold text-base pl-3'} />
                            <Input inputType={'text'} placeholder={'First Name'} className={'w-full  p-3 mb-3'} />
                            <Subheading pText={'Email address'} className={'font-bold text-base mt-7 pl-3'} />
                            <Input inputType={'email'} placeholder={'company@domain.com'} className={'w-full  p-3 mb-3'} />
                        </div>
                        <div className="w-1/3">
                            <Subheading pText={'Last Name'} className={'font-bold text-base pl-3'} />
                            <Input inputType={'text'} placeholder={'Last Name'} className={'w-full  p-3 mb-3'} />
                            <Subheading pText={'Telephone'} className={'font-bold text-base mt-7 pl-3'} />
                            <Input inputType={'number'} placeholder={'Your phone number'} className={'w-full  p-3 mb-3'} />
                        </div>
                    </Flex>
                </div>


                <PageHead PageHead={'New Customer'} className={'font-bold text-3xl my-20'} />
                <div className="w-full border-b border-categoryborder mb-20">
                    <Flex className={'gap-7 mb-20'}>
                        <div className="w-1/3">
                            <Subheading pText={'Address 1'} className={'font-bold text-base pl-3'} />
                            <Input inputType={'text'} placeholder={'4279 Zboncak Port Suite 6212'} className={'w-full  p-3 mb-3'} />
                            <Subheading pText={'City'} className={'font-bold text-base mt-7 pl-3'} />
                            <Input inputType={'email'} placeholder={'Your City'} className={'w-full  p-3 mb-3'} />
                            <Subheading pText={'Country'} className={'font-bold text-base mt-7 pl-3'} />
                            
                            <select className='w-full p-3' placeholder=''>
                                
                                {all.map(item => 
                                   <option >
                                       {item.name.common}
                                   </option>
                               )}
                           </select>
                        </div>
                        <div className="w-1/3">
                            <Subheading pText={'Address 2'} className={'font-bold text-base pl-3'} />
                            <Input inputType={'text'} placeholder={'-'} className={'w-full  p-3 mb-3'} />
                            <Subheading pText={'Post Code'} className={'font-bold text-base mt-7 pl-3'} />
                            <Input inputType={'number'} placeholder={'1236'} className={'w-full  p-3 mb-3'} />
                            <Subheading pText={'Region/State'} className={'font-bold text-base mt-7 pl-3'} />
                            <select className='w-full p-3' placeholder=''>
                                
                                 {all.map(item => 
                                    <option >
                                        {item.region}
                                    </option>
                                )}
                            </select>
                        </div>
                    </Flex>
                </div>
            </Container>
        </section>
    )
}

export default SignupPart




