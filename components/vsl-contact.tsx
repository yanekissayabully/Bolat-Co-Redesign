// 'use client'

// import { useState } from 'react'
// import { ArrowRight, ArrowLeft, CheckCircle, Zap } from 'lucide-react'

// type Answers = {
//   businessType: string
//   crmUsage: string
//   crmIssues: string
//   technicalSupport: string
//   name: string
//   phone: string
// }

// const TOTAL_STEPS = 6

// // Regex для проверки телефона (Казахстан + другие форматы)
// const PHONE_REGEX = /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

// // Функция валидации телефона
// const validatePhone = (phone: string): boolean => {
//   const cleaned = phone.replace(/[\s\-\(\)]/g, '')
//   return PHONE_REGEX.test(cleaned) && cleaned.length >= 10
// }

// // Функция форматирования телефона
// const formatPhone = (value: string): string => {
//   const cleaned = value.replace(/\D/g, '')
//   if (cleaned.length <= 1) return cleaned
//   if (cleaned.length <= 4) return `+7 ${cleaned.slice(1)}`
//   if (cleaned.length <= 7) return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4)}`
//   if (cleaned.length <= 9) return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`
//   return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9, 11)}`
// }

// declare global {
//   interface Window {
//     fbq: any
//   }
// }

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
//   const pct = Math.round((step / TOTAL_STEPS) * 100)
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
//   const [phoneError, setPhoneError] = useState('')
//   const [answers, setAnswers] = useState<Answers>({
//     businessType: '',
//     crmUsage: '',
//     crmIssues: '',
//     technicalSupport: '',
//     name: '',
//     phone: '',
//   })

//   const set = (field: keyof Answers, value: string) =>
//     setAnswers((prev) => ({ ...prev, [field]: value }))

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const formatted = formatPhone(e.target.value)
//     set('phone', formatted)
//     if (formatted && !validatePhone(formatted)) {
//       setPhoneError('Введите корректный номер телефона')
//     } else {
//       setPhoneError('')
//     }
//   }

//   const canNext = (): boolean => {
//     if (step === 1) return !!answers.businessType
//     if (step === 2) return !!answers.crmUsage
//     if (step === 3) return !!answers.crmIssues
//     if (step === 4) return !!answers.technicalSupport
//     if (step === 6) return answers.name.trim().length > 1
//     if (step === 7) return validatePhone(answers.phone)
//     return false
//   }

//   const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS))
//   const back = () => setStep((s) => Math.max(s - 1, 1))

//   // Отправка события в Facebook Pixel как VSL Lead
//   const sendFacebookLeadEvent = () => {
//     if (typeof window !== 'undefined' && window.fbq) {
//       window.fbq('track', 'Lead', {
//         content_name: 'VSL Lead',
//         content_category: 'VSL Qualification',
//         event_name: 'VSL_LEAD',
//         user_data: {
//           em: answers.name,
//           ph: answers.phone,
//         },
//         custom_data: {
//           business_type: answers.businessType,
//           crm_usage: answers.crmUsage,
//           crm_issues: answers.crmIssues,
//           technical_support: answers.technicalSupport,
//           form_steps_completed: TOTAL_STEPS,
//         }
//       })
      
//       console.log('✅ Facebook Pixel VSL Lead event sent')
//     } else {
//       console.warn('⚠️ Facebook Pixel not loaded')
//     }
//   }

//   const sendToTelegram = async () => {
//     const message = `
// 🔔 *НОВАЯ ЗАЯВКА — VSL LEAD — BOLAT&CO*

// 👤 *Имя:* ${answers.name}
// 📞 *Телефон:* ${answers.phone}

// 🏢 *Тип бизнеса:* ${answers.businessType}
// 💬 *Использование amoCRM:* ${answers.crmUsage}
// ⚠️ *Что не устраивает в CRM:* ${answers.crmIssues}
// 🛠️ *Техподдержка системы:* ${answers.technicalSupport}

// ⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
// 🌐 *Страница:* ${window.location.href}
//     `

//     const response = await fetch('/api/send-telegram', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ 
//         message, 
//         name: answers.name, 
//         phone: answers.phone,
//         fullData: answers 
//       }),
//     })
    
//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.error || 'Failed to send')
//     }
    
//     return true
//   }

//   const handleSubmit = async () => {
//     // Финальная валидация телефона
//     if (!validatePhone(answers.phone)) {
//       setPhoneError('Пожалуйста, введите корректный номер телефона')
//       return
//     }
    
//     setLoading(true)
//     try {
//       // 1. Отправляем в Telegram
//       await sendToTelegram()
      
//       // 2. Отправляем событие в Facebook Pixel как VSL Lead
//       sendFacebookLeadEvent()
      
//       // 3. Показываем успех
//       setSubmitted(true)
      
//       // 4. Скроллим к благодарности
//       setTimeout(() => {
//         document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
//       }, 100)
      
//     } catch (error) {
//       console.error('Error:', error)
//       alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section id="contact" className="bg-card border-t border-border py-24 px-6">
//       <div className="max-w-2xl mx-auto">
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
//             Важно! Перед отправкой формы, убедитесь что вы посмотрели видео выше
//           </p>
//         </div>

//         <div className="bg-background border border-border rounded-2xl p-8 md:p-10 shadow-xl shadow-black/10">
//           {submitted ? (
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

//               {step === 2 && (
//                 <StepShell step={2} label="amoCRM" question="Используете ли сейчас amoCRM?">
//                   <div className="flex flex-col gap-3">
//                     {[
//                       'Да, каждый день',
//                       'Да, но "как получится"',
//                       'Нет, только рассматриваем',
//                     ].map((o) => (
//                       <OptionChip
//                         key={o}
//                         label={o}
//                         selected={answers.crmUsage === o}
//                         onClick={() => set('crmUsage', o)}
//                       />
//                     ))}
//                   </div>
//                 </StepShell>
//               )}

//               {step === 3 && (
//                 <StepShell
//                   step={3}
//                   label="Проблемы"
//                   question="Что сейчас не устраивает в CRM?"
//                 >
//                   <div className="flex flex-col gap-3">
//                     {[
//                       'Менеджеры не используют amoCRM',
//                       'Теряются заявки',
//                       'Нет понятной аналитики',
//                       'Всё делается вручную',
//                     ].map((o) => (
//                       <OptionChip
//                         key={o}
//                         label={o}
//                         selected={answers.crmIssues === o}
//                         onClick={() => set('crmIssues', o)}
//                       />
//                     ))}
//                   </div>
//                 </StepShell>
//               )}

//               {step === 4 && (
//                 <StepShell
//                   step={4}
//                   label="Техподдержка"
//                   question="Кто оказывает техническую поддержку системы?"
//                 >
//                   <div className="flex flex-col gap-3">
//                     {[
//                       'Есть партнер на удалёнке',
//                       'Есть собственный IT-специалист',
//                       'Нет технической поддержки',
//                     ].map((o) => (
//                       <OptionChip
//                         key={o}
//                         label={o}
//                         selected={answers.technicalSupport === o}
//                         onClick={() => set('technicalSupport', o)}
//                       />
//                     ))}
//                   </div>
//                 </StepShell>
//               )}

//               {step === 5 && (
//                 <StepShell step={5} label="Контакт" question="Как вас зовут?">
//                   <input
//                     type="text"
//                     value={answers.name}
//                     onChange={(e) => set('name', e.target.value)}
//                     placeholder="Ваше имя"
//                     className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-xl"
//                   />
//                 </StepShell>
//               )}

//               {step === 6 && (
//                 <StepShell
//                   step={6}
//                   label="Телефон"
//                   question={`Отлично, ${answers.name.split(' ')[0] || ''}! Куда перезвонить?`}
//                 >
//                   <input
//                     type="tel"
//                     value={answers.phone}
//                     onChange={handlePhoneChange}
//                     placeholder="+7 700 000 00 00"
//                     className={`w-full bg-card border ${
//                       phoneError ? 'border-red-500' : 'border-border'
//                     } text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-xl`}
//                   />
//                   {phoneError && (
//                     <p className="text-red-500 text-xs mt-2">{phoneError}</p>
//                   )}
//                   <p className="text-xs text-muted-foreground mt-3">
//                     Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.
//                   </p>
//                 </StepShell>
//               )}

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



// 'use client'

// import { useState, useEffect } from 'react'
// import { ArrowRight, ArrowLeft, CheckCircle, Zap } from 'lucide-react'

// type Answers = {
//   businessType: string
//   crmUsage: string
//   crmIssues: string
//   technicalSupport: string
//   name: string
//   phone: string
// }

// const TOTAL_STEPS = 6

// // Regex для проверки телефона (Казахстан + другие форматы)
// const PHONE_REGEX = /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

