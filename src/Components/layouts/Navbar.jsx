import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Logo.png'
import List from '../List'
import Baricon from '../icons/Baricon'
import Subheading from '../Subheading'
import { Link } from 'react-router-dom'
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav className='py-8'>
        <Container>
          <Flex>
            <div className="w-logoW">

              <Link to='/' >
                <Image src={Logo} alt={Logo} />
              </Link>
            </div>
            <div className="w-menuW">
              <ul className='flex gap-10'>
                <Link to='/'>
                  <List text='Home' />
                </Link>
                <Link to='/shop'>
                  <List text='Shop' />
                </Link>
                <Link to='/about'>
                  <List text='Abouts' />
                </Link>
                <Link to='/contact'>
                <List text='Contacts' />
                </Link>
               
                <List text='Journal' />
              </ul>
            </div>
          </Flex>
        </Container>
      </nav>
      <div className="bg-categoryBg border border-borderBg ">
        <Container>
          <Flex>
            <div className="w-1/4 py-10">
              <Flex className='items-center gap-x-2'>
                <Baricon />
                <Subheading className='items-center' pText='Shop by Category' />
              </Flex>
            </div>
            <div className="relative w-1/2 py-6">
              <input type='text' className='py-4 px-5 w-full rounded-xl' placeholder='Search Products' />
              <FaSearch className='absolute top-1/2 right-5 translate-y-[-50%]' />

            </div>
            <div className="w-1/4 py-10 ">
              <Flex className=' justify-end'>
                <div className="">
                  <Flex>
                    <FaUser />
                    <IoMdArrowDropdown />
                  </Flex>
                </div>
                <FaShoppingCart className='ml-10' />
              </Flex>

            </div>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Navbar