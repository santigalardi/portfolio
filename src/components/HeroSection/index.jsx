import HeroBgAnimation from '../HeroBgAnimation';
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  ImgMobile,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  // SocialMediaIcons,
  // SocialMediaIcon,
  ResumeButton,
} from './HeroStyle';
import HeroImg from '../../images/mockup1.png';
import Typewriter from 'typewriter-effect';
import { BioEs, BioEn } from '../../data/constants';
import LanguageContext from '../../context/LanguageContext';
import { useContext } from 'react';

const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const Bio = language === 'es' ? BioEs : BioEn;

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              {language === 'es' ? (
                <>
                  ¡Hola!👋 Soy <br />
                </>
              ) : (
                <>
                  Hello! 👋 I am <br />
                </>
              )}
              {Bio.name}
            </Title>
            <TextLoop>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <ImgMobile src={HeroImg} alt="hero-image" />
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              {language === 'es' ? 'Ver Curriculum' : 'View Resume'}
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
