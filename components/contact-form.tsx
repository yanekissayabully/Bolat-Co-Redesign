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

//     // Используем API роут Next.js для защиты токенов
//     const response = await fetch('/api/send-telegram', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         message,
//         name: data.name,
//         phone: data.phone,
//       }),
//     })
    
//     if (!response.ok) {
//       throw new Error('Failed to send message')
//     }
    
//     return true
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
    
//     try {
//       await sendToTelegram(formData)
//       setSubmitted(true)
//     } catch (error) {
//       console.error('Error:', error)
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



// 'use client'

// import { useState } from 'react'
// import { ArrowRight, ArrowLeft, CheckCircle, Zap } from 'lucide-react'

// type Answers = {
//   businessType: string
//   crmStatus: string
//   leadsPerMonth: string
//   mainProblem: string
//   investmentReady: string
//   name: string
//   phone: string
// }

// const TOTAL_STEPS = 7

// function OptionChip({
//   label,
//   selected,
//   onClick,
// }: {
//   label: string
//   selected: boolean
//   onClick: () => void
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`
//         group relative overflow-hidden px-5 py-3.5 text-sm font-medium text-left
//         border rounded-xl transition-all duration-200 cursor-pointer
//         ${
//           selected
//             ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.02]'
//             : 'bg-background border-border text-foreground hover:border-primary/60 hover:bg-primary/5'
//         }
//       `}
//     >
//       {/* animated left stripe */}
//       <span
//         className={`
//           absolute left-0 top-0 h-full w-1 rounded-l-xl transition-all duration-300
//           ${selected ? 'bg-primary-foreground/30' : 'bg-primary/0 group-hover:bg-primary/40'}
//         `}
//       />
//       <span className="relative z-10">{label}</span>
//     </button>
//   )
// }

// function ProgressBar({ step }: { step: number }) {
//   const pct = Math.round(((step) / TOTAL_STEPS) * 100)
//   return (
//     <div className="w-full h-1 bg-border rounded-full overflow-hidden mb-8">
//       <div
//         className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
//         style={{ width: `${pct}%` }}
//       />
//     </div>
//   )
// }

// function StepShell({
//   label,
//   step,
//   question,
//   children,
// }: {
//   label: string
//   step: number
//   question: string
//   children: React.ReactNode
// }) {
//   return (
//     <div className="animate-in fade-in slide-in-from-right-4 duration-300">
//       <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
//         Шаг {step} / {TOTAL_STEPS} — {label}
//       </p>
//       <h3
//         className="text-2xl md:text-3xl font-bold text-balance mb-7 leading-snug"
//         style={{ fontFamily: 'var(--font-syne)' }}
//       >
//         {question}
//       </h3>
//       {children}
//     </div>
//   )
// }


// export function LeadForm() {
//   const [step, setStep] = useState(1)
//   const [submitted, setSubmitted] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [answers, setAnswers] = useState<Answers>({
//     businessType: '',
//     crmStatus: '',
//     leadsPerMonth: '',
//     mainProblem: '',
//     investmentReady: '',
//     name: '',
//     phone: '',
//   })

//   const set = (field: keyof Answers, value: string) =>
//     setAnswers((prev) => ({ ...prev, [field]: value }))

//   const canNext = (): boolean => {
//     if (step === 1) return !!answers.businessType
//     if (step === 2) return !!answers.crmStatus
//     if (step === 3) return !!answers.leadsPerMonth
//     if (step === 4) return answers.mainProblem.trim().length > 2
//     if (step === 5) return !!answers.investmentReady
//     if (step === 6) return answers.name.trim().length > 1
//     if (step === 7) return answers.phone.trim().length > 5
//     return false
//   }

//   const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS))
//   const back = () => setStep((s) => Math.max(s - 1, 1))

//   const sendToTelegram = async () => {
//     const message = `
// 🔔 *Новая КВАЛИФИЦИРОВАННАЯ заявка — BOLAT&CO*

// 👤 *Имя:* ${answers.name}
// 📞 *Телефон:* ${answers.phone}

// 🏢 *Тип бизнеса:* ${answers.businessType}
// 💬 *Работа с клиентами:* ${answers.crmStatus}
// 📊 *Заявок в месяц:* ${answers.leadsPerMonth}
// 🚧 *Главная проблема:* ${answers.mainProblem}
// 💰 *Готовность инвестировать:* ${answers.investmentReady}

// ⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
//     `

