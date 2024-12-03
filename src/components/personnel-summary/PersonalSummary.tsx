import styles from './personal-summary.module.css';
import Image from 'next/image';
import sb from '../../app/assets/sb.png';
import { TechnologyList } from './TechnologyList';
import Anchor from '../common/Anchor';
import type { TechnologyItemProps } from './TechnologyItem';
import TextAndImage from '../common/TextAndImage';

export function PersonalSummary() {
  const technologies: TechnologyItemProps[] = [
    {
      technologyName: 'React',
      technologyLogo: '/react.svg',
    },
    {
      technologyName: 'Node.js',
      technologyLogo: '/node.svg',
    },
    {
      technologyName: 'Next.js',
      technologyLogo: '/nextjs.svg',
    },
    {
      technologyName: 'Express.js',
      technologyLogo: '/express.svg',
    },
    {
      technologyName: 'MongoDB',
      technologyLogo: '/mongodb.svg',
    },
    {
      technologyName: 'PostgreSQL',
      technologyLogo: '/postgresql.svg',
    },
    {
      technologyName: 'JavaScript',
      technologyLogo: '/js.svg',
    },
    {
      technologyName: 'TypeScript',
      technologyLogo: '/ts.svg',
    },
    {
      technologyName: 'git',
      technologyLogo: '/git.svg',
    },
    {
      technologyName: 'GitHub',
      technologyLogo: '/github.svg',
    },
    {
      technologyName: 'sass',
      technologyLogo: '/sass.svg',
    },
  ];

  return (
    <article className={styles.personal}>
      <div className={styles['image-container']}>
        <Image
          className={styles['image-container__image']}
          src={sb}
          alt="Picture of Balazs Sipos"
          priority
        />
      </div>
      <div className={styles['personal-info']}>
        <div className={styles['personal-summary']}>
          <TextAndImage
            title="My name is BALAZS,
              I am a Fullstack Software Developer"
            texts={[
              'Like a handyman, who likes to build whole houses. Not just some parts of it, but everything. The ground, the walls, the wires and pipes, all the furniture, the coloring, even the nice flowers around the building. That completeness, what motivates me.',
            ]}
            // theme="light"
            imageSrc="/house.png"
            imageAlt="Aodocs product image"
          />
        </div>
        <TechnologyList
          technologies={technologies}
          title="During construction time I mainly use these technologies:"
        />
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
