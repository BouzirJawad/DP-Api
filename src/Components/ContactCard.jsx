import { Delete } from './icons/Delete'
import React from 'react'

function ContactCard(props) {
  return (
    <div className='w-[95%] min-w-max mx-auto bg-gray-200 dark:bg-slate-400 p-1 rounded-xl space-y-2 mt-2 transition duration-500 hover:scale-105'>
        <div className='flex flex-nowrap '>
            <div className='mainDiv rounded-xl py-1 px-4 flex gap-1'>
                <p>{props.firstName}</p> 
                <p>{props.lastName}</p>
            </div>
            <button className='primary-btn ml-auto'>
                <Delete />
            </button>
        </div>
        <div className="mainDiv rounded-xl py-1 px-4 w-full">
            {props.email}
        </div>
        <div className='mainDiv rounded-xl py-1 px-4 w-full'>
            <p className='text-xl font-bold'>message</p>
            <p className='p-1.5'>{props.message}</p>
        </div>
    </div>
  )
}

export default ContactCard