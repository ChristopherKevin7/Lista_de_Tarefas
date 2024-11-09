import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5007/api', // URL da API
});

export const getTarefas = () => api.get('/Tarefas');
export const getTarefaById = (id) => api.get(`/Tarefas/${id}`);
export const addTarefa = (tarefa) => api.post('/Tarefas', tarefa);
export const updateTarefa = (id, tarefa) => api.put(`/Tarefas/${id}`, tarefa);
export const deleteTarefa = (id) => api.delete(`/Tarefas/${id}`);

export default api;
