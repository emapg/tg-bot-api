import { Bot, MessageCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4 rounded-md mb-8 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold">Telegram Bot API Explorer</h2>
          <div className="space-x-6">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/docs" className="hover:text-gray-400">Docs</Link>
            <Link href="/about" className="hover:text-gray-400">About</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Welcome to Telegram Bot API Explorer</h1>
        
        <div className="prose dark:prose-invert mb-8 text-center">
          <p className="text-lg text-muted-foreground">
            Explore and test the complete set of Telegram Bot API methods through our interactive interface.
            Get started by configuring your bot token and exploring the various API categories.
          </p>
        </div>

        {/* API Methods Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="bg-blue-50 border border-blue-200">
            <CardHeader>
              <Bot className="h-8 w-8 mb-2 text-blue-600" />
              <CardTitle>Bot Methods</CardTitle>
              <CardDescription>Core bot functionality and management</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/methods/bot">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Explore Bot Methods</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border border-green-200">
            <CardHeader>
              <MessageCircle className="h-8 w-8 mb-2 text-green-600" />
              <CardTitle>Message Methods</CardTitle>
              <CardDescription>Send and manage messages</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/methods/messages">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Explore Message Methods</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border border-yellow-200">
            <CardHeader>
              <Users className="h-8 w-8 mb-2 text-yellow-600" />
              <CardTitle>User Methods</CardTitle>
              <CardDescription>User management and information</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/methods/users">
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Explore User Methods</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
              <li>Create a new bot through BotFather on Telegram</li>
              <li>Copy your bot token</li>
              <li>Configure your bot token in the settings</li>
              <li>Start exploring and testing API methods</li>
            </ol>
          </CardContent>
        </Card>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-4 mt-12">
          <div className="text-center">
            <p>© 2024 Telegram Bot API Explorer. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-400">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
