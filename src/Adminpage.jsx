import { Search } from './Components/icons/Search'
import ContactCard from './Components/ContactCard'
import { useEffect, useState } from 'react';

import React from 'react'

function Adminpage() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  return (
    <section className="w-[80%] min-w-max flex flex-col items-center mx-auto">
      <div className="mainDiv px-5 py-1 flex flex-nowrap items-center p-0 rounded-full">
        <input type="text" placeholder="Search" className="mainDiv border-0" />
        <button>
          <Search className="text-3xl m-0" />
        </button>
      </div>
        {messages.length > 0 ? (

          <div className="grid md:grid-cols-2 grid-flow-col lg:grid-cols-3 gap-3">
            {messages.map((msg) => (
              <ContactCard firstName={msg.firstName} lastName={msg.lastName} email={msg.email} message={msg.message}/>
            ))}
          </div>

        ) : (
          <p className='text-center'>No messages found.</p>
        )}
      
    </section>
  )
}

export default Adminpage