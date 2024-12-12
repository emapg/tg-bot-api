'use client';

import { useState, useEffect } from 'react';

export function useTelegramToken() {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const storedToken = sessionStorage.getItem('telegram_bot_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const updateToken = (newToken: string) => {
    sessionStorage.setItem('telegram_bot_token', newToken);
    setToken(newToken);
  };

  return { token, updateToken };
}