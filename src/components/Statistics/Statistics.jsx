import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsStyled, FeedbackGoodStyled, FeedbackNeutralStyled, FeedbackBadStyled, FeedbackTotalStyled, PositiveFeedbackPercentageStyled } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
    good,
    neutral,
    bad,
    total = 0,
    positivePercentage = 0,
  }) => {
    return total ? (
        <StatisticsStyled>
            <FeedbackGoodStyled>Good: {good}</FeedbackGoodStyled>
            <FeedbackNeutralStyled>Neutral: {neutral}</FeedbackNeutralStyled>
            <FeedbackBadStyled>Bad: {bad}</FeedbackBadStyled>
            <FeedbackTotalStyled>Total: {total}</FeedbackTotalStyled>
            <PositiveFeedbackPercentageStyled>Positive feedback: {positivePercentage}%</PositiveFeedbackPercentageStyled>
        </StatisticsStyled>
    ) : (
      <Notification message="There is no feedback" />
    );
  };
  
  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

export default Statistics;
