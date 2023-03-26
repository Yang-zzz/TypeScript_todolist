import React from 'react'
import { useSelector } from 'react-redux'
import { ToDosState } from '../Redux/module'

const HeaderCheck:React.FC = () => {
  const todo = useSelector((state:ToDosState) => state.todoItems);

  return (
    <>
      <p>안녕하세요</p>
    </>
  )
}

export default HeaderCheck