// 'use client'

// import { useState } from 'react'
// import { ArrowRight, CheckCircle } from 'lucide-react'

// interface ContactFormProps {
//   title?: string
//   subtitle?: string
// }

// export function ContactForm({
//   title = 'Готовы автоматизировать бизнес?',
//   subtitle = 'Оставьте заявку — и мы свяжемся с вами в течение 30 минут',
// }: ContactFormProps) {
//   const [submitted, setSubmitted] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setTimeout(() => {
//       setLoading(false)
//       setSubmitted(true)
//     }, 1000)
//   }

//   return (
//     <section id="contact" className="bg-card border-t border-border py-24 px-6">
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-12">
//           <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
//             Связаться
//           </p>
//           <h2
//             className="text-4xl md:text-5xl font-bold text-balance mb-4"
//             style={{ fontFamily: 'var(--font-syne)' }}
//           >
//             {title}
//           </h2>
//           <p className="text-muted-foreground text-lg">{subtitle}</p>
//         </div>

//         {submitted ? (
//           <div className="flex flex-col items-center gap-4 py-12 text-center">
//             <CheckCircle size={48} className="text-primary" />
//             <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
//               Заявка отправлена!
//             </h3>
//             <p className="text-muted-foreground">
//               Мы свяжемся с вами в ближайшее время.
//             </p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
//                   Имя *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   placeholder="Ваше имя"
//                   className="bg-background border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
//                   Компания
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Название компании"
//                   className="bg-background border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
//                   Телефон *
//                 </label>
//                 <input
//                   type="tel"
//                   required
//                   placeholder="+7 700 000 00 00"
//                   className="bg-background border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email@company.com"
//                   className="bg-background border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
//                 Сообщение
//               </label>
//               <textarea
//                 rows={4}
//                 placeholder="Расскажите о вашей задаче..."
//                 className="bg-background border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="self-start flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-semibold uppercase tracking-wide text-sm hover:bg-primary/90 transition-colors disabled:opacity-60"
//             >
//               {loading ? 'Отправляем...' : 'Отправить заявку'}
//               {!loading && <ArrowRight size={16} />}
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   )
// }


// 'use client'

// import { useState } from 'react'
// import { ArrowRight, CheckCircle } from 'lucide-react'

// interface ContactFormProps {
//   title?: string
//   subtitle?: string
//   botToken?: string
//   chatId?: string
// }

// export function ContactForm({
//   title = 'Готовы автоматизировать бизнес?',
//   subtitle = 'Оставьте заявку — и мы свяжемся с вами в течение 30 минут',
//   botToken = '8751143847:AAE3ZKF-apLnD6Co7w7uC-tDNlwdEaf94Fw', // Замените на ваш токен бота
//   chatId = '914762159', // Замените на ваш chat_id
// }: ContactFormProps) {
//   const [submitted, setSubmitted] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     message: ''
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const sendToTelegram = async (data: typeof formData) => {
//     const message = `
// 🔔 *Новая заявка с сайта BOLAT&CO*

// 👤 *Имя:* ${data.name}
// 📞 *Телефон:* ${data.phone}
// 📝 *Сообщение:* ${data.message || 'Не указано'}

// ⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
//     `

//     const url = `https://api.telegram.org/bot${botToken}/sendMessage`
    
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           chat_id: chatId,
//           text: message,
//           parse_mode: 'Markdown',
//         }),
//       })
      
//       if (!response.ok) {
//         throw new Error('Failed to send message')
//       }
      
//       return true
//     } catch (error) {
//       console.error('Error sending to Telegram:', error)
//       return false
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
    
//     try {
//       const success = await sendToTelegram(formData)
//       if (success) {
//         setSubmitted(true)
//       } else {
//         alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.')
//       }
//     } catch (error) {
//       alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section id="contact" className="bg-card border-t border-border py-24 px-6">
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-12">
//           <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
//             Связаться
//           </p>
//           <h2
//             className="text-4xl md:text-5xl font-bold text-balance mb-4"
//             style={{ fontFamily: 'var(--font-syne)' }}
//           >
//             {title}
//           </h2>
//           <p className="text-muted-foreground text-lg">{subtitle}</p>
//         </div>

//         {submitted ? (
//           <div className="flex flex-col items-center gap-4 py-12 text-center">
//             <CheckCircle size={48} className="text-primary" />
//             <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
//               Заявка отправлена!
//             </h3>
//             <p className="text-muted-foreground">
//               Мы свяжемся с вами в ближайшее время.
//             </p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
//                 Имя *
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Ваше имя"
//                 className="bg-background border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-lg"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
//                 Телефон *
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="+7 700 000 00 00"
//                 className="bg-background border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-lg"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
//                 Сообщение
//               </label>
//               <textarea
//                 name="message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Расскажите о вашей задаче..."
//                 className="bg-background border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none rounded-lg"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="self-start inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-semibold uppercase tracking-wide text-sm hover:bg-primary/90 transition-colors disabled:opacity-60 rounded-lg"
//             >
//               {loading ? 'Отправляем...' : 'Отправить заявку'}
//               {!loading && <ArrowRight size={16} />}
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   )
// }


'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ContactFormProps {
  title?: string
  subtitle?: string
}

export function ContactForm({
  title = 'Готовы автоматизировать бизнес?',
  subtitle = 'Оставьте заявку — и мы свяжемся с вами в течение 30 минут',
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sendToTelegram = async (data: typeof formData) => {
    const message = `
🔔 *Новая заявка с сайта BOLAT&CO*

👤 *Имя:* ${data.name}
📞 *Телефон:* ${data.phone}
📝 *Сообщение:* ${data.message || 'Не указано'}

⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
    `

    // Используем API роут Next.js для защиты токенов
    const response = await fetch('/api/send-telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        name: data.name,
        phone: data.phone,
      }),
    })
    
    if (!response.ok) {
      throw new Error('Failed to send message')
    }
    
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await sendToTelegram(formData)
      setSubmitted(true)
    } catch (error) {
      console.error('Error:', error)
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-card border-t border-border py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Связаться
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-balance mb-4"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <CheckCircle size={48} className="text-primary" />
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
              Заявка отправлена!
            </h3>
            <p className="text-muted-foreground">
              Мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Имя *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className="bg-background border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Телефон *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 700 000 00 00"
                className="bg-background border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Сообщение
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Расскажите о вашей задаче..."
                className="bg-background border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none rounded-lg"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="self-start inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-semibold uppercase tracking-wide text-sm hover:bg-primary/90 transition-colors disabled:opacity-60 rounded-lg"
            >
              {loading ? 'Отправляем...' : 'Отправить заявку'}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}