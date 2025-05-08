import React from 'react'
import ServiesTitle from '../components/ServicesPage/Title'
import Siderbar from '../components/ServicesPage/Siderbar'
import ListContent from '../components/ServicesPage/Siderbar/ListContent'

const Services = () => {
  return (
    <>
    <ServiesTitle/>
    <hr data-aos="zoom-in" className='w-[90%] text-[#646464] mx-auto'/>
    <section className="py-0 flex px-20 mx-auto">
    <Siderbar/>
    <ListContent/>
    </section>
    </>
  )
}

export default Services