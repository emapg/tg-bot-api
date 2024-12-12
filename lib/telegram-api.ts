const BASE_URL = 'https://api.telegram.org/bot';

export class TelegramAPI {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  async request(method: string, params: Record<string, any> = {}) {
    const url = `${BASE_URL}${this.token}/${method}`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      if (!data.ok) {
        throw new Error(data.description || 'Unknown error');
      }

      return data.result;
    } catch (error) {
      throw error;
    }
  }

  // Bot Methods
  async getMe() {
    return this.request('getMe');
  }

  async sendMessage(params: { chat_id: number | string; text: string }) {
    return this.request('sendMessage', params);
  }

  // Add more method implementations as needed
}