import  api  from './apiService';
import { Semestre, DadosOcorrencias } from '../pages/Dashboard/model';

export const buscarSemestres = () =>
  api.get<Semestre[]>('/semestres').then(r => r.data);

export const buscarOcorrencias = (id: string) =>
  api.get<DadosOcorrencias>(`/ocorrencias/${id}`).then(r => r.data);


