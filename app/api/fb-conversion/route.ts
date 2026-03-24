// app/api/fb-conversion/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { eventName, pixelId, accessToken, userData, eventSourceUrl } = await request.json()

  try {
    const response = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [
          {
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            event_source_url: eventSourceUrl,
            user_data: {
              client_ip_address: userData.clientIpAddress,
              client_user_agent: userData.clientUserAgent,
              fbc: userData.fbc,
              fbp: userData.fbp,
            },
          },
        ],
        access_token: accessToken,
      }),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error sending conversion:', error)
    return NextResponse.json({ error: 'Failed to send conversion' }, { status: 500 })
  }
}