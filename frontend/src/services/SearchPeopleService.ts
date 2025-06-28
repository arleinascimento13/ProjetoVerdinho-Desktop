import api from './apiService';

export interface Animal {
  id: string;
  nome: string;
  especie: string;
  peso: string;
  imagem: string;
}

export interface Person {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  endereco: string;
  imagem: string;
  multas: string;
  animais: Animal[];
}

export const searchPeopleService = {
  async getPersonById(id: string): Promise<Person> { 
    try {
      const response = await api.get<Person>(`/pessoa/${id}?secret-key=boladeraxixe`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar pessoa:', error);
      throw error;
    }
  },

  async getPersonAnimals(personId: string): Promise<Animal[]> {
    try {
      const response = await api.get<Animal[]>(`/pessoa/${personId}/animais?secret-key=boladeraxixe`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar animais da pessoa:', error);
      throw error;
    }
  },

  async getAllPeople(): Promise<Person[]> {
    try {
      const response = await api.get<Person[]>('/pessoa?secret-key=boladeraxixe');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar pessoas:', error);
      throw error;
    }
  }
};
