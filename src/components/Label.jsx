import dynamic from 'next/dynamic';
import React from 'react'
/* import * as Di from "react-icons/di"; */

export default function Label({iName, skill}) {
    /* const icons = {
        icon: Di.DiApple
    } */
    const Icon = dynamic(() => import('react-icons/si').then(icons => icons[iName]))
 /*    const Icon = Di[iName] */
  return (
    <div className='label'>
        {/* {React.createElement(icons.icon)}
        <NotificationIcon/> */}
        <Icon size={25}/>
        <span>{skill}</span>
    </div>
  )
}