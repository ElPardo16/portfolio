import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export default function Social() {
  return (
    <div className="social">
        <a href="" target="_blank">
            <DiGithubBadge size={45} />
        </a>
        <a href="" target="_blank">
            <FaLinkedin size={45} />
        </a>
    </div>
  )
}