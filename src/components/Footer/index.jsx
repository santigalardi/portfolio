import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { BioEs, translations } from '../../data/constants';
import LanguageContext from '../../context/LanguageContext';
import { useContext } from 'react';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  const { language } = useContext(LanguageContext);
  const navText = translations[language];

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Santiago Galardi</Logo>
        <Nav>
          <NavLink href="#about">{navText.about}</NavLink>
          <NavLink href="#skills">{navText.skills}</NavLink>
          <NavLink href="#projects">{navText.projects}</NavLink>
          <NavLink href="#education">{navText.education}</NavLink>
          <NavLink href="#contact">{navText.contact}</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={BioEs.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={BioEs.github} target="display">
            <GitHubIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>santygalardi@gmail.com</Copyright>
        <Copyright>Santiago Galardi &copy; 2024</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
