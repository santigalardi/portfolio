import { useState, useContext } from 'react';
import {
  Nav,
  NavLink,
  NavBarContainer,
  Span,
  NavLogo,
  NavItems,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavBarStyledComponent.js';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { BioEs, translations } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';
import SwitchLanguageButton from '../SwitchLanguageButton/index.jsx';
import LanguageContext from '../../context/LanguageContext';

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 10px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SwitchMobile = styled.div`
  display: block;
  margin-right: 20px;

  @media (min-width: 960px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(LanguageContext);
  const navText = translations[language];

  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20;',
              cursor: 'pointer',
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <SwitchMobile>
            <SwitchLanguageButton />
          </SwitchMobile>
          <FaBars
            style={{ color: 'white', cursor: 'pointer' }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">{navText.about}</NavLink>
          <NavLink href="#skills">{navText.skills}</NavLink>
          <NavLink href="#projects">{navText.projects}</NavLink>
          <NavLink href="#education">{navText.education}</NavLink>
          <NavLink href="#contact">{navText.contact}</NavLink>
        </NavItems>
        <ButtonContainer>
          <SwitchLanguageButton />
          <SocialMediaIcons>
            <SocialMediaIcon href={BioEs.linkedin} target="display">
              <LinkedInIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href={BioEs.github} target="display">
              <GitHubIcon />
            </SocialMediaIcon>
          </SocialMediaIcons>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {navText.about}
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {navText.skills}
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {navText.projects}
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {navText.education}
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {navText.contact}
            </MobileLink>
            <SocialMediaIcons>
              <SocialMediaIcon href={BioEs.linkedin} target="display">
                <LinkedInIcon />
              </SocialMediaIcon>
              <SocialMediaIcon href={BioEs.github} target="display">
                <GitHubIcon />
              </SocialMediaIcon>
            </SocialMediaIcons>
          </MobileMenu>
        )}
      </NavBarContainer>
    </Nav>
  );
};

export default Navbar;
