import { NextResponse } from 'next/server';
import { TelegramAPI } from '@/lib/telegram-api';

export async function POST(request: Request) {
  try {
    const { token, method, params } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Bot token is required' },
        { status: 400 }
      );
    }

    const api = new TelegramAPI(token);
    const result = await api.request(method, params);

    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}