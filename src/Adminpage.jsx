import { Search } from './Components/icons/Search'
import ContactCard from './Components/ContactCard'

import React from 'react'

function Adminpage() {
  return (
    <section className=" w-[80%] flex flex-col items-center mx-auto">
      <div className="mainDiv px-5 py-1 flex flex-nowrap items-center p-0 rounded-full">
        <input type="text" placeholder="Search" className="mainDiv border-0" />
        <button>
          <Search className="text-3xl m-0" />
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </section>
  )
}

export default Adminpage