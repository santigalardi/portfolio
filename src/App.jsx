import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme, lightTheme } from './utils/themes.js';
import Navbar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import ProjectDetails from './components/ProjectDetails';
import styled from 'styled-components';
import EarthCanvas from './components/Canvas/Earth.jsx';
import { Toaster } from 'sonner';
import LanguageProvider from './context/LanguageProvider.jsx';
import './App.css';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <LanguageProvider>
        <Router>
          <Navbar />
          <Body>
            <HeroSection />
            <Wrapper>
              <Skills />
              {/* <Experience /> */}
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
            </Wrapper>
            <Wrapper>
              <EarthCanvas />
              <Contact />
            </Wrapper>
            <Toaster position="bottom-right" richColors />
            <Footer />
            {openModal.state && (
              <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          </Body>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
