import ProjectDetail from '../../../components/professional/ProjectDetail';
import TextAndImage from '../../../components/common/TextAndImage';
import { TechnologyList } from '../../../components/personnel-summary/TechnologyList';
import { TechnologyItemProps } from '../../../components/personnel-summary/TechnologyItem';
import type { ProjectDetailProps } from '../../../components/professional/ProjectDetail';

export default function Page() {
  const texts1 = [
    'Kaiser SE is a sport club in Budapest, Hungary. Its website was outdated.',
  ];
  const texts2 = [
    'The new website was created with a mobile first approach. Next js was used for the static website.',
  ];
  const texts3 = ['Tailwind css was used to create a responsive design.'];

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
      technologyName: 'JavaScript',
      technologyLogo: '/js.svg',
    },
    {
      technologyName: 'TypeScript',
      technologyLogo: '/ts.svg',
    },
    {
      technologyName: 'Tailwind',
      technologyLogo: '/tailwind.svg',
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
    imgsrc: '/kaiser-circle.png',
    imgalt: 'kaiser logo',
    summary: {
      role: 'Frontend developer',
      deliverables: ['Website design', 'Website development'],
      projectUrls: ['https://kaiserse.vercel.app/'],
      code: 'https://github.com/BalazsSipos/kaiser',
      summaryText:
        'Kaiser SE is a sport club in Budapest, Hungary. Its website was quite old fashioned. As the club started to grow, it was important to create a new responsive website to attract even more athletes.',
    },
  };

  return (
    <ProjectDetail {...projectDetails}>
      <div>
        <TextAndImage
          title="Outdated website"
          texts={texts1}
          theme="light"
          imageSrc="/kaiser-old.png"
          imageAlt="Old kaiser website image"
        />
        <TextAndImage
          title="Design mobile view"
          texts={texts2}
          // theme="light"
          imageSrc="/athletics-mobile.png"
          imageAlt="kaiser mobile image"
        />
        <TextAndImage
          title="Design desktop view"
          texts={texts3}
          theme="light"
          imageSrc="/athletics.png"
          imageAlt="kaiser desktop image"
        />

        <TechnologyList
          technologies={technologies}
          title="Technologies used"
        ></TechnologyList>
      </div>
    </ProjectDetail>
  );
}
