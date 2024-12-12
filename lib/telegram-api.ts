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

  async sendPhoto(params: { chat_id: number | string; photo: string | File; caption?: string; parse_mode?: string }) {
    return this.request('sendPhoto', params);
  }

  async sendAudio(params: { chat_id: number | string; audio: string | File; caption?: string; parse_mode?: string }) {
    return this.request('sendAudio', params);
  }

  async sendDocument(params: { chat_id: number | string; document: string | File; caption?: string; parse_mode?: string }) {
    return this.request('sendDocument', params);
  }

  async sendVideo(params: { chat_id: number | string; video: string | File; caption?: string; parse_mode?: string }) {
    return this.request('sendVideo', params);
  }

  async sendVideoNote(params: { chat_id: number | string; video_note: string | File; duration?: number; length?: number }) {
    return this.request('sendVideoNote', params);
  }

  async sendVoice(params: { chat_id: number | string; voice: string | File; caption?: string; parse_mode?: string }) {
    return this.request('sendVoice', params);
  }

  async sendLocation(params: { chat_id: number | string; latitude: number; longitude: number; horizontal_accuracy?: number; live_period?: number }) {
    return this.request('sendLocation', params);
  }

  async sendVenue(params: { chat_id: number | string; latitude: number; longitude: number; title: string; address: string }) {
    return this.request('sendVenue', params);
  }

  async sendContact(params: { chat_id: number | string; phone_number: string; first_name: string; last_name?: string }) {
    return this.request('sendContact', params);
  }

  async sendPoll(params: { chat_id: number | string; question: string; options: string[]; is_anonymous?: boolean; allows_multiple_answers?: boolean }) {
    return this.request('sendPoll', params);
  }

  async sendDice(params: { chat_id: number | string; emoji?: string }) {
    return this.request('sendDice', params);
  }

  async sendChatAction(params: { chat_id: number | string; action: string }) {
    return this.request('sendChatAction', params);
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
    return this.getUserProfilePhotos(params);  // Using the same function as `getUserProfilePhotos` for the count.
  }

  // Chat Member Methods
  async kickChatMember(params: { chat_id: number | string; user_id: number; until_date?: number }) {
    return this.request('kickChatMember', params);
  }

  async unbanChatMember(params: { chat_id: number | string; user_id: number }) {
    return this.request('unbanChatMember', params);
  }

  async restrictChatMember(params: { chat_id: number | string; user_id: number; until_date?: number; can_send_messages?: boolean; can_send_media_messages?: boolean; can_send_other_messages?: boolean; can_add_web_page_previews?: boolean }) {
    return this.request('restrictChatMember', params);
  }

  async promoteChatMember(params: { chat_id: number | string; user_id: number; is_anonymous?: boolean; can_manage_chat?: boolean; can_post_messages?: boolean; can_edit_messages?: boolean; can_delete_messages?: boolean; can_manage_video_chats?: boolean; can_restrict_members?: boolean; can_promote_members?: boolean; can_change_info?: boolean; can_invite_to_chat?: boolean; can_pin_messages?: boolean }) {
    return this.request('promoteChatMember', params);
  }

  async exportChatInviteLink(params: { chat_id: number | string }) {
    return this.request('exportChatInviteLink', params);
  }

  async setChatPhoto(params: { chat_id: number | string; photo: string | File }) {
    return this.request('setChatPhoto', params);
  }

  async deleteChatPhoto(params: { chat_id: number | string }) {
    return this.request('deleteChatPhoto', params);
  }

  async setChatTitle(params: { chat_id: number | string; title: string }) {
    return this.request('setChatTitle', params);
  }

  async setChatDescription(params: { chat_id: number | string; description: string }) {
    return this.request('setChatDescription', params);
  }

  async pinChatMessage(params: { chat_id: number | string; message_id: number; disable_notification?: boolean }) {
    return this.request('pinChatMessage', params);
  }

  async unpinChatMessage(params: { chat_id: number | string }) {
    return this.request('unpinChatMessage', params);
  }

  async leaveChat(params: { chat_id: number | string }) {
    return this.request('leaveChat', params);
  }

  // Webhook Methods
  async setWebhookInfo(params: { url: string; max_connections?: number; allowed_updates?: string[] }) {
    return this.setWebhook(params);  // Reuse the `setWebhook` method
  }

  async getWebhookStatus() {
    return this.getWebhookInfo();  // Reuse the `getWebhookInfo` method
  }
}
