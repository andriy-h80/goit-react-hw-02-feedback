import styled from '@emotion/styled';

export const FeedbackButtonsStyled = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 2px;    

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