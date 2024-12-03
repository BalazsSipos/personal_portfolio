import TextAndMedia from './TextAndMedia';
import Image from 'next/image';
import styles from './text-and-image.module.css';

export type TextAndImageProps = {
  title: string;
  texts: string[];
  theme?: 'light' | 'dark';
  imageSrc: string;
  imageAlt: string;
};

export default function TextAndImage(props: TextAndImageProps) {
  return (
    <TextAndMedia title={props.title} theme={props.theme} texts={props.texts}>
      <div className={styles['image-container']}>
        <Image
          className={styles['image']}
          src={props.imageSrc}
          alt={props.imageAlt}
          width={1080}
          height={300}
          priority
        />
      </div>
    </TextAndMedia>
  );
}
