import axios from 'axios';

interface ReportData {
  year: number;
  month: number;
  type: string;
}

export const reportService = {
  async generateReport(data: ReportData) {
    try {
      const response = await axios.post('/api/reports/generate', data);
      return response.data;
    } catch (error) {
      console.error('Erro ao gerar relatório:', error);
      throw error;
    }
  },

  async getReportData(data: ReportData) {
    try {
      const response = await axios.get('/api/reports/data', { params: data });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados do relatório:', error);
      throw error;
    }
  }
}; 