import React, { useEffect } from 'react'
import According from '../according'

const BoxAccordingItem = ({ header, title, contents, accordings }) => {
  console.log('%cMyProject%cline:3%caccordings', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(118, 77, 57);padding:3px;border-radius:2px', accordings)
  useEffect(() => {

  }, [accordings])

  return (
    <div>
      <div>
        <div className='text-md font-bold p-2 bg-[#E9F1FA] w-fit text-gray-500'>
          {header}
        </div>
        <div className='text-2xl text-[#2F688A] -mt-2'>
          {title}
        </div>
        <div className='text-gray-500 text-sm my-6'>
          {contents && contents}
        </div>

        {accordings.length > 0 &&
          accordings.map((item, key) => (
            <React.Fragment key={key}>
              <According
                title={item.title}
                contents={item.contents}
              />
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default BoxAccordingItem