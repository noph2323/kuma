import Link from "next/link"
import Image from "next/image"
export default function navbar(){
    return(
        <nav>
            <div className="logo">
                <Link href="/">
                <Image src="/logo.png" width={50} height={50} alt="logo"/>
                </Link>
                </div>
                <Link href="/">หน้าแรก</Link>
                <Link href="/products">สินค้า</Link>
                <Link href="/contact">ติดต่อ</Link>
                <Link href="/about">เกี่ยวกับเรา</Link>
        </nav>
    )
}