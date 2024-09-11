/* eslint-disable react/prop-types */
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projectsEs, projectsEn } from '../../data/constants';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

const Projects = ({ openModal, setOpenModal }) => {
  const { language } = useContext(LanguageContext);
  const projects = language === 'es' ? projectsEs : projectsEn;

  return (
    <Container id="projects">
      <Wrapper>
        <Title>{language === 'es' ? 'Proyectos' : 'Projects'}</Title>
        <Desc>
          {language === 'es'
            ? 'He trabajado en una amplia variedad de proyectos. ¡Aquí te presento algunos de los más destacados! 🚀'
            : 'I have worked on a wide variety of projects. Here are some of the most notable ones! 🚀'}
        </Desc>
        <CardContainer>
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
              key={index}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
