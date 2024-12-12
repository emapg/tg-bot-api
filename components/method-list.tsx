'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { MethodCard } from './method-card';
import { TelegramMethod } from '@/lib/telegram-types';
import { useTelegramToken } from '@/hooks/use-telegram-token';
import { useToast } from '@/hooks/use-toast';

interface MethodListProps {
  methods: TelegramMethod[];
}

export function MethodList({ methods }: MethodListProps) {
  const [search, setSearch] = useState('');
  const { token } = useTelegramToken();
  const { toast } = useToast();

  const filteredMethods = methods.filter(method =>
    method.name.toLowerCase().includes(search.toLowerCase()) ||
    method.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleTest = async (method: string, params: Record<string, any>) => {
    if (!token) {
      toast({
        title: 'Error',
        description: 'Please set your bot token first',
        variant: 'destructive',
      });
      return;
    }

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, method, params }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      toast({
        title: 'Success',
        description: 'Method executed successfully',
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search methods..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredMethods.map((method) => (
        <MethodCard
          key={method.name}
          method={method}
          onTest={(params) => handleTest(method.name, params)}
        />
      ))}
    </div>
  );
}