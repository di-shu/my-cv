import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.find_me}>find me in:</div>
    <nav className={styles.nav}>
      <a href='' target='_blank'>
        <Image width={24} height={24} src='/telegram-icon.svg' alt='' />
      </a>
      <a href='' target='_blank'>
        <Image width={24} height={24} src='/linkedin-icon.svg' alt='' />
      </a>
      <a href='' target='_blank'>
        <span>@di-shu</span>
        <Image width={24} height={24} src='/github-icon.svg' alt='' />
      </a>
    </nav>
  </footer>
}
