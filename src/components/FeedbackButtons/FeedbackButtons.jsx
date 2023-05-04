import React from 'react';
import { FeedbackButtonsStyled } from './FeedbackButtons.styled';
import PropTypes from 'prop-types';

export const FeedbackButtons = ({
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <FeedbackButtonsStyled type={type} onClick={onClick}>
      {children}
    </FeedbackButtonsStyled>
  );
};

FeedbackButtons.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};