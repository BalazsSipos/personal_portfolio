import ProjectDetail, {
  ProjectDetailProps,
} from '../../../components/professional/ProjectDetail';
import TextAndImage from '../../../components/common/TextAndImage';
import { TechnologyList } from '../../../components/personnel-summary/TechnologyList';
import { TechnologyItemProps } from '../../../components/personnel-summary/TechnologyItem';

export default function Page() {
  const texts1 = [
    'We gave a new look to the brands of the website, like Opel, Peugeot, Citroen, ect.',
    'From a previous server-side rendered website, we moved to dynamic React rendering.',
  ];

  const texts2 = [
    'We extended the content management system of Opel to Peugeot and Citroen too, so that the central marketing team could manage all the common content for the given country.',
    'Additionally the individual car dealers could handle their own contents and offers.',
  ];

  const technologies: TechnologyItemProps[] = [
    {
      technologyName: 'React',
      technologyLogo: '/react.svg',
    },
    {
      technologyName: 'Java',
      technologyLogo: '/java.svg',
    },
    {
      technologyName: 'Spring',
      technologyLogo: '/spring.svg',
    },
    {
      technologyName: 'PostgreSQL',
      technologyLogo: '/postgresql.svg',
    },
    {
      technologyName: 'JavaScript',
      technologyLogo: '/js.svg',
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
    {
      technologyName: 'sass',
      technologyLogo: '/sass.svg',
    },
  ];

  const projectDetails: ProjectDetailProps = {
    imgsrc: '/psa-logo.png',
    imgalt: 'psa logo',
    summary: {
      role: 'Full-stack developer',
      deliverables: ['Website design', 'Website development'],
      projectUrls: [],
      code: '',
      summaryText:
        'The original project was a Content Management System of Opel brand. After the PSA group bought Opel, they wanted to extend the CMS to the other brands of the group, like Peugeot, Citroen and DS.',
    },
  };

  return (
    <ProjectDetail {...projectDetails}>
      <div>
        <TextAndImage
          title="Redesign website"
          texts={texts1}
          // theme="dark"
          imageSrc="/peugeot.png"
          imageAlt="Peugeot website image"
        />
        {/* <TextAndMedia title="Restyle pages" texts={texts1}>
          <div className={styles['image-container']}>
            <Image
              className={styles['image']}
              src={peugeot}
              alt="Peugeot website image"
              // width={380}
              // height={38}
              priority
            />
          </div>
        </TextAndMedia> */}
        <TextAndImage
          title="Extend CMS"
          texts={texts2}
          theme="light"
          imageSrc="/psa-mix.png"
          imageAlt="PSA mix image"
        />
        {/* <TextAndMedia title="Extend CMS" texts={texts2} theme="light">
          <div className={styles['image-container']}>
            <Image
              className={styles['image']}
              src={psamix}
              alt="PSA mix image"
              // width={380}
              // height={38}
              priority
            />
          </div>
        </TextAndMedia> */}

        <TechnologyList
          technologies={technologies}
          title="Technologies used"
        ></TechnologyList>
      </div>
    </ProjectDetail>
  );
}
