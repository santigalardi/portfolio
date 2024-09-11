import { useContext } from 'react';
import styled from 'styled-components';
import LanguageContext from '../../context/LanguageContext';
import SpainFlag from '../../images/spain.png';
import UKFlag from '../../images/united-kingdom.png';

// Estilo del contenedor del slider
const SliderContainer = styled.div`
  display: flex;
  margin: 0 12px;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 16px;
  position: relative;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.button};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

// Estilo del slider interno
const Slider = styled.div`
  position: absolute;
  left: ${({ language }) => (language === 'es' ? '-5px' : 'calc(100% - 20px)')};
  width: 26px;
  height: 26px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 18px;
  transition: left 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

// Estilo de la imagen de la bandera
const FlagImage = styled.img`
  width: 30px;
  height: 30px;
`;

const SwitchLanguageButton = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <SliderContainer onClick={changeLanguage}>
      <Slider language={language}>
        {language === 'es' ? (
          <FlagImage src={SpainFlag} alt="Spanish Flag" />
        ) : (
          <FlagImage src={UKFlag} alt="UK Flag" />
        )}
      </Slider>
    </SliderContainer>
  );
};

export default SwitchLanguageButton;
