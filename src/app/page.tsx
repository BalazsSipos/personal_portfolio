import Image from 'next/image';
import styles from './page.module.css';
import { PersonalSummary } from '../components/personnel-summary/PersonnelSummary';
import Professional from '../components/professional/Professional';

export default function Home() {
  return (
    <div className={styles.page}>
      <header>Header</header>
      <main className={styles.main}>
        <section>
          <PersonalSummary />
        </section>
        <section>
          <Professional />
        </section>
        <section>
          <article>
            <h1>5. Contact</h1>
            <div>
              <a href="https://github.com/BalazsSipos">GitHub</a>
              <a href="https://www.linkedin.com/in/balazs-sipos1/">LinkedIn</a>
              <a href="mailto:edeworonyedika@gmail.com" target="_blank">
                Email me
              </a>
            </div>
          </article>
        </section>
        <div>
          Between the blocks, there can be a button to show a funny quote.
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
