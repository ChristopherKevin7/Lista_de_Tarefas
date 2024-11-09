import React, { useState, useEffect } from 'react';
import { addTarefa, updateTarefa } from '../Api'; 

function TarefaForm({ tarefa, onFormSubmit }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [concluida, setConcluida] = useState(tarefa ? tarefa.concluida : false);


  // Preenche os campos do formulário com os dados da tarefa quando for passado um objeto tarefa
  useEffect(() => {
    if (tarefa) {
      setTitulo(tarefa.titulo);
      setDescricao(tarefa.descricao);
    } else {
      setTitulo('');
      setDescricao('');
    }
  }, [tarefa]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const tarefaData = {
      id: tarefa?.id,
      titulo,
      descricao,
      concluida,
    };
  
    try {
      if (tarefa) {
        // Atualizar tarefa (enviar id)
        await updateTarefa(tarefa.id, tarefaData);
        console.log('Tarefa atualizada com sucesso!');
      } else {
        // Adicionar nova tarefa (não envia id)
        await addTarefa(tarefaData);
        console.log('Nova tarefa adicionada com sucesso!');
      }
  
      // Chama a função de callback para atualizar a lista de tarefas
      onFormSubmit();
  
      // Limpa os campos após a submissão
      setTitulo('');
      setDescricao('');
      setConcluida(false); // Reseta o campo de concluída
    } catch (error) {
      console.error('Erro ao salvar tarefa:', error.response?.data || error.message);
    }
  };  
  

  return (
    <div>
      <h2>{tarefa ? 'Editar Tarefa' : 'Adicionar Nova Tarefa'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
          required
        />
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição"
        />
        <button className="submit" type="submit">{tarefa ? 'Atualizar' : 'Adicionar'}</button>
      </form>
    </div>
  );
}

export default TarefaForm;
