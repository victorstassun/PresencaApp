import React, { useEffect, useState } from 'react';
import { Background, SideGlass, OptBox, Options, DateAndHour, PopupModal } from './styles';
import Cadastro from '../../components/Popup/Cadastrar';
import { errorfulNotify } from '../../hooks/SystemToasts';
import api from '../../services/api';

interface IAlunos {
  matricula: number;
  nome: string;
  cpf: number;
  frequencia: boolean;
}

interface IChamada {
  nome: string;
  presenca: boolean;
}


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

    const [alunos, setAlunos] = useState<IAlunos[]>([]);

    const handleAlunos = async () => {
        try {
            await api.get<IAlunos[]>(`alunos`)
                .then((response => {
                    setAlunos(response.data); 
                })).catch(() => errorfulNotify("Não foi possível encontrar os alunos."));
            } catch(e) {
        console.log(e);
        }
    }

    useEffect(() => {
        handleAlunos();
        alunos.map(res => setChamada([{nome: res.nome, presenca: false}]));
    },[]);

    const [chamada, setChamada] = useState<IChamada[]>([]);
    
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
                        <PopupModal closeOnEscape trigger={<a>Cadastrar</a>} modal>
                            {(close: any) => (
                                <Cadastro atualiza={handleAlunos} fechar={close} />
                            )}
                        </PopupModal>
                        <a href='#'>Editar cadastro de alunos</a>
                        <a href='#'>Remover Alunos</a>
                    </Options>
                </OptBox>
            </SideGlass>
        </Background>

        );
};

export default Menu;


