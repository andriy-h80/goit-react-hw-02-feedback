import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { FeedbackBox, FeedbackTitle, FeedbackButtons, Button, Statistics, FeedbackGood, FeedbackNeutral, FeedbackBad } from './Feedback.styled';

class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    clickBtnGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    };

    clickBtnNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    };

    clickBtnBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
    };

    render() {
        return (
        <FeedbackBox>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
            <FeedbackButtons>
                <Button type='button' onClick={this.clickBtnGood}>Good</Button>
                <Button type='button' onClick={this.clickBtnNeutral}>Neutral</Button>
                <Button type='button' onClick={this.clickBtnBad}>Bad</Button>
            </FeedbackButtons>
        <Statistics>Statistics</Statistics>
            <FeedbackGood>Good: {this.state.good}</FeedbackGood>
            <FeedbackNeutral>Neutral: {this.state.neutral}</FeedbackNeutral>
            <FeedbackBad>Bad: {this.state.bad}</FeedbackBad>

        </FeedbackBox>    
        );
    }
}

// Feedback.propTypes = {
//     clickBtnGood: PropTypes.func.isRequired,
//     clickBtnNeutral: PropTypes.func.isRequired,
//     clickBtnBad: PropTypes.func.isRequired,
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired
// };

export default Feedback;