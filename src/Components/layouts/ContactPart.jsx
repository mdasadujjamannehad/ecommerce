import React from 'react'
import Container from '../Container'
import PageHead from '../PageHead'
import Subheading from '../Subheading'
import Input from '../Input'
import Button from '../Button'

const ContactPart = () => {
    return (
        <Container>
            <PageHead PageHead={'Contacts'} className='text-5xl mb-32 mt-32 ' />
            <PageHead PageHead={'Fill up a Form'} className='text-5xl mb-9 ' />
            <div className="w-1/2">
                <Subheading pText={'Name'} className={'font-bold text-base '} />
                <Input inputType={'text'} placeholder={'Your name here'} className={'w-full  pb-3'} />

                <Subheading pText={'Email'} className={'font-bold text-base mt-6'} />
                <Input inputType={'email'} placeholder={'Your name here'} className={'w-full  pb-3'} />

                <Subheading pText={'Message'} className={'font-bold text-base mt-6 '} />
                <textarea className='w-full border-b border-categoryborder ' placeholder='Your message here' ></textarea>
            </div>
            <Button btnText={'Post'} className={'mt-7 mb-32 text-white'} />
<div className="mb-32">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116811.98359049865!2d90.30871213136822!3d23.805278891248534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1708283575566!5m2!1sen!2sbd" width="600" height="450"    style={{width: "100%", height: "500"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
        </Container>
    )
}

export default ContactPart