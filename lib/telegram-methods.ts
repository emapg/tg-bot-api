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
      {
        name: 'getChatAdministrators',
        description: 'Get a list of administrators in a chat',
        category: 'groups',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
        ],
        returns: 'Array of chat administrators',
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
      {
        name: 'uploadStickerFile',
        description: 'Upload a sticker file to the bot',
        category: 'stickers',
        parameters: [
          {
            name: 'user_id',
            type: 'number',
            required: true,
            description: 'User identifier for sending the sticker',
          },
          {
            name: 'sticker',
            type: 'file',
            required: true,
            description: 'File to upload',
          },
        ],
        returns: 'File object',
      },
    ],
  },
  {
    id: 'files',
    name: 'File Methods',
    description: 'Send and manage files',
    methods: [
      {
        name: 'sendDocument',
        description: 'Sends a file as a document',
        category: 'files',
        parameters: [
          {
            name: 'chat_id',
            type: 'number | string',
            required: true,
            description: 'Unique identifier for the target chat',
          },
          {
            name: 'document',
            type: 'string | file',
            required: true,
            description: 'File to send, either a file identifier or a file to upload',
          },
        ],
        returns: 'Message object',
      },
      {
        name: 'getFile',
        description: 'Get information about a file',
        category: 'files',
        parameters: [
          {
            name: 'file_id',
            type: 'string',
            required: true,
            description: 'Unique identifier for the file',
          },
        ],
        returns: 'File object',
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
        description: 'Send an invoice to the user',
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
    ],
  },
];
