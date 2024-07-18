'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import styles from "./header.module.css"

export default function Header() {
  const pathname = usePathname();
  const links = [
    {
      path: '/',
      title: '_hello'
    },
    {
      path: '/about',
      title: "_about-me"
    },
    {
      path: '/projects',
      title: "_projects"
    },
    {
      path: '/contact',
      title: "_contact-me"
    }
  ];

  const renderLinks = () => {
    return links.map(({ path, title }) => {
      const className = `${styles.link} ${pathname === path && styles.active}`;
      return <Link className={className} key={path} href={path}>
        <span>{title}</span>
      </Link>
    })
  }

  return <header className={styles.header}>
    <div className={styles.name}>di-shu</div>
    <nav className={styles.nav}>
      {renderLinks()}
    </nav>
  </header>
}
