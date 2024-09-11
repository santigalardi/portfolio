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
  margin-top: 8px;
  @media (min-width: 960px) {
    justify-content: center;
    align-items: center;
  }
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
            <NavLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {navText.about}
            </NavLink>
            <NavLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {navText.skills}
            </NavLink>
            <NavLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {navText.projects}
            </NavLink>
            <NavLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {navText.education}
            </NavLink>
            <NavLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {navText.contact}
            </NavLink>
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
