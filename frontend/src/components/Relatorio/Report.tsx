import React, { useState } from 'react';
import { reportService } from '../../services/reportService';

interface ReportCardProps {
  onGenerateReport?: (year: number, month: number, dataType: string) => void;
}

const ReportCard: React.FC<ReportCardProps> = ({ onGenerateReport }) => {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const [selectedDataType, setSelectedDataType] = useState<string>('vendas');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);
  const months = [
    { value: 1, label: 'Janeiro' },
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'Março' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Maio' },
    { value: 6, label: 'Junho' },
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' },
    { value: 12, label: 'Dezembro' },
  ];

  const dataTypes = [
    { value: 'Domesticos', label: 'Domesticos' },
    { value: 'Silvestres', label: 'Silvestres' },
    { value: 'Pessoas', label: 'Pessoas' },
  ];

  const handleGenerateReport = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Primeiro, buscar os dados do relatório
      const reportData = await reportService.getReportData({
        year: selectedYear,
        month: selectedMonth,
        type: selectedDataType
      });

      // Depois, gerar o PDF
      const pdfData = await reportService.generateReport({
        year: selectedYear,
        month: selectedMonth,
        type: selectedDataType
      });

      // Se houver um callback personalizado, chamá-lo
      if (onGenerateReport) {
        onGenerateReport(selectedYear, selectedMonth, selectedDataType);
      }

      // Aqui você pode adicionar lógica para baixar ou exibir o PDF
      // Por exemplo, abrir em uma nova aba ou iniciar download
      if (pdfData.url) {
        window.open(pdfData.url, '_blank');
      }

    } catch (err) {
      setError('Erro ao gerar relatório. Por favor, tente novamente.');
      console.error('Erro ao gerar relatório:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-[1200px] h-[150px]">
      <p className="text-2xl font-bold mb-2 px-3 pt-3">Gerar Relatório</p>
        <div className="flex items-center justify-between gap-4 px-4">
  {/* Ano */}
  <div className="flex items-center text-xl gap-2">
    <label className="font-semibold">Ano:</label>
    <select
      value={selectedYear}
      onChange={(e) => setSelectedYear(Number(e.target.value))}
      className="border rounded px-3 py-1"
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </div>

  {/* Mês */}
  <div className="flex items-center text-xl gap-2">
    <label className="font-semibold">Mês:</label>
    <select
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(Number(e.target.value))}
      className="border rounded px-3 py-1"
    >
      {months.map((month) => (
        <option key={month.value} value={month.value}>
          {month.label}
        </option>
      ))}
    </select>
  </div>

  {/* Tipo */}
  <div className="flex items-center text-xl gap-2">
    <label className="font-semibold">Tipo:</label>
    <select
      value={selectedDataType}
      onChange={(e) => setSelectedDataType(e.target.value)}
      className="border rounded px-3 py-1"
    >
      {dataTypes.map((type) => (
        <option key={type.value} value={type.value}>
          {type.label}
        </option>
      ))}
    </select>
  </div>

  {/* Botão */}
  <button
    onClick={handleGenerateReport}
    disabled={isLoading}
    className="bg-slate-900 hover:bg-slate-800 text-white font-semibold h-[50px] w-[150px] px-6 py-2 rounded"
  >
    {isLoading ? 'Gerando...' : 'Gerar relatório'}
  </button>
</div>    
    </div>
  );
};

export default ReportCard;