'use client';

import { useState } from 'react';
import { Key } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useTelegramToken } from '@/hooks/use-telegram-token';

export function TokenManager() {
  const { token, updateToken } = useTelegramToken();
  const [newToken, setNewToken] = useState(token);

  const handleSave = () => {
    updateToken(newToken);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="w-5 h-5" />
          Bot Token Configuration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input
            type="password"
            placeholder="Enter your bot token"
            value={newToken}
            onChange={(e) => setNewToken(e.target.value)}
          />
          <Button onClick={handleSave}>Save</Button>
        </div>
      </CardContent>
    </Card>
  );
}