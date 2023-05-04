import React from 'react';
import { ContainerStyled, ContainerBox } from './Container.styled';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return (
    <ContainerStyled>
      <ContainerBox>
      {children}
      </ContainerBox>
    </ContainerStyled>
  );
};

Container.propTypes = {
   children: PropTypes.any.isRequired,
};