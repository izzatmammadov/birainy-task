import React from 'react'
import SidebarListItem from '../SidebarListItem'

const SiderbarList = () => {
  return (
    <ul data-aos="zoom-in" className='flex flex-col justify-center items-end gap-3 w-max '>
    <SidebarListItem title={"Proqram Təminatı"} items={["Xidmət 1", "Xidmət 2", "Xidmət 3"]}/>
    <SidebarListItem title={"Oyun Yaradılması"} items={["Xidmət 1", "Xidmət 2", "Xidmət 3"]}/>
    <SidebarListItem title={"Data Analtika"} items={["Xidmət 1", "Xidmət 2", "Xidmət 3"]}/>
    <SidebarListItem title={"Oyun Təminatı"} items={["Xidmət 1", "Xidmət 2", "Xidmət 3"]}/>
    </ul>
  )
}

export default SiderbarList