import styles from './hamburger.module.css';

type HamburgerProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function Hamburger(props: HamburgerProps) {
  return (
    <div>
      <button className={styles['hamburger-button']} onClick={props.onClick}>
        <div className={styles['hamburger']}>
          <span
            className={`${styles['hamburger__stick']} ${
              props.isOpen ? styles['hamburger__stick--top'] : ''
            }`}
          ></span>
          <span
            className={`${styles['hamburger__stick']} ${
              props.isOpen ? styles['hamburger__stick--middle'] : ''
            }`}
          ></span>
          <span
            className={`${styles['hamburger__stick']} ${
              props.isOpen ? styles['hamburger__stick--bottom'] : ''
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
}
