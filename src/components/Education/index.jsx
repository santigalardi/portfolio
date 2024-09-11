import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
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
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector style={{ background: '#854CE6' }} />
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
