import { Search } from './Components/icons/Search'
import ContactCard from './Components/ContactCard'
import { useEffect, useState } from 'react';
import React from 'react'

function Adminpage() {

  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch("http://127.0.0.1:5000/api/messages")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessages(data);
      })
      .catch((err) => console.error("Error fetching messages:", err));
  };

  const deleteMessage = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/messages/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setMessages(messages.filter((msg) => msg._id !== id)); // Remove from UI
      } else {
        console.error("Failed to delete message");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };


  const filteredMessages = messages.filter((msg) =>
    msg.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-[80%] min-w-max flex flex-col items-center mx-auto">
      <div className="mainDiv px-5 py-1 flex flex-nowrap items-center p-0 rounded-full">
        <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="mainDiv border-0" />
        <button>
          <Search className="text-3xl m-0" />
        </button>
      </div>
        {messages.length > 0 ? (

          <div className="grid md:grid-cols-2 grid-flow-col lg:grid-cols-3 gap-3">
            {filteredMessages.map((msg) => (
              <ContactCard key={msg._id} id={msg._id} firstName={msg.firstName} lastName={msg.lastName} email={msg.email} message={msg.message} onDelete={deleteMessage}/>
            ))}
          </div>

        ) : (
          <p className='text-center'>No messages found.</p>
        )}
      
    </section>
  )
}

export default Adminpage