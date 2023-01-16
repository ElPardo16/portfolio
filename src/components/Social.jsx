import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import dependencies

export default function Social({ extra }) {
    // initial message in whatApp API
    const msg = "Buen dia"
    // phone numer to send the message
    const WA_NUM = "3192037173"
    return (
        <div className="social">
            <a href="https://github.com/ElPardo16" target="_blank" rel='noreferrer'>
                {/* render a icon of social network */}
                <DiGithubBadge size={45} />
            </a>
            <a href="https://www.linkedin.com/in/andres-gonzalez-09b43713a/" target="_blank" rel='noreferrer'>
                <FaLinkedin size={45} />
            </a>
            {/* if extra is true render aditional icon */}
            {extra && (
            <>
                <a href={`https://api.whatsapp.com/send?phone=+57${WA_NUM}&text=${msg}`} target="_blank" rel='noreferrer'>
                    <FaWhatsapp size={45} />
                </a>
            </>
            )}
        </div>
    )
}