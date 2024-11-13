import styles from './text-and-media.module.css';

export type TextAndMediaProps = {
  children: React.ReactNode;
  title: string;
  texts: string[];
  theme?: 'light' | 'dark';
};

export default function TextAndMedia(props: TextAndMediaProps) {
  return (
    <section
      className={`${styles['wrapper-container']} ${
        props.theme === 'light' ? styles.light : styles.dark
      }`}
    >
      <div className={styles.text}>
        <h1 className={styles['text__title']}>{props.title}</h1>
        {props.texts.map((text, index) => (
          <div key={index} className={styles['text__content']}>
            {text}
          </div>
        ))}
      </div>
      {props.children}
    </section>
  );
}
