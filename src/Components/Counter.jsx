import React from 'react'
import Container from '../Components/Container';
import Button from '../Components/Button';
import Flex from '../Components/Flex';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice';

const Counter = () => {
  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  const handleAddvalue = ()=> {
    dispatch(increment(10))
  }
  const handleMinusvalue = ()=> {
    dispatch(decrement())
  }

  return (
    <Container className={'py-10'}>
      <Flex className={'justify-center items-center gap-10'}>
        <Button btnText={'+'} className={'text-white text-[40px]'} onClick={handleAddvalue}/>
       
        <h1 className='text-6xl '>{counterValue}</h1>
        <Button btnText={'-'} className={'text-white text-[40px]'} onClick={handleMinusvalue} />
      </Flex>
    </Container>
  )
}

export default Counter

