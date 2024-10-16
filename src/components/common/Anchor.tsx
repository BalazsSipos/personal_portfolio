import Image from 'next/image';
import styles from './anchor.module.css';
import Link from 'next/link';

type AnchorProps = {
  text: string;
  href: string;
  target: string;
  priority: 'primary' | 'secondary';
  imgSrc?: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
};

export default function Anchor(props: AnchorProps) {
  const priority =
    props.priority === 'primary'
      ? styles['anchor--primary']
      : styles['anchor--secondary'];
  return (
    <section className={styles.anchor}>
      <Link
        className={priority}
        href={props.href}
        target={props.target}
        rel="noopener noreferrer"
      >
        {props.imgSrc && (
          <Image
            className={styles.logo}
            src={props.imgSrc}
            alt={props.imgAlt ? props.imgAlt : ''}
            width={props.imgWidth}
            height={props.imgHeight}
          />
        )}
        {props.text}
      </Link>
    </section>
  );
}
