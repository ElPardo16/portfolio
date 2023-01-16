import Image from 'next/image'
import { useSelector } from 'react-redux'
// import dependencies

export default function Box() {
    // get imgList from project state
    const {imgList} = useSelector(state => state.project)
    return (
        <div className="box">
            <div className="front face">
                {/*Replace the src with the img path */}
                <Image src={`/img/${imgList[0]}`} alt="Imagen proyecto" /* width={400} height={225} */fill="responsive" priority={true} />
            </div>
            <div className="right face">
                <Image src={`/img/${imgList[1]}`} alt="Certificado" /* width={400} height={225} */fill="responsive" />
            </div>
            <div className="back face">
                <Image src={`/img/${imgList[2]}`} alt="Imagen proyecto" /* width={400} height={225} */fill="responsive" />
            </div>
            <div className="left face">
                <Image src={`/img/${imgList[3]}`} alt="Imagen proyecto" /* width={400} height={225} */fill="responsive" />
            </div>
        </div>
    )
}
