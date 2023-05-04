import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Title/Title';
import { SectionStyled } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
      <SectionStyled>
        <Title title={title} />
        {children}
      </SectionStyled>
    );
};
  
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};
