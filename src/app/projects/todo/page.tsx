import ProjectDetail, {
  ProjectDetailProps,
} from '../../../components/professional/ProjectDetail';
import TextAndImage from '../../../components/common/TextAndImage';
import { TechnologyList } from '../../../components/personnel-summary/TechnologyList';
import { TechnologyItemProps } from '../../../components/personnel-summary/TechnologyItem';

export default function Page() {
  const texts1 = [
    'Express js is used as backend Node framework with industrial strength solutions, like dependency injection and firebase authentication.',
    'PostgreSQL is used as a database with TypeOrm.',
    'As part of the Continuous Development, the backend code is automatically deployed to Render, linting and Jest tests are automatically run by GitHub actions.',
  ];

  const texts2 = [
    'The frontend is written in React with Material UI.',
    'For client side state management Redux and Context API are both used. Tanstack query is used for server side state management.',
    'Parcel is used for bundling the frontend code.',
    'Just as in the backend, the frontend code is automatically deployed to Vercel, linting and Jest tests are automatically run by GitHub actions.',
  ];

  const technologies: TechnologyItemProps[] = [
    {
      technologyName: 'React',
      technologyLogo: '/react.svg',
    },
    {
      technologyName: 'Node js',
      technologyLogo: '/node.svg',
    },
    {
      technologyName: 'Express js',
      technologyLogo: '/express.svg',
    },
    {
      technologyName: 'Postgres',
      technologyLogo: '/postgresql.svg',
    },
    {
      technologyName: 'TypeScript',
      technologyLogo: '/ts.svg',
    },
    {
      technologyName: 'Material UI',
      technologyLogo: '/material-ui.svg',
    },
    {
      technologyName: 'git',
      technologyLogo: '/git.svg',
    },
    {
      technologyName: 'GitHub',
      technologyLogo: '/github.svg',
    },
  ];

  const projectDetails: ProjectDetailProps = {
    imgsrc: '/todo-logo.png',
    imgalt: 'todo app logo',
    summary: {
      role: 'Full-stack tech owner',
      deliverables: ['Design', 'Website development', 'Deployment'],
      projectUrls: ['https://full-stack-todo-sepia.vercel.app/'],
      code: 'https://github.com/BalazsSipos/full-stack-todo',
      summaryText:
        'This is a demonstrational application. It serves as a minimal functioning todo app. Though the aim here was not to fill it with tons of functionality, but to use all technical solutions, that are used in an industrial real world app.',
    },
  };

  return (
    <ProjectDetail {...projectDetails}>
      <div>
        <TextAndImage
          title="Backend development"
          texts={texts1}
          theme="light"
          imageSrc="/todo.png"
          imageAlt="Old kaiser website image"
        />
        <TextAndImage
          title="Frontend development"
          texts={texts2}
          // theme="light"
          imageSrc="/todo-users.png"
          imageAlt="kaiser mobile image"
        />
        <TechnologyList
          technologies={technologies}
          title="Technologies used"
        ></TechnologyList>
      </div>
    </ProjectDetail>
  );
}
