import React from 'react';
import { TitleStyled } from './Title.styled';
import PropTypes from 'prop-types';

export const Title = ({ title }) => {
  return <TitleStyled>{title}</TitleStyled>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};