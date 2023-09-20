/* eslint-disable react/prop-types */
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id='projects'>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>I have worked on a wide range of projects. Here are some of them.</Desc>

        <CardContainer>
          {projects.map((project, index) => (
            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} key={index} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
