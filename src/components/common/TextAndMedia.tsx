import styles from './text-and-media.module.css';

export type ContainerProps = {
  children: React.ReactNode;
  title: string;
  texts: string[];
  theme?: 'light' | 'dark';
};

export default function Container(props: ContainerProps) {
  return (
    <section className={styles['wrapper-container']}>
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
