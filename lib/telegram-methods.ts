import { TelegramCategory } from './telegram-types';

export const telegramCategories: TelegramCategory[] = [
  {
    id: 'bot',
    name: 'Bot Methods',
    description: 'Core bot functionality and management',
    methods: [
      {
        name: 'getMe',
        description: 'Returns basic information about the bot',
        category: 'bot',
        parameters: [],
        returns: 'User object',
      },
      {
        name: 'logOut',
        description: 'Logs out from the cloud Bot API server',
        category: 'bot',
        parameters: [],
        returns: 'True on success',
      },
      {
        name: 'close',
        description: 'Closes the bot instance',
        category: 'bot',
        parameters: [],
        returns: 'True on success',
      },
      {
        name: 'setWebhook',
        description: 'Sets a webhook for receiving updates',
        category: 'bot',
        parameters: [
          {
            name: 'url',
            type: 'string',
            required: true,
            description: 'URL to send updates to',
          },
          {
            name: 'max_connections',
            type: 'number',
            required: false,
            description: 'Maximum allowed number of simultaneous HTTPS connections to the webhook',
          },
          {
            name: 'allowed_updates',
            type: 'Array<string>',
            required: false,
            description: 'List of update types to receive',
          },
        ],
        returns: 'True on success',
      },
      {
        name: 'deleteWebhook',
        description: 'Deletes the webhook, switching to getUpdates',
        category: 'bot',
        parameters: [],
        returns: 'True on success',
      },
      {
        name: 'getWebhookInfo',
        description: 'Returns information about the current webhook status',
        category: 'bot',
        parameters: [],
        returns: 'WebhookInfo object',
      },
    ],
  },
  {
    id: 'messages',
    name: 'Message Methods',
    description: 'Send and manage messages',
    methods: [
      {
        name: 'sendMessage',
        description: 'Sends a text message',
        category: 'messages',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
          {
            name: 'text',
            type: 'string',
            required: true,
            description: 'Text of the message to be sent',
          },
          {
            name: 'parse_mode',
            type: 'string',
            required: false,
            description: 'Mode for parsing entities in the message text',
          },
        ],
        returns: 'Message object',
      },
      {
        name: 'forwardMessage',
        description: 'Forwards a message',
        category: 'messages',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Target chat id',
          },
          {
            name: 'from_chat_id',
            type: 'number | string',
            required: true,
            description: 'Source chat id',
          },
          {
            name: 'message_id',
            type: 'number',
            required: true,
            description: 'Message identifier in the chat specified in from_chat_id',
          },
        ],
        returns: 'Message object',
      },
      {
        name: 'editMessageText',
        description: 'Edits text of a sent message',
        category: 'messages',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
          {
            name: 'message_id',
            type: 'number',
            required: true,
            description: 'Message identifier of the message to edit',
          },
          {
            name: 'text',
            type: 'string',
            required: true,
            description: 'New text of the message',
          },
        ],
        returns: 'Message object',
      },
      {
        name: 'deleteMessage',
        description: 'Deletes a message',
        category: 'messages',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
          {
            name: 'message_id',
            type: 'number',
            required: true,
            description: 'Message identifier of the message to delete',
          },
        ],
        returns: 'True on success',
      },
      {
        name: 'sendPhoto',
        description: 'Sends a photo',
        category: 'messages',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
          {
            name: 'photo',
            type: 'string | file',
            required: true,
            description: 'File identifier or URL of the photo to send',
          },
        ],
        returns: 'Message object',
      },
    ],
  },
  {
    id: 'webhooks',
    name: 'Webhook Methods',
    description: 'Handle webhooks for bot updates',
    methods: [
      {
        name: 'setWebhook',
        description: 'Sets a webhook to receive updates',
        category: 'webhooks',
        parameters: [
          {
            name: 'url',
            type: 'string',
            required: true,
            description: 'The URL where updates will be sent',
          },
          {
            name: 'max_connections',
            type: 'number',
            required: false,
            description: 'Maximum allowed number of simultaneous HTTPS connections to the webhook',
          },
          {
            name: 'allowed_updates',
            type: 'Array<string>',
            required: false,
            description: 'List of update types to receive',
          },
        ],
        returns: 'True on success',
      },
      {
        name: 'deleteWebhook',
        description: 'Deletes the webhook, switching to getUpdates',
        category: 'webhooks',
        parameters: [],
        returns: 'True on success',
      },
      {
        name: 'getWebhookInfo',
        description: 'Returns information about the current webhook status',
        category: 'webhooks',
        parameters: [],
        returns: 'WebhookInfo object',
      },
    ],
  },
  {
    id: 'payments',
    name: 'Payment Methods',
    description: 'Handle payments and invoices',
    methods: [
      {
        name: 'sendInvoice',
        description: 'Sends an invoice to the user',
        category: 'payments',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
          {
            name: 'title',
            type: 'string',
            required: true,
            description: 'Title of the invoice',
          },
          {
            name: 'description',
            type: 'string',
            required: true,
            description: 'Description of the invoice',
          },
          {
            name: 'payload',
            type: 'string',
            required: true,
            description: 'Invoice payload',
          },
          {
            name: 'provider_token',
            type: 'string',
            required: true,
            description: 'Payment provider token',
          },
        ],
        returns: 'Invoice object',
      },
      {
        name: 'answerPreCheckoutQuery',
        description: 'Answer pre-checkout query from the user',
        category: 'payments',
        parameters: [
          {
            name: 'pre_checkout_query_id',
            type: 'string',
            required: true,
            description: 'Unique identifier for the pre-checkout query',
          },
          {
            name: 'ok',
            type: 'boolean',
            required: true,
            description: 'True if the payment can be processed, false otherwise',
          },
        ],
        returns: 'True on success',
      },
      {
        name: 'sendPaymentForm',
        description: 'Send a payment form for a user to fill',
        category: 'payments',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
          {
            name: 'provider_token',
            type: 'string',
            required: true,
            description: 'Payment provider token',
          },
        ],
        returns: 'True on success',
      },
    ],
  },
  {
    id: 'users',
    name: 'User Methods',
    description: 'Manage users and user data',
    methods: [
      {
        name: 'getUserProfilePhotos',
        description: 'Returns the profile photos of a user',
        category: 'users',
        parameters: [
          {
            name: 'user_id',
            type: 'number',
            required: true,
            description: 'Unique identifier for the target user',
          },
          {
            name: 'offset',
            type: 'number',
            required: false,
            description: 'Sequential number of the first photo to return',
          },
          {
            name: 'limit',
            type: 'number',
            required: false,
            description: 'Limits the number of returned photos',
          },
        ],
        returns: 'UserProfilePhotos object',
      },
      {
        name: 'getUserProfilePhotosCount',
        description: 'Gets the number of profile photos of a user',
        category: 'users',
        parameters: [
          {
            name: 'user_id',
            type: 'number',
            required: true,
            description: 'Unique identifier for the target user',
          },
        ],
        returns: 'Number of photos (integer)',
      },
    ],
  },
];
