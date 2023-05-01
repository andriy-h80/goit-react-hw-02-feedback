import styled from '@emotion/styled';

export const FeedbackBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    color: green;
    font-weight: bold;
    margin-right: 10px;
`;

export const FeedbackNeutral = styled.span`
    color: blue;
    font-weight: bold;
    margin-right: 10px;
`;

export const FeedbackBad = styled.span`
    color: red;
    font-weight: bold;
    margin-right: 10px;
`;
