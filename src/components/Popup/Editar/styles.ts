import styled from "styled-components";
import { shade } from 'polished';

import Close from "../../../assets/closex.svg";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0vw 0vw 10vw 100vw rgba(0, 0, 0, 0.5);
    border-radius: 0.8vh;
    overflow: hidden;
`;

export const PopUp = styled.div`
    width: 24vw;
    height: 60vh;
    background: rgba(255, 255, 255, 0.87);
    border-radius: 0.8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; 

    #enviar {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 2vh;

        button {
            padding: 1.5vh;
            background-color: #65B46E;
            border: 0;
            border-radius: 0.4vh;
            color: #fff;
            font-size: 3vh;
            margin-left: 16vw;

            &:hover {
                background-color: ${shade(0.03, '#65B46E')};
            }
        }

        p {
            margin-left: 2vw;
        }
    }
`;

export const Scroll = styled.div`
    width: 20vw;
    height: 44vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2vh;

        label {
            font-size: 3vh;
            color: #333;
            margin-bottom: 0.2vh;
        }

        input {
            width: 14vw;
            height: 4vh;
            background-color: #f2f2f2;
            border: 0.1vh solid #333;
            border-radius: 0.4vh;
            padding: 0.2vh;
            font-size: 2.1vh;
        }
    }
`;

export const Title = styled.div`
    width: 24vw;
    padding: 1vh;
    background: #7A706E;
    display: flex;
    flex-direction: row;

    h1 {
        color: #fff;
        font-size: 4vh;
        margin-left: 0.5vw;
    }

    span {
        background-image: url(${Close});
        border: 0;
        background-color: transparent;
        width: 4vh;
        height: 4vh;
        margin: 0.8vh 0 0 21vw;
        position: absolute;
        background-size: cover;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }

        &:active {
            opacity: 0.8;
        }
    }
`;