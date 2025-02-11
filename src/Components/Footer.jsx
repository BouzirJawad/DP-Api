import { Github } from './icons/Github'
import { Linkedin } from './icons/Linkedin'


function Footer() {
    
    return(
    
        <footer className="w-[95%] sm:w-[75%] rounded-xl text-center mx-auto my-2 p-4 sm:mt-7 mainDiv">
            <p className="font-bold text-lg">Created by JUUBUU © 2025</p>
            <div className="flex justify-center gap-7 text-4xl mt-2" >
                <a href="https://github.com/BouzirJawad"
                    className="transition duration-300 hover:scale-140"><Github /></a>
                <a href="https://www.linkedin.com/in/jawad-bouzir-693923336"
                    className="transition duration-300 hover:scale-140"><Linkedin /></a>
            </div>
        </footer>
    
    );
}

export default Footer