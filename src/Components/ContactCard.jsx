import { Delete } from './icons/Delete'
import React from 'react'

function ContactCard() {
  return (
    <div className='w-[95%] mx-auto bg-gray-200 dark:bg-slate-400 p-1 rounded-xl space-y-2 mt-2 transition duration-500 hover:scale-105'>
        <div className='flex flex-nowrap '>
            <div className='mainDiv rounded-xl py-1 px-4'>
                UserName
            </div>
            <button className='primary-btn ml-auto'>
                <Delete />
            </button>
        </div>
        <div className="mainDiv rounded-xl py-1 px-4 w-fit">
            name.exa@gmail.com
        </div>
        <div className='mainDiv rounded-xl py-1 px-4 w-fit'>
            00-number-00
        </div>
        <div className='mainDiv rounded-xl py-1 px-4 w-fit'>
            <p className='text-xl font-bold'>message</p>
            <p className='p-1.5'>Lorem ipsum, dolor sit amet consectetur adipisicing elitedit rep lestiae at dolemis nostrum namquod?</p>
        </div>
    </div>
  )
}

export default ContactCard