//     const response = await fetch('/api/send-telegram', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ message, name: answers.name, phone: answers.phone }),
//     })
//     if (!response.ok) throw new Error('Failed to send')
//   }

//   const handleSubmit = async () => {
//     setLoading(true)
//     try {
//       await sendToTelegram()
//       setSubmitted(true)
//     } catch {
//       alert('Произошла ошибка. Попробуйте ещё раз.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section id="contact" className="bg-card border-t border-border py-24 px-6">
//       <div className="max-w-2xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
//             Квалификация
//           </p>
//           <h2
//             className="text-4xl md:text-5xl font-bold text-balance mb-4"
//             style={{ fontFamily: 'var(--font-syne)' }}
//           >
//             Давайте разберёмся, чем мы можем помочь
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             7 вопросов — и мы предложим решение под ваш бизнес
//           </p>
//         </div>

//         {/* Card */}
//         <div className="bg-background border border-border rounded-2xl p-8 md:p-10 shadow-xl shadow-black/10">
//           {submitted ? (
//             /* ── Success ── */
//             <div className="flex flex-col items-center gap-4 py-10 text-center animate-in fade-in duration-500">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150" />
//                 <CheckCircle size={56} className="text-primary relative" />
//               </div>
//               <h3
//                 className="text-2xl font-bold mt-2"
//                 style={{ fontFamily: 'var(--font-syne)' }}
//               >
//                 Заявка принята!
//               </h3>
//               <p className="text-muted-foreground max-w-xs">
//                 Мы изучим ваши ответы и свяжемся с вами в течение 30 минут с&nbsp;конкретным предложением.
//               </p>
//               <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
//                 <Zap size={14} />
//                 BOLAT&CO — автоматизация продаж
//               </div>
//             </div>
//           ) : (
//             <>
//               <ProgressBar step={step} />

//               {/* ── Step 1 ── */}
//               {step === 1 && (
//                 <StepShell step={1} label="Бизнес" question="Чем занимается ваш бизнес?">
//                   <div className="flex flex-col gap-3">
//                     {[
//                       'Розница (цветы / одежда / товары и др.)',
//                       'Услуги (салон / студия / агентство и др.)',
//                       'Образование',
//                       'Онлайн-бизнес',
//                       'Другое',
//                     ].map((o) => (
//                       <OptionChip
//                         key={o}
//                         label={o}
//                         selected={answers.businessType === o}
//                         onClick={() => set('businessType', o)}
//                       />
//                     ))}
//                   </div>
//                 </StepShell>
//               )}

//               {/* ── Step 2 ── */}
//               {step === 2 && (
//                 <StepShell step={2} label="CRM" question="Как сейчас работаете с клиентами?">
//                   <div className="flex flex-col gap-3">
//                     {[
//                       'Через WhatsApp и/или Instagram',
//                       'Есть CRM, но почти не используем',
//                       'CRM есть и работает частично',
//                       'Другое',
//                     ].map((o) => (
//                       <OptionChip
//                         key={o}
//                         label={o}
//                         selected={answers.crmStatus === o}
//                         onClick={() => set('crmStatus', o)}
//                       />
//                     ))}
//                   </div>
//                 </StepShell>
//               )}

//               {/* ── Step 3 ── */}
//               {step === 3 && (
//                 <StepShell
//                   step={3}
//                   label="Объём"
//                   question="Сколько заявок в месяц вы получаете?"
//                 >
//                   <div className="grid grid-cols-2 gap-3">
//                     {['До 50', '50–150', '150–500', '500+', 'Не считаем'].map((o) => (
//                       <OptionChip
//                         key={o}
//                         label={o}
//                         selected={answers.leadsPerMonth === o}
//                         onClick={() => set('leadsPerMonth', o)}
//                       />
//                     ))}
//                   </div>
//                 </StepShell>
//               )}

//               {/* ── Step 4 ── */}
//               {step === 4 && (
//                 <StepShell
//                   step={4}
//                   label="Боль"
//                   question="Что сейчас больше всего мешает зарабатывать больше?"
//                 >
//                   <textarea
//                     rows={5}
//                     value={answers.mainProblem}
//                     onChange={(e) => set('mainProblem', e.target.value)}
//                     placeholder="Опишите своими словами — это важно для нас..."
//                     className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none rounded-xl"
//                   />
//                 </StepShell>
//               )}

