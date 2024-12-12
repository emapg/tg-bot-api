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
  {
    id: 'groups',
    name: 'Group Methods',
    description: 'Manage group chats and their settings',
    methods: [
      {
        name: 'getChatMembersCount',
        description: 'Gets the number of members in a group chat',
        category: 'groups',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
        ],
        returns: 'Integer representing the number of members',
      },
      {
        name: 'banChatMember',
        description: 'Bans a user from a group chat',
        category: 'groups',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
          {
            name: 'user_id',
            type: 'number',
            required: true,
            description: 'Unique identifier for the target user',
          },
          {
            name: 'until_date',
            type: 'number',
            required: false,
            description: 'Date when the user will be unbanned (Unix timestamp)',
          },
        ],
        returns: 'True on success',
      },
      {
        name: 'unbanChatMember',
        description: 'Unbans a user from a group chat',
        category: 'groups',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
          {
            name: 'user_id',
            type: 'number',
            required: true,
            description: 'Unique identifier for the target user',
          },
        ],
        returns: 'True on success',
      },
    ],
  },
  {
    id: 'stickers',
    name: 'Sticker Methods',
    description: 'Send and manage stickers',
    methods: [
      {
        name: 'sendSticker',
        description: 'Sends a sticker',
        category: 'stickers',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
          {
            name: 'sticker',
            type: 'string',
            required: true,
            description: 'File identifier or URL of the sticker to send',
          },
        ],
        returns: 'Message object',
      },
      {
        name: 'getStickerSet',
        description: 'Get information about a sticker set',
        category: 'stickers',
        parameters: [
          {
            name: 'name',
            type: 'string',
            required: true,
            description: 'Name of the sticker set',
          },
        ],
        returns: 'StickerSet object',
      },
    ],
  },
  // Add more categories and methods...
];