// // Функция валидации телефона
// const validatePhone = (phone: string): boolean => {
//   const cleaned = phone.replace(/[\s\-\(\)]/g, '')
//   return PHONE_REGEX.test(cleaned) && cleaned.length >= 10
// }

// // Функция форматирования телефона
// const formatPhone = (value: string): string => {
//   const cleaned = value.replace(/\D/g, '')
//   if (cleaned.length <= 1) return cleaned
//   if (cleaned.length <= 4) return `+7 ${cleaned.slice(1)}`
//   if (cleaned.length <= 7) return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4)}`
//   if (cleaned.length <= 9) return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`
//   return `+7 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9, 11)}`
// }

// declare global {
//   interface Window {
//     fbq: any
//   }
// }

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
//   const pct = Math.round((step / TOTAL_STEPS) * 100)
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

// export function LeadForm({ vslWatchTime = 0 }: { vslWatchTime?: number }) {
//   const [step, setStep] = useState(1)
//   const [submitted, setSubmitted] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [phoneError, setPhoneError] = useState('')
//   const [answers, setAnswers] = useState<Answers>({
//     businessType: '',
//     crmUsage: '',
//     crmIssues: '',
//     technicalSupport: '',
//     name: '',
//     phone: '',
//   })

//   const set = (field: keyof Answers, value: string) =>
//     setAnswers((prev) => ({ ...prev, [field]: value }))

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const formatted = formatPhone(e.target.value)
//     set('phone', formatted)
//     if (formatted && !validatePhone(formatted)) {
//       setPhoneError('Введите корректный номер телефона')
//     } else {
//       setPhoneError('')
//     }
//   }

//   const canNext = (): boolean => {
//     if (step === 1) return !!answers.businessType
//     if (step === 2) return !!answers.crmUsage
//     if (step === 3) return !!answers.crmIssues
//     if (step === 4) return !!answers.technicalSupport
//     if (step === 5) return answers.name.trim().length > 1
//     if (step === 6) return validatePhone(answers.phone)
//     return false
//   }

//   const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS))
//   const back = () => setStep((s) => Math.max(s - 1, 1))

//   // Форматирование времени (секунды -> мм:сс)
//   const formatWatchTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${mins}:${secs.toString().padStart(2, '0')}`
//   }

//   // Отправка события в Facebook Pixel как VSL Lead
//   const sendFacebookLeadEvent = () => {
//     if (typeof window !== 'undefined' && window.fbq) {
//       window.fbq('track', 'Lead', {
//         content_name: 'VSL Lead',
//         content_category: 'VSL Qualification',
//         event_name: 'VSL_LEAD',
//         user_data: {
//           em: answers.name,
//           ph: answers.phone,
//         },
//         custom_data: {
//           business_type: answers.businessType,
//           crm_usage: answers.crmUsage,
//           crm_issues: answers.crmIssues,
//           technical_support: answers.technicalSupport,
//           vsl_watch_time_seconds: vslWatchTime,
//           vsl_watch_time_formatted: formatWatchTime(vslWatchTime),
//           form_steps_completed: TOTAL_STEPS,
//         }
//       })
      
//       console.log('✅ Facebook Pixel VSL Lead event sent')
//     } else {
//       console.warn('⚠️ Facebook Pixel not loaded')
//     }
//   }

//   const sendToTelegram = async () => {
//     const watchTimeFormatted = formatWatchTime(vslWatchTime)
    
//     const message = `
// 🔔 *НОВАЯ ЗАЯВКА — VSL LEAD — BOLAT&CO*

// 👤 *Имя:* ${answers.name}
// 📞 *Телефон:* ${answers.phone}
// ⏱️ *Время просмотра VSL:* ${watchTimeFormatted} (${vslWatchTime} сек)

// 🏢 *Тип бизнеса:* ${answers.businessType}
// 💬 *Использование amoCRM:* ${answers.crmUsage}
// ⚠️ *Что не устраивает в CRM:* ${answers.crmIssues}
// 🛠️ *Техподдержка системы:* ${answers.technicalSupport}

// ⏰ *Время заявки:* ${new Date().toLocaleString('ru-RU')}
// 🌐 *Страница:* ${window.location.href}
//     `

//     const response = await fetch('/send-telegram.php', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ 
//         message, 
//         name: answers.name, 
//         phone: answers.phone,
//         vslWatchTime: vslWatchTime,
//         vslWatchTimeFormatted: watchTimeFormatted,
//         fullData: answers 
//       }),
//     })
    
