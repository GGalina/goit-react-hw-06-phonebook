import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 470px;
    background-color: #f49d08;
    margin: 0 auto;
    padding: 15px;
`;

export const FormTitle = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 600;
    display: block;
    text-align: left;
    padding-top: 10px;
`;

export const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    width: 200px;
    height: 35px;
    border-radius: 10px;
    outline: none;
    border: none;
    box-shadow: 2px 2px 7px 0px #1f1d1d;
    :focus {
        border: 2px solid #55bb55;
    }
`;

export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: block;
    padding: 15px 20px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background-color: #1f1d1d;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
    :hover {
        background-color: #ff6600;
        color: #000000;
        box-shadow: 0px 0px 7px 2px #000000;
    }
`;