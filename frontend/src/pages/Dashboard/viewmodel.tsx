import { useEffect, useState } from 'react';
import { buscarSemestres, buscarOcorrencias } from '../../services/ocorrenciasService';
import { Semestre, DadosOcorrencias } from './model';

export const useOcorrenciasVM = () => {
  const [semestres, setSemestres] = useState<Semestre[]>([]);
  const [selecionado, setSelecionado] = useState('');
  const [dados, setDados] = useState<DadosOcorrencias | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  /* carrega semestres na montagem */
  useEffect(() => {
    (async () => {
      try {
        const lista = await buscarSemestres();
        setSemestres(lista);
        if (lista[0]) setSelecionado(lista[0].id);
      } catch {
        setErro('Falha ao buscar semestres');
      }
    })();
  }, []);

  /* carrega ocorrências quando semestre muda */
  useEffect(() => {
    if (!selecionado) return;
    (async () => {
      setLoading(true);
      try {
        const resp = await buscarOcorrencias(selecionado);
        setDados(resp);
      } catch {
        setErro('Falha ao buscar ocorrências');
      } finally {
        setLoading(false);
      }
    })();
  }, [selecionado]);

  return { semestres, selecionado, setSelecionado, dados, loading, erro };
};
