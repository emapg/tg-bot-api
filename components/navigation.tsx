'use client';

import { useState } from 'react';
import { Bot, MessageCircle, Users, CreditCard, Webhook, FileText, Menu, X } from 'lucide-react';
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar on mobile
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className={cn('lg:flex lg:flex-col w-64 border-r bg-background', isSidebarOpen ? 'block' : 'hidden lg:block')}>
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Telegram Bot API</h2>
          <button
            className="lg:hidden p-2 text-gray-500"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <nav className="flex-1 space-y-1 p-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center px-4 py-2 text-sm rounded-md transition-colors',
                  pathname === item.href
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent'
                )}
              >
                <Icon className="mr-3 h-5 w-5" />
                <span className="hidden lg:block">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Add main content here */}
        <h1 className="text-2xl font-semibold text-gray-800">Welcome to Telegram Bot API Explorer</h1>
        {/* Rest of the content */}
      </div>
    </div>
  );
}
