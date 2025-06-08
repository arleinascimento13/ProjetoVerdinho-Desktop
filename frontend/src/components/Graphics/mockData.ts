export interface SemestreDto {
  id: string;
  label: string;
}

export interface OcorrenciasDto {
  meses: string[];
  series: number[][];
}

export const mockSemestres: SemestreDto[] = [
  { id: '2023-1', label: '2023.1' },
  { id: '2023-2', label: '2023.2' },
  { id: '2024-1', label: '2024.1' },
];

export const mockOcorrencias: Record<string, OcorrenciasDto> = {
  '2023-1': {
    meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    series: [
      [4, 3, 5, 2, 6, 4], 
      [2, 1, 3, 2, 4, 3],
      [1, 2, 1, 3, 2, 1], 
    ],
  },
  '2023-2': {
    meses: ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    series: [
      [5, 4, 6, 3, 5, 4], 
      [3, 2, 4, 3, 2, 3], 
      [2, 1, 2, 1, 3, 2], 
    ],
  },
  '2024-1': {
    meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    series: [
      [6, 5, 7, 4, 6, 5], 
      [4, 3, 5, 4, 3, 4], 
      [3, 2, 3, 2, 4, 3], 
    ],
  },
}; 