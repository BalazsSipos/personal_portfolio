import styles from './page.module.css';
import Image from 'next/image';
import TextAndMedia from '../../components/common/TextAndMedia';
import decathlon from '../../app/assets/decathlon-logo-white.png';
import analyst from '../../app/assets/financial_analysis_diagrams.png';
import developer from '../../app/assets/software-developer.jpeg';

export default function About() {
  const myLifeTexts = [
    'My name is Balazs, I am a software developer, I live with my wife and my two sons in Hungary. I do Track and Field Decathlon, as my main sport. I like the versatility of  it, to be forced to have multiple skills for the runs, jumps and throws.',
  ];

  const financialAnalystTexts = [
    'I used to work as a financial analyst a.k.a. controller for more, than 10 years. I was responsible for the financial planning, budgeting, forecasting, reporting, and analysis of different companies.',
    'I have learned a lot about the financial side of the businesses, but I felt that I need more creativity and more challenges. I wanted to create something new, something that can be seen and used by others. I wanted to affect other peoples life. I wanted to be a software developer.',
  ];

  const softwareDeveloperTexts = [
    'I started to work as a software developer in 2019. I worked on backend side (Javascript, Java and C#) and on frontend side (React) as well.',
    'I enjoy the most, when I have responsibilities on both sides at the same time. That way I feel, that I can shape the given application the most. I enjoy my current profession, I can practice all the creativity I need, but with all the strict rules around me, that I also expect to have, when I work.',
  ];

  return (
    <>
      <TextAndMedia title="My Life" texts={myLifeTexts}>
        <div className={styles['image-container']}>
          <Image
            className={styles['image']}
            src={decathlon}
            alt="Decathlon logo"
            // width={380}
            // height={38}
            priority
          />
        </div>
      </TextAndMedia>
      <TextAndMedia
        title="Financial Analyst"
        texts={financialAnalystTexts}
        theme="light"
      >
        <div className={styles['image-container']}>
          <Image
            className={styles['image']}
            src={analyst}
            alt="Decathlon logo"
            // width={380}
            // height={38}
            priority
          />
        </div>
      </TextAndMedia>
      <TextAndMedia title="Software Developer" texts={softwareDeveloperTexts}>
        <div className={styles['image-container']}>
          <Image
            className={styles['image']}
            src={developer}
            alt="Decathlon logo"
            // width={380}
            // height={38}
            priority
          />
        </div>
      </TextAndMedia>
    </>
  );
}
