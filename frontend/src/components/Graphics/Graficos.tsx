import { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { SemestreDto, OcorrenciasDto, mockSemestres, mockOcorrencias } from './mockData';

export default function GraficosCard() {
  const [semestres, setSemestres] = useState<SemestreDto[]>([]);
  const [selecionado, setSelecionado] = useState<string>('');
  const [ocorrencias, setOcorrencias] = useState<OcorrenciasDto | null>(null);

  /* 1. carrega opções de semestre na montagem */
  useEffect(() => {
    setSemestres(mockSemestres);
    if (mockSemestres.length) setSelecionado(mockSemestres[0].id);
  }, []);

  /* 2. sempre que selecionado' mudar, busca dados do gráfico */
  useEffect(() => {
    if (!selecionado) return;
    setOcorrencias(mockOcorrencias[selecionado]);
  }, [selecionado]);

  return (
    <div className="h-[400px] w-[1200px]  flex flex-col bg-white rounded-lg p-4">
      {/* cabeçalho */}
      <div className="flex items-baseline gap-3 mb-4">
        <p className="text-3xl font-bold">Ocorrências</p>
        <select
          className="border rounded p-2"
          value={selecionado}
          onChange={(e) => setSelecionado(e.target.value)}
        >
          {semestres.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* gráfico */}
      {ocorrencias ? (
        <BarChart
          height={280}
          xAxis={[{ data: ocorrencias.meses }]}
          series={[
            { data: ocorrencias.series[0], label: 'Domésticos' },
            { data: ocorrencias.series[1], label: 'Silvestres' },
            { data: ocorrencias.series[2], label: 'Ocorrências' },
          ]}
          borderRadius={8}
        />
      ) : (
        <p className="text-gray-500">Carregando dados…</p>
      )}
    </div>
  );
}
