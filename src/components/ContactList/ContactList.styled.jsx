import styled from 'styled-components';

export const List = styled.ul`
    list-style-type: '☎';
    color: #ffffff;
`;

export const ListItem = styled.li`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    padding: 10px;
`;

export const DeleteBtn = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: inline-block;
    padding: 10px 15px;
    margin-left: 15px;
    border-radius: 10px;
    background-color: #ff6600;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    right: 25px;
    :hover {
        background-color: #fe1101;
    }
`;