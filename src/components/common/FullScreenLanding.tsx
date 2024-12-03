import styles from './full-screen-landing.module.css';
import Image from 'next/image';

export type FullPictureProps = {
  src: string;
  alt: string;
};

export default function FullScreenLanding(props: FullPictureProps) {
  return (
    <>
      <div className={styles.placeholder}></div>
      <div className={styles['image-container']}></div>
      <Image
        className={styles['image-container__image']}
        src={props.src}
        alt={props.alt}
        width={900}
        height={900}
        priority
      />
    </>
  );
}
