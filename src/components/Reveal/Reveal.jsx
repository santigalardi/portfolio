import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const RevealWrapper = styled(motion.div)`
  width: auto;
`;

const Reveal = ({ children, threshold = 0.2, ...props }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const isInView =
        rect.top + rect.height * threshold <= windowHeight && rect.bottom >= 0;
      setInView(isInView);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <RevealWrapper
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      {...props}
    >
      {children}
    </RevealWrapper>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  threshold: PropTypes.number,
};

export default Reveal;
