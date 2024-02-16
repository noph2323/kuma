import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { useRouter } from 'next/router'

export default function Index(){
    const router = useRouter()

    const total    = 500
    const nPerPage = 50

    const from = parseInt(router.query.from)
    const to   = from + nPerPage
    const no   = from - nPerPage

    return(
        <>

        <Head>
            <title>สินค้าทั้งหมด | KUMA ま Privilege</title>
            <meta name="keywords" content="KUMA ま Privilege,ร้ายขายของสัตว์เลี้ยง"/>
        </Head>
        <div>
            Showing products From {from} To {to-1}
            <br/>
            <div>
            {/* <Image src="/KUMA-3.png"  layout="responsive" width={100} height={100} alt="logo"/> */}
            </div>
            <div>
            <Image src={`/KUMA-${from/50}.png`}  layout="responsive" width={100} height={100} alt="logo"/>
            </div>
            <br/>
            <Link href={`/products/${to}`} >ถัดไป</Link>
            <br/>
            <Link href={`/products/${no}`} >ย้อนกลับ</Link>
        </div>
       </>
    )
}