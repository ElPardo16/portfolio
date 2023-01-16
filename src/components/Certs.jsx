import Image from "next/image";
// import dependencies
export default function Certs({img}) {
    return (
        <div className="c_img">
            {/*Replace the src with the img path
            and set de initial size */}
            <Image src={`/img/${img}`} alt="Certificado" width={240} height={186} />
        </div>
    )
}