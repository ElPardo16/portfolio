import Image from 'next/image'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
// import dependencies

export default function Box() {
    // get imgList from project state
    const { imgList } = useSelector(state => state.project)
    const gallery = useMemo(_ => (
        <>
                <div className="front face">
                    {/*Replace the src with the img path */}
                    <Image src={`/img/${imgList[0]}`} alt="Imagen proyecto" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill="responsive" priority={true} />
                </div>
                <div className="right face">
                    <Image src={`/img/${imgList[1]}`} alt="Certificado" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill="responsive" priority={true}  />
                </div>
                <div className="back face">
                    <Image src={`/img/${imgList[2]}`} alt="Imagen proyecto" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill="responsive" priority={true} />
                </div>
                <div className="left face">
                    <Image src={`/img/${imgList[3]}`} alt="Imagen proyecto" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill="responsive" priority={true} />
                </div>
            </>
    ))
    return (
        <div className="box">
            {gallery}
        </div>
    )
}
