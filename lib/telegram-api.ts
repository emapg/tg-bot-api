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

  async setWebhook(params: { url: string; max_connections?: number; allowed_updates?: string[] }) {
    return this.request('setWebhook', params);
  }

  async deleteWebhook() {
    return this.request('deleteWebhook');
  }

  async getWebhookInfo() {
    return this.request('getWebhookInfo');
  }

  async logOut() {
    return this.request('logOut');
  }

  async close() {
    return this.request('close');
  }

  // Message Methods
  async sendMessage(params: { chat_id: number | string; text: string; parse_mode?: string }) {
    return this.request('sendMessage', params);
  }

  async forwardMessage(params: { chat_id: number | string; from_chat_id: number | string; message_id: number }) {
    return this.request('forwardMessage', params);
  }

  async editMessageText(params: { chat_id: number | string; message_id: number; text: string }) {
    return this.request('editMessageText', params);
  }

  async deleteMessage(params: { chat_id: number | string; message_id: number }) {
    return this.request('deleteMessage', params);
  }

  async sendPhoto(params: { chat_id: number | string; photo: string | File }) {
    return this.request('sendPhoto', params);
  }

  // Payment Methods
  async sendInvoice(params: {
    chat_id: number | string;
    title: string;
    description: string;
    payload: string;
    provider_token: string;
    start_parameter?: string;
    currency?: string;
    prices: any[];
    max_tip_amount?: number;
    suggested_tip_amounts?: number[];
  }) {
    return this.request('sendInvoice', params);
  }

  async answerPreCheckoutQuery(params: { pre_checkout_query_id: string; ok: boolean }) {
    return this.request('answerPreCheckoutQuery', params);
  }

  async sendPaymentForm(params: { chat_id: number | string; provider_token: string }) {
    return this.request('sendPaymentForm', params);
  }

  // User Methods
  async getUserProfilePhotos(params: { user_id: number; offset?: number; limit?: number }) {
    return this.request('getUserProfilePhotos', params);
  }

  async getUserProfilePhotosCount(params: { user_id: number }) {
    return this.request('getUserProfilePhotos', params);
  }

  // Webhook Methods
  async setWebhookInfo(params: { url: string; max_connections?: number; allowed_updates?: string[] }) {
    return this.request('setWebhook', params);
  }

  async deleteWebhook() {
    return this.request('deleteWebhook');
  }

  async getWebhookStatus() {
    return this.request('getWebhookInfo');
  }

  // Additional Methods as needed...
}
