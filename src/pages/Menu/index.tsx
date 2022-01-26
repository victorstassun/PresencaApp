import React, { useEffect, useState } from 'react';
import { Background, SideGlass, OptBox, Options, DateAndHour } from './styles';

const Menu: React.FC = () => {

     const data = new Date();
     var dayName = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
     var monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    
    
    const [dateTime, setDateTime] = useState({
    hours: data.getHours(),
    minutes: data.getMinutes(),
    seconds: data.getSeconds()
    });
    useEffect(() => {
        const timer = setInterval(() => {
        const date = new Date();
        setDateTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    
    return (
        
        <Background>
            <DateAndHour>
                <h1>
                    {dayName[data.getDay() ] + ", " + data.getDate () + " de " + monName [data.getMonth() ]   +  " de "  +     data.getFullYear () + "."}
                </h1>
                <h1 id='hora'>
                    {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
                </h1>
            </DateAndHour>
            <SideGlass>
                <OptBox>
                    <h1>PresençaApp</h1>
                    <Options>
                        <a href='/chamada'>Fazer chamada</a>
                        <a href='#'>Consultar frequência</a>
                    </Options>
                    <Options>
                        <a href='#'>Cadastrar Alunos</a>
                        <a href='#'>Editar cadastro de alunos</a>
                        <a href='#'>Remover Alunos</a>
                    </Options>
                </OptBox>
            </SideGlass>
        </Background>

        );
};

export default Menu;


