import FullScreenLanding from '../../components/common/FullScreenLanding';
import styles from './project-detail.module.css';

export type ProjectDetailProps = {
  imgsrc: string;
  imgalt: string;
  summary: ProjectSummaryProps;
};

export default function ProjectDetail(
  props: ProjectDetailProps & { children: React.ReactNode }
) {
  return (
    <div>
      <div className={styles.placeholder}></div>
      <FullScreenLanding src={props.imgsrc} alt={props.imgalt} />
      <ProjectSummary {...props.summary} />
      <div>{props.children}</div>
    </div>
  );
}

type ProjectSummaryProps = {
  role: string;
  deliverables: string[];
  projectUrls: string[];
  code: string;
  summaryText: string;
};

function ProjectSummary(props: ProjectSummaryProps) {
  return (
    <div className={styles.summary}>
      <div className={styles.summary__listing}>
        <h3 className={styles.title}>ROLE</h3>
        <div>{props.role}</div>
        <h3 className={styles.title}>DELIVERABlES</h3>
        <ul>
          {props.deliverables.map((deliverable, index) => (
            <li key={index}>{deliverable}</li>
          ))}
        </ul>
        <h3 className={styles.title}>PROJECT URLS</h3>
        <ul>
          {props.projectUrls.map((url, index) => (
            <li key={index}>
              <a href={url}>{url}</a>
            </li>
          ))}
        </ul>
        <h3 className={styles.title}>CODE</h3>
        <a href={props.code}>{props.code}</a>
      </div>
      <div className={styles.summary__text}>{props.summaryText}</div>
    </div>
  );
}
