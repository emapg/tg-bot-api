'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { TelegramMethod, TelegramParameter } from '@/lib/telegram-types';
import { cn } from '@/lib/utils';

interface MethodCardProps {
  method: TelegramMethod;
  onTest: (params: Record<string, any>) => Promise<void>;
}

export function MethodCard({ method, onTest }: MethodCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [params, setParams] = useState<Record<string, any>>({});

  const handleTest = async () => {
    await onTest(params);
  };

  return (
    <Card className="mb-4">
      <CardHeader 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{method.name}</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
        <p className="text-sm text-muted-foreground">{method.description}</p>
      </CardHeader>
      <CardContent className={cn(!isExpanded && 'hidden')}>
        <div className="space-y-4">
          {method.parameters.map((param: TelegramParameter) => (
            <div key={param.name}>
              <Label>
                {param.name}
                {param.required && <span className="text-red-500">*</span>}
              </Label>
              <Input
                placeholder={param.description}
                onChange={(e) => 
                  setParams({ ...params, [param.name]: e.target.value })
                }
              />
              <p className="text-xs text-muted-foreground mt-1">
                Type: {param.type}
              </p>
            </div>
          ))}
          <Button 
            className="w-full"
            onClick={handleTest}
            disabled={!method.parameters.every(p => 
              !p.required || (params[p.name] && params[p.name].length > 0)
            )}
          >
            <Play className="w-4 h-4 mr-2" />
            Test Method
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}