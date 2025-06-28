/*Entidade vinda da API - lista de semestres*/
export interface Semestre {
  id: string;         // "2025.1"
  label: string;      // "2025 – 1º semestre"
}


/*Payload com os dados do gráfico para um semestre*/
export interface DadosOcorrencias {
  meses: string[];    // ['Jan', 'Fev', …]
  series: number[][]; // [[..],[..]...]
}