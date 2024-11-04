import React from 'react'

interface propsType {
    title: string;
}

const Headings: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-4xl pb-8'>
        <p className='boder-b-4 inline-block pb-2'>{title}</p>
      
    </div>
  )
}

export default Headings
