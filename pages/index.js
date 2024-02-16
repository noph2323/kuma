import styles from "@/styles/Home.module.css"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>หน้าแรก | KUMA ま Privilege</title>
      <meta name="keywords" content="KUMA ま Privilege,ร้านค้า,ขายของสัตว์เลี้ยง"/>
    </Head>
    <div className={styles.container}>
    <h1 className={styles.title}>KUMA ま Privilege</h1>
    <Image src="/KUMA-0.jpg"  layout="responsive" width={100} height={100} alt="logo"/>
    <p>ยินดีต้อนรับเข้าสู่ร้าน KUMA ま Privilege</p>
    <Link href="/products" className={styles.btn}>ดูสินค้าทั้งหมด</Link>
    </div>
    </>
  );
}