//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.error || 'Failed to send')
//     }
    
//     return true
//   }

//   const handleSubmit = async () => {
//     // Финальная валидация телефона
//     if (!validatePhone(answers.phone)) {
//       setPhoneError('Пожалуйста, введите корректный номер телефона')
//       return
//     }
    
//     setLoading(true)
//     try {
//       // 1. Отправляем в Telegram
//       await sendToTelegram()
      
//       // 2. Отправляем событие в Facebook Pixel как VSL Lead
//       sendFacebookLeadEvent()
      
//       // 3. Показываем успех
//       setSubmitted(true)
      
//       // 4. Скроллим к благодарности
//       setTimeout(() => {
//         document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
//       }, 100)
      
//     } catch (error) {
//       console.error('Error:', error)
//       alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section id="contact" className="bg-card border-t border-border py-24 px-6">
//       <div className="max-w-2xl mx-auto">
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
//             Важно! Убедитесь что вы посмотрели видео до конца!
//           </p>
//           {/* {vslWatchTime > 0 && (
//             <p className="text-sm text-primary mt-2">
//               ⏱️ Вы посмотрели видео: {formatWatchTime(vslWatchTime)}
//             </p>
//           )} */}
//         </div>

//         <div className="bg-background border border-border rounded-2xl p-8 md:p-10 shadow-xl shadow-black/10">
//           {submitted ? (
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

//               {step === 2 && (
//                 <StepShell step={2} label="amoCRM" question="Используете ли сейчас amoCRM?">
//                   <div className="flex flex-col gap-3">
//                     {[
//                       'Да, каждый день',
//                       'Да, но "как получится"',
//                       'Нет, только рассматриваем',
//                     ].map((o) => (
//                       <OptionChip
//                         key={o}
//                         label={o}
//                         selected={answers.crmUsage === o}
//                         onClick={() => set('crmUsage', o)}
//                       />
//                     ))}
//                   </div>
//                 </StepShell>
//               )}

//               {step === 3 && (
//                 <StepShell
//                   step={3}
//                   label="Проблемы"
//                   question="Что сейчас не устраивает в CRM?"
//                 >
//                   <div className="flex flex-col gap-3">
//                     {[
//                       'Менеджеры не используют amoCRM',
//                       'Теряются заявки',
//                       'Нет понятной аналитики',
//                       'Всё делается вручную',
//                     ].map((o) => (
//                       <OptionChip
//                         key={o}
//                         label={o}
//                         selected={answers.crmIssues === o}
//                         onClick={() => set('crmIssues', o)}
//                       />
//                     ))}
//                   </div>
//                 </StepShell>
//               )}

//               {step === 4 && (
//                 <StepShell
//                   step={4}
//                   label="Техподдержка"
//                   question="Кто оказывает техническую поддержку системы?"
//                 >
//                   <div className="flex flex-col gap-3">
//                     {[
//                       'Есть партнер на удалёнке',
//                       'Есть собственный IT-специалист',
//                       'Нет технической поддержки',
//                     ].map((o) => (
//                       <OptionChip
//                         key={o}
//                         label={o}
//                         selected={answers.technicalSupport === o}
//                         onClick={() => set('technicalSupport', o)}
//                       />
//                     ))}
//                   </div>
//                 </StepShell>
//               )}


//               {step === 5 && (
//                 <StepShell step={5} label="Контакт" question="Как вас зовут?">
//                   <input
//                     type="text"
//                     value={answers.name}
//                     onChange={(e) => set('name', e.target.value)}
//                     placeholder="Ваше имя"
//                     className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-xl"
//                   />
//                 </StepShell>
//               )}

//               {step === 6 && (
//                 <StepShell
//                   step={6}
//                   label="Телефон"
//                   question={`Отлично, ${answers.name.split(' ')[0] || ''}! Куда перезвонить?`}
//                 >
//                   <input
//                     type="tel"
//                     value={answers.phone}
//                     onChange={handlePhoneChange}
//                     placeholder="+7 700 000 00 00"
//                     className={`w-full bg-card border ${
//                       phoneError ? 'border-red-500' : 'border-border'
//                     } text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-xl`}
//                   />
//                   {phoneError && (
//                     <p className="text-red-500 text-xs mt-2">{phoneError}</p>
//                   )}
//                   <p className="text-xs text-muted-foreground mt-3">
//                     Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.
//                   </p>
//                 </StepShell>
//               )}

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

