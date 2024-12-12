export interface TelegramMethod {
  name: string;
  description: string;
  category: string;
  parameters: TelegramParameter[];
  returns: string;
  example?: string;
}

export interface TelegramParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface TelegramCategory {
  id: string;
  name: string;
  description: string;
  methods: TelegramMethod[];
}