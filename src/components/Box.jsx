import Image from 'next/image'
import { useSelector } from 'react-redux'
import Label from './Label'

export default function Box() {
    const {imgList} = useSelector(state => state.project)
    return (
        <div className="box">
            <div className="front face">
                <Image src={`/img/${imgList[0]}`} alt="Imagen proyecto" /* width={400} height={225} */fill="responsive" />
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