//               {/* ── Step 5 ── */}
//               {step === 5 && (
//                 <StepShell
//                   step={5}
//                   label="Бюджет"
//                   question="Готовы инвестировать в автоматизацию продаж?"
//                 >
//                   <div className="flex flex-col gap-3">
//                     {[
//                       'Да, от 500 000 ₸',
//                       'Да, но не определился с бюджетом',
//                       'Пока просто изучаю',
//                       'Нет',
//                     ].map((o) => (
//                       <OptionChip
//                         key={o}
//                         label={o}
//                         selected={answers.investmentReady === o}
//                         onClick={() => set('investmentReady', o)}
//                       />
//                     ))}
//                   </div>
//                 </StepShell>
//               )}

//               {/* ── Step 6 ── */}
//               {step === 6 && (
//                 <StepShell step={6} label="Контакт" question="Как вас зовут?">
//                   <input
//                     type="text"
//                     value={answers.name}
//                     onChange={(e) => set('name', e.target.value)}
//                     placeholder="Ваше имя"
//                     className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-xl"
//                   />
//                 </StepShell>
//               )}

//               {/* ── Step 7 ── */}
//               {step === 7 && (
//                 <StepShell
//                   step={7}
//                   label="Телефон"
//                   question={`Отлично, ${answers.name.split(' ')[0]}! Куда перезвонить?`}
//                 >
//                   <input
//                     type="tel"
//                     value={answers.phone}
//                     onChange={(e) => set('phone', e.target.value)}
//                     placeholder="+7 700 000 00 00"
//                     className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-xl"
//                   />
//                   <p className="text-xs text-muted-foreground mt-3">
//                     Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.
//                   </p>
//                 </StepShell>
//               )}

//               {/* Navigation */}
//               <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
//                 <button
//                   type="button"
//                   onClick={back}
//                   className={`
//                     inline-flex items-center gap-2 text-sm font-medium text-muted-foreground
//                     hover:text-foreground transition-colors
//                     ${step === 1 ? 'invisible' : ''}
//                   `}
//                 >
//                   <ArrowLeft size={16} />
//                   Назад
//                 </button>

//                 {step < TOTAL_STEPS ? (
//                   <button
//                     type="button"
//                     onClick={next}
//                     disabled={!canNext()}
//                     className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-semibold uppercase tracking-wide text-sm hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed rounded-xl"
//                   >
//                     Далее
//                     <ArrowRight size={16} />
//                   </button>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={handleSubmit}
//                     disabled={!canNext() || loading}
//                     className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-semibold uppercase tracking-wide text-sm hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed rounded-xl"
//                   >
//                     {loading ? 'Отправляем...' : 'Отправить заявку'}
//                     {!loading && <Zap size={16} />}
//                   </button>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }







'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle, Zap } from 'lucide-react'

type Answers = {
  businessType: string
  crmStatus: string
  leadsPerMonth: string
  mainProblem: string
  investmentReady: string
  name: string
  phone: string
}

const TOTAL_STEPS = 7

// Regex для проверки телефона (Казахстан + другие форматы)
const PHONE_REGEX = /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

// Функция валидации телефона
const validatePhone = (phone: string): boolean => {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '')
  return PHONE_REGEX.test(cleaned) && cleaned.length >= 10
}

// Функция форматирования телефона
const formatPhone = (value: string): string => {
  const cleaned = value.replace(/\D/g, '')
  if (cleaned.length <= 1) return cleaned
  if (cleaned.length <= 4) return `+7 ${cleaned.slice(1)}`
  if (cleaned.length <= 7) return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4)}`
  if (cleaned.length <= 9) return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`
  return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9, 11)}`
}

declare global {
  interface Window {
    fbq: any
  }
}

function OptionChip({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group relative overflow-hidden px-5 py-3.5 text-sm font-medium text-left
        border rounded-xl transition-all duration-200 cursor-pointer
        ${
          selected
            ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.02]'
            : 'bg-background border-border text-foreground hover:border-primary/60 hover:bg-primary/5'
        }
      `}
    >
      <span
        className={`
          absolute left-0 top-0 h-full w-1 rounded-l-xl transition-all duration-300
          ${selected ? 'bg-primary-foreground/30' : 'bg-primary/0 group-hover:bg-primary/40'}
        `}
      />
      <span className="relative z-10">{label}</span>
    </button>
  )
}

function ProgressBar({ step }: { step: number }) {
  const pct = Math.round((step / TOTAL_STEPS) * 100)
  return (
    <div className="w-full h-1 bg-border rounded-full overflow-hidden mb-8">
      <div
        className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

function StepShell({
  label,
  step,
  question,
  children,
}: {
  label: string
  step: number
  question: string
  children: React.ReactNode
}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
        Шаг {step} / {TOTAL_STEPS} — {label}
      </p>
      <h3
        className="text-2xl md:text-3xl font-bold text-balance mb-7 leading-snug"
        style={{ fontFamily: 'var(--font-syne)' }}
      >
        {question}
      </h3>
      {children}
    </div>
  )
}

export function LeadForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [phoneError, setPhoneError] = useState('')
  const [answers, setAnswers] = useState<Answers>({
    businessType: '',
    crmStatus: '',
    leadsPerMonth: '',
    mainProblem: '',
    investmentReady: '',
    name: '',
    phone: '',
  })

  const set = (field: keyof Answers, value: string) =>
    setAnswers((prev) => ({ ...prev, [field]: value }))

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    set('phone', formatted)
    if (formatted && !validatePhone(formatted)) {
      setPhoneError('Введите корректный номер телефона')
    } else {
      setPhoneError('')
    }
  }

  const canNext = (): boolean => {
    if (step === 1) return !!answers.businessType
    if (step === 2) return !!answers.crmStatus
    if (step === 3) return !!answers.leadsPerMonth
    if (step === 4) return answers.mainProblem.trim().length > 2
    if (step === 5) return !!answers.investmentReady
    if (step === 6) return answers.name.trim().length > 1
    if (step === 7) return validatePhone(answers.phone)
    return false
  }

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  // Отправка события в Facebook Pixel
  const sendFacebookLeadEvent = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Qualified Lead Form',
        content_category: 'Lead Generation',
        user_data: {
          em: answers.name,
          ph: answers.phone,
        },
        custom_data: {
          business_type: answers.businessType,
          crm_status: answers.crmStatus,
          leads_per_month: answers.leadsPerMonth,
          investment_ready: answers.investmentReady,
          form_steps_completed: TOTAL_STEPS,
        }
      })
      
      console.log('✅ Facebook Pixel Lead event sent')
    } else {
      console.warn('⚠️ Facebook Pixel not loaded')
    }
  }

  const sendToTelegram = async () => {
    const message = `
🔔 *НОВАЯ КВАЛИФИЦИРОВАННАЯ ЗАЯВКА — BOLAT&CO*

👤 *Имя:* ${answers.name}
📞 *Телефон:* ${answers.phone}

🏢 *Тип бизнеса:* ${answers.businessType}
💬 *Работа с клиентами:* ${answers.crmStatus}
📊 *Заявок в месяц:* ${answers.leadsPerMonth}
🚧 *Главная проблема:* ${answers.mainProblem}
💰 *Готовность инвестировать:* ${answers.investmentReady}

⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
🌐 *Страница:* ${window.location.href}
    `

    const response = await fetch('/send-telegram2.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        message, 
        name: answers.name, 
        phone: answers.phone,
        fullData: answers 
      }),
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to send')
    }
    
    return true
  }

  const handleSubmit = async () => {
    // Финальная валидация телефона
    if (!validatePhone(answers.phone)) {
      setPhoneError('Пожалуйста, введите корректный номер телефона')
      return
    }
    
    setLoading(true)
    try {
      // 1. Отправляем в Telegram
      await sendToTelegram()
      
      // 2. Отправляем событие в Facebook Pixel
      sendFacebookLeadEvent()
      
      // 3. Показываем успех
      setSubmitted(true)
      
      // 4. Скроллим к благодарности
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      
    } catch (error) {
      console.error('Error:', error)
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-card border-t border-border py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Квалификация
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-balance mb-4"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Давайте разберёмся, чем мы можем помочь
          </h2>
          <p className="text-muted-foreground text-lg">
            7 вопросов — и мы предложим решение под ваш бизнес
          </p>
        </div>

        <div className="bg-background border border-border rounded-2xl p-8 md:p-10 shadow-xl shadow-black/10">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center animate-in fade-in duration-500">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150" />
                <CheckCircle size={56} className="text-primary relative" />
              </div>
              <h3
                className="text-2xl font-bold mt-2"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Заявка принята!
              </h3>
              <p className="text-muted-foreground max-w-xs">
                Мы изучим ваши ответы и свяжемся с вами в течение 30 минут с&nbsp;конкретным предложением.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Zap size={14} />
                BOLAT&CO — автоматизация продаж
              </div>
            </div>
          ) : (
            <>
              <ProgressBar step={step} />

              {step === 1 && (
                <StepShell step={1} label="Бизнес" question="Чем занимается ваш бизнес?">
                  <div className="flex flex-col gap-3">
                    {[
                      'Розница (цветы / одежда / товары и др.)',
                      'Услуги (салон / студия / агентство и др.)',
                      'Образование',
                      'Онлайн-бизнес',
                      'Другое',
                    ].map((o) => (
                      <OptionChip
                        key={o}
                        label={o}
                        selected={answers.businessType === o}
                        onClick={() => set('businessType', o)}
                      />
                    ))}
                  </div>
                </StepShell>
              )}

              {step === 2 && (
                <StepShell step={2} label="CRM" question="Как сейчас работаете с клиентами?">
                  <div className="flex flex-col gap-3">
                    {[
                      'Через WhatsApp и/или Instagram',
                      'Есть CRM, но почти не используем',
                      'CRM есть и работает частично',
                      'Другое',
                    ].map((o) => (
                      <OptionChip
                        key={o}
                        label={o}
                        selected={answers.crmStatus === o}
                        onClick={() => set('crmStatus', o)}
                      />
                    ))}
                  </div>
                </StepShell>
              )}

              {step === 3 && (
                <StepShell
                  step={3}
                  label="Объём"
                  question="Сколько заявок в месяц вы получаете?"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {['До 50', '50–150', '150–500', '500+', 'Не считаем'].map((o) => (
                      <OptionChip
                        key={o}
                        label={o}
                        selected={answers.leadsPerMonth === o}
                        onClick={() => set('leadsPerMonth', o)}
                      />
                    ))}
                  </div>
                </StepShell>
              )}

              {step === 4 && (
                <StepShell
                  step={4}
                  label="Боль"
                  question="Что сейчас больше всего мешает зарабатывать больше?"
                >
                  <textarea
                    rows={5}
                    value={answers.mainProblem}
                    onChange={(e) => set('mainProblem', e.target.value)}
                    placeholder="Опишите своими словами — это важно для нас..."
                    className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none rounded-xl"
                  />
                </StepShell>
              )}

              {step === 5 && (
                <StepShell
                  step={5}
                  label="Бюджет"
                  question="Готовы инвестировать в автоматизацию продаж?"
                >
                  <div className="flex flex-col gap-3">
                    {[
                      'Да, от 500 000 ₸',
                      'Да, но не определился с бюджетом',
                      'Пока просто изучаю',
                      'Нет',
                    ].map((o) => (
                      <OptionChip
                        key={o}
                        label={o}
                        selected={answers.investmentReady === o}
                        onClick={() => set('investmentReady', o)}
                      />
                    ))}
                  </div>
                </StepShell>
              )}

              {step === 6 && (
                <StepShell step={6} label="Контакт" question="Как вас зовут?">
                  <input
                    type="text"
                    value={answers.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-xl"
                  />
                </StepShell>
              )}

              {step === 7 && (
                <StepShell
                  step={7}
                  label="Телефон"
                  question={`Отлично, ${answers.name.split(' ')[0] || ''}! Куда перезвонить?`}
                >
                  <input
                    type="tel"
                    value={answers.phone}
                    onChange={handlePhoneChange}
                    placeholder="+7 700 000 00 00"
                    className={`w-full bg-card border ${
                      phoneError ? 'border-red-500' : 'border-border'
                    } text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-xl`}
                  />
                  {phoneError && (
                    <p className="text-red-500 text-xs mt-2">{phoneError}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-3">
                    Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.
                  </p>
                </StepShell>
              )}

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                <button
                  type="button"
                  onClick={back}
                  className={`
                    inline-flex items-center gap-2 text-sm font-medium text-muted-foreground
                    hover:text-foreground transition-colors
                    ${step === 1 ? 'invisible' : ''}
                  `}
                >
                  <ArrowLeft size={16} />
                  Назад
                </button>

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={next}
                    disabled={!canNext()}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-semibold uppercase tracking-wide text-sm hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed rounded-xl"
                  >
                    Далее
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canNext() || loading}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-semibold uppercase tracking-wide text-sm hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed rounded-xl"
                  >
                    {loading ? 'Отправляем...' : 'Отправить заявку'}
                    {!loading && <Zap size={16} />}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}