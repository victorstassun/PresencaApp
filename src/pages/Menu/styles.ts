import styled from "styled-components";
import Classe from '../../assets/classBackground.jpeg';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${Classe});
    background-size: cover;
    position: absolute;
    overflow: hidden;
`;

export const DateAndHour = styled.div`
    width: 40vw;
    height: 10vh;
    float: right;
    padding: 2vh;
    margin-right: -12vw;    
    display: flex;
    flex-direction: column;
     
    h1 {
        font-size: 3.4vh;
        color: white;   

        &:nth-child(2) {
            font-size: 4vh;
            margin: 4vh 0 0 16vw;
        }
    }
    
`;

export const SideGlass = styled.div`
    width: 100vw;
    height: 150vh;
    transform: rotate(105deg);
    margin-left: -40vw;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-itens: center;
`;

export const OptBox = styled.div`
    width: 25vw;
    height: 60vh;
    position: absolute;
    transform: rotate(-105deg);
    margin: 12vw 0 0 50vh;

    h1 {
        margin: 0 0 7vh -2vh;
        positiom: absolute;
        color: white;
    }
`;

export const Options = styled.div`
    margin-top: 3vh;
    display: flex;
    flex-direction: column; 

    a {
        margin-bottom: 10px;
        text-decoration: none;
        color: white;

        &:hover {
            border-left: 4px solid;
            padding-left: 1vh;
        }
    }
`;