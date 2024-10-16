import styles from './personal-summary.module.css';
import Image from 'next/image';
import sb from '../../app/assets/sb.png';
import dec from '../../app/assets/dec.png';
import { TechnologyList } from './TechnologyList';
import Anchor from '../common/Anchor';

export function PersonalSummary() {
  return (
    <article className={styles.personal}>
      <div className={styles['image-container']}>
        <Image
          className={styles['image-container__image']}
          src={sb}
          alt="Picture of Balazs Sipos"
          // width={180}
          // height={38}
          priority
        />
        {/* <img className="full-photo" src={sb} alt="" /> */}
      </div>
      <div className={styles['personal-info']}>
        <div className={styles['personal-summary']}>
          <p className={styles['personal-summary-text']}>
            <h1>My name is BALAZS</h1>
            <h2>
              I am a <em>Fullstack Software Developer</em>
            </h2>
            Like a handyman, who likes to build whole houses. Not just some
            parts of it, but everything. The ground, the walls, the wires and
            pipes, all the furniture, the coloring, even the nice flowers around
            the building. That completeness, what motivates me.
          </p>
          <Image
            className={styles['personal-summary__image']}
            src={dec}
            alt="Decathlon logo"
            // width={180}
            // height={38}
            priority
          />
          {/* <img className="dec-photo" src={dec} alt="Decathlon logo" /> */}
        </div>
        <TechnologyList />
        <Anchor
          text="About me"
          href="/about"
          target=""
          priority="primary"
        ></Anchor>
      </div>
    </article>
  );
}
