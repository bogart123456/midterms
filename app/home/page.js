'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  return (  
    <div className={styles.page}>
      <main className={styles.main}>
                  <h1>Student Directory</h1>
        <div className={styles.ctas}>
          <Link
            className={styles.primary}
            href="/home"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Home
          </Link>
          <Link
            href="/students"
            className={styles.secondary}
          >
            Students
          </Link>
        </div>
      </main>
    </div>
  );
}
