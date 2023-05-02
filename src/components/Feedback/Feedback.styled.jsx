import styled from '@emotion/styled';

export const FeedbackBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eeea9e;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
`;

export const FeedbackTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
`;
  
export const FeedbackButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s;

    :hover {
        background-color: #0056b3;
    }
`;

export const Statistics = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const FeedbackGood = styled.span`
    font-size: 20px;
    color: green;
    font-weight: bold;
`;

export const FeedbackNeutral = styled.span`
    font-size: 20px;
    color: blue;
    font-weight: bold;
`;

export const FeedbackBad = styled.span`
    font-size: 20px;
    color: red;
    font-weight: bold;
`;

export const FeedbackTotal = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
`;

export const PositiveFeedbackPercentage = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
`;
