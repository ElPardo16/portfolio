import Image from "next/image";

export default function Certs({img}) {
    return (
        <div className="c_img">
            <Image src={`/img/${img}`} alt="Certificado" width={240} height={186} />
        </div>
    )
}