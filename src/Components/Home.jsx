import React, { useEffect } from 'react'
import Typed from 'typed.js'
import chillGuy from '../assets/95c.png'

function Home() {

    useEffect(() => {
        const options = {
          strings: ['Bouzir Jawad', 'JUUBUU', 'Jawad Bouzir'],
          typeSpeed: 60,
          backSpeed: 30,
          loop: true,
        }
        const typed = new Typed('.typing2', options)
        return () => typed.destroy()
      }, [])
    
    return(
        <section className="w-[90%] sm:w-[75%] md:w-[55%] mx-auto rounded-xl mainDiv">
            <div className="w-full flex flex-wrap justify-center items-center p-3">
                <div className="w-1/3 md:w-1/2 sm:max-w-sm group">
                    <img src={chillGuy} alt="chill guy"/>
                    <div className="hidden group-hover:lg:block w-fit">
                      <p className="absolute -translate-y-60 -translate-x-30 bg-slate-700 dark:bg-gray-400 rounded-lg p-3 dark:text-black text-white font-bold z-50">Chill bro, life is good</p>
                    </div>
                </div>
                <div className="w-2/3 sm:w-1/2 mt-3 lg:space-y-5 xl:space-y-7">
                    <p className="text-2xl font-bold">Hello,</p>
                    <p className="text-xl font-bold">I'm <span className="typing2 text-blue-700 dark:text-amber-300"></span>,</p>
                    <p className="text-lg">full stack developer / freelancer</p>
                    <button className="primary-btn mb-2 inline-block"
                    onClick={() => {
                        const contactSection = document.getElementById('myContactMeSection')
                        if (contactSection) {
                          const offset = contactSection.offsetTop / 1.05
                          window.scrollTo({ top: offset, behavior: 'smooth' })
                        }
                      }}
                      >Get in touch</button>
                </div>
            </div>
        </section>
    );
}

export default Home