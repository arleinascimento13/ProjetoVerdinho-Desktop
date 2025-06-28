import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface VoltarButtonProps {
  to: string;
}

export function VoltarButton({ to }: VoltarButtonProps) {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleVoltar}
      className="flex items-center gap-1 px-3 py-1 text-sm font-semibold text-[#0F1E32]"
    >
      <ArrowLeft size={20} />
      <span>Voltar</span>
    </button>
  );
}
