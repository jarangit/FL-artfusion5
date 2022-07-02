import React from 'react'

const LabelItem = ({title, contents, image}) => {
  return (
    <div className='border py-20 px-6 shadow-lg rounded-md relative '>
      <div className='bg-[#2F688A] w-fit p-3 rounded-full overflow-hidden absolute -left-8 -top-8 z-10'>
        <img src={image} alt="" width={50}/>
      </div>
      <div className='text-2xl text-[#2F688A]'>
        {title}
      </div>
      <div>
        {contents}
      </div>
    </div>
  )
}

export default LabelItem