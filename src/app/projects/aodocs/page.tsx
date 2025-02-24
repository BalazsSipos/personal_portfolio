import ProjectDetail, {
  ProjectDetailProps,
} from '../../../components/professional/ProjectDetail';
import TextAndImage from '../../../components/common/TextAndImage';
import { TechnologyList } from '../../../components/personnel-summary/TechnologyList';
import { TechnologyItemProps } from '../../../components/personnel-summary/TechnologyItem';

export default function Page() {
  const texts1 = [
    'Add backend features to the cloud document management platform based on the french Product Team.',
  ];

  const technologies: TechnologyItemProps[] = [
    {
      technologyName: 'Java',
      technologyLogo: '/java.svg',
    },
    {
      technologyName: 'Google Cloud',
      technologyLogo: '/gcp.svg',
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
    imgsrc: '/aodocs-logo.png',
    imgalt: 'Aodocs image',
    summary: {
      role: 'Backend developer',
      deliverables: ['New features', 'Handle backlog'],
      projectUrls: ['https://www.aodocs.com/'],
      code: '',
      summaryText:
        'Aodocs is a cloud document management platform. The french Product Team had a lot of new features to implement. The application was written in Java.',
    },
  };

  return (
    <ProjectDetail {...projectDetails}>
      <div>
        <TextAndImage
          title="Product development"
          texts={texts1}
          theme="dark"
          imageSrc="/aodocs-product.png"
          imageAlt="Aodocs product image"
        />
        <TechnologyList technologies={technologies} title="Technologies used" />
      </div>
    </ProjectDetail>
  );
}
