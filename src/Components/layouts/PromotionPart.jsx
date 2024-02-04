import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Ad_one from '../../assets/Ad_1.png'
import Ad_two from '../../assets/Ad_2.png'
import Ad_three from '../../assets/Ad_3.png'
import { Link } from 'react-router-dom'

function PromotionPart() {
  return (
    <section className='py-36'>
      <Container>
        <Flex>
          <div className="w-1/2">
            <Link to='/'>
              <Image src={Ad_one} />
            </Link>
          </div>
          <div className="w-1/2">
           <Link to='/'> <Image src={Ad_two} className='mb-10' /></Link>
            <Link to='/' ><Image src={Ad_three} /></Link>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default PromotionPart