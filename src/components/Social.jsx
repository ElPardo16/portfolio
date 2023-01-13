import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Social({ extra }) {
    return (
        <div className="social">
            <a href="" target="_blank">
                <DiGithubBadge size={45} />
            </a>
            <a href="" target="_blank">
                <FaLinkedin size={45} />
            </a>
            {extra && (
            <>
                <a href="" target="_blank">
                    <FaWhatsapp size={45} />
                </a>
            </>
            )}
        </div>
    )
}