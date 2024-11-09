import React, { useEffect, useState } from 'react';
import { getTarefas, deleteTarefa, updateTarefa } from '../Api';
import TarefaForm from './TarefaForm';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function TarefasList() {
    const [tarefas, setTarefas] = useState([]);
    const [selectedTarefa, setSelectedTarefa] = useState(null);


    useEffect(() => {
        fetchTarefas();
    }, []);

    const fetchTarefas = async () => {
        const response = await getTarefas();
        setTarefas(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTarefa(id);
        fetchTarefas();
    };

    const handleEdit = (tarefa) => {
        setSelectedTarefa(tarefa);
    };

    const handleToggleConcluida = async (tarefa) => {
        const updatedTarefa = { ...tarefa, concluida: !tarefa.concluida };

        try {
            // Atualizando a tarefa
            await updateTarefa(tarefa.id, updatedTarefa);
            // Atualizando a lista após a alteração
            fetchTarefas();
        } catch (error) {
            console.error("Erro ao atualizar status de concluída:", error);
        }
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <TarefaForm tarefa={selectedTarefa} onFormSubmit={fetchTarefas} />
            <ul>
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id} className="tarefa-item">
                        <div className="tarefa-info">
                            <strong>{tarefa.titulo}</strong> - {tarefa.descricao}
                        </div>
                        <div className="tarefa-actions">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={tarefa.concluida}
                                    onChange={() => handleToggleConcluida(tarefa)}
                                />
                                Concluída
                            </label>
                            <button className="edit" onClick={() => handleEdit(tarefa)}>
                                <FaEdit /> Editar
                            </button>
                            <button className="delete" onClick={() => handleDelete(tarefa.id)}>
                                <FaTrashAlt /> Deletar
                            </button>

                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default TarefasList;
