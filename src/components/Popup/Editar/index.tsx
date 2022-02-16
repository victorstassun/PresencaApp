import React, { useEffect, useState } from 'react';

import { Container, PopUp, Title, Scroll } from './styles';

import { errorfulNotify, successfulNotify } from '../../../hooks/SystemToasts';

import api from '../../../services/api';

interface IAluno {
  matricula: number;
  nome: string;
  cpf: number;
}

interface IPopupVerbaEditar {
    fechar: () => void;
    atualiza: () => void;
    matricula: number;
  }

let dados = {matricula: 0, nome: '', cpf: 0};

const Editar: React.FC<IPopupVerbaEditar> = ({ fechar, atualiza, matricula }) => {

    const [aluno, setAluno] = useState<IAluno>();
  

    async function handleAlunos() {
        try {
          await api.get<IAluno>(`alunos/${matricula}`)
          .then((response => {
            setAluno(response.data); 
          })).catch(() => errorfulNotify(`Não foi possível encontrar o aluno ${matricula}.`));
        } catch(e) {
          console.log(e);
        }
      }
    
      useEffect(() => {
        handleAlunos();
      }, [matricula]);

      async function editarAluno() {
        try {
          await api.put<IAluno>(`alunos/${matricula}`, dados)
          .then(() => {
            successfulNotify(`Aluno ${dados.nome} atualizado com sucesso!`)
          }).catch(() => errorfulNotify(`Não foi possível cadastrar o aluno ${dados.nome}.`));
        } catch(e) {
          console.log(e);
        }
    
        dados = {matricula: 0, nome: '', cpf: 0};
        
        atualiza();
      }

      const buscaAluno= (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event) {
          dados.nome = event.target.value;
        }
      }
    
      const pegaNome = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event) {
          dados.nome = event.target.value;
        } else {
          dados.nome = aluno ? aluno.nome : '';
        }
      }
    
      const pegaCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event) {
          dados.cpf = Number(event.target.value);
        } else {
          dados.cpf = aluno ? aluno.cpf : 0;
        }
      }

  return (
    <Container>
      <PopUp>
        <Title>
          <h1>Editar aluno</h1>
          <span onClick={() => fechar()} />
        </Title>
        <Scroll>
          <div>
            <label>Matrícula:</label>
            <input type="number" id="matricula" defaultValue={aluno?.matricula} onChange={buscaAluno} />
          </div>                 
          <div>
            <label>Nome:</label>
            <input type="text" id="nome" defaultValue={aluno?.nome} onChange={pegaNome} />
          </div>
          <div>
            <label>CPF:</label>
            <input type="text" id="cpf" defaultValue={aluno?.cpf} onChange={pegaCpf} />
          </div>                        
        </Scroll>
        <div id="enviar">
          <button type='submit' onClick={() => {editarAluno(); fechar();}}>Enviar</button>
        </div>                          
      </PopUp>
    </Container>
  );
}

export default Editar;