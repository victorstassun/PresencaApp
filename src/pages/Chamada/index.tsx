import React, { useEffect } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Background, ListContainer, List, ConfirmBox} from './styles';

const Menu: React.FC = () => {

    return (
        <Background>
            <a href='/menu'>
                <IoIosArrowRoundBack />
            </a>
            <ListContainer>
                <h1>Lista de chamada</h1>
                <List>
                    <ul id="col">
                        <li>Nome do Aluno</li>
                        <li>Presente</li>
                        <li>Não Presente</li>
                        <li>Falta justificada</li>
                    </ul>
                    <ul id="col">
                        <li>Richarlisson de Souza Antunes Cabral</li>
                        <li>
                            <input type="checkbox"></input>
                        </li>
                        <li>
                            <input type="checkbox"></input>
                        </li>
                        <li>
                            <input type="checkbox"></input>
                        </li>
                    </ul>
                    <ul id="col">
                        <li>Zenilton Figueiredo Pinto</li>
                        <li>
                            <input type="checkbox"></input>
                        </li>
                        <li>
                            <input type="checkbox"></input>
                        </li>
                        <li>
                            <input type="checkbox"></input>
                        </li>
                    </ul>
                </List>
                <ConfirmBox>
                    Confirmar
                </ConfirmBox>
            </ListContainer>
        </Background>
    );
};

export default Menu;