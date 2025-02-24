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
      </main>
    </div>
  );
}
