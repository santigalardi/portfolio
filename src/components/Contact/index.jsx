import { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import LanguageContext from '../../context/LanguageContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  margin-bottom: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.button};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Contact = () => {
  const form = useRef();
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    user_email: '',
    user_name: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_y7plq3j',
        'template_fu5x1pa',
        form.current,
        'jCJg9M8KSPrfJlvv7'
      )
      .then(
        () => {
          toast.success('Email enviado con éxito!');
          form.current.reset();
          setFormData({
            user_email: '',
            user_name: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          toast.error('Error al enviar el email: ' + error.text);
        }
      );
  };

  const isFormValid =
    formData.user_email &&
    formData.user_name &&
    formData.subject &&
    formData.message;

  return (
    <Container id="contact">
      <Wrapper>
        <Title>{language === 'es' ? 'Contacto' : 'Contact'}</Title>
        <Desc>
          {language === 'es'
            ? '¡No dudes en contactarme para cualquier consulta u oportunidad! 💬'
            : 'Feel free to reach out to me for any inquiries or opportunities! 💬'}
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>
            {language === 'es' ? 'Envíame un correo 🚀' : 'Send me an Email 🚀'}
          </ContactTitle>
          <ContactInput
            placeholder={language === 'es' ? 'Tu Email' : 'Your Email'}
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <ContactInput
            placeholder={language === 'es' ? 'Tu Nombre' : 'Your Name'}
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <ContactInput
            placeholder={language === 'es' ? 'Asunto' : 'Subject'}
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <ContactInputMessage
            placeholder={language === 'es' ? 'Tu Mensaje' : 'Your Message'}
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <ContactButton
            type="submit"
            value={language === 'es' ? 'Enviar' : 'Send'}
            disabled={!isFormValid}
          />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
