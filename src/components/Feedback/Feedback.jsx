import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { FeedbackBox, FeedbackTitle, FeedbackButtons, Button, Statistics, FeedbackGood, FeedbackNeutral, FeedbackBad, FeedbackTotal, PositiveFeedbackPercentage } from './Feedback.styled';
// import { NotificationMessage } from '../Notification/Notification';

class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    // clickBtnGood = () => {
    //     this.setState(prevState => {
    //         return {
    //             good: prevState.good + 1,
    //         };
    //     });
    // };

    // clickBtnNeutral = () => {
    //     this.setState(prevState => {
    //         return {
    //             neutral: prevState.neutral + 1,
    //         };
    //     });
    // };

    // clickBtnBad = () => {
    //     this.setState(prevState => {
    //         return {
    //             bad: prevState.bad + 1,
    //         };
    //     });
    // };

    clickBtn = (event) => {
        const btnName = event.target.textContent;
        this.setState(prevState => ({
        [btnName.toLowerCase()]: prevState[btnName.toLowerCase()] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        if (total === 0) {
            return 0;
          }
        return Math.round((good / total) * 100);
    };
    

    render() {
        return (
        <FeedbackBox>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
            <FeedbackButtons>
                <Button type='button' onClick={this.clickBtn}>Good</Button>
                <Button type='button' onClick={this.clickBtn}>Neutral</Button>
                <Button type='button' onClick={this.clickBtn}>Bad</Button>
            </FeedbackButtons>
            {/* <NotificationMessage /> */}
        <Statistics>Statistics</Statistics>
            <FeedbackGood>Good: {this.state.good}</FeedbackGood>
            <FeedbackNeutral>Neutral: {this.state.neutral}</FeedbackNeutral>
            <FeedbackBad>Bad: {this.state.bad}</FeedbackBad>
            <FeedbackTotal>Total: {this.countTotalFeedback()}</FeedbackTotal>
            <PositiveFeedbackPercentage>Positive feedback: {this.countPositiveFeedbackPercentage()}%</PositiveFeedbackPercentage>
        </FeedbackBox>    
        );
    }
}

// Feedback.propTypes = {
//     clickBtn: PropTypes.func.isRequired,
//     clickBtnGood: PropTypes.func.isRequired,
//     clickBtnNeutral: PropTypes.func.isRequired,
//     clickBtnBad: PropTypes.func.isRequired,
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired
// };

export default Feedback;