import styles from './page.module.css';
import { PersonalSummary } from '../components/personnel-summary/PersonalSummary';
import Professional from '../components/professional/Professional';

export default function Home() {
  return (
    <div className={styles.page}>
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
    </div>
  );
}
