import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>Contact me:</div>
      <Link
        href="https://www.linkedin.com/in/balazs-sipos1/"
        target="new"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logo}
          src="/linkedin.svg"
          alt="linkedin logo"
          width={50}
          height={60}
        />
      </Link>
      <Link
        href="https://github.com/BalazsSipos"
        target="new"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logo}
          src="/github.svg"
          alt="github logo"
          width={60}
          height={60}
        />
      </Link>
      <a href="mailto:balazs.sipos.hu@gmail.com" rel="noopener noreferrer">
        <Image
          className={styles.logo}
          src="/mail.svg"
          alt="mail logo"
          width={70}
          height={70}
        />
      </a>
    </footer>
  );
}