import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle, Zap } from 'lucide-react'

type Answers = {
  businessType: string
  crmUsage: string
  crmIssues: string
  technicalSupport: string
  name: string
  phone: string
}

// Тип для Facebook данных
type FacebookData = {
  fbclid: string
  fbc: string
  fbp: string
  page_url: string
  user_agent: string
}

const TOTAL_STEPS = 6

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

// Функции для работы с cookie
function getCookie(name: string): string {
  const m = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')
  return m ? decodeURIComponent(m.pop() || '') : ''
}

function setCookie(name: string, value: string, days: number) {
  const d = new Date()
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))
  document.cookie =
    name + '=' + encodeURIComponent(value) +
    '; expires=' + d.toUTCString() +
    '; path=/' +
    '; SameSite=Lax'
}

// Функция получения Facebook данных
function getFacebookData(): FacebookData {
  // 1) fbclid из URL (после клика по рекламе)
  const params = new URLSearchParams(location.search)
  const fbclidFromUrl = params.get('fbclid') || ''

  // чтобы fbclid не потерялся при переходах по сайту — сохраняем в cookie
  let fbclid = fbclidFromUrl || getCookie('fbclid')
  if (fbclidFromUrl) setCookie('fbclid', fbclidFromUrl, 90)

  // 2) fbp/fbc из cookie (Meta Pixel обычно ставит, но мы страхуемся)
  let fbp = getCookie('_fbp')
  let fbc = getCookie('_fbc')

  // если нет fbc, но есть fbclid — создаём fbc
  if (!fbc && fbclid) {
    const ts = Math.floor(Date.now() / 1000)
    fbc = `fb.1.${ts}.${fbclid}`
    setCookie('_fbc', fbc, 90)
  }

  // если нет fbp — создаём
  if (!fbp) {
    const ts = Math.floor(Date.now() / 1000)
    const rand = Math.floor(Math.random() * 1e10)
    fbp = `fb.1.${ts}.${rand}`
    setCookie('_fbp', fbp, 90)
  }

  return {
    fbclid: fbclid || '',
    fbc: fbc || '',
    fbp: fbp || '',
    page_url: location.href,
    user_agent: navigator.userAgent,
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

export function LeadForm({ vslWatchTime = 0 }: { vslWatchTime?: number }) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [phoneError, setPhoneError] = useState('')
  const [facebookData, setFacebookData] = useState<FacebookData | null>(null)
  const [answers, setAnswers] = useState<Answers>({
    businessType: '',
    crmUsage: '',
    crmIssues: '',
    technicalSupport: '',
    name: '',
    phone: '',
  })

  // Получаем Facebook данные при монтировании компонента
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = getFacebookData()
      setFacebookData(data)
      console.log('📊 Facebook data collected for VSL form:', {
        fbclid: data.fbclid ? 'present' : 'missing',
        fbc: data.fbc ? 'present' : 'missing',
        fbp: data.fbp ? 'present' : 'missing',
      })
    }
  }, [])

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
    if (step === 2) return !!answers.crmUsage
    if (step === 3) return !!answers.crmIssues
    if (step === 4) return !!answers.technicalSupport
    if (step === 5) return answers.name.trim().length > 1
    if (step === 6) return validatePhone(answers.phone)
    return false
  }

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  // Форматирование времени (секунды -> мм:сс)
  const formatWatchTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Отправка события в Facebook Pixel как VSL Lead (с Facebook данными)
  const sendFacebookLeadEvent = () => {
    if (typeof window !== 'undefined' && window.fbq && facebookData) {
      window.fbq('track', 'Lead', {
        content_name: 'VSL Lead',
        content_category: 'VSL Qualification',
        event_name: 'VSL_LEAD',
        user_data: {
          em: answers.name,
          ph: answers.phone,
        },
        custom_data: {
          business_type: answers.businessType,
          crm_usage: answers.crmUsage,
          crm_issues: answers.crmIssues,
          technical_support: answers.technicalSupport,
          vsl_watch_time_seconds: vslWatchTime,
          vsl_watch_time_formatted: formatWatchTime(vslWatchTime),
          form_steps_completed: TOTAL_STEPS,
          // Добавляем Facebook идентификаторы
          fbclid: facebookData.fbclid,
          fbc: facebookData.fbc,
          fbp: facebookData.fbp,
        }
      })
      
      console.log('✅ Facebook Pixel VSL Lead event sent with identifiers')
    } else {
      console.warn('⚠️ Facebook Pixel not loaded or Facebook data missing')
    }
  }

  const sendToTelegram = async () => {
    const watchTimeFormatted = formatWatchTime(vslWatchTime)
    
    // Формируем полные данные для отправки
    const fullData = {
      ...answers,
      facebook: facebookData,
      vslWatchTime: vslWatchTime,
      vslWatchTimeFormatted: watchTimeFormatted,
      timestamp: new Date().toLocaleString('ru-RU'),
      page_url: typeof window !== 'undefined' ? window.location.href : '',
    }
    
    const message = `
🔔 *НОВАЯ ЗАЯВКА — VSL LEAD — BOLAT&CO*

👤 *Имя:* ${answers.name}
📞 *Телефон:* ${answers.phone}
⏱️ *Время просмотра VSL:* ${watchTimeFormatted} (${vslWatchTime} сек)

🏢 *Тип бизнеса:* ${answers.businessType}
💬 *Использование amoCRM:* ${answers.crmUsage}
⚠️ *Что не устраивает в CRM:* ${answers.crmIssues}
🛠️ *Техподдержка системы:* ${answers.technicalSupport}

📊 *Facebook данные для отслеживания:*
${facebookData?.fbclid ? `• fbclid: ${facebookData.fbclid}` : '• fbclid: не найден'}
${facebookData?.fbc ? `• fbc: ${facebookData.fbc}` : '• fbc: не найден'}
${facebookData?.fbp ? `• fbp: ${facebookData.fbp}` : '• fbp: не найден'}

⏰ *Время заявки:* ${new Date().toLocaleString('ru-RU')}
🌐 *Страница:* ${fullData.page_url}
    `

    const response = await fetch('/send-telegram.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        message, 
        name: answers.name, 
        phone: answers.phone,
        vslWatchTime: vslWatchTime,
        vslWatchTimeFormatted: watchTimeFormatted,
        fullData: fullData,
        facebookData: facebookData
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
      // 1. Отправляем в Telegram (с Facebook данными)
      await sendToTelegram()
      
      // 2. Отправляем событие в Facebook Pixel как VSL Lead
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
            Важно! Убедитесь что вы посмотрели видео до конца!
          </p>
          {/* {vslWatchTime > 0 && (
            <p className="text-sm text-primary mt-2">
              ⏱️ Вы посмотрели видео: {formatWatchTime(vslWatchTime)}
            </p>
          )} */}
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
                <StepShell step={2} label="amoCRM" question="Используете ли сейчас amoCRM?">
                  <div className="flex flex-col gap-3">
                    {[
                      'Да, каждый день',
                      'Да, но "как получится"',
                      'Нет, только рассматриваем',
                    ].map((o) => (
                      <OptionChip
                        key={o}
                        label={o}
                        selected={answers.crmUsage === o}
                        onClick={() => set('crmUsage', o)}
                      />
                    ))}
                  </div>
                </StepShell>
              )}

              {step === 3 && (
                <StepShell
                  step={3}
                  label="Проблемы"
                  question="Что сейчас не устраивает в CRM?"
                >
                  <div className="flex flex-col gap-3">
                    {[
                      'Менеджеры не используют amoCRM',
                      'Теряются заявки',
                      'Нет понятной аналитики',
                      'Всё делается вручную',
                    ].map((o) => (
                      <OptionChip
                        key={o}
                        label={o}
                        selected={answers.crmIssues === o}
                        onClick={() => set('crmIssues', o)}
                      />
                    ))}
                  </div>
                </StepShell>
              )}

              {step === 4 && (
                <StepShell
                  step={4}
                  label="Техподдержка"
                  question="Кто оказывает техническую поддержку системы?"
                >
                  <div className="flex flex-col gap-3">
                    {[
                      'Есть партнер на удалёнке',
                      'Есть собственный IT-специалист',
                      'Нет технической поддержки',
                    ].map((o) => (
                      <OptionChip
                        key={o}
                        label={o}
                        selected={answers.technicalSupport === o}
                        onClick={() => set('technicalSupport', o)}
                      />
                    ))}
                  </div>
                </StepShell>
              )}


              {step === 5 && (
                <StepShell step={5} label="Контакт" question="Как вас зовут?">
                  <input
                    type="text"
                    value={answers.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-xl"
                  />
                </StepShell>
              )}

              {step === 6 && (
                <StepShell
                  step={6}
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