import React from 'react'
import Header from './Header'
import AboutSection from './AboutSection'

const About = ({AOS}) => {
  return (
    <div  className='container p-3 pt-12 sm:px-8   w-full'>

    <div className=" flex justify-center flex-col items-center  w-full">
        <Header title={'Who We Are'} />
        <AboutSection AOS={AOS}/>
    </div>
    </div>
  )
}

export default About