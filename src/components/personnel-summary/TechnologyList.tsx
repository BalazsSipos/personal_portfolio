import styles from './technology-list.module.css';
import { TechnologyItem } from './TechnologyItem';
import reactLogo from '../../app/assets/react.svg';
import nodeLogo from '../../app/assets/node.svg';
import nextLogo from '../../app/assets/nextjs.svg';
import expressLogo from '../../app/assets/express.svg';
import mongoLogo from '../../app/assets/mongodb.svg';
import postgresLogo from '../../app/assets/postgresql.svg';
import javascriptLogo from '../../app/assets/js.svg';
import typescriptLogo from '../../app/assets/ts.svg';
import gitLogo from '../../app/assets/git.svg';
import gitHubLogo from '../../app/assets/github.svg';
import sassLogo from '../../app/assets/sass.svg';

export function TechnologyList() {
  return (
    <div className={styles['technology-list-container']}>
      <p>During construction time I mainly use these technologies:</p>
      <div className={styles['technology-list']}>
        <TechnologyItem technologyName="React" technologyLogo={reactLogo} />
        <TechnologyItem technologyName="Node" technologyLogo={nodeLogo} />
        <TechnologyItem technologyName="Next" technologyLogo={nextLogo} />
        <TechnologyItem technologyName="Express" technologyLogo={expressLogo} />
        <TechnologyItem technologyName="MongoDB" technologyLogo={mongoLogo} />
        <TechnologyItem
          technologyName="Postgres"
          technologyLogo={postgresLogo}
        />
        <TechnologyItem
          technologyName="Javascript"
          technologyLogo={javascriptLogo}
        />
        <TechnologyItem
          technologyName="Typescript"
          technologyLogo={typescriptLogo}
        />
        <TechnologyItem technologyName="git" technologyLogo={gitLogo} />
        <TechnologyItem technologyName="gitHub" technologyLogo={gitHubLogo} />
        <TechnologyItem technologyName="Sass" technologyLogo={sassLogo} />
      </div>
    </div>
  );
}
