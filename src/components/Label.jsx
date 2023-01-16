import dynamic from 'next/dynamic';
import React from 'react'
// import dependencies

export default function Label({iName, skill}) {
    // import dinamically the icon in the iName property
    const Icon = dynamic(() => import('react-icons/si').then(icons => icons[iName]))
  return (
    <div className='label'>
        {/* use the Icon component to render a icon with a size of 25 px */}
        <Icon size={25}/>
        {/* set the label with the name of skill */}
        <span>{skill}</span>
    </div>
  )
}