import styles from './page.module.css';
import Image from 'next/image';
// import Image from 'next/image';
import analyst2 from '../../app/assets/financial_analysis_diagrams1.jpeg';
import analyst3 from '../../app/assets/financial_analysis_diagrams2.png';

export default function About() {
  return (
    <>
      <section className={styles['wrapper-container']}>
        <div className={styles.text}>
          I have been working for more, than 10 years as a financial analyst
          a.k.a. controller. I was responsible for the financial planning,
          budgeting, forecasting, reporting, and analysis of different
          companies. I have learned a lot about the financial side of the
          businesses, but I felt that I need more creativity and more
          challenges. I wanted to create something new, something that can be
          seen and used by others. I wanted to affect other peoples life. I
          wanted to be a software developer.
        </div>
        <div className={styles['image-container']}>
          <div>
            <Image
              className={styles['image']}
              src={analyst2}
              alt="Decathlon logo"
              width={380}
              // height={38}
              priority
            />
          </div>
          <div>
            <Image
              className={styles['image']}
              src={analyst3}
              alt="Decathlon logo"
              width={380}
              // height={38}
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
