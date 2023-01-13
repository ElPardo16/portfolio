import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Social from "./Social";

export default function Layout({title, home, about, port, skill, con }) {
    return (
        <>
            <Head>
                <title>Portfolio{title && ` | ${title}`}</title>
                <meta name="description" content="Portafolio Andres Gonzalez" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <aside className="menu">
                <nav>
                    <div className="con_menu">
                        <img src="/img/osoColorDev.png" alt="Logo" />
                        <h3>Andres Gonzalez</h3>
                    </div>
                    <ul>
                        <li>
                            <Link href="/" className={home && "select"}>Inicio</Link>
                        </li>
                        <li>
                            <Link href="/about" className={about && "select"}>Sobre mi</Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className={port && "select"}>Portafolio</Link>
                        </li>
                        <li>
                            <Link href="/skills" className={skill && "select"}>Habilidades</Link>
                        </li>
                        <li>
                            <Link href="/contact" className={con && "select"}>Contactame</Link>
                        </li>
                    </ul>
                    <Social />
                </nav>
            </aside>
            <div className="container">

            </div>
        </>
    )
}