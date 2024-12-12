import { Bot, MessageCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to Telegram Bot API Explorer</h1>
        
        <div className="prose dark:prose-invert mb-8">
          <p className="text-lg text-muted-foreground">
            Explore and test the complete set of Telegram Bot API methods through our interactive interface.
            Get started by configuring your bot token and exploring the various API categories.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <Bot className="h-8 w-8 mb-2" />
              <CardTitle>Bot Methods</CardTitle>
              <CardDescription>Core bot functionality and management</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/methods/bot">
                <Button className="w-full">Explore Bot Methods</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageCircle className="h-8 w-8 mb-2" />
              <CardTitle>Message Methods</CardTitle>
              <CardDescription>Send and manage messages</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/methods/messages">
                <Button className="w-full">Explore Message Methods</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 mb-2" />
              <CardTitle>User Methods</CardTitle>
              <CardDescription>User management and information</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/methods/users">
                <Button className="w-full">Explore User Methods</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Create a new bot through BotFather on Telegram</li>
              <li>Copy your bot token</li>
              <li>Configure your bot token in the settings</li>
              <li>Start exploring and testing API methods</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}