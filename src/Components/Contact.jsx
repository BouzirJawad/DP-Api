import React, { useState } from "react";
import chillGuy from '../assets/95c.png'

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [validated, setValidated] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setValidated(true)
    } else {
      alert('Form submitted successfully!')
      setFormData({ firstName: '', lastName: '', email: '', message: '' })
      setValidated(false)
    }
  }

  return (
    <section id="myContactMeSection" className="mx-auto w-[95%] sm:w-[80%] md:w-[60%]">
        <p className="text-center text-2xl sm:text-4xl font-bold sm:py-6 py-3">Contact me</p>
        <div className="mainDiv rounded-xl flex justify-center flex-wrap sm:flex-nowrap">
            <div className="sm:w-2/3">
            <form className="w-full" noValidate onSubmit={handleSubmit}>
                <div className="flex ">
                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="firstName" className="block mb-1">
                            First name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First name"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                        />
                        {validated && !formData.firstName && (
                            <div className="text-red-500 dark:text-orange-400 text-sm mt-1">
                            Please enter your first name.
                            </div>
                        )}
                        {formData.firstName && (
                            <div className="dark:text-green-500 text-sm mt-1">Looks good!</div>
                        )}
                    </div>

                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="lastName" className="block mb-1">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last name"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                        />
                        {validated && !formData.lastName && (
                            <div className="text-red-500 dark:text-orange-400 text-sm mt-1">
                            Please enter your last name.
                            </div>
                        )}
                        {formData.lastName && (
                            <div className="dark:text-green-500 text-sm mt-1">Looks good!</div>
                        )}
                    </div>
                </div>

                <div className="mb-3 px-2">
                    <label htmlFor="email" className="block mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="name@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border p-2 rounded w-full"
                    />
                    {validated && !formData.email && (
                      <div className="text-red-500 dark:text-orange-400 text-sm mt-1">
                        Please enter a valid email address.
                      </div>
                    )}
                </div>

                <div className="mb-3 px-2">
                    <label htmlFor="message" className="block mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      placeholder="type your message here..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="border p-2 rounded w-full"
                    ></textarea>
                    {validated && !formData.message && (
                      <div className="text-red-500 dark:text-orange-400 text-sm mt-1">
                        Please enter your message.
                      </div>
                    )}
                </div>

                <div className="text-center font-bold">
                    <button type="submit" className="primary-btn">Submit</button>
                </div>

            </form>
            </div>
            <div className="sm:w-1/3 w-[50%] my-auto">
                <img src={chillGuy} alt="chill guy" />
            </div>
        </div>
    </section>
);
}

export default Contact;
