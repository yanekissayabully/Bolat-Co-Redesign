// 'use client'

// import { Navbar } from '@/components/navbar'
// import { Footer } from '@/components/footer'
// import { LeadForm } from '@/components/vsl-contact'
// import type { Metadata } from 'next'
// import { useState, useEffect, useRef } from 'react'

// export default function ServicesPage() {
//   const [watchTime, setWatchTime] = useState(0) // Время просмотра в секундах
//   const [isPlaying, setIsPlaying] = useState(false)
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const watchIntervalRef = useRef<NodeJS.Timeout | null>(null)

//   // Функция для получения времени просмотра (вызывается из формы)
//   const getWatchTime = () => {
//     return watchTime
//   }

//   // Сохраняем функцию в window, чтобы LeadForm мог её вызвать
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       // @ts-ignore
//       window.getVSLWatchTime = getWatchTime
//     }
//   }, [watchTime])

//   // Отслеживание времени просмотра
//   useEffect(() => {
//     const video = videoRef.current
//     if (!video) return

//     const handlePlay = () => {
//       setIsPlaying(true)
//       // Начинаем отслеживать время каждую секунду
//       if (watchIntervalRef.current) clearInterval(watchIntervalRef.current)
//       watchIntervalRef.current = setInterval(() => {
//         if (video && !video.paused && !video.ended) {
//           setWatchTime(prev => prev + 1)
//         }
//       }, 1000)
//     }

//     const handlePause = () => {
//       setIsPlaying(false)
//       if (watchIntervalRef.current) {
//         clearInterval(watchIntervalRef.current)
//         watchIntervalRef.current = null
//       }
//     }

//     const handleEnded = () => {
//       setIsPlaying(false)
//       if (watchIntervalRef.current) {
//         clearInterval(watchIntervalRef.current)
//         watchIntervalRef.current = null
//       }
//     }

//     video.addEventListener('play', handlePlay)
//     video.addEventListener('pause', handlePause)
//     video.addEventListener('ended', handleEnded)

//     return () => {
//       video.removeEventListener('play', handlePlay)
//       video.removeEventListener('pause', handlePause)
//       video.removeEventListener('ended', handleEnded)
//       if (watchIntervalRef.current) {
//         clearInterval(watchIntervalRef.current)
//       }
//     }
//   }, [])

//   // Форматирование времени (секунды -> мм:сс)
//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${mins}:${secs.toString().padStart(2, '0')}`
//   }

//   return (
//     <>
//       <Navbar />
//       <main className="pt-16">
//         {/* Hero с видео */}
//         <section className="bg-background py-24 px-6 border-b border-border">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
//               {/* Левая часть с текстом */}
//               <div className="sticky top-24">
//                 <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
//                   Видео-презентация
//                 </span>
//                 <h1
//                   className="text-5xl md:text-6xl font-bold text-balance mb-6"
//                   style={{ fontFamily: 'var(--font-syne)' }}
//                 >
//                   Что такое{' '}
//                   <span className="text-primary">VSL</span>
//                   {' '}и как это меняет бизнес?
//                 </h1>
//                 <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//                   Посмотрите видео, чтобы понять, как VSL помогает 
//                   автоматизировать продажи и масштабировать бизнес.
//                 </p>
//               </div>

//               {/* Правая часть с видео */}
//               <div className="relative">
//                 <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 bg-black">
//                   <video
//                     ref={videoRef}
//                     className="w-full h-auto"
//                     controls
//                     preload="metadata"
//                     poster="/vsl.png" // Добавьте постер, если есть
//                   >
//                     <source src="/Muha.mp4" type="video/mp4" />
//                     Ваш браузер не поддерживает видео.
//                   </video>
//                 </div>
//                 {/* Декоративные элементы */}
//                 <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
//                 <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
//               </div>
//             </div>
//           </div>
//         </section>
        
//         {/* Передаем время просмотра в форму через пропс */}
//         <LeadForm vslWatchTime={watchTime} />
//       </main>
//       <Footer />
//     </>
//   )
// }



'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/vsl-contact'
import { useState, useEffect, useRef } from 'react'
import { TrustedBySection } from '@/components/home/home-sections'

export default function ServicesPage() {
  const [watchTime, setWatchTime] = useState(0) // Время просмотра в секундах
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const watchIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Функция для получения времени просмотра (вызывается из формы)
  const getWatchTime = () => {
    return watchTime
  }

  // Сохраняем функцию в window, чтобы LeadForm мог её вызвать
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.getVSLWatchTime = getWatchTime
    }
  }, [watchTime])

  // Отслеживание времени просмотра
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => {
      setIsPlaying(true)
      // Начинаем отслеживать время каждую секунду
      if (watchIntervalRef.current) clearInterval(watchIntervalRef.current)
      watchIntervalRef.current = setInterval(() => {
        if (video && !video.paused && !video.ended) {
          setWatchTime(prev => prev + 1)
        }
      }, 1000)
    }

    const handlePause = () => {
      setIsPlaying(false)
      if (watchIntervalRef.current) {
        clearInterval(watchIntervalRef.current)
        watchIntervalRef.current = null
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      if (watchIntervalRef.current) {
        clearInterval(watchIntervalRef.current)
        watchIntervalRef.current = null
      }
    }

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handleEnded)
      if (watchIntervalRef.current) {
        clearInterval(watchIntervalRef.current)
      }
    }
  }, [])

  // Форматирование времени (секунды -> мм:сс)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero с видео */}
        <section className="bg-background py-24 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Левая часть с текстом */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                  Знакомство
                </span>
                <h1
                  className="text-5xl md:text-6xl font-bold text-balance mb-6"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  Посмотрите как работает{' '}
                  <span className="text-primary">amoCRM</span>
                  {' '}перед заявкой
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Короткое видео покажет интерфейс, логику работы и ключевые возможности CRM. Рекомендуем ознакомиться перед тем, как оставить заявку — в конце вас ждут дополнительные условия от нас.
                </p>
                
                {/* Индикатор просмотра */}
                {/* {watchTime > 0 && (
                  <div className="bg-primary/10 rounded-xl p-4 border border-primary/20 mt-6">
                    <p className="text-sm text-muted-foreground">⏱️ Время просмотра видео:</p>
                    <p className="text-2xl font-bold text-primary">{formatTime(watchTime)}</p>
                    {isPlaying && (
                      <p className="text-xs text-primary mt-1">▶️ Смотрим...</p>
                    )}
                  </div>
                )} */}
              </div>

              {/* Правая часть с видео */}
              <div className="relative w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 bg-black aspect-video">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-contain"
                    controls
                    preload="metadata"
                    // poster="/vsl.png"
                  >
                    <source src="/Muha.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
                {/* Декоративные элементы */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Передаем время просмотра в форму через пропс */}
        <LeadForm vslWatchTime={watchTime} />
        <TrustedBySection />
        
      </main>
      <Footer />
    </>
  )
}