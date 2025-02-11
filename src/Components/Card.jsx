
function Card(props) {
    return(
        <div className="w-full flex flex-col items-center text-center rounded-lg p-3 mainDiv transition duration-500 sm:hover:scale-105">
            <img src={props.img} alt={props.alt} className="rounded-xl" />
            <p className="font-bold text-lg my-2">{props.title}</p>
            <p className="text-sm my-2 px-4">{props.desc}</p>
            <a href={props.link} target="_blank">
                <button className="primary-btn my-2">View in Github</button>
            </a>
        </div>
    );
}
export default Card