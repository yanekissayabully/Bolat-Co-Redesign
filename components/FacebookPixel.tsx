// components/FacebookPixel.tsx  ПРОСТО С АЙДИ


'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const PIXEL_ID = '957844779996797'

export function FacebookPixel() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView')
    }
  }, [pathname])

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}













// АЙДИ С КОНВЕРШН АПИ


// 'use client'

// import { usePathname } from 'next/navigation'
// import { useEffect } from 'react'

// const PIXEL_ID = '957844779996797'
// const ACCESS_TOKEN = 'EAATzhkWV7i4BRBHqZAkEE2sdcyV4fvliV7lYwNlPybEyrT3aiSgKdo2fpavEFRu8FmPk1v0L6X0qsU8ZAaVSxLnyYPXyBKdUveEOWXeNTrvL84wxRNp8sI1GaSIWtEQ3Rj5o60y7uoMmPuYut4WA8LZA56YZAvvweZBHqYjZB35ZBSRrprBKCdvfV2t4Ak8E0LdPQZDZD'

// export function FacebookPixel() {
//   const pathname = usePathname()

//   useEffect(() => {
//     // Отправляем PageView через пиксель (клиентская часть)
//     if (typeof window !== 'undefined' && (window as any).fbq) {
//       (window as any).fbq('track', 'PageView')
//     }

//     // Отправляем PageView через Conversions API (серверная часть)
//     fetch('/api/fb-conversion', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         eventName: 'PageView',
//         pixelId: PIXEL_ID,
//         accessToken: ACCESS_TOKEN,
//         userData: {
//           clientIpAddress: '{{ip}}',
//           clientUserAgent: navigator.userAgent,
//           fbc: getCookie('_fbc'),
//           fbp: getCookie('_fbp'),
//         },
//         eventSourceUrl: window.location.href,
//       }),
//     }).catch(console.error)
//   }, [pathname])

//   return (
//     <>
//       <script
//         dangerouslySetInnerHTML={{
//           __html: `
//             !function(f,b,e,v,n,t,s)
//             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//             n.queue=[];t=b.createElement(e);t.async=!0;
//             t.src=v;s=b.getElementsByTagName(e)[0];
//             s.parentNode.insertBefore(t,s)}(window, document,'script',
//             'https://connect.facebook.net/en_US/fbevents.js');
//             fbq('init', '${PIXEL_ID}');
//           `,
//         }}
//       />
//       <noscript>
//         <img
//           height="1"
//           width="1"
//           style={{ display: 'none' }}
//           src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
//         />
//       </noscript>
//     </>
//   )
// }

// // Вспомогательная функция для получения cookie
// function getCookie(name: string): string | null {
//   const value = `; ${document.cookie}`
//   const parts = value.split(`; ${name}=`)
//   if (parts.length === 2) return parts.pop()?.split(';').shift() || null
//   return null
// }