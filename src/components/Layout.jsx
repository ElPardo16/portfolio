import gsap from 'gsap';
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import { MdAccountCircle, MdArchitecture, MdClose, MdEmail, MdHome, MdLaptopChromebook, MdMenu } from 'react-icons/md';
import Social from "./Social";

export default function Layout({ title, home, about, port, skill, con, children }) {
    let open = false
    const menuClick = _ => {
        gsap.to(".menu", {
            left: !open ? 0 : "-100%",
            duration: .3
        })
        gsap.set(".m_bg",{
            display: !open ? "block" : "none"
        })
        open = !open
    }
    return (
        <>
            <Head>
                <title>Portfolio{title && ` | ${title}`}</title>
                <meta name="description" content="Portafolio Andres Gonzalez" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="app">
                <div className="m_bg" onClick={menuClick}></div>
                <header>
                    <span onClick={menuClick}>
                        <MdMenu size={40} />
                    </span>
                    <img src="img/osoColorDev.png" alt="Logo" />
                    <span>AG</span>
                </header>
                <aside className="menu">
                    <nav>
                        <span onClick={menuClick}>
                            <MdClose size={40} />
                        </span>
                        <div className="con_menu">
                            <img src="/img/osoColorDev.png" alt="Logo" />
                            <h3>Andres Gonzalez</h3>
                        </div>
                        <ul>
                            <li>
                                <Link href="/" className={home && "select"}><MdHome size={40}/><span>Inicio</span></Link>
                            </li>
                            <li>
                                <Link href="/about" className={about && "select"}><MdAccountCircle size={40}/><span>Sobre mi</span></Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className={port && "select"}><MdLaptopChromebook size={40}/><span>Portafolio</span></Link>
                            </li>
                            <li>
                                <Link href="/skills" className={skill && "select"}><MdArchitecture size={40}/><span>Habilidades</span></Link>
                            </li>
                            <li>
                                <Link href="/contact" className={con && "select"}><MdEmail size={40}/><span>Contactame</span></Link>
                            </li>
                        </ul>
                        <Social />
                    </nav>
                </aside>

                {children}

            </div>
        </>
    )
}