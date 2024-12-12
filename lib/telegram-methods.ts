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
    ],
  },
  // Add more categories and methods...
];