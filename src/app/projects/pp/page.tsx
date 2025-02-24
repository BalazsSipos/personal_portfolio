import ProjectDetail, {
  ProjectDetailProps,
} from '../../../components/professional/ProjectDetail';
import { TechnologyList } from '../../../components/personnel-summary/TechnologyList';
import TextAndImage from '../../../components/common/TextAndImage';
import { TechnologyItemProps } from '../../../components/personnel-summary/TechnologyItem';

export default function Page() {
  const texts1 = [
    'Next js was used for frontend development.',
    'For this project I deliberately chose not to use any CSS framework, instead I created the design from scratch with vanilla CSS for demonstration purposes.',
  ];

  const texts2 = [
    'The new website was created with a mobile first approach. Next js was used for the static website.',
  ];

  const technologies: TechnologyItemProps[] = [
    {
      technologyName: 'React',
      technologyLogo: '/react.svg',
    },
    {
      technologyName: 'Next js',
      technologyLogo: '/nextjs.svg',
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
  ];

  const projectDetails: ProjectDetailProps = {
    imgsrc: '/pp.png',
    imgalt: 'personal portfolio',
    summary: {
      role: 'Frontend developer',
      deliverables: ['Website design', 'Website development'],
      projectUrls: ['https://balazs-sipos-portfolio.vercel.app/'],
      code: 'https://github.com/BalazsSipos/personal_portfolio',
      summaryText:
        'The personal portfolio (this page) was created to showcase my experiences, the technologies I prefer to use.',
    },
  };

  return (
    <ProjectDetail {...projectDetails}>
      <div>
        <TextAndImage
          title="General design"
          texts={texts1}
          // theme="light"
          imageSrc="/pp-general.png"
          imageAlt="personal portfolio general image"
        />
        <TextAndImage
          title="Design mobile view"
          texts={texts2}
          theme="light"
          imageSrc="/pp-mobile.png"
          imageAlt="personal portfolio mobile image"
        />
        <TechnologyList
          technologies={technologies}
          title="Technologies used"
        ></TechnologyList>
      </div>
    </ProjectDetail>
  );
}
