import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { message, name, phone } = await request.json()
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID
    
    if (!botToken || !chatId) {
      console.error('Telegram credentials not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }
    
    const telegramMessage = `
🔔 *Новая заявка с сайта BOLAT&CO*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📝 *Сообщение:* ${message || 'Не указано'}

⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
    `
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    })
    
    if (!response.ok) {
      throw new Error('Failed to send to Telegram')
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}