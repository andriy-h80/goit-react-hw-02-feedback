import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButtons } from '../FeedbackButtons/FeedbackButtons';
import { FeedbackStyled } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackStyled>
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackButtons
              key={option}
              type="button"
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackButtons>
          </li>
        );
      })}
    </FeedbackStyled>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};