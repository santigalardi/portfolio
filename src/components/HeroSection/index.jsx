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
import { Bio } from '../../data/constants';

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              ¡Hola!👋 Soy <br />
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
              Ver Currículum
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
