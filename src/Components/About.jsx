
function About() {
    return(
        <section id="myAboutMeSection" className="w-[90%] md:w-[70%] mx-auto text-center ">
            <p className="text-center text-2xl sm:text-4xl font-bold sm:py-6 py-3">About me</p>
            <div className="mainDiv rounded-xl transition sm:hover:scale-105">
                <div className="p-3 hover:font-bold text-sm md:text-xl sm:mx-10 lg:mx-25 md:py-7">
                    <p>
                        I am a passionate programmer and developer currently studying at ENAA (École
                        Numérique Ahmad Alhansali) in Beni Mellal. My dedication to technology and
                        problem-solving drives me to create innovative and efficient solutions that make an
                        impact. With a strong foundation in programming and a commitment to continuous
                        learning, I strive to stay ahead in the ever-evolving world of technology. Whether
                        working on a challenging project or mastering new tools, I approach every task with
                        creativity, precision, and a relentless desire to grow as a professional.
                    </p>
                    <br />
                    <p>
                        Outside of programming, I enjoy gaming, cooking, and spending time with friends.
                        Gaming fuels my competitive spirit and sharpens my strategic thinking, while cooking
                        allows me to explore my creative side. These hobbies, along with hanging out and
                        enjoying outdoor adventures, help me maintain a balanced lifestyle, recharge, and
                        bring fresh perspectives to my work.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About