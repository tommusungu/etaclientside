import React from 'react'
import Header from './Header'
import ChooseComponent from './ChooseComponent'

const Choose = ({AOS}) => {
  return (
    <div  className='container p-3 pt-12 sm:px-8   w-full'>

    <div className=" flex justify-center flex-col items-center  w-full">
        <Header title={'What We Aim'}/>
        <ChooseComponent AOS={AOS}/>
    </div>
    </div>
  )
}

export default Choose