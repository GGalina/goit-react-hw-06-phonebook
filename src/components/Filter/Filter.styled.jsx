import styled from 'styled-components';

export const FilterArea = styled.div`
    padding-left: 15px;
`;

export const FilterDesc = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #ff6600;
`;

export const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    width: 200px;
    height: 35px;
    border-radius: 10px;
    outline: none;
    border: none;
    :focus {
        border: 2px solid #55bb55;
    }
`;