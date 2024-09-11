import { educationEs, educationEn } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  TimelineSection,
} from './EducationStyle';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import Reveal from '../Reveal/Reveal';

const Education = () => {
  const { language } = useContext(LanguageContext);
  const education = language === 'es' ? educationEs : educationEn;

  return (
    <Container id="education">
      <Wrapper>
        <Title>{language === 'es' ? 'Educación' : 'Education'}</Title>
        <Desc>
          {language === 'es'
            ? 'Mi educación ha sido un viaje de autodescubrimiento y crecimiento. A continuación, detallo mi trayectoria educativa. 👨‍🎓'
            : 'My education has been a journey of self-discovery and growth. Below, I detail my educational background. 👨‍🎓'}
        </Desc>
        <TimelineSection>
          {education.map((education, index) => (
            <Reveal key={index}>
              <EducationCard education={education} />
            </Reveal>
          ))}
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
