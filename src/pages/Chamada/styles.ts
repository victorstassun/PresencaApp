import styled from "styled-components";

import Classe from '../../assets/classBackground.jpeg';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${Classe});
    background-size: cover;
    position: absolute;
    overflow: hidden;

    a {
        width: 8vw;
        height: 8vh;
        margin-left: -3vw;
        text-decoration: none;
        position: absolute;

        svg {
            width: 14vw;
            height: 10vh;
            color: white;
        }
    }
`;

export const ListContainer = styled.div`
    width: 80vw;
    height: 85vh;
    margin: 12.5vh 10vw;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        margin-top: 3vh;
        font-family: 'Cabin Sketch', cursive;
        color: white;
    }
`;

export const List = styled.ul`
    width: 90%;
    height: 90vh;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 1vh;
    margin: 5vh 0 7.5vh 0;
    color: white;

    #col {
        width: auto;
        height: 5vh;
        display: flex;
        flex-direction: row;

        &:nth-child(1) {
            &::after {
                content: '';
                width: 70vw;
                height: 0.2vh;
                margin: 4.75vh 0 0 1vw;
                background: white;
                color: white;
                position: absolute;
            }
        }

        li {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;

            &:nth-child(1) {
                width: 75%;
                margin-left: 2vw;
                display: block;
                padding-top: 0.5vh;
            }

            &:nth-child(2), &:nth-child(3), &:nth-child(4) {
                width: 17.50%;
            }
        }
    }
`;

export const ConfirmBox = styled.button`
    width: 8vw;
    height: 6vh;
    border: 0;
    background: transparent;
    color: #98FB98;
    font-family: 'Cabin Sketch', cursive;
    margin: 0 0 4vh 60vw;

    &:hover {
        border-bottom : 0.5vh solid #98FB98;
    }

`;