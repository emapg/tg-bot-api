'use client';

import { Bot, MessageCircle, Users, CreditCard, Webhook, FileText } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Overview', href: '/', icon: FileText },
  { name: 'Bot Methods', href: '/methods/bot', icon: Bot },
  { name: 'Messages', href: '/methods/messages', icon: MessageCircle },
  { name: 'Users', href: '/methods/users', icon: Users },
  { name: 'Payments', href: '/methods/payments', icon: CreditCard },
  { name: 'Webhooks', href: '/methods/webhooks', icon: Webhook },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 border-r bg-background">
      <div className="p-4">
        <h2 className="text-xl font-bold">Telegram Bot API</h2>
      </div>
      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center px-4 py-2 text-sm rounded-md',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent'
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